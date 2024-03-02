package main

import (
	"expnx/greetings"
	"fmt"
	"log/slog"
)

func main() {
	message, err := greetings.Greetings("Jake")
	if err != nil {
		slog.Error(err.Error())
	}
	fmt.Println(message)
}
