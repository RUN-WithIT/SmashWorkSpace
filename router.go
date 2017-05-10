package main

import (
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"net/http"
	"os"
)

func initRouter() http.Handler {
	r := mux.NewRouter()


	app := r.PathPrefix("/app/")
	app.Handler( http.StripPrefix("/app/", http.FileServer(http.Dir("frontend"))))
	//app.Handle("/bin/", http.StripPrefix("/app/bin/", http.FileServer(http.Dir("frontend/bin/"))))

	
	api := r.PathPrefix("/api/").Subrouter()
	api.HandleFunc("/block/", BlocksHandler)
	api.HandleFunc("/block/{id}", BlocksHandler)

	//	return handlers.CORS()(r)
	loggedRouter := handlers.LoggingHandler(os.Stdout, r)
	return loggedRouter

}
