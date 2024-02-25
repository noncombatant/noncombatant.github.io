package main

import (
  "fmt"

  "safecommand"
)

func main() {
  c := safecommand.SafeCommand{}
  fmt.Println(safecommand.DoSomething(c))
  fmt.Println(safecommand.DoSomething(safecommand.Pumpkin))
  c = safecommand.SafeCommand{command: "ls"}
  fmt.Println(safecommand.DoSomething(c))
}
