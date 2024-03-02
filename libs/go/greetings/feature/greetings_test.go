package greetings

import (
	"testing"
)

func TestGreetings(t *testing.T) {
	_, err := Greetings("works")
	if err != nil {
		t.Error(err)
	}
}
