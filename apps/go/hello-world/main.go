package main

import (
	"expnx/greetings"
	"fmt"
	"log/slog"
)

func main() {
	names := []string{"Logan", "Jake", "Josh", "Callie", "Thomas", "Sydney", "Carsten", "Taylor"}
	messages, err := greetings.Greetings(names)
	if err != nil {
		slog.Error(err.Error())
	}
	fmt.Println(messages)
}
