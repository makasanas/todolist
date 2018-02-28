webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-todolist></app-todolist>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todolist_todolist_component__ = __webpack_require__("./src/app/todolist/todolist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__todolist_todolist_component__["a" /* TodolistComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/todolist/todolist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todolist\">\n  <div class=\"addTask\" [ngClass]=\"error ? 'has-error' :''\">\n    <div class=\"input\">\n      <input type=\"text\" #box placeholder=\"Add new tas\" (keyup.enter)=\"addItem(box.value);box.value =''\">\n      <div class=\"btn\" (click)=\"addItem(box.value);box.value =''\">\n        <svg enable-background=\"new 0 0 24 24\" height=\"24px\" id=\"Layer_1\" version=\"1.1\" viewBox=\"0 0 24 24\" width=\"24px\" xml:space=\"preserve\"\n          xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path clip-rule=\"evenodd\" d=\"M22.5,14H14v8.5c0,0.276-0.224,0.5-0.5,0.5h-4C9.224,23,9,22.776,9,22.5V14H0.5  C0.224,14,0,13.776,0,13.5v-4C0,9.224,0.224,9,0.5,9H9V0.5C9,0.224,9.224,0,9.5,0h4C13.776,0,14,0.224,14,0.5V9h8.5  C22.776,9,23,9.224,23,9.5v4C23,13.776,22.776,14,22.5,14z\" fill-rule=\"evenodd\"/></svg></div>\n    </div>\n    <p class=\"error\">Task need to be at least two character long</p>\n  </div>\n  <ul>\n    <li *ngFor=\"let task of tasks; let i = index;\" [ngClass]=\"task.type ? 'done' :'remaining'\" (click)=\"task.type = !task.type\">\n      <label class=\"c-check \">\n        <div class=\"check-icon \">\n          <svg height=\"20px \" viewBox=\"0 0 20 20 \" width=\"20px \">\n                    <path d=\"M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19\n      17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z \"></path>\n                    <polyline points=\"4 11 8 15 16 6 \"></polyline>\n                </svg>\n        </div>\n        <span>{{task.task}}</span>\n      </label>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/todolist/todolist.component.scss":
/***/ (function(module, exports) {

module.exports = ".c-check {\n  display: block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .c-check input:checked + .checkbox {\n    border-color: #efefef; }\n  .c-check input:not(checked) + .check-icon svg path {\n    stroke: #efefef; }\n  .c-check input:checked + .check-icon svg path {\n    fill: #efefef; }\n  .c-check input:checked + .check-icon svg polyline {\n    stroke-dashoffset: 0; }\n  .c-check:hover .check-icon svg path {\n    stroke-dashoffset: 0; }\n  .c-check .check-icon {\n    position: relative;\n    float: left;\n    margin-right: 10px;\n    width: 20px;\n    height: 20px;\n    margin-bottom: -3px;\n    border-radius: 3px; }\n  .c-check .check-icon svg {\n    position: absolute;\n    top: -2px;\n    left: -2px; }\n  .c-check .check-icon svg path {\n    fill: none;\n    stroke: #efefef;\n    stroke-width: 2;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-dasharray: 71px;\n    -webkit-transition: all .6s ease;\n    transition: all .6s ease; }\n  .c-check .check-icon svg polyline {\n    fill: none;\n    stroke: #FFF;\n    stroke-width: 2;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-dasharray: 18px;\n    stroke-dashoffset: 18px;\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease; }\n  .c-check > span {\n    pointer-events: none;\n    vertical-align: middle;\n    line-height: 20px; }\n  .c-check input {\n    position: absolute;\n    z-index: -1;\n    width: 0;\n    height: 0;\n    opacity: 0; }\n  .todolist {\n  max-width: 500px;\n  margin: 150px auto;\n  padding: 0px 15px; }\n  .todolist .addTask .input {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border: 1px solid #0e76bc;\n    border-radius: 2px; }\n  .todolist .addTask input {\n    width: calc(100% - 44px);\n    line-height: 44px;\n    border: 0px;\n    font-size: 16px;\n    padding: 0px 10px; }\n  .todolist .addTask .btn {\n    width: 44px;\n    height: 44px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background: #0e76bc;\n    cursor: pointer; }\n  .todolist .addTask .btn svg {\n      width: 20px;\n      height: 20px; }\n  .todolist .addTask .btn svg path {\n        fill: #fff; }\n  .todolist .addTask p.error {\n    color: #ff0057;\n    padding: 5px 0px;\n    display: none; }\n  .todolist .addTask.has-error p.error {\n    display: block; }\n  .todolist ul {\n    margin: 20px 0px; }\n  .todolist ul li {\n      padding: 8px 0px;\n      list-style: none; }\n  .todolist ul li.remaining label span {\n        color: #0e76bc; }\n  .todolist ul li.done label span {\n        color: #d0d0d0;\n        text-decoration: line-through; }\n  .todolist ul li.done label .check-icon svg path {\n        stroke: #0e76bc;\n        fill: #0e76bc; }\n  .todolist ul li.done label .check-icon svg polyline {\n        stroke-dashoffset: 0; }\n"

/***/ }),

/***/ "./src/app/todolist/todolist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodolistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodolistComponent = /** @class */ (function () {
    function TodolistComponent() {
        this.newTask = "";
        this.error = false;
        this.tasks = [
            {
                task: "Start work for kevin",
                type: false
            },
            {
                task: "Take some food for friends",
                type: true
            },
            {
                task: "Work need to be push",
                type: false
            }
        ];
    }
    TodolistComponent.prototype.ngOnInit = function () {
    };
    TodolistComponent.prototype.addItem = function (task) {
        if (task.length > 1) {
            this.tasks.push({
                task: task,
                type: false
            });
            this.error = false;
        }
        else {
            this.error = true;
        }
    };
    TodolistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-todolist',
            template: __webpack_require__("./src/app/todolist/todolist.component.html"),
            styles: [__webpack_require__("./src/app/todolist/todolist.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TodolistComponent);
    return TodolistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map