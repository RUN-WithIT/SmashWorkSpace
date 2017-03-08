package main

import "net/http"
import "fmt"

func main() {
	fmt.Println("Listening on port 8080")
	http.ListenAndServe(":8080", http.FileServer(http.Dir("")))
}
