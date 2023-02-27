package main

import (
	"hmcalister/DoublePendulum/pendulum"
	"log"
	"math"
	"os"
)

const TIME_DELTA = 0.01

func main() {
	log.New(os.Stdout, "", log.Ldate|log.Ltime|log.Lshortfile)
	log.Println("DOUBLE PENDULUM: PROGRAM START")
	initialState := pendulum.NewRandomState()
	log.Printf("Initial Pendulum State: %#v\n", initialState)

	var pendulumState *pendulum.PendulumState
	pendulumState = initialState
	for {
		pendulumState = pendulumState.NextState(TIME_DELTA)
		log.Printf("%#v\n", pendulumState)
		if math.IsNaN(pendulumState.Theta1) {
			break
		}
	}
}
