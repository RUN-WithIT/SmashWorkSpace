package main

import (
	"net/http"
	"fmt"
)

func main() {
	r := initRouter()

	srv := &http.Server{
		Handler: r,
		Addr:    "127.0.0.1:8000",
	}
	fmt.Println("starting server")
	srv.ListenAndServe()
}
