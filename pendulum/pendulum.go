package pendulum

import (
	"math"
	"time"

	"golang.org/x/exp/rand"
	"gonum.org/v1/gonum/stat/distuv"
)

const G float64 = 9.81

type PendulumState struct {
	L1     float64
	M1     float64
	Theta1 float64
	omega1 float64

	L2     float64
	M2     float64
	Theta2 float64
	omega2 float64

	time float64
}

func NewRandomState() *PendulumState {
	newSrc := rand.NewSource(uint64(time.Now().UnixMicro()))
	unitUniform := distuv.Uniform{
		Min: 0.0,
		Max: 1.0,
		Src: newSrc,
	}
	angleUniform := distuv.Uniform{
		Min: -1.0 * math.Pi / 2.0,
		Max: math.Pi / 2.0,
		Src: newSrc,
	}
	return &PendulumState{
		L1:     unitUniform.Rand(),
		M1:     unitUniform.Rand(),
		Theta1: angleUniform.Rand(),
		omega1: 0.0,

		L2:     unitUniform.Rand(),
		M2:     unitUniform.Rand(),
		Theta2: angleUniform.Rand(),
		omega2: 0.0,

		time: 0.0,
	}
}

// From the bottom of https://web.mit.edu/jorloff/www/chaosTalk/double-pendulum/double-pendulum-en.html
func (p *PendulumState) NextState(timeDelta float64) *PendulumState {
	omega1dot := -G*(2.0*p.M1+p.M2)*math.Sin(p.Theta1) +
		-G*p.M2*math.Sin(p.Theta1-2.0*p.Theta2) +
		-2.0*math.Sin(p.Theta1-p.Theta2)*p.M2*(math.Pow(p.omega2, 2)*p.L2+math.Pow(p.omega1, 2)*p.L1*math.Cos(p.Theta1-p.Theta2))
	omega1dot /= p.L1 * (2.0*p.M1 + p.M2 - p.M2*math.Cos(2*p.Theta1-2*p.Theta2))

	omega2dot := math.Pow(p.omega1, 2)*p.L1*(p.M1+p.M2) +
		G*(p.M1+p.M2)*math.Cos(p.Theta1) +
		math.Pow(p.omega2, 2)*p.L2*p.M2*math.Cos(p.Theta1-p.Theta2)
	omega2dot *= 2 * math.Sin(p.Theta1-p.Theta2)
	omega2dot /= p.L2 * (2.0*p.M1 + p.M2 - p.M2*math.Cos(2*p.Theta1-2*p.Theta2))

	nextOmega1 := p.omega1 + omega1dot*timeDelta
	nextOmega2 := p.omega2 + omega2dot*timeDelta

	nextTheta1 := p.Theta1 + nextOmega1*timeDelta
	nextTheta2 := p.Theta2 + nextOmega2*timeDelta

	// fmt.Printf("%#v, %#v\n", omega1dot, omega2dot)
	// fmt.Printf("%#v, %#v\n", p.omega1-nextOmega1, p.omega2-nextOmega2)
	// fmt.Printf("%#v, %#v\n", p.Theta1-nextTheta1, p.Theta2-nextTheta2)
	return &PendulumState{
		L1:     p.L1,
		M1:     p.M1,
		Theta1: nextTheta1,
		omega1: nextOmega1,

		L2:     p.L2,
		M2:     p.M2,
		Theta2: nextTheta2,
		omega2: nextOmega2,

		time: p.time + timeDelta,
	}
}
