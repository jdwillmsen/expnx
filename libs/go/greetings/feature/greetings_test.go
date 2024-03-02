package greetings

import (
	"regexp"
	"testing"
)

// TestGreetingName calls greetings.Greeting with a name, checking
// for a valid return value.
func TestGreetingName(t *testing.T) {
	name := "Jake"
	want := regexp.MustCompile(`\b` + name + `\b`)
	msg, err := Greeting(name)
	if !want.MatchString(msg) || err != nil {
		t.Fatalf(`Greeting(%q) = %q, %v, want match for %#q, nil`, name, msg, err, want)
	}
}

// TestGreetingEmpty calls greetings.Greeting with an empty string,
// checking for an error.
func TestGreetingEmpty(t *testing.T) {
	name := ""
	msg, err := Greeting(name)
	if msg != "" || err == nil {
		t.Fatalf(`Greeting(%q) = %q, %v, want "", error`, name, msg, err)
	}
}
