package greetings

import (
	"errors"
	"fmt"
	"math/rand"
)

func Greetings(name string) (string, error) {
	if name == "" {
		return "", errors.New("empty name")
	}

	result := fmt.Sprintf(randomFormat(), name)
	return result, nil
}

func randomFormat() string {
	formats := []string{
		"Hi, %v. Welcome!",
		"Great to see you, %v!",
		"Hail, %v! Well met!",
	}
	return formats[rand.Intn(len(formats))]
}
