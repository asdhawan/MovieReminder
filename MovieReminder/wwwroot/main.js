(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _moviedetails_moviedetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moviedetails/moviedetails.component */ "./src/app/moviedetails/moviedetails.component.ts");
/* harmony import */ var _moviesearch_moviesearch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moviesearch/moviesearch.component */ "./src/app/moviesearch/moviesearch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"] },
    { path: 'movies/:id', component: _moviedetails_moviedetails_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsComponent"] },
    { path: 'search', component: _moviesearch_moviesearch_component__WEBPACK_IMPORTED_MODULE_4__["MovieSearchComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<header>\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\">{{ title }}</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a routerLink=\"/movies\" class=\"nav-link\">Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/search\" class=\"nav-link\">Search</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n\r\n<section class=\"container-fluid p-0\">\r\n  <router-outlet></router-outlet>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MovieMinder 1.0';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _moviedetails_moviedetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moviedetails/moviedetails.component */ "./src/app/moviedetails/moviedetails.component.ts");
/* harmony import */ var _moviesearch_moviesearch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moviesearch/moviesearch.component */ "./src/app/moviesearch/moviesearch.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"],
                _moviedetails_moviedetails_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailsComponent"],
                _moviesearch_moviesearch_component__WEBPACK_IMPORTED_MODULE_6__["MovieSearchComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/movie.ts":
/*!*********************************!*\
  !*** ./src/app/models/movie.ts ***!
  \*********************************/
/*! exports provided: movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movie", function() { return movie; });
var movie = /** @class */ (function () {
    function movie() {
        this.seen = false;
    }
    ;
    return movie;
}());



/***/ }),

/***/ "./src/app/moviedetails/moviedetails.component.css":
/*!*********************************************************!*\
  !*** ./src/app/moviedetails/moviedetails.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/moviedetails/moviedetails.component.html":
/*!**********************************************************!*\
  !*** ./src/app/moviedetails/moviedetails.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\" class=\"d-flex justify-content-center\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\"><h2>{{ movie.name | uppercase }}</h2></div>\r\n    <img class=\"card-img-top\" src=\"{{ movie.backdrop_url }}\" alt=\"\">\r\n    <div class=\"card-body\">\r\n      <p class=\"card-text\">{{ movie.synopsis }}</p>\r\n      <span>id: </span>{{movie.id}}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/moviedetails/moviedetails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/moviedetails/moviedetails.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/movie */ "./src/app/models/movie.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/services/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieDetailsComponent = /** @class */ (function () {
    /** moviedetails ctor */
    function MovieDetailsComponent(route, movieService) {
        this.route = route;
        this.movieService = movieService;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        this.getMovieDetails();
    };
    MovieDetailsComponent.prototype.getMovieDetails = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.movieService.getMovieDetail(id).then(function (movie) {
            _this.movie = movie;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_movie__WEBPACK_IMPORTED_MODULE_2__["movie"])
    ], MovieDetailsComponent.prototype, "movie", void 0);
    MovieDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./moviedetails.component.html */ "./src/app/moviedetails/moviedetails.component.html"),
            styles: [__webpack_require__(/*! ./moviedetails.component.css */ "./src/app/moviedetails/moviedetails.component.css")]
        })
        /** moviedetails component*/
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-container {\r\n}\r\n"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-container\">\r\n  <div class=\"container text-center bg-white px-3 pt-3\">\r\n    <div class=\"card-columns\">\r\n      <div class=\"card border-info movies\" *ngFor=\"let m of movies\">\r\n        <a routerLink=\"/movies/{{m.id}}\">\r\n          <img class=\"card-img-top\" src=\"{{ m.poster_url }}\" alt=\"{{ m.name }}\">\r\n          <div class=\"card-body text-info\">\r\n            <h4 class=\"text-muted\">{{ m.name | titlecase }}</h4>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/services/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesComponent = /** @class */ (function () {
    /** movies ctor */
    function MoviesComponent(movieService) {
        this.movieService = movieService;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.loadMovies();
    };
    MoviesComponent.prototype.onselect = function (movie) {
        this.selectedMovie = movie;
    };
    MoviesComponent.prototype.loadMovies = function () {
        var _this = this;
        this.movieService.getMoviesNowPlaying().then(function (movies) {
            _this.movies = movies;
        });
    };
    MoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        })
        /** movies component*/
        ,
        __metadata("design:paramtypes", [_services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/moviesearch/moviesearch.component.css":
/*!*******************************************************!*\
  !*** ./src/app/moviesearch/moviesearch.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container {\r\n \r\n}\r\n.search-content {\r\n  margin: 5% auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/moviesearch/moviesearch.component.html":
/*!********************************************************!*\
  !*** ./src/app/moviesearch/moviesearch.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-lg-flex justify-content-center\">\r\n  <div class=\"bg-dark p-3 mx-lg-5 mt-lg-5 border border-dark rounded\">\r\n    <div class=\"bg-white p-3 border border-light\">\r\n      <h1>Search</h1>\r\n      <div class=\"card bg-light p-2\">\r\n        <div class=\"card-header p-2\">\r\n          <!--<form (submit)=\"handleSearch()\">-->\r\n            <div class=\"input-group\">\r\n              <input [(ngModel)]=\"searchObj.name\" name=\"movieName\" type=\"text\" class=\"form-control p-2\" placeholder=\"Movie Name\" />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-info\" type=\"button\" (click)=\"handleSearch()\">Search</button>\r\n              </div>\r\n            </div>\r\n          <!--</form>-->\r\n        </div>\r\n        <div class=\"card-body bg-light p-2\">\r\n          <ul>\r\n            <li *ngFor=\"let m of searchResults\">{{m.name}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/moviesearch/moviesearch.component.ts":
/*!******************************************************!*\
  !*** ./src/app/moviesearch/moviesearch.component.ts ***!
  \******************************************************/
/*! exports provided: MovieSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieSearchComponent", function() { return MovieSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/movie */ "./src/app/models/movie.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/services/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieSearchComponent = /** @class */ (function () {
    /** moviesearch ctor */
    function MovieSearchComponent(movieSvc) {
        this.movieSvc = movieSvc;
        this.searchObj = new _models_movie__WEBPACK_IMPORTED_MODULE_1__["movie"]();
        this.searchObj.id = -1;
    }
    MovieSearchComponent.prototype.ngOnInit = function () { };
    MovieSearchComponent.prototype.handleSearch = function () {
        var _this = this;
        alert(this.searchObj.name);
        this.movieSvc.getMovieDetail(395990)
            .then(function (m) {
            _this.searchResults = new Array();
            _this.searchResults.push(m);
        });
    };
    MovieSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moviesearch',
            template: __webpack_require__(/*! ./moviesearch.component.html */ "./src/app/moviesearch/moviesearch.component.html"),
            styles: [__webpack_require__(/*! ./moviesearch.component.css */ "./src/app/moviesearch/moviesearch.component.css")]
        })
        /** moviesearch component*/
        ,
        __metadata("design:paramtypes", [_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MovieSearchComponent);
    return MovieSearchComponent;
}());



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieService = /** @class */ (function () {
    function MovieService() {
        this.apiKey = '098f3b2e36992519c1814874200fc995';
    }
    MovieService.prototype.getMoviesMostPopular = function () {
        return this.getMovieList("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + this.apiKey);
    };
    MovieService.prototype.getMoviesNowPlaying = function () {
        return this.getMovieList("https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=" + this.apiKey);
    };
    MovieService.prototype.getMovieDetail = function (id) {
        var _this = this;
        var options = {
            method: 'GET'
        };
        return fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + this.apiKey, options)
            .then(function (response) { return response.json(); })
            .then(function (jsonData) {
            return _this.newMovieObject(jsonData);
        });
    };
    MovieService.prototype.getMovieList = function (resource) {
        var _this = this;
        var options = {
            method: 'GET'
        };
        return fetch(resource, options)
            .then(function (response) { return response.json(); })
            .then(function (jsonData) {
            var movies = new Array();
            jsonData.results.forEach(function (json) {
                movies.push(_this.newMovieObject(json));
            });
            return movies;
        });
    };
    MovieService.prototype.newMovieObject = function (json) {
        var movieObj = {
            id: json.id,
            name: json.title,
            release_date: json.release_date,
            seen: false,
            synopsis: json.overview,
            backdrop_url: "https://image.tmdb.org/t/p/w1280" + json.backdrop_path,
            poster_url: "https://image.tmdb.org/t/p/w500" + json.poster_path
        };
        return movieObj;
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Dev\MovieReminder\MovieReminder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map