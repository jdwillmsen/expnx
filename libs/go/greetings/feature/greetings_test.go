package greetings

import (
	"testing"
)

func TestGreeting(t *testing.T) {
	_, err := Greeting("works")
	if err != nil {
		t.Error(err)
	}
}
