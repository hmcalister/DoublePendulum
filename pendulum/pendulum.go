package pendulum

import (
	"encoding/json"
	"log"
	"math"
	"net/http"
	"time"

	"golang.org/x/exp/rand"

	"gonum.org/v1/gonum/stat/distuv"
)

const (
	G                 float64 = 9.81
	TIME_DELTA        float64 = 0.005
	FRICTION_CONSTANT float64 = 0.2
)

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
		Min: 0.1,
		Max: 1.0,
		Src: newSrc,
	}
	angleUniform := distuv.Uniform{
		Min: -1.0 * math.Pi,
		Max: math.Pi,
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
func (p *PendulumState) NextState() {
	omega1dot := -G*(2.0*p.M1+p.M2)*math.Sin(p.Theta1) +
		-G*p.M2*math.Sin(p.Theta1-2.0*p.Theta2) +
		-2.0*math.Sin(p.Theta1-p.Theta2)*p.M2*(math.Pow(p.omega2, 2)*p.L2+math.Pow(p.omega1, 2)*p.L1*math.Cos(p.Theta1-p.Theta2))
	omega1dot /= p.L1 * (2.0*p.M1 + p.M2 - p.M2*math.Cos(2*p.Theta1-2*p.Theta2))
	omega1dot -= FRICTION_CONSTANT * p.omega1

	omega2dot := math.Pow(p.omega1, 2)*p.L1*(p.M1+p.M2) +
		G*(p.M1+p.M2)*math.Cos(p.Theta1) +
		math.Pow(p.omega2, 2)*p.L2*p.M2*math.Cos(p.Theta1-p.Theta2)
	omega2dot *= 2 * math.Sin(p.Theta1-p.Theta2)
	omega2dot /= p.L2 * (2.0*p.M1 + p.M2 - p.M2*math.Cos(2*p.Theta1-2*p.Theta2))
	omega2dot -= FRICTION_CONSTANT * p.omega2

	nextOmega1 := p.omega1 + omega1dot*TIME_DELTA
	nextOmega2 := p.omega2 + omega2dot*TIME_DELTA

	nextTheta1 := p.Theta1 + nextOmega1*TIME_DELTA
	nextTheta2 := p.Theta2 + nextOmega2*TIME_DELTA

	// fmt.Printf("%#v, %#v\n", omega1dot, omega2dot)
	// fmt.Printf("%#v, %#v\n", p.omega1-nextOmega1, p.omega2-nextOmega2)
	// fmt.Printf("%#v, %#v\n", p.Theta1-nextTheta1, p.Theta2-nextTheta2)

	p.Theta1 = nextTheta1
	p.omega1 = nextOmega1
	p.Theta2 = nextTheta2
	p.omega2 = nextOmega2
	p.time = p.time + TIME_DELTA
}

func (p *PendulumState) SendNextStateJSON(w http.ResponseWriter, req *http.Request) {
	p.NextState()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(p)
}
func (p *PendulumState) Randomize(w http.ResponseWriter, req *http.Request) {
	randState := NewRandomState()
	p.L1 = randState.L1
	p.M1 = randState.M1
	p.Theta1 = randState.Theta1
	p.omega1 = randState.omega1

	p.L2 = randState.L2
	p.M2 = randState.M2
	p.Theta2 = randState.Theta2
	p.omega2 = randState.omega2

	p.time = randState.time

	log.Printf("STATE RANDOMIZED: %#v\n", p)
}
