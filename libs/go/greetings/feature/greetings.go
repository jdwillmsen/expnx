package greetings

import (
	"errors"
	"fmt"
	"math/rand"
)

func Greeting(name string) (string, error) {
	if name == "" {
		return "", errors.New("empty name")
	}

	result := fmt.Sprintf(randomFormat(), name)
	return result, nil
}

func Greetings(names []string) (map[string]string, error) {
	messages := make(map[string]string)
	for _, name := range names {
		message, err := Greeting(name)
		if err != nil {
			return nil, err
		}
		messages[name] = message
	}
	return messages, nil
}

func randomFormat() string {
	formats := []string{
		"Hi, %v. Welcome!",
		"Great to see you, %v!",
		"Hail, %v! Well met!",
	}
	return formats[rand.Intn(len(formats))]
}
