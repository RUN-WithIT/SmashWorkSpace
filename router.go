package main

import (
//	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"net/http"
)

func initRouter() http.Handler {
	r := mux.NewRouter()

	r.Handle("/", http.StripPrefix("/",http.FileServer(http.Dir("frontend"))))

//	app := r.PathPrefix("/app/").Subrouter()


	
	api := r.PathPrefix("/api/").Subrouter()
	api.HandleFunc("/block/", BlocksHandler)
	api.HandleFunc("/block/{id}", BlocksHandler)

	//	return handlers.CORS()(r)
	return r
}
