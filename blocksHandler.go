package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
	"encoding/json"
)


func get(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)

	if id, ok := params["id"]; ok {
		fmt.Println(id)
	} else {

	}
	

}

func post(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	decoder := json.NewDecoder(r.Body)

	var block Block
	err:= decoder.Decode(&block)

	if err != nil {
		panic(err)
	}
	fmt.Println(block)
	if id, ok := params["id"]; ok {
		fmt.Println("block id: ", id)	
	} else {
		fmt.Println("No id")
	}
}

func error() {

}
func BlocksHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		get(w, r)
	case "POST":
		post(w, r)
	default:
		fmt.Println("AHHH!")
	}
}
