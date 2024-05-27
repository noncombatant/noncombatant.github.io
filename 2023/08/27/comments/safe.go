package safecommand

import (
	"os"
	"os/exec"
)

type SafeCommand struct {
	command string
}

var Pumpkin SafeCommand = SafeCommand{command: "pumpkin"}
var Noodle SafeCommand = SafeCommand{command: "noodle"}
var Tootle SafeCommand = SafeCommand{command: "tootle"}

// DoSomething runs command with the correct arguments for our application.
func DoSomething(command SafeCommand) error {
	cmd := exec.Command(command.command, "woop", "boing")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	return cmd.Run()
}

func main() {
	DoSomething(SafeCommand{command: "ls"})
	//fmt.Println(DoSomething("pumpkins"))
	//fmt.Println(DoSomething("pumpkin"))
}
