var app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "../paginas/inicio.html"
        })
        .when("/configuracoes", {
            templateUrl: "../paginas/configuracoes.html"
        })
    //.otherwise({ redirectTo: '../paginas.inicio.html'})
})