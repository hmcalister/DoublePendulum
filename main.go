package main

import (
	"hmcalister/DoublePendulum/pendulum"
	"log"
	"net/http"
	"os"
)

func serveWebFrontend(pendulumState *pendulum.PendulumState) {
	fs := http.FileServer(http.Dir("./web"))
	http.Handle("/", fs)
	http.HandleFunc("/nextState", pendulumState.SendNextStateJSON)
	http.HandleFunc("/random", pendulumState.Randomize)
	log.Println("Serving web frontend on port http://127.0.0.1:8080")
	err := http.ListenAndServe(":8080", nil)

	if err != nil {
		log.Fatalf("ERROR: Failed to serve front end! %#v\n", err)
	}
}

func main() {
	log.New(os.Stdout, "", log.Ldate|log.Ltime|log.Lshortfile)
	log.Println("DOUBLE PENDULUM: PROGRAM START")
	initialState := pendulum.NewRandomState()
	log.Printf("Initial Pendulum State: %#v\n", initialState)

	serveWebFrontend(initialState)
}
