(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+wPt":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "84zG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'about', component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: []
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/david/local/dev/chess-opening-trainer/src/main.ts */"zUnb");


/***/ }),

/***/ "0elY":
/*!***************************************************!*\
  !*** ./src/app/trainer/trainer-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TrainerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerRoutingModule", function() { return TrainerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _trainer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trainer.component */ "7VxS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'trainer/:name', component: _trainer_component__WEBPACK_IMPORTED_MODULE_2__["TrainerComponent"] },
    { path: 'trainer', component: _trainer_component__WEBPACK_IMPORTED_MODULE_2__["TrainerComponent"] }
];
var TrainerRoutingModule = /** @class */ (function () {
    function TrainerRoutingModule() {
    }
    TrainerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: []
        })
    ], TrainerRoutingModule);
    return TrainerRoutingModule;
}());



/***/ }),

/***/ "2Ic5":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "36VY":
/*!*************************************************!*\
  !*** ./src/app/services/google-auth.service.ts ***!
  \*************************************************/
/*! exports provided: GoogleAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthService", function() { return GoogleAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _js_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-loader.service */ "55tC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var GoogleAuthService = /** @class */ (function () {
    function GoogleAuthService(loader) {
        var _this = this;
        this.loader = loader;
        this.javascriptFile = 'https://apis.google.com/js/platform.js';
        // public isSignedIn = false;
        this.googleDisplay = 'block';
        this.ready = new Array();
        console.log('Loading the javascript API file.');
        this.ready.push(this.loader.loadjs(this.javascriptFile).then(function () {
            // file loaded
        }));
        this.ready.push(new Promise(function (resolve) {
            _this.readyResolve = resolve;
        }));
    }
    GoogleAuthService.prototype.onSignIn = function (googleUser) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.googleUser = googleUser;
                        console.log('Signed in');
                        // this.isSignedIn = true;
                        this.googleDisplay = 'none';
                        return [4 /*yield*/, this.loadClient()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadSheetsAPI()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadDriveAPI()];
                    case 3:
                        _a.sent();
                        this.readyResolve();
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleAuthService.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var auth2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Signing out.');
                        auth2 = gapi.auth2.getAuthInstance();
                        return [4 /*yield*/, auth2.signOut().then(function () {
                                console.log('signed out');
                                // this.isSignedIn = false;
                                _this.googleDisplay = 'block';
                                _this.ready.push(new Promise(function (resolve) {
                                    _this.readyResolve = resolve;
                                }));
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleAuthService.prototype.loadClient = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    gapi.load('client', function () {
                        console.log("client loaded");
                        resolve();
                    }, function (error) {
                        console.log('Error loading client: '
                            + JSON.stringify(error));
                    });
                });
                return [2 /*return*/, p];
            });
        });
    };
    GoogleAuthService.prototype.loadSheetsAPI = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    gapi.client.load('https://sheets.googleapis.com/$discovery/rest?version=v4')
                        .then(function () {
                        console.log("sheets v4 loaded");
                        resolve();
                    }, function (error) {
                        console.log('Error loading SheetsAPI: '
                            + JSON.stringify(error));
                    });
                });
                return [2 /*return*/, p];
            });
        });
    };
    GoogleAuthService.prototype.loadDriveAPI = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    gapi.client.load('https://www.googleapis.com/discovery/v1/apis/drive/v3/rest')
                        .then(function () {
                        console.log("drive v3 loaded");
                        resolve();
                    }, function (error) {
                        console.log("Error loading DriveAPI: "
                            + JSON.stringify(error));
                    });
                });
                return [2 /*return*/, p];
            });
        });
    };
    GoogleAuthService.ctorParameters = function () { return [
        { type: _js_loader_service__WEBPACK_IMPORTED_MODULE_1__["JsLoaderService"] }
    ]; };
    GoogleAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_js_loader_service__WEBPACK_IMPORTED_MODULE_1__["JsLoaderService"]])
    ], GoogleAuthService);
    return GoogleAuthService;
}());



/***/ }),

/***/ "3PlN":
/*!***************************************************!*\
  !*** ./src/app/sequences/sequences.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcXVlbmNlcy9zZXF1ZW5jZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "4bdj":
/*!***************************************************!*\
  !*** ./src/app/builder/builder-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BuilderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderRoutingModule", function() { return BuilderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _builder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builder.component */ "oXLq");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'builder', component: _builder_component__WEBPACK_IMPORTED_MODULE_2__["BuilderComponent"] }
];
var BuilderRoutingModule = /** @class */ (function () {
    function BuilderRoutingModule() {
    }
    BuilderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: []
        })
    ], BuilderRoutingModule);
    return BuilderRoutingModule;
}());



/***/ }),

/***/ "4yIs":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/builder/builder.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<app-chessboard class=\"floating-box\"></app-chessboard>\n<section class=\"floating-box\" [style.max-width.px]=\"displayWidth\">\n\t<div class=\"nav\">\n\t\t<button class=\"icon\" mat-icon-button matTooltip=\"Flip\" (click)=\"flipBoard()\">\n\t\t\t<mat-icon>cached\n\t\t\t</mat-icon>\n\t\t</button>\n\t\t<button mat-icon-button matTooltip=\"Restart from here\" (click)=\"restart()\">\n\t\t\t<mat-icon>flight_takeoff\n\t\t\t</mat-icon>\n\t\t</button>\n\t\t<button [disabled]=\"moves.length === 0\" mat-icon-button matTooltip=\"Undo\" (click)=\"undoMove()\">\n\t\t\t<mat-icon>undo\n\t\t\t</mat-icon>\n\t\t</button>\n\t</div>\n\n\t<ul class=\"bullets\">\n\t\t<li *ngFor=\"let line of output\">{{ line }}</li>\n\t</ul>\n</section>\n<!-- <pre>{{ output }}</pre> -->\n<br>\n<form (ngSubmit)=\"onFenSubmit()\" #fenForm=\"ngForm\">\n\t<div class=\"form-group\">\n\t\t<label>Enter a fen to start sequence.</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"fen\" required [(ngModel)]=\"model.fen\" name=\"fen\" #fen=\"ngModel\">\n\t</div>\n\n\n\n\t<button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n</form>");

/***/ }),

/***/ "55tC":
/*!***********************************************!*\
  !*** ./src/app/services/js-loader.service.ts ***!
  \***********************************************/
/*! exports provided: JsLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsLoaderService", function() { return JsLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JsLoaderService = /** @class */ (function () {
    function JsLoaderService() {
    }
    JsLoaderService.prototype.loadjs = function (url) {
        var p = new Promise(function (resolve) {
            var node = document.createElement('script');
            node.src = url;
            node.type = 'text/javascript';
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0]
                .appendChild(node);
            node.onload = function () {
                console.log("The javascript file " + url + " has been loaded.");
                resolve();
            };
        });
        return p;
    };
    JsLoaderService.ctorParameters = function () { return []; };
    JsLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JsLoaderService);
    return JsLoaderService;
}());



/***/ }),

/***/ "5TFM":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<h2>Chess Opening Trainer</h2>\n<p>This is a web app to help with learning chess openings.</p>\n<h3>Why</h3>\n<p>If you don't know any openings, or always play the same opening, chess becomes very boring and limiting. But\n    learning openings is a major pain in the aris. Experts always say that you shouldn't try to rote-learn openings but\n    should understand the principles behind an opening that you are trying to learn. Fair enough, except I forget the\n    principles very quickly. I can watch a video where a teacher explains an opening, and understand it, but when the\n    situation comes up in practice I find that I've completely forgotten what to do - I forget the moves and the\n    principles. But I've tried rote-learning openings too but found it very difficult. And then GingerGM goes and says\n    that you need to know the first 10 moves of each opening. 'I'm screwed', I thought.</p>\n<p>\n    This is an attempt to learn openings by playing out the first few moves of an opening in a rote-learning fashion.\n    The app plays against you and plays the same moves for each sequence that you are hoping to learn. By having a\n    sequence of moves I'm hoping that it will be possible to be reminded of the principles behind the opening as well\n    as the actual moves to make. And maybe remembering a sequence will be easier than remembering individual moves.\n    Also, as I tend to play 5 minute blitz, and I'm a very low-ranked player (1150 ish), at this level we tend to just\n    throw our pieces out onto the board and so exact move order and precision don't make that much difference; it's\n    more important to know the general direction that the pieces need to be going.\n</p>\n<p>\n    I have no idea if this will be helpful but I'm going to try.\n</p>\n<p>\n    It is still work-in-progress.\n</p>\n<p>It uses the chessboard from <a href=\"https://github.com/shlomiassaf/ngx-chess\">\n    ngx-chess</a></p>\n<p>\n    My name is David Ma and I'm the oldest, fattest and most foolish man in the world.</p>");

/***/ }),

/***/ "7VxS":
/*!**********************************************!*\
  !*** ./src/app/trainer/trainer.component.ts ***!
  \**********************************************/
/*! exports provided: TrainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerComponent", function() { return TrainerComponent; });
/* harmony import */ var _raw_loader_trainer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./trainer.component.html */ "zB5p");
/* harmony import */ var _trainer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainer.component.css */ "Rmpb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_google_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/google-auth.service */ "36VY");
/* harmony import */ var _chessboard_chessboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chessboard/chessboard.component */ "nQ69");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/record.service */ "oq9T");
/* harmony import */ var _shared_classes_record__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared-classes/record */ "Ooy2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var AsyncArray = /** @class */ (function () {
    function AsyncArray() {
        var _this = this;
        this.array = new Array();
        this.ready = new Promise(function (resolve) {
            _this.resolve = resolve;
        });
    }
    return AsyncArray;
}());
var TrainerComponent = /** @class */ (function () {
    function TrainerComponent(cd, gauth, dataService, route, recordService) {
        this.cd = cd;
        this.gauth = gauth;
        this.dataService = dataService;
        this.route = route;
        this.recordService = recordService;
        this.output = new Array();
        this.outputColour = _shared_classes_record__WEBPACK_IMPORTED_MODULE_7__["OutputColour"].blue;
        this.orderedSequences = new AsyncArray();
    }
    TrainerComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.displayWidth = this.board.wholeSize;
                // If logged into Google, look for records of previous attempts
                Promise.all(this.gauth.ready).then(function () {
                    // Google Drive is ready to use
                    _this.generateOrderedSequences();
                });
                this.output.push('Select a sequence from the Moves page.');
                // get the parameters, if any
                this.route.paramMap.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
                    var name, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                name = params.get('name');
                                if (!(name === undefined || name === null)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.nextSequence()];
                            case 1:
                                _b.sent();
                                this.runSequence();
                                return [2 /*return*/];
                            case 2:
                                this.output.length = 0;
                                this.output.push('Retrieving data...');
                                // Check the sequence is in the sequences data
                                _a = this;
                                return [4 /*yield*/, this.dataService.findSequence(name)];
                            case 3:
                                // Check the sequence is in the sequences data
                                _a.sequence = _b.sent();
                                if (this.sequence === undefined) {
                                    this.output.push('The sequence \'' + name + '\' cant be found.');
                                }
                                else {
                                    this.runSequence();
                                }
                                _b.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    }; // end of ngOnInit
    TrainerComponent.prototype.runSequence = function () {
        var _this = this;
        if (this.sequence === undefined) {
            throw new Error('runSequence called without a valid sequence.');
        }
        this.board.load(this.sequence.fen);
        this.board.flipBoardTo(this.board.chess.turn);
        var successful = true;
        this.output.length = 0;
        // this.output.push(this.sequence.name);
        this.getRecord();
        var stepCount = 0;
        this.runningSubscription = this.board.moveMade.subscribe(function (move) {
            // console.log("move made: " + move.from + move.to);
            if (stepCount < _this.sequence.steps.length) {
                var step = _this.sequence.steps[stepCount];
                // console.log("step: " + step.move);
                if ((move.from + move.to) === step.move.from + step.move.to) {
                    // Correct move
                    _this.board.chess.move(step.move);
                    // Make the next move if there is one
                    stepCount++;
                    if (stepCount < _this.sequence.steps.length) {
                        step = _this.sequence.steps[stepCount];
                        _this.board.chess.move(step.move);
                        console.log('fen after move: ' + _this.board.chess.fen);
                    }
                    else {
                        _this.endSequence(successful);
                        return;
                    }
                }
                else {
                    _this.board.chess.undo();
                    _this.output.push('Incorrect move. Should be '
                        + step.move.from + step.move.to);
                    stepCount--;
                    successful = false;
                    if (_this.record !== undefined) {
                        _this.record.mistake();
                        _this.recordService.addRecord(_this.record);
                    }
                }
                stepCount++;
                if (stepCount === _this.sequence.steps.length) {
                    _this.endSequence(successful);
                    return;
                }
            }
        });
    };
    TrainerComponent.prototype.endSequence = function (successful) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var now, next;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.output.push('End of sequence.');
                                this.runningSubscription.unsubscribe();
                                if (!(this.record === undefined)) return [3 /*break*/, 2];
                                now = new Date();
                                next = new Date();
                                if (successful) {
                                    next.setDate(next.getDate() + 1);
                                }
                                console.log("New record. name: " + this.sequence.name
                                    + ", last: " + now
                                    + ", next: " + next);
                                this.record = new _shared_classes_record__WEBPACK_IMPORTED_MODULE_7__["Record"](this.sequence.name, now, next, now);
                                return [4 /*yield*/, this.recordService.addRecord(this.record)];
                            case 1:
                                _a.sent();
                                resolve();
                                return [3 /*break*/, 5];
                            case 2:
                                if (!successful) return [3 /*break*/, 4];
                                this.record.success();
                                return [4 /*yield*/, this.recordService.addRecord(this.record)];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4:
                                resolve();
                                _a.label = 5;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    TrainerComponent.prototype.redoSequence = function () {
        // console.log('redo sequence');
        if (this.runningSubscription !== undefined
            && !this.runningSubscription.closed) {
            this.runningSubscription.unsubscribe();
        }
        this.runSequence();
    };
    TrainerComponent.prototype.nextSequence = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.runningSubscription !== undefined
                    && !this.runningSubscription.closed) {
                    this.runningSubscription.unsubscribe();
                }
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var i, seq;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: 
                            //console.log("here1");
                            return [4 /*yield*/, this.orderedSequences.ready];
                            case 1:
                                //console.log("here1");
                                _a.sent();
                                //console.log("here2");
                                //console.log("number of sequences: " + this.orderedSequences.array.length);
                                if (this.sequence === undefined) {
                                    if (this.orderedSequences.array.length > 0) {
                                        this.sequence = this.orderedSequences.array[0];
                                        resolve();
                                        return [2 /*return*/];
                                    }
                                }
                                for (i = 0; i < this.orderedSequences.array.length; i++) {
                                    seq = this.orderedSequences.array[i];
                                    if (seq.name === this.sequence.name) {
                                        // for (let s of this.orderedSequences.array) {
                                        // 	console.log("nextSequence " + s.name);
                                        // }
                                        if ((i + 1) < this.orderedSequences.array.length) {
                                            this.sequence
                                                = this.orderedSequences.array[i + 1];
                                            this.runSequence();
                                            resolve();
                                            return [2 /*return*/];
                                        }
                                        else
                                            console.log("Already at last sequence.");
                                    }
                                }
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    TrainerComponent.prototype.prevSequence = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.runningSubscription !== undefined
                    && !this.runningSubscription.closed) {
                    this.runningSubscription.unsubscribe();
                }
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var i, seq;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: 
                            // await Promise.all(this.orderedSequencesReady);
                            return [4 /*yield*/, this.orderedSequences.ready];
                            case 1:
                                // await Promise.all(this.orderedSequencesReady);
                                _a.sent();
                                if (this.sequence === undefined) {
                                    if (this.orderedSequences.array.length > 0) {
                                        this.sequence = this.orderedSequences.array[0];
                                        resolve();
                                        return [2 /*return*/];
                                    }
                                }
                                for (i = 0; i < this.orderedSequences.array.length; i++) {
                                    seq = this.orderedSequences.array[i];
                                    if (seq.name === this.sequence.name) {
                                        if (i > 0) {
                                            this.sequence
                                                = this.orderedSequences.array[i - 1];
                                            this.runSequence();
                                            resolve();
                                            return [2 /*return*/];
                                        }
                                        else
                                            console.log("Already at first sequence.");
                                    }
                                }
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    // Where there are some records on previous sequences, use them,
    // otherwise any order
    TrainerComponent.prototype.generateOrderedSequences = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var sql, results, _i, results_1, result, name_1, seq, _a, _b, seqA, contains, _c, _d, seqB;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0: 
                            // this.orderedSequences = new Array<Sequence>();
                            return [4 /*yield*/, Promise.all(this.recordService.ready)];
                            case 1:
                                // this.orderedSequences = new Array<Sequence>();
                                _e.sent();
                                sql = "select * from t_records order by next";
                                return [4 /*yield*/, this.recordService.ala.execSelect(sql)];
                            case 2:
                                results = _e.sent();
                                if (!(results.length === 0)) return [3 /*break*/, 3];
                                this.output.push('No records found.');
                                return [3 /*break*/, 7];
                            case 3:
                                _i = 0, results_1 = results;
                                _e.label = 4;
                            case 4:
                                if (!(_i < results_1.length)) return [3 /*break*/, 7];
                                result = results_1[_i];
                                name_1 = result['name'];
                                return [4 /*yield*/, this.dataService.findSequence(name_1)];
                            case 5:
                                seq = _e.sent();
                                if (seq === undefined) {
                                    this.output.push('The sequence \'' + name_1 + '\' cant be found.');
                                }
                                else {
                                    this.orderedSequences.array.push(seq);
                                }
                                _e.label = 6;
                            case 6:
                                _i++;
                                return [3 /*break*/, 4];
                            case 7:
                                // Pull in any other sequences
                                for (_a = 0, _b = this.dataService.sequencies; _a < _b.length; _a++) {
                                    seqA = _b[_a];
                                    contains = false;
                                    for (_c = 0, _d = this.orderedSequences.array; _c < _d.length; _c++) {
                                        seqB = _d[_c];
                                        if (seqA.name === seqB.name)
                                            contains = true;
                                    }
                                    if (!contains) {
                                        this.orderedSequences.array.push(seqA);
                                    }
                                }
                                this.orderedSequences.resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    TrainerComponent.prototype.getRecord = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, Promise.all(this.recordService.ready)];
                            case 1:
                                _b.sent();
                                _a = this;
                                return [4 /*yield*/, this.recordService.getRecord(this.sequence.name)];
                            case 2:
                                _a.record = _b.sent();
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    TrainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _services_google_auth_service__WEBPACK_IMPORTED_MODULE_3__["GoogleAuthService"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _services_record_service__WEBPACK_IMPORTED_MODULE_6__["RecordService"] }
    ]; };
    TrainerComponent.propDecorators = {
        board: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_chessboard_chessboard_component__WEBPACK_IMPORTED_MODULE_4__["ChessboardComponent"], null,] }]
    };
    TrainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-trainer',
            template: _raw_loader_trainer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_trainer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _services_google_auth_service__WEBPACK_IMPORTED_MODULE_3__["GoogleAuthService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _services_record_service__WEBPACK_IMPORTED_MODULE_6__["RecordService"]])
    ], TrainerComponent);
    return TrainerComponent;
}()); // End of class TrainerComponent



/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./about.component.html */ "5TFM");
/* harmony import */ var _about_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.css */ "2Ic5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-about',
            template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_about_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AboutComponent);
    return AboutComponent;
}()); // End of class AboutComponent



/***/ }),

/***/ "8qoT":
/*!*************************************************!*\
  !*** ./src/app/services/spreadsheet.service.ts ***!
  \*************************************************/
/*! exports provided: SpreadsheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpreadsheetService", function() { return SpreadsheetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _google_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-auth.service */ "36VY");
/* harmony import */ var _spreadsheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spreadsheet */ "sxcE");
/* harmony import */ var _alasql_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alasql.service */ "gjcs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SpreadsheetService = /** @class */ (function () {
    function SpreadsheetService(gauth, ala) {
        this.gauth = gauth;
        this.ala = ala;
        this.spreadsheets = new Map();
    }
    SpreadsheetService.prototype.getSpreadsheet = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var q, list;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(this.spreadsheets.get(name) === undefined)) return [3 /*break*/, 2];
                                return [4 /*yield*/, Promise.all(this.gauth.ready)];
                            case 1:
                                _a.sent();
                                console.log("Spreadsheet '" + name + "' not yet retrieved. Retrieving...");
                                q = "name = '" + name + "' and mimeType contains 'google-apps.spreadsheet'";
                                list = gapi.client.drive.files.list({ q: q });
                                list.execute(function (resp) {
                                    if (resp.files.length === 0) {
                                        throw new Error("No Google Docs spreadsheet '"
                                            + name + "' found.");
                                    }
                                    var s = new _spreadsheet__WEBPACK_IMPORTED_MODULE_2__["Spreadsheet"](resp.files[0].id, _this.gauth, _this.ala);
                                    _this.spreadsheets.set(name, s);
                                    resolve(s);
                                });
                                return [3 /*break*/, 3];
                            case 2:
                                resolve(this.spreadsheets.get(name));
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    SpreadsheetService.ctorParameters = function () { return [
        { type: _google_auth_service__WEBPACK_IMPORTED_MODULE_1__["GoogleAuthService"] },
        { type: _alasql_service__WEBPACK_IMPORTED_MODULE_3__["AlaSql"] }
    ]; };
    SpreadsheetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_google_auth_service__WEBPACK_IMPORTED_MODULE_1__["GoogleAuthService"],
            _alasql_service__WEBPACK_IMPORTED_MODULE_3__["AlaSql"]])
    ], SpreadsheetService);
    return SpreadsheetService;
}());



/***/ }),

/***/ "8r+y":
/*!*****************************************************!*\
  !*** ./src/app/chessboard/chessboard.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chess-square-white {\n    fill: #ffffff;\n    stroke-width:1;\n    stroke:rgb(0,0,0);\n  }\n  \n  .chess-square-black {\n    fill: #b7d7d9;\n    stroke-width:1;\n    stroke:rgb(0,0,0);\n  }\n  \n  .white-piece {\n    opacity: 1;\n    fill: #ffffff;\n    fill-opacity: 1;\n    fill-rule: nonzero;\n    stroke: #000000;\n    stroke-width: 1.5;\n    stroke-linecap: round;\n    stroke-linejoin: miter;\n    stroke-miterlimit: 4;\n    stroke-dasharray: none;\n    stroke-opacity: 1;\n  }\n  \n  .white-circle {\n    fill: #9e4a4a;\n    stroke: #9c4747;\n    stroke-width: 1.5;\n  }\n  \n  .black-piece {\n    fill:none; \n    fill-opacity: 1;\n    fill-rule:evenodd;\n    stroke: #000000;\n    stroke-width: 1.5;\n    stroke-linecap:round;\n    stroke-linejoin:round;\n    stroke-miterlimit:4; \n    stroke-dasharray:none; \n    stroke-opacity:1;\n  }\n  \n  .black-body {\n    fill:#000000;\n    stroke:#000000;\n    fill-opacity:1;\n    stroke-linecap:butt;\n    stroke-linejoin:miter;\n  }\n  \n  .white-body {\n    fill:#ffffff;\n    stroke:#000000;\n    fill-opacity:1;\n    stroke-linecap:butt;\n    stroke-linejoin:miter;\n    fill-rule:evenodd;\n    stroke-width:1.5;\n    stroke-miterlimit:4;\n    stroke-dasharray:none;\n    stroke-opacity:1;\n  }\n  \n  .white-line {\n    fill:none;\n    stroke:#ffffff;\n  }\n  \n  .black-line {\n    fill:none;\n    stroke:#000000;\n  }\n  \n  .white-line-inner {\n    fill:#ffffff;\n    stroke: none;\n  }\n  \n  .black-line-inner {\n    fill:#000000;\n    stroke: none;\n  }\n  \n  .draggable {\n    cursor: -webkit-grab;\n  }\n  \n  /* svg {\n    display: block;\n  } */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlc3Nib2FyZC9jaGVzc2JvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUdBO0lBQ0UsU0FBUztJQUNULGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsU0FBUztJQUNULGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTs7S0FFRyIsImZpbGUiOiJzcmMvYXBwL2NoZXNzYm9hcmQvY2hlc3Nib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZXNzLXNxdWFyZS13aGl0ZSB7XG4gICAgZmlsbDogI2ZmZmZmZjtcbiAgICBzdHJva2Utd2lkdGg6MTtcbiAgICBzdHJva2U6cmdiKDAsMCwwKTtcbiAgfVxuICBcbiAgLmNoZXNzLXNxdWFyZS1ibGFjayB7XG4gICAgZmlsbDogI2I3ZDdkOTtcbiAgICBzdHJva2Utd2lkdGg6MTtcbiAgICBzdHJva2U6cmdiKDAsMCwwKTtcbiAgfVxuXG4gIC53aGl0ZS1waWVjZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWxsOiAjZmZmZmZmO1xuICAgIGZpbGwtb3BhY2l0eTogMTtcbiAgICBmaWxsLXJ1bGU6IG5vbnplcm87XG4gICAgc3Ryb2tlOiAjMDAwMDAwO1xuICAgIHN0cm9rZS13aWR0aDogMS41O1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICBzdHJva2UtbGluZWpvaW46IG1pdGVyO1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiA0O1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IDE7XG4gIH1cblxuICAud2hpdGUtY2lyY2xlIHtcbiAgICBmaWxsOiAjOWU0YTRhO1xuICAgIHN0cm9rZTogIzljNDc0NztcbiAgICBzdHJva2Utd2lkdGg6IDEuNTtcbiAgfVxuICBcbiBcbiAgLmJsYWNrLXBpZWNlIHtcbiAgICBmaWxsOm5vbmU7IFxuICAgIGZpbGwtb3BhY2l0eTogMTtcbiAgICBmaWxsLXJ1bGU6ZXZlbm9kZDtcbiAgICBzdHJva2U6ICMwMDAwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiAxLjU7XG4gICAgc3Ryb2tlLWxpbmVjYXA6cm91bmQ7XG4gICAgc3Ryb2tlLWxpbmVqb2luOnJvdW5kO1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OjQ7IFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6bm9uZTsgXG4gICAgc3Ryb2tlLW9wYWNpdHk6MTtcbiAgfVxuICBcbiAgLmJsYWNrLWJvZHkge1xuICAgIGZpbGw6IzAwMDAwMDtcbiAgICBzdHJva2U6IzAwMDAwMDtcbiAgICBmaWxsLW9wYWNpdHk6MTtcbiAgICBzdHJva2UtbGluZWNhcDpidXR0O1xuICAgIHN0cm9rZS1saW5lam9pbjptaXRlcjtcbiAgfVxuXG4gIC53aGl0ZS1ib2R5IHtcbiAgICBmaWxsOiNmZmZmZmY7XG4gICAgc3Ryb2tlOiMwMDAwMDA7XG4gICAgZmlsbC1vcGFjaXR5OjE7XG4gICAgc3Ryb2tlLWxpbmVjYXA6YnV0dDtcbiAgICBzdHJva2UtbGluZWpvaW46bWl0ZXI7XG4gICAgZmlsbC1ydWxlOmV2ZW5vZGQ7XG4gICAgc3Ryb2tlLXdpZHRoOjEuNTtcbiAgICBzdHJva2UtbWl0ZXJsaW1pdDo0O1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6bm9uZTtcbiAgICBzdHJva2Utb3BhY2l0eToxO1xuICB9XG5cbiAgLndoaXRlLWxpbmUge1xuICAgIGZpbGw6bm9uZTtcbiAgICBzdHJva2U6I2ZmZmZmZjtcbiAgfVxuXG4gIC5ibGFjay1saW5lIHtcbiAgICBmaWxsOm5vbmU7XG4gICAgc3Ryb2tlOiMwMDAwMDA7XG4gIH1cblxuICAud2hpdGUtbGluZS1pbm5lciB7XG4gICAgZmlsbDojZmZmZmZmO1xuICAgIHN0cm9rZTogbm9uZTtcbiAgfVxuXG4gIC5ibGFjay1saW5lLWlubmVyIHtcbiAgICBmaWxsOiMwMDAwMDA7XG4gICAgc3Ryb2tlOiBub25lO1xuICB9XG5cbiAgLmRyYWdnYWJsZSB7XG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gIH1cblxuICAvKiBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9ICovXG5cbiJdfQ== */");

/***/ }),

/***/ "9kiz":
/*!********************************************!*\
  !*** ./src/app/shared-classes/sequence.ts ***!
  \********************************************/
/*! exports provided: Step, Sequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sequence", function() { return Sequence; });
/* harmony import */ var _chessboard_chess_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chessboard/chess-enums */ "iLu0");

var Step = /** @class */ (function () {
    // move e.g. d2d4
    // comment on the move
    function Step(move, comment) {
        this.move = move;
        this.comment = comment;
    }
    return Step;
}());

var Sequence = /** @class */ (function () {
    function Sequence() {
        this.steps = new Array(); // array of steps in the sequence
    }
    Sequence.prototype.addStep = function (move, comment) {
        var m = new _chessboard_chess_enums__WEBPACK_IMPORTED_MODULE_0__["Move"](move.substr(0, 2), move.substr(2, 2));
        var s = new Step(m, comment);
        this.steps.push(s);
    };
    return Sequence;
}());



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".g-signin2 {\n    float: right;\n  }\n\n  .sign-out {\n    background-color: #4285f4;\n    color: white;\n    float: right;\n    font-size: 19px;\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlOztFQUVqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmctc2lnbmluMiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbiAgLnNpZ24tb3V0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICBcbiAgfSJdfQ== */");

/***/ }),

/***/ "AytR":
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DN7M":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".g-signin2 {\n    float: right;\n  }\n\n  .sign-out {\n    background-color: #4285f4;\n    color: white;\n    float: right;\n    font-size: 19px;\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTs7RUFFakIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZy1zaWduaW4yIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cblxuICAuc2lnbi1vdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIFxuICB9Il19 */");

/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_classes_sequence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-classes/sequence */ "9kiz");
/* harmony import */ var _google_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-auth.service */ "36VY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _spreadsheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spreadsheet */ "sxcE");
/* harmony import */ var _record_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./record.service */ "oq9T");
/* harmony import */ var _alasql_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alasql.service */ "gjcs");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var DataService = /** @class */ (function () {
    function DataService(gauth, ala, recordService) {
        this.gauth = gauth;
        this.ala = ala;
        this.recordService = recordService;
        // public records = new Array<Record>();
        this.sequencesLoaded = new Array();
        this.sequencies = new Array();
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.sequencesLoaded.push(this.loadSequences());
    }
    DataService.prototype.loadSequences = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    _this.addBasicSequencies();
                    _this.subject.next(_this.sequencies);
                    Promise.all(_this.gauth.ready).then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log("Google ready");
                                    return [4 /*yield*/, this.retrieveSequences()];
                                case 1:
                                    _a.sent();
                                    this.subject.next(this.sequencies);
                                    resolve();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                return [2 /*return*/, p];
            });
        });
    };
    DataService.prototype.addBasicSequencies = function () {
        var name, fen, moves;
        name = 'Sicilian Dragon Initial';
        fen = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1';
        moves = 'c7c5,g1f3,d7d6,d2d4,c5d4,f3d4,g8f6,b1c3,g7g6,c1e3,f8g7,f2f3,b8c6,d1d2,e8g8,f1c4,c8d7,e1c1,c6e5,c4b3';
        this.addSequence(name, fen, moves);
        name = 'Sicilian Dragon Bishop Advance';
        fen = 'r2q1rk1/pp1bppbp/3p1np1/4n3/3NP3/1BN1BP2/PPPQ2PP/2KR3R b - - 8 11';
        moves = 'a8c8,e3h6,g7h6,d2h6,c8c3,b2c3,a7a5,a2a4,d8c7,h6e3,c7c5,c1d2,d7a4,d1a1,a4b3,c2b3,d6d5';
        this.addSequence(name, fen, moves);
        name = 'Semi-Slav Be7';
        fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
        moves = 'd2d4,d7d5,g1f3,g8f6,c2c4,c7c6,b1c3,e7e6,c1g5,f8e7,e2e3,e8g8,d1c2,b8d7,e1c1,f8e8,c1b1,a7a6,h2h4,b7b5,c4c5,b5b4,c3a4,a6a5,g5f6,e7f6,f3g5,d7f8,f1d3,g7g6,a4b6,a8a7,b6c8,d8c8,f2f4,a5a4,c2f2';
        this.addSequence(name, fen, moves);
        name = 'Semi-Slav Cambridge Springs';
        fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
        moves = 'd2d4,d7d5,g1f3,c7c6,c2c4,g8f6,b1c3,e7e6,c1g5,b8d7,d1c2,d8a5,g5d2,a5d8,e2e4';
        this.addSequence(name, fen, moves);
        name = 'Lucena Position';
        fen = '1K6/1P1k4/8/8/8/8/2R5/r7 w - - 0 1';
        moves = 'c2d2,d7e7,d2d4,a1c1,b8a7,c1a1,a7b6,a1b1,b6c6,b1c1,c6b5,c1b1,d4b4';
        this.addSequence(name, fen, moves);
        name = 'Lucena Position Variation';
        fen = '1K6/1P1k4/8/8/8/8/2R5/r7 w - - 0 1';
        moves = 'c2d2,d7e6,b8c8,a1c1,c8d8,c1b1,d2d7,e6e5,d8c8';
        this.addSequence(name, fen, moves);
    };
    DataService.prototype.findSequence = function (name, wait) {
        if (wait === void 0) { wait = true; }
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    for (var _i = 0, _a = _this.sequencies; _i < _a.length; _i++) {
                        var seq = _a[_i];
                        if (seq.name === name) {
                            resolve(seq);
                        }
                    }
                    // wait for google auth
                    if (wait) {
                        Promise.all(_this.sequencesLoaded).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            var seq;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.findSequence(name, false)];
                                    case 1:
                                        seq = _a.sent();
                                        resolve(this.findSequence(name, false));
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                });
                return [2 /*return*/, p];
            });
        });
    };
    DataService.prototype.addSequence = function (name, fen, moves) {
        var seq = new _shared_classes_sequence__WEBPACK_IMPORTED_MODULE_1__["Sequence"]();
        seq.name = name;
        seq.fen = fen;
        var parts = moves.split(',');
        for (var i = 0; i < parts.length; i++) {
            seq.addStep(parts[i], '');
        }
        this.sequencies.push(seq);
    };
    // Get sequences from a Google spreadsheet.
    // Needs to be in /etc/chess-opening-trainer
    DataService.prototype.retrieveSequences = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    var q = "name contains 'Chess Opening Trainer' and mimeType contains 'google-apps.spreadsheet'";
                    var list = gapi.client.drive.files.list({ q: q });
                    list.execute(function (resp) {
                        if (resp.files.length === 0) {
                            throw new Error('No Google Docs spreadsheet Chess Opening Trainer found');
                        }
                        _this.spreadsheet = new _spreadsheet__WEBPACK_IMPORTED_MODULE_4__["Spreadsheet"](resp.files[0].id, _this.gauth, _this.ala);
                        gapi.client.sheets.spreadsheets.values.get({
                            spreadsheetId: _this.spreadsheet.id,
                            range: "Sequences!A2:C"
                        }).then(function (response) {
                            for (var i = 0; i < response.result.values.length; i++) {
                                _this.addSequence(response.result.values[i][0], response.result.values[i][1], response.result.values[i][2]);
                            }
                            resolve();
                        }, function (error) {
                            throw new Error(error.result.error.message);
                        });
                        _this.addRecords();
                    });
                });
                return [2 /*return*/, p];
            });
        });
    };
    DataService.prototype.connect = function (collectionViewer) {
        return this.subject.asObservable();
    };
    DataService.prototype.disconnect = function (collectionViewer) {
        this.subject.complete();
    };
    DataService.prototype.addRecords = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        resolve();
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    DataService.ctorParameters = function () { return [
        { type: _google_auth_service__WEBPACK_IMPORTED_MODULE_2__["GoogleAuthService"] },
        { type: _alasql_service__WEBPACK_IMPORTED_MODULE_6__["AlaSql"] },
        { type: _record_service__WEBPACK_IMPORTED_MODULE_5__["RecordService"] }
    ]; };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_google_auth_service__WEBPACK_IMPORTED_MODULE_2__["GoogleAuthService"],
            _alasql_service__WEBPACK_IMPORTED_MODULE_6__["AlaSql"],
            _record_service__WEBPACK_IMPORTED_MODULE_5__["RecordService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "M22c":
/*!**************************************************!*\
  !*** ./src/app/sequences/sequences.component.ts ***!
  \**************************************************/
/*! exports provided: SequencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequencesComponent", function() { return SequencesComponent; });
/* harmony import */ var _raw_loader_sequences_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sequences.component.html */ "ne9n");
/* harmony import */ var _sequences_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sequences.component.css */ "3PlN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SequencesComponent = /** @class */ (function () {
    function SequencesComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.displayedColumns = ['name', 'practice'];
    }
    SequencesComponent.prototype.ngOnInit = function () {
        this.dataSource = this.dataService;
    };
    SequencesComponent.prototype.practice = function (seq) {
        console.log('practice sequence ' + seq.name + '...');
        this.router.navigate(['/trainer',
            //{name: seq.name, header: 'showHeader'}]);
            { name: seq.name }]);
    };
    SequencesComponent.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    SequencesComponent.propDecorators = {
        table: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], null,] }]
    };
    SequencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sequences',
            template: _raw_loader_sequences_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sequences_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SequencesComponent);
    return SequencesComponent;
}()); // End of class SequencesComponent



/***/ }),

/***/ "OYgV":
/*!*************************************!*\
  !*** ./src/app/chessboard/chess.ts ***!
  \*************************************/
/*! exports provided: Chess, FenValidationResult, ChessPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chess", function() { return Chess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FenValidationResult", function() { return FenValidationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessPiece", function() { return ChessPiece; });
/* harmony import */ var _chess_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chess-enums */ "iLu0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


/*
 * Copyright (c) 2016, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *----------------------------------------------------------------------------*/
/* minified license below  */
/* @license
 * Copyright (c) 2016, Jeff Hlywa (jhlywa@gmail.com)
 * Released under the BSD license
 * https://github.com/jhlywa/chess.js/blob/master/LICENSE
 */
// export class ChessMove {
//     color;
//     from;
//     to;
//     flags;
//     piece;
//     // dgm: these needed to exist for typescript
//     promotion;
//     captured;
// }
var Chess = /** @class */ (function () {
    function Chess(fen) {
        /* jshint indent: false */
        // public BLACK = 'b';
        // public WHITE = 'w';
        this.EMPTY = -1;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.SYMBOLS = 'pnbrqkPNBRQK';
        this.DEFAULT_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
        this.POSSIBLE_RESULTS = ['1-0', '0-1', '1/2-1/2', '*'];
        this.PAWN_OFFSETS = {
            b: [16, 32, 17, 15],
            w: [-16, -32, -17, -15]
        };
        this.PIECE_OFFSETS = {
            n: [-18, -33, -31, -14, 18, 33, 31, 14],
            b: [-17, -15, 17, 15],
            r: [-16, 1, 16, -1],
            q: [-17, -16, -15, 1, 17, 16, 15, -1],
            k: [-17, -16, -15, 1, 17, 16, 15, -1]
        };
        this.ATTACKS = [
            20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20, 0,
            0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0,
            0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0,
            0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0,
            0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
            24, 24, 24, 24, 24, 24, 56, 0, 56, 24, 24, 24, 24, 24, 24, 0,
            0, 0, 0, 0, 0, 2, 53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 20, 2, 24, 2, 20, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 20, 0, 0, 24, 0, 0, 20, 0, 0, 0, 0, 0,
            0, 0, 0, 20, 0, 0, 0, 24, 0, 0, 0, 20, 0, 0, 0, 0,
            0, 0, 20, 0, 0, 0, 0, 24, 0, 0, 0, 0, 20, 0, 0, 0,
            0, 20, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 20, 0, 0,
            20, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 20
        ];
        this.RAYS = [
            17, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 15, 0,
            0, 17, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 15, 0, 0,
            0, 0, 17, 0, 0, 0, 0, 16, 0, 0, 0, 0, 15, 0, 0, 0,
            0, 0, 0, 17, 0, 0, 0, 16, 0, 0, 0, 15, 0, 0, 0, 0,
            0, 0, 0, 0, 17, 0, 0, 16, 0, 0, 15, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 17, 0, 16, 0, 15, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 17, 16, 15, 0, 0, 0, 0, 0, 0, 0,
            1, 1, 1, 1, 1, 1, 1, 0, -1, -1, -1, -1, -1, -1, -1, 0,
            0, 0, 0, 0, 0, 0, -15, -16, -17, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, -15, 0, -16, 0, -17, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, -15, 0, 0, -16, 0, 0, -17, 0, 0, 0, 0, 0,
            0, 0, 0, -15, 0, 0, 0, -16, 0, 0, 0, -17, 0, 0, 0, 0,
            0, 0, -15, 0, 0, 0, 0, -16, 0, 0, 0, 0, -17, 0, 0, 0,
            0, -15, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, -17, 0, 0,
            -15, 0, 0, 0, 0, 0, 0, -16, 0, 0, 0, 0, 0, 0, -17
        ];
        this.SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 };
        this.FLAGS = {
            NORMAL: 'n',
            CAPTURE: 'c',
            BIG_PAWN: 'b',
            EP_CAPTURE: 'e',
            PROMOTION: 'p',
            KSIDE_CASTLE: 'k',
            QSIDE_CASTLE: 'q'
        };
        this.BITS = {
            NORMAL: 1,
            CAPTURE: 2,
            BIG_PAWN: 4,
            EP_CAPTURE: 8,
            PROMOTION: 16,
            KSIDE_CASTLE: 32,
            QSIDE_CASTLE: 64
        };
        this.RANK_1 = 7;
        this.RANK_2 = 6;
        this.RANK_3 = 5;
        this.RANK_4 = 4;
        this.RANK_5 = 3;
        this.RANK_6 = 2;
        this.RANK_7 = 1;
        this.RANK_8 = 0;
        this.SQUARES = {
            a8: 0, b8: 1, c8: 2, d8: 3, e8: 4, f8: 5, g8: 6, h8: 7,
            a7: 16, b7: 17, c7: 18, d7: 19, e7: 20, f7: 21, g7: 22, h7: 23,
            a6: 32, b6: 33, c6: 34, d6: 35, e6: 36, f6: 37, g6: 38, h6: 39,
            a5: 48, b5: 49, c5: 50, d5: 51, e5: 52, f5: 53, g5: 54, h5: 55,
            a4: 64, b4: 65, c4: 66, d4: 67, e4: 68, f4: 69, g4: 70, h4: 71,
            a3: 80, b3: 81, c3: 82, d3: 83, e3: 84, f3: 85, g3: 86, h3: 87,
            a2: 96, b2: 97, c2: 98, d2: 99, e2: 100, f2: 101, g2: 102, h2: 103,
            a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
        };
        this.ROOKS = {
            w: [{ square: this.SQUARES.a1, flag: this.BITS.QSIDE_CASTLE },
                { square: this.SQUARES.h1, flag: this.BITS.KSIDE_CASTLE }],
            b: [{ square: this.SQUARES.a8, flag: this.BITS.QSIDE_CASTLE },
                { square: this.SQUARES.h8, flag: this.BITS.KSIDE_CASTLE }]
        };
        this.board = new Array(128);
        this.kings = { w: this.EMPTY, b: this.EMPTY };
        this.turn = _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].WHITE;
        this.castling = { w: 0, b: 0 };
        this.ep_square = this.EMPTY;
        this.half_moves = 0;
        this.move_number = 1;
        this.history = [];
        this.header = {};
        /* if the user passes in a fen string, load it, else default to
         * starting position
         */
        if (typeof fen === 'undefined') {
            this.load(this.DEFAULT_POSITION);
        }
        else {
            this.load(fen);
        }
    }
    Chess.prototype.clear = function () {
        this.board = new Array(128);
        this.kings = { w: this.EMPTY, b: this.EMPTY };
        this.turn = _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].WHITE;
        this.castling = { w: 0, b: 0 };
        this.ep_square = this.EMPTY;
        this.half_moves = 0;
        this.move_number = 1;
        this.history = [];
        this.header = {};
        this.update_setup(this.generate_fen());
    };
    Chess.prototype.reset = function () {
        this.load(this.DEFAULT_POSITION);
    };
    Chess.prototype.load = function (fen) {
        var tokens = fen.split(/\s+/);
        var position = tokens[0];
        var square = 0;
        if (!this.validate_fen(fen).valid) {
            return false;
        }
        this.clear();
        for (var i = 0; i < position.length; i++) {
            var piece = position.charAt(i);
            if (piece === '/') {
                square += 8;
            }
            else if (this.is_digit(piece)) {
                square += parseInt(piece, 10);
            }
            else {
                var color = (piece < 'a') ? _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].WHITE : _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].BLACK;
                this.put({ type: piece.toLowerCase(), color: color }, this.algebraic(square));
                square++;
            }
        }
        this.turn = tokens[1];
        if (tokens[2].indexOf('K') > -1) {
            this.castling.w |= this.BITS.KSIDE_CASTLE;
        }
        if (tokens[2].indexOf('Q') > -1) {
            this.castling.w |= this.BITS.QSIDE_CASTLE;
        }
        if (tokens[2].indexOf('k') > -1) {
            this.castling.b |= this.BITS.KSIDE_CASTLE;
        }
        if (tokens[2].indexOf('q') > -1) {
            this.castling.b |= this.BITS.QSIDE_CASTLE;
        }
        this.ep_square = (tokens[3] === '-') ? this.EMPTY : this.SQUARES[tokens[3]];
        this.half_moves = parseInt(tokens[4], 10);
        this.move_number = parseInt(tokens[5], 10);
        this.update_setup(this.generate_fen());
        this.onChange.emit();
        return true;
    };
    /* TODO: this function is pretty much crap - it validates structure but
     * completely ignores content (e.g. doesn't verify that each side has a king)
     * ... we should rewrite this, and ditch the silly error_number field while
     * we're at it
     */
    Chess.prototype.validate_fen = function (fen) {
        var errors = {
            0: 'No errors.',
            1: 'FEN string must contain six space-delimited fields.',
            2: '6th field (move number) must be a positive integer.',
            3: '5th field (half move counter) must be a non-negative integer.',
            4: '4th field (en-passant square) is invalid.',
            5: '3rd field (castling availability) is invalid.',
            6: '2nd field (side to move) is invalid.',
            7: '1st field (piece positions) does not contain 8 \'/\'-delimited rows.',
            8: '1st field (piece positions) is invalid [consecutive numbers].',
            9: '1st field (piece positions) is invalid [invalid piece].',
            10: '1st field (piece positions) is invalid [row too large].',
            11: 'Illegal en-passant square',
        };
        /* 1st criterion: 6 space-seperated fields? */
        var tokens = fen.split(/\s+/);
        if (tokens.length !== 6) {
            return { valid: false, error_number: 1, error: errors[1] };
        }
        /* 2nd criterion: move number field is a integer value > 0? */
        if (isNaN(tokens[5]) || (parseInt(tokens[5], 10) <= 0)) {
            return { valid: false, error_number: 2, error: errors[2] };
        }
        /* 3rd criterion: half move counter is an integer >= 0? */
        if (isNaN(tokens[4]) || (parseInt(tokens[4], 10) < 0)) {
            return { valid: false, error_number: 3, error: errors[3] };
        }
        /* 4th criterion: 4th field is a valid e.p.-string? */
        if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
            return { valid: false, error_number: 4, error: errors[4] };
        }
        /* 5th criterion: 3th field is a valid castle-string? */
        if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
            return { valid: false, error_number: 5, error: errors[5] };
        }
        /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */
        if (!/^(w|b)$/.test(tokens[1])) {
            return { valid: false, error_number: 6, error: errors[6] };
        }
        /* 7th criterion: 1st field contains 8 rows? */
        var rows = tokens[0].split('/');
        if (rows.length !== 8) {
            return { valid: false, error_number: 7, error: errors[7] };
        }
        /* 8th criterion: every row is valid? */
        for (var i = 0; i < rows.length; i++) {
            /* check for right sum of fields AND not two numbers in succession */
            var sum_fields = 0;
            var previous_was_number = false;
            for (var k = 0; k < rows[i].length; k++) {
                if (!isNaN(rows[i][k])) {
                    if (previous_was_number) {
                        return { valid: false, error_number: 8, error: errors[8] };
                    }
                    sum_fields += parseInt(rows[i][k], 10);
                    previous_was_number = true;
                }
                else {
                    if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
                        return { valid: false, error_number: 9, error: errors[9] };
                    }
                    sum_fields += 1;
                    previous_was_number = false;
                }
            }
            if (sum_fields !== 8) {
                return { valid: false, error_number: 10, error: errors[10] };
            }
        }
        if ((tokens[3][1] === '3' && tokens[1] === 'w') ||
            (tokens[3][1] === '6' && tokens[1] === 'b')) {
            return { valid: false, error_number: 11, error: errors[11] };
        }
        /* everything's okay! */
        return { valid: true, error_number: 0, error: errors[0] };
    };
    Chess.prototype.generate_fen = function () {
        var empty = 0;
        var fen = '';
        for (var i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            if (this.board[i] === undefined) {
                empty++;
            }
            else {
                if (empty > 0) {
                    fen += empty;
                    empty = 0;
                }
                var color = this.board[i].color;
                var piece = this.board[i].type;
                fen += (color === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].WHITE) ?
                    piece.toUpperCase() : piece.toLowerCase();
            }
            if ((i + 1) & 0x88) {
                if (empty > 0) {
                    fen += empty;
                }
                if (i !== this.SQUARES.h1) {
                    fen += '/';
                }
                empty = 0;
                i += 8;
            }
        }
        var cflags = '';
        if (this.castling[_chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].WHITE] & this.BITS.KSIDE_CASTLE) {
            cflags += 'K';
        }
        if (this.castling[_chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].WHITE] & this.BITS.QSIDE_CASTLE) {
            cflags += 'Q';
        }
        if (this.castling[_chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].BLACK] & this.BITS.KSIDE_CASTLE) {
            cflags += 'k';
        }
        if (this.castling[_chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].BLACK] & this.BITS.QSIDE_CASTLE) {
            cflags += 'q';
        }
        /* do we have an empty castling flag? */
        cflags = cflags || '-';
        var epflags = (this.ep_square === this.EMPTY) ? '-' : this.algebraic(this.ep_square);
        return [fen, this.turn, cflags, epflags, this.half_moves, this.move_number].join(' ');
    };
    Chess.prototype.set_header = function (args) {
        for (var i = 0; i < args.length; i += 2) {
            if (typeof args[i] === 'string' &&
                typeof args[i + 1] === 'string') {
                this.header[args[i]] = args[i + 1];
            }
        }
        return this.header;
    };
    /* called when the initial board setup is changed with put() or remove().
     * modifies the SetUp and FEN properties of the header object.  if the FEN is
     * equal to the default position, the SetUp and FEN are deleted
     * the setup is only updated if history.length is zero, ie moves haven't been
     * made.
     */
    Chess.prototype.update_setup = function (fen) {
        if (history.length > 0) {
            return;
        }
        if (fen !== this.DEFAULT_POSITION) {
            this.header['SetUp'] = '1';
            this.header['FEN'] = fen;
        }
        else {
            delete this.header['SetUp'];
            delete this.header['FEN'];
        }
    };
    Chess.prototype.get = function (square) {
        var piece = this.board[this.SQUARES[square]];
        return (piece) ? { type: piece.type, color: piece.color } : undefined;
    };
    Chess.prototype.put = function (piece, square) {
        /* check for valid piece object */
        if (!('type' in piece && 'color' in piece)) {
            return false;
        }
        /* check for piece */
        if (this.SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
            return false;
        }
        /* check for valid square */
        if (!(square in this.SQUARES)) {
            return false;
        }
        var sq = this.SQUARES[square];
        /* don't let the user place more than one king */
        if (piece.type === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].KING &&
            !(this.kings[piece.color] === this.EMPTY || this.kings[piece.color] === sq)) {
            return false;
        }
        this.board[sq] = { type: piece.type, color: piece.color };
        if (piece.type === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].KING) {
            this.kings[piece.color] = sq;
        }
        this.update_setup(this.generate_fen());
        return true;
    };
    Chess.prototype.remove = function (square) {
        var piece = this.get(square);
        this.board[this.SQUARES[square]] = undefined;
        if (piece && piece.type === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].KING) {
            this.kings[piece.color] = this.EMPTY;
        }
        this.update_setup(this.generate_fen());
        return piece;
    };
    Chess.prototype.build_move = function (board, from, to, flags, promotion) {
        var move = {
            color: this.turn,
            from: from,
            to: to,
            flags: flags,
            piece: board[from].type,
            // dgm: these needed to exist for typescript
            promotion: undefined,
            captured: undefined
        };
        if (promotion) {
            move.flags |= this.BITS.PROMOTION;
            move.promotion = promotion;
        }
        if (board[to]) {
            move.captured = board[to].type;
        }
        else if (flags & this.BITS.EP_CAPTURE) {
            move.captured = _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].PAWN;
        }
        return move;
    };
    Chess.prototype.add_move = function (board, moves, from, to, flags) {
        /* if pawn promotion */
        if (board[from].type === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].PAWN &&
            (this.rank(to) === this.RANK_8 || this.rank(to) === this.RANK_1)) {
            var pieces = [_chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].QUEEN, _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].ROOK, _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].BISHOP, _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].KNIGHT];
            for (var i = 0, len = pieces.length; i < len; i++) {
                moves.push(this.build_move(board, from, to, flags, pieces[i]));
            }
        }
        else {
            moves.push(this.build_move(board, from, to, flags));
        }
    };
    Chess.prototype.generate_moves = function (options) {
        var moves = [];
        var us = this.turn;
        var them = this.swap_color(us);
        var second_rank = { b: this.RANK_7, w: this.RANK_2 };
        var first_sq = this.SQUARES.a8;
        var last_sq = this.SQUARES.h1;
        var single_square = false;
        /* do we want legal moves? */
        var legal = (typeof options !== 'undefined' && 'legal' in options) ?
            options.legal : true;
        /* are we generating moves for a single square? */
        if (typeof options !== 'undefined' && 'square' in options) {
            if (options.square in this.SQUARES) {
                first_sq = last_sq = this.SQUARES[options.square];
                single_square = true;
            }
            else {
                /* invalid square */
                return [];
            }
        }
        for (var i = first_sq; i <= last_sq; i++) {
            /* did we run off the end of the board */
            if (i & 0x88) {
                i += 7;
                continue;
            }
            var piece = this.board[i];
            if (piece === undefined || piece.color !== us) {
                continue;
            }
            if (piece.type === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].PAWN) {
                /* single square, non-capturing */
                var square1 = i + this.PAWN_OFFSETS[us][0];
                if (this.board[square1] === undefined) {
                    this.add_move(this.board, moves, i, square1, this.BITS.NORMAL);
                    /* double square */
                    var square = i + this.PAWN_OFFSETS[us][1];
                    if (second_rank[us] === this.rank(i) && this.board[square] === undefined) {
                        this.add_move(this.board, moves, i, square, this.BITS.BIG_PAWN);
                    }
                }
                /* pawn captures */
                for (var j = 2; j < 4; j++) {
                    var square = i + this.PAWN_OFFSETS[us][j];
                    if (square & 0x88) {
                        continue;
                    }
                    if (this.board[square] !== undefined &&
                        this.board[square].color === them) {
                        this.add_move(this.board, moves, i, square, this.BITS.CAPTURE);
                    }
                    else if (square === this.ep_square) {
                        this.add_move(this.board, moves, i, this.ep_square, this.BITS.EP_CAPTURE);
                    }
                }
            }
            else {
                for (var j = 0, len = this.PIECE_OFFSETS[piece.type].length; j < len; j++) {
                    var offset = this.PIECE_OFFSETS[piece.type][j];
                    var square = i;
                    while (true) {
                        square += offset;
                        if (square & 0x88) {
                            break;
                        }
                        if (this.board[square] === undefined) {
                            this.add_move(this.board, moves, i, square, this.BITS.NORMAL);
                        }
                        else {
                            if (this.board[square].color === us) {
                                break;
                            }
                            this.add_move(this.board, moves, i, square, this.BITS.CAPTURE);
                            break;
                        }
                        /* break, if knight or king */
                        if (piece.type === 'n' || piece.type === 'k') {
                            break;
                        }
                    }
                }
            }
        }
        /* check for castling if: a) we're generating all moves, or b) we're doing
         * single square move generation on the king's square
         */
        if ((!single_square) || last_sq === this.kings[us]) {
            /* king-side castling */
            if (this.castling[us] & this.BITS.KSIDE_CASTLE) {
                var castling_from = this.kings[us];
                var castling_to = castling_from + 2;
                if (this.board[castling_from + 1] === undefined &&
                    this.board[castling_to] === undefined &&
                    !this.attacked(them, this.kings[us]) &&
                    !this.attacked(them, castling_from + 1) &&
                    !this.attacked(them, castling_to)) {
                    this.add_move(this.board, moves, this.kings[us], castling_to, this.BITS.KSIDE_CASTLE);
                }
            }
            /* queen-side castling */
            if (this.castling[us] & this.BITS.QSIDE_CASTLE) {
                var castling_from = this.kings[us];
                var castling_to = castling_from - 2;
                if (this.board[castling_from - 1] === undefined &&
                    this.board[castling_from - 2] === undefined &&
                    this.board[castling_from - 3] === undefined &&
                    !this.attacked(them, this.kings[us]) &&
                    !this.attacked(them, castling_from - 1) &&
                    !this.attacked(them, castling_to)) {
                    this.add_move(this.board, moves, this.kings[us], castling_to, this.BITS.QSIDE_CASTLE);
                }
            }
        }
        /* return all pseudo-legal moves (this includes moves that allow the king
         * to be captured)
         */
        if (!legal) {
            return moves;
        }
        /* filter out illegal moves */
        var legal_moves = [];
        for (var i = 0, len = moves.length; i < len; i++) {
            this.make_move(moves[i]);
            if (!this.king_attacked(us)) {
                legal_moves.push(moves[i]);
            }
            this.undo_move();
        }
        return legal_moves;
    };
    /* convert a move from 0x88 coordinates to Standard Algebraic Notation
     * (SAN)
     *
     * @param {boolean} sloppy Use the sloppy SAN generator to work around over
     * disambiguation bugs in Fritz and Chessbase.  See below:
     *
     * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
     * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
     * 4. ... Ne7 is technically the valid SAN
     */
    Chess.prototype.move_to_san = function (move, sloppy) {
        var output = '';
        if (move.flags & this.BITS.KSIDE_CASTLE) {
            output = 'O-O';
        }
        else if (move.flags & this.BITS.QSIDE_CASTLE) {
            output = 'O-O-O';
        }
        else {
            var disambiguator = this.get_disambiguator(move, sloppy);
            if (move.piece !== _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].PAWN) {
                output += move.piece.toUpperCase() + disambiguator;
            }
            if (move.flags & (this.BITS.CAPTURE | this.BITS.EP_CAPTURE)) {
                if (move.piece === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].PAWN) {
                    output += this.algebraic(move.from)[0];
                }
                output += 'x';
            }
            output += this.algebraic(move.to);
            if (move.flags & this.BITS.PROMOTION) {
                output += '=' + move.promotion.toUpperCase();
            }
        }
        this.make_move(move);
        if (this.in_check()) {
            if (this.in_checkmate()) {
                output += '#';
            }
            else {
                output += '+';
            }
        }
        this.undo_move();
        return output;
    };
    // parses all of the decorators out of a SAN string
    Chess.prototype.stripped_san = function (move) {
        return move.replace(/=/, '').replace(/[+#]?[?!]*$/, '');
    };
    Chess.prototype.attacked = function (color, square) {
        for (var i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            /* did we run off the end of the board */
            if (i & 0x88) {
                i += 7;
                continue;
            }
            /* if empty square or wrong color */
            if (this.board[i] === undefined || this.board[i].color !== color) {
                continue;
            }
            var piece = this.board[i];
            var difference = i - square;
            var index = difference + 119;
            if (this.ATTACKS[index] & (1 << this.SHIFTS[piece.type])) {
                if (piece.type === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].PAWN) {
                    if (difference > 0) {
                        if (piece.color === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].WHITE) {
                            return true;
                        }
                    }
                    else {
                        if (piece.color === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].BLACK) {
                            return true;
                        }
                    }
                    continue;
                }
                /* if the piece is a knight or a king */
                if (piece.type === 'n' || piece.type === 'k') {
                    return true;
                }
                var offset = this.RAYS[index];
                var j = i + offset;
                var blocked = false;
                while (j !== square) {
                    if (this.board[j] !== undefined) {
                        blocked = true;
                        break;
                    }
                    j += offset;
                }
                if (!blocked) {
                    return true;
                }
            }
        }
        return false;
    };
    Chess.prototype.king_attacked = function (color) {
        return this.attacked(this.swap_color(color), this.kings[color]);
    };
    Chess.prototype.in_check = function () {
        return this.king_attacked(this.turn);
    };
    Chess.prototype.in_checkmate = function () {
        return this.in_check() && this.generate_moves().length === 0;
    };
    Chess.prototype.in_stalemate = function () {
        return !this.in_check() && this.generate_moves().length === 0;
    };
    Chess.prototype.insufficient_material = function () {
        var pieces = {};
        var bishops = [];
        var num_pieces = 0;
        var sq_color = 0;
        for (var i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            sq_color = (sq_color + 1) % 2;
            if (i & 0x88) {
                i += 7;
                continue;
            }
            var piece = this.board[i];
            if (piece) {
                pieces[piece.type] = (piece.type in pieces) ?
                    pieces[piece.type] + 1 : 1;
                if (piece.type === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].BISHOP) {
                    bishops.push(sq_color);
                }
                num_pieces++;
            }
        }
        /* k vs. k */
        if (num_pieces === 2) {
            return true;
        }
        else if (num_pieces === 3 && (pieces[_chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].BISHOP] === 1 ||
            pieces[_chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].KNIGHT] === 1)) {
            return true;
        }
        else if (num_pieces === pieces[_chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].BISHOP] + 2) {
            var sum = 0;
            var len = bishops.length;
            for (var i = 0; i < len; i++) {
                sum += bishops[i];
            }
            if (sum === 0 || sum === len) {
                return true;
            }
        }
        return false;
    };
    Chess.prototype.in_threefold_repetition = function () {
        /* TODO: while this function is fine for casual use, a better
         * implementation would use a Zobrist key (instead of FEN). the
         * Zobrist key would be maintained in the make_move/undo_move functions,
         * avoiding the costly that we do below.
         */
        var moves = [];
        var positions = {};
        var repetition = false;
        while (true) {
            var move = this.undo_move();
            if (!move) {
                break;
            }
            moves.push(move);
        }
        while (true) {
            /* remove the last two fields in the FEN string, they're not needed
             * when checking for draw by rep */
            var fen = this.generate_fen().split(' ').slice(0, 4).join(' ');
            /* has the position occurred three or move times */
            positions[fen] = (fen in positions) ? positions[fen] + 1 : 1;
            if (positions[fen] >= 3) {
                repetition = true;
            }
            if (!moves.length) {
                break;
            }
            this.make_move(moves.pop());
        }
        return repetition;
    };
    Chess.prototype.push = function (move) {
        this.history.push({
            move: move,
            kings: { b: this.kings.b, w: this.kings.w },
            turn: this.turn,
            castling: { b: this.castling.b, w: this.castling.w },
            ep_square: this.ep_square,
            half_moves: this.half_moves,
            move_number: this.move_number
        });
    };
    Chess.prototype.make_move = function (move) {
        var us = this.turn;
        var them = this.swap_color(us);
        this.push(move);
        this.board[move.to] = this.board[move.from];
        this.board[move.from] = undefined;
        /* if ep capture, remove the captured pawn */
        if (move.flags & this.BITS.EP_CAPTURE) {
            if (this.turn === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].BLACK) {
                this.board[move.to - 16] = undefined;
            }
            else {
                this.board[move.to + 16] = undefined;
            }
        }
        /* if pawn promotion, replace with new piece */
        if (move.flags & this.BITS.PROMOTION) {
            this.board[move.to] = { type: move.promotion, color: us };
        }
        /* if we moved the king */
        if (this.board[move.to].type === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].KING) {
            this.kings[this.board[move.to].color] = move.to;
            /* if we castled, move the rook next to the king */
            if (move.flags & this.BITS.KSIDE_CASTLE) {
                var castling_to = move.to - 1;
                var castling_from = move.to + 1;
                this.board[castling_to] = this.board[castling_from];
                this.board[castling_from] = undefined;
            }
            else if (move.flags & this.BITS.QSIDE_CASTLE) {
                var castling_to2 = move.to + 1;
                var castling_from2 = move.to - 2;
                this.board[castling_to2] = this.board[castling_from2];
                this.board[castling_from2] = undefined;
            }
            /* turn off castling */
            this.castling[us] = '';
        }
        /* turn off castling if we move a rook */
        if (this.castling[us]) {
            for (var i = 0, len = this.ROOKS[us].length; i < len; i++) {
                if (move.from === this.ROOKS[us][i].square &&
                    this.castling[us] & this.ROOKS[us][i].flag) {
                    this.castling[us] ^= this.ROOKS[us][i].flag;
                    break;
                }
            }
        }
        /* turn off castling if we capture a rook */
        if (this.castling[them]) {
            for (var i = 0, len = this.ROOKS[them].length; i < len; i++) {
                if (move.to === this.ROOKS[them][i].square &&
                    this.castling[them] & this.ROOKS[them][i].flag) {
                    this.castling[them] ^= this.ROOKS[them][i].flag;
                    break;
                }
            }
        }
        /* if big pawn move, update the en passant square */
        if (move.flags & this.BITS.BIG_PAWN) {
            if (this.turn === 'b') {
                this.ep_square = move.to - 16;
            }
            else {
                this.ep_square = move.to + 16;
            }
        }
        else {
            this.ep_square = this.EMPTY;
        }
        /* reset the 50 move counter if a pawn is moved or a piece is captured */
        if (move.piece === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].PAWN) {
            this.half_moves = 0;
        }
        else if (move.flags & (this.BITS.CAPTURE | this.BITS.EP_CAPTURE)) {
            this.half_moves = 0;
        }
        else {
            this.half_moves++;
        }
        if (this.turn === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].BLACK) {
            this.move_number++;
        }
        this.turn = this.swap_color(this.turn);
    };
    Chess.prototype.undo_move = function () {
        var old = this.history.pop();
        if (old === undefined) {
            return undefined;
        }
        var move = old.move;
        this.kings = old.kings;
        this.turn = old.turn;
        this.castling = old.castling;
        this.ep_square = old.ep_square;
        this.half_moves = old.half_moves;
        this.move_number = old.move_number;
        var us = this.turn;
        var them = this.swap_color(this.turn);
        this.board[move.from] = this.board[move.to];
        this.board[move.from].type = move.piece; // to undo any promotions
        this.board[move.to] = undefined;
        if (move.flags & this.BITS.CAPTURE) {
            this.board[move.to] = { type: move.captured, color: them };
        }
        else if (move.flags & this.BITS.EP_CAPTURE) {
            var index = void 0;
            if (us === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].BLACK) {
                index = move.to - 16;
            }
            else {
                index = move.to + 16;
            }
            this.board[index] = { type: _chess_enums__WEBPACK_IMPORTED_MODULE_0__["PieceType"].PAWN, color: them };
        }
        if (move.flags & (this.BITS.KSIDE_CASTLE | this.BITS.QSIDE_CASTLE)) {
            var castling_to = void 0, castling_from = void 0;
            if (move.flags & this.BITS.KSIDE_CASTLE) {
                castling_to = move.to + 1;
                castling_from = move.to - 1;
            }
            else if (move.flags & this.BITS.QSIDE_CASTLE) {
                castling_to = move.to - 2;
                castling_from = move.to + 1;
            }
            this.board[castling_to] = this.board[castling_from];
            this.board[castling_from] = undefined;
        }
        return move;
    };
    /* this function is used to uniquely identify ambiguous moves */
    Chess.prototype.get_disambiguator = function (move, sloppy) {
        var moves = this.generate_moves({ legal: !sloppy });
        var from = move.from;
        var to = move.to;
        var piece = move.piece;
        var ambiguities = 0;
        var same_rank = 0;
        var same_file = 0;
        for (var i = 0, len = moves.length; i < len; i++) {
            var ambig_from = moves[i].from;
            var ambig_to = moves[i].to;
            var ambig_piece = moves[i].piece;
            /* if a move of the same piece type ends on the same to square, we'll
             * need to add a disambiguator to the algebraic notation
             */
            if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
                ambiguities++;
                if (this.rank(from) === this.rank(ambig_from)) {
                    same_rank++;
                }
                if (this.file(from) === this.file(ambig_from)) {
                    same_file++;
                }
            }
        }
        if (ambiguities > 0) {
            /* if there exists a similar moving piece on the same rank and file as
             * the move in question, use the square as the disambiguator
             */
            if (same_rank > 0 && same_file > 0) {
                return this.algebraic(from);
            }
            else if (same_file > 0) {
                return this.algebraic(from).charAt(1);
            }
            else {
                return this.algebraic(from).charAt(0);
            }
        }
        return '';
    };
    Chess.prototype.ascii = function () {
        var s = '   +------------------------+\n';
        for (var i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            /* display the rank */
            if (this.file(i) === 0) {
                s += ' ' + '87654321'[this.rank(i)] + ' |';
            }
            /* empty piece */
            if (this.board[i] === undefined) {
                s += ' . ';
            }
            else {
                var piece = this.board[i].type;
                var color = this.board[i].color;
                var symbol = (color === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].WHITE) ?
                    piece.toUpperCase() : piece.toLowerCase();
                s += ' ' + symbol + ' ';
            }
            if ((i + 1) & 0x88) {
                s += '|\n';
                i += 8;
            }
        }
        s += '   +------------------------+\n';
        s += '     a  b  c  d  e  f  g  h\n';
        return s;
    };
    // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
    Chess.prototype.move_from_san = function (move, sloppy) {
        // strip off any move decorations: e.g Nf3+?!
        var clean_move = this.stripped_san(move);
        // if we're using the sloppy parser run a regex to grab piece, to, and from
        // this should parse invalid SAN like: Pe2-e4, Rc1c4, Qf3xf7
        var matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
        var piece;
        var from;
        var to;
        var promotion;
        if (sloppy) {
            if (matches) {
                piece = matches[1];
                from = matches[2];
                to = matches[3];
                promotion = matches[4];
            }
        }
        var moves = this.generate_moves();
        for (var i = 0, len = moves.length; i < len; i++) {
            // try the strict parser first, then the sloppy parser if requested
            // by the user
            if ((clean_move === this.stripped_san(this.move_to_san(moves[i]))) ||
                (sloppy && clean_move === this.stripped_san(this.move_to_san(moves[i], true)))) {
                return moves[i];
            }
            else {
                if (matches &&
                    (!piece || piece.toLowerCase() === moves[i].piece) &&
                    this.SQUARES[from] === moves[i].from &&
                    this.SQUARES[to] === moves[i].to &&
                    (!promotion || promotion.toLowerCase() === moves[i].promotion)) {
                    return moves[i];
                }
            }
        }
        return undefined;
    };
    /*****************************************************************************
     * UTILITY FUNCTIONS
     ****************************************************************************/
    Chess.prototype.rank = function (i) {
        return i >> 4;
    };
    Chess.prototype.file = function (i) {
        return i & 15;
    };
    Chess.prototype.algebraic = function (i) {
        var f = this.file(i), r = this.rank(i);
        return 'abcdefgh'.substring(f, f + 1) + '87654321'.substring(r, r + 1);
    };
    Chess.prototype.swap_color = function (c) {
        return c === _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].WHITE ? _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].BLACK : _chess_enums__WEBPACK_IMPORTED_MODULE_0__["Colour"].WHITE;
    };
    Chess.prototype.is_digit = function (c) {
        return '0123456789'.indexOf(c) !== -1;
    };
    /* pretty = external move object */
    Chess.prototype.make_pretty = function (ugly_move) {
        var move = this.clone(ugly_move);
        move.san = this.move_to_san(move, false);
        move.to = this.algebraic(move.to);
        move.from = this.algebraic(move.from);
        var flags = '';
        for (var flag in this.BITS) {
            if (this.BITS[flag] & move.flags) {
                flags += this.FLAGS[flag];
            }
        }
        move.flags = flags;
        return move;
    };
    Chess.prototype.clone = function (obj) {
        var dupe = (obj instanceof Array) ? [] : {};
        for (var property in obj) {
            if (typeof property === 'object') {
                dupe[property] = this.clone(obj[property]);
            }
            else {
                dupe[property] = obj[property];
            }
        }
        return dupe;
    };
    Chess.prototype.trim = function (str) {
        return str.replace(/^\s+|\s+$/g, '');
    };
    /*****************************************************************************
     * DEBUGGING UTILITIES
     ****************************************************************************/
    Chess.prototype.perft = function (depth) {
        var moves = this.generate_moves({ legal: false });
        var nodes = 0;
        var color = this.turn;
        for (var i = 0, len = moves.length; i < len; i++) {
            this.make_move(moves[i]);
            if (!this.king_attacked(color)) {
                if (depth - 1 > 0) {
                    var child_nodes = this.perft(depth - 1);
                    nodes += child_nodes;
                }
                else {
                    nodes++;
                }
            }
            this.undo_move();
        }
        return nodes;
    };
    Chess.prototype.getSquares = function () {
        /* from the ECMA-262 spec (section 12.6.4):
         * "The mechanics of enumerating the properties ... is
         * implementation dependent"
         * so: for (var sq in SQUARES) { keys.push(sq); } might not be
         * ordered correctly
         */
        var keys = [];
        for (var i = this.SQUARES.a8; i <= this.SQUARES.h1; i++) {
            if (i & 0x88) {
                i += 7;
                continue;
            }
            keys.push(this.algebraic(i));
        }
        return keys;
    };
    Chess.prototype.getMoves = function (options) {
        /* The internal representation of a chess move is in 0x88 format, and
                 * not meant to be human-readable.  The code below converts the 0x88
                 * square coordinates to algebraic coordinates.  It also prunes an
                 * unnecessary move keys resulting from a verbose call.
                 */
        var ugly_moves = this.generate_moves(options);
        var moves = [];
        for (var i = 0, len = ugly_moves.length; i < len; i++) {
            /* does the user want a full move object (most likely not), or just
             * SAN
             */
            if (typeof options !== 'undefined' && 'verbose' in options &&
                options.verbose) {
                moves.push(this.make_pretty(ugly_moves[i]));
            }
            else {
                moves.push(this.move_to_san(ugly_moves[i], false));
            }
        }
        return moves;
    };
    Object.defineProperty(Chess.prototype, "in_draw", {
        get: function () {
            return this.half_moves >= 100 ||
                this.in_stalemate() ||
                this.insufficient_material() ||
                this.in_threefold_repetition();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chess.prototype, "game_over", {
        get: function () {
            return this.half_moves >= 100 ||
                this.in_checkmate() ||
                this.in_stalemate() ||
                this.insufficient_material() ||
                this.in_threefold_repetition();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chess.prototype, "fen", {
        get: function () {
            return this.generate_fen();
        },
        enumerable: false,
        configurable: true
    });
    Chess.prototype.getPgn = function (options) {
        /* using the specification from http://www.chessclub.com/help/PGN-spec
                 * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
                 */
        var newline = (typeof options === 'object' &&
            typeof options.newline_char === 'string') ?
            options.newline_char : '\n';
        var max_width = (typeof options === 'object' &&
            typeof options.max_width === 'number') ?
            options.max_width : 0;
        var result = [];
        var header_exists = false;
        /* add the PGN header headerrmation */
        for (var i in this.header) {
            /* TODO: order of enumerated properties in header object is not
             * guaranteed, see ECMA-262 spec (section 12.6.4)
             */
            result.push('[' + i + ' \"' + this.header[i] + '\"]' + newline);
            header_exists = true;
        }
        if (header_exists && history.length) {
            result.push(newline);
        }
        /* pop all of history onto reversed_history */
        var reversed_history = [];
        while (history.length > 0) {
            reversed_history.push(this.undo_move());
        }
        var moves = [];
        var move_string = '';
        /* build the list of moves.  a move_string looks like: "3. e3 e6" */
        while (reversed_history.length > 0) {
            var move = reversed_history.pop();
            /* if the position started with black to move, start PGN with 1. ... */
            if (!history.length && move.color === 'b') {
                move_string = this.move_number + '. ...';
            }
            else if (move.color === 'w') {
                /* store the previous generated move_string if we have one */
                if (move_string.length) {
                    moves.push(move_string);
                }
                move_string = this.move_number + '.';
            }
            move_string = move_string + ' ' + this.move_to_san(move, false);
            this.make_move(move);
        }
        /* are there any other leftover moves? */
        if (move_string.length) {
            moves.push(move_string);
        }
        /* is there a result? */
        if (typeof this.header.Result !== 'undefined') {
            moves.push(this.header.Result);
        }
        /* history should be back to what is was before we started generating PGN,
         * so join together moves
         */
        if (max_width === 0) {
            return result.join('') + moves.join(' ');
        }
        /* wrap the PGN output at max_width */
        var current_width = 0;
        for (var i2 = 0; i2 < moves.length; i2++) {
            /* if the current move will push past max_width */
            if (current_width + moves[i2].length > max_width && i2 !== 0) {
                /* don't end the line with whitespace */
                if (result[result.length - 1] === ' ') {
                    result.pop();
                }
                result.push(newline);
                current_width = 0;
            }
            else if (i2 !== 0) {
                result.push(' ');
                current_width++;
            }
            result.push(moves[i2]);
            current_width += moves[i2].length;
        }
        return result.join('');
    };
    Chess.prototype.load_pgn = function (pgn, options) {
        // allow the user to specify the sloppy move parser to work around over
        // disambiguation bugs in Fritz and Chessbase
        var sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
            options.sloppy : false;
        function mask(str) {
            return str.replace(/\\/g, '\\');
        }
        function has_keys(object) {
            for (var key in object) {
                return true;
            }
            return false;
        }
        function parse_pgn_header(header, hOptions) {
            var hNewline_char = (typeof hOptions === 'object' &&
                typeof hOptions.newline_char === 'string') ?
                hOptions.newline_char : '\r?\n';
            var header_obj = {};
            var lHeaders = header.split(new RegExp(mask(hNewline_char)));
            var key = '';
            var value = '';
            for (var i = 0; i < lHeaders.length; i++) {
                key = lHeaders[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1');
                value = lHeaders[i].replace(/^\[[A-Za-z]+\s"(.*)"\]$/, '$1');
                if (this.trim(key).length > 0) {
                    header_obj[key] = value;
                }
            }
            return header_obj;
        }
        var newline_char = (typeof options === 'object' &&
            typeof options.newline_char === 'string') ?
            options.newline_char : '\r?\n';
        var regex = new RegExp('^(\\[(.|' + mask(newline_char) + ')*\\])' +
            '(' + mask(newline_char) + ')*' +
            '1.(' + mask(newline_char) + '|.)*$', 'g');
        /* get header part of the PGN file */
        var header_string = pgn.replace(regex, '$1');
        /* no info part given, begins with moves */
        if (header_string[0] !== '[') {
            header_string = '';
        }
        this.reset();
        /* parse PGN header */
        var headers = parse_pgn_header(header_string, options);
        for (var key in headers) {
            this.set_header([key, headers[key]]);
        }
        /* load the starting position indicated by [Setup '1'] and
        * [FEN position] */
        if (headers['SetUp'] === '1') {
            if (!(('FEN' in headers) && this.load(headers['FEN']))) {
                return false;
            }
        }
        /* delete header to get the moves */
        var ms = pgn.replace(header_string, '').replace(new RegExp(mask(newline_char), 'g'), ' ');
        /* delete comments */
        ms = ms.replace(/(\{[^}]+\})+?/g, '');
        /* delete recursive annotation variations */
        var rav_regex = /(\([^\(\)]+\))+?/g;
        while (rav_regex.test(ms)) {
            ms = ms.replace(rav_regex, '');
        }
        /* delete move numbers */
        ms = ms.replace(/\d+\.(\.\.)?/g, '');
        /* delete ... indicating black to move */
        ms = ms.replace(/\.\.\./g, '');
        /* delete numeric annotation glyphs */
        ms = ms.replace(/\$\d+/g, '');
        /* trim and get array of moves */
        var moves = this.trim(ms).split(new RegExp(/\s+/));
        /* delete empty entries */
        moves = moves.join(',').replace(/,,+/g, ',').split(',');
        var move = '';
        for (var half_move = 0; half_move < moves.length - 1; half_move++) {
            move = this.move_from_san(moves[half_move], sloppy);
            /* move not possible! (don't clear the board to examine to show the
             * latest valid position)
             */
            if (move === undefined) {
                return false;
            }
            else {
                this.make_move(move);
            }
        }
        /* examine last move */
        move = moves[moves.length - 1];
        if (this.POSSIBLE_RESULTS.indexOf(move) > -1) {
            if (has_keys(this.header) && typeof this.header.Result === 'undefined') {
                this.set_header(['Result', move]);
            }
        }
        else {
            move = this.move_from_san(move, sloppy);
            if (move === undefined) {
                return false;
            }
            else {
                this.make_move(move);
            }
        }
        return true;
    };
    Chess.prototype.getHeader = function () {
        return this.set_header(arguments);
    };
    Chess.prototype.move = function (move, options) {
        /* The move function can be called with in the following parameters:
                 *
                 * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
                 *
                 * .move({ from: 'h7', <- where the 'move' is a move object (additional
                 *         to :'h8',      fields are ignored)
                 *         promotion: 'q',
                 *      })
                 */
        // allow the user to specify the sloppy move parser to work around over
        // disambiguation bugs in Fritz and Chessbase
        var sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
            options.sloppy : false;
        var move_obj;
        if (typeof move === 'string') {
            move_obj = this.move_from_san(move, sloppy);
        }
        else if (typeof move === 'object') {
            var moves = this.generate_moves();
            /* convert the pretty move object to an ugly move object */
            for (var i = 0, len = moves.length; i < len; i++) {
                if (move.from === this.algebraic(moves[i].from) &&
                    move.to === this.algebraic(moves[i].to) &&
                    (!('promotion' in moves[i]) ||
                        move.promotion === moves[i].promotion)) {
                    move_obj = moves[i];
                    break;
                }
            }
        }
        /* failed to find move */
        if (!move_obj) {
            return undefined;
        }
        /* need to make a copy of move because we can't generate SAN after the
         * move is made
         */
        var pretty_move = this.make_pretty(move_obj);
        this.make_move(move_obj);
        this.onChange.emit();
        return pretty_move;
    };
    Chess.prototype.undo = function () {
        var move = this.undo_move();
        this.onChange.emit();
        return (move) ? this.make_pretty(move) : undefined;
    };
    Chess.prototype.square_color = function (square) {
        if (square in this.SQUARES) {
            var sq_0x88 = this.SQUARES[square];
            return ((this.rank(sq_0x88) + this.file(sq_0x88)) % 2 === 0) ? 'light' : 'dark';
        }
        return undefined;
    };
    Chess.prototype.getHistory = function (options) {
        var reversed_history = [];
        var move_history = [];
        var verbose = (typeof options !== 'undefined' && 'verbose' in options &&
            options.verbose);
        while (history.length > 0) {
            reversed_history.push(this.undo_move());
        }
        while (reversed_history.length > 0) {
            var move = reversed_history.pop();
            if (verbose) {
                move_history.push(this.make_pretty(move));
            }
            else {
                move_history.push(this.move_to_san(move));
            }
            this.make_move(move);
        }
        return move_history;
    };
    return Chess;
}()); // End of Chess class

var FenValidationResult = /** @class */ (function () {
    function FenValidationResult() {
    }
    return FenValidationResult;
}());

var ChessPiece = /** @class */ (function () {
    function ChessPiece() {
    }
    return ChessPiece;
}());

// enum Colour {
//     WHITE = 'w',
//     BLACK = 'b'
// }
var Castling = /** @class */ (function () {
    function Castling() {
    }
    return Castling;
}());


/***/ }),

/***/ "Ooy2":
/*!******************************************!*\
  !*** ./src/app/shared-classes/record.ts ***!
  \******************************************/
/*! exports provided: OutputColour, Record */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputColour", function() { return OutputColour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Record", function() { return Record; });
// A record taken from the Google Docs spreadsheet
// that records previous successful attempts and 
// when the next attempt is due.
// It is used by the record service and by the trainer.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var OutputColour;
(function (OutputColour) {
    OutputColour["red"] = "#e20f0f";
    OutputColour["green"] = "#1daf07";
    OutputColour["blue"] = "#b7d7d9";
})(OutputColour || (OutputColour = {}));
var Record = /** @class */ (function () {
    function Record(name, lastSuccess, next, lastFail) {
        this.name = name;
        // name: string; // name of the sequence
        // lastSuccess: Date; // date and time last completed successfully
        // next: Date; // due date for next practise
        // lastFail: Date; // date and time last completed with errors
        this.incrementFactor = 1.5;
        this._lastSuccess = new Date();
        this._next = new Date();
        this._lastFail = new Date();
        this.init(lastSuccess, next, lastFail).then(function () {
            // Initialised
        });
    }
    Record.prototype.init = function (lastSuccess, next, lastFail) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.setLastSuccess(lastSuccess)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.setNext(next)];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, this.setLastFail(lastFail)];
                            case 3:
                                _a.sent();
                                return [4 /*yield*/, this.setColour()];
                            case 4:
                                _a.sent();
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    Record.prototype.setLastSuccess = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this._lastSuccess = value;
                                _a = this;
                                return [4 /*yield*/, this.dateToString(value)];
                            case 1:
                                _a.lastSS = _b.sent();
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    Object.defineProperty(Record.prototype, "lastSuccess", {
        get: function () {
            return this._lastSuccess;
        },
        enumerable: false,
        configurable: true
    });
    Record.prototype.setLastFail = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this._lastFail = value;
                                _a = this;
                                return [4 /*yield*/, this.dateToString(value)];
                            case 1:
                                _a.lastFS = _b.sent();
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    Object.defineProperty(Record.prototype, "lastFail", {
        get: function () {
            return this._lastFail;
        },
        enumerable: false,
        configurable: true
    });
    Record.prototype.setNext = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this._next = value;
                                _a = this;
                                return [4 /*yield*/, this.dateToString(value)];
                            case 1:
                                _a.nextS = _b.sent();
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    Object.defineProperty(Record.prototype, "next", {
        get: function () {
            return this._next;
        },
        enumerable: false,
        configurable: true
    });
    Record.prototype.setColour = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var now;
                    return __generator(this, function (_a) {
                        now = new Date();
                        if (this.next < now) {
                            this.colour = OutputColour.red;
                        }
                        else {
                            this.colour = OutputColour.green;
                        }
                        resolve();
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    // Called when a mistake is made doing a sequence
    Record.prototype.mistake = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.colour = OutputColour.red;
                this.setNext(new Date());
                this.setLastFail(new Date());
                return [2 /*return*/];
            });
        });
    };
    Record.prototype.success = function () {
        this.colour = OutputColour.green;
        var gap = (this.next.getTime() - this.lastSuccess.getTime()) * this.incrementFactor;
        var oneDay = 1000 * 60 * 60 * 24;
        var now = new Date();
        if (gap < oneDay
            || (this.lastFail.getTime() > this.lastSuccess.getTime()))
            gap = oneDay;
        this.setLastSuccess(new Date());
        this.setNext(new Date(now.getTime() + gap));
    };
    Record.prototype.dateToString = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var year, month, day, hour, minute;
                    return __generator(this, function (_a) {
                        year = date.getFullYear().toString();
                        month = (date.getMonth() + 1).toString();
                        if (month.length === 1)
                            month = "0" + month;
                        day = date.getDate().toString();
                        if (day.length === 1)
                            day = "0" + day;
                        hour = date.getHours().toString();
                        if (hour.length === 1)
                            hour = "0" + hour;
                        minute = date.getMinutes().toString();
                        if (minute.length === 1)
                            minute = "0" + minute;
                        resolve(year + "-" + month + "-" + day + " " + hour
                            + ":" + minute);
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    return Record;
}());



/***/ }),

/***/ "PumO":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chessboard/chessboard.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg (mousemove)=\"mouseMove($event)\"\n(touchmove)=\"touchMove($event)\"\n(touchend)=\"touchEnd($event)\"\n(mouseup)=\"mouseUp($event)\"\n[attr.viewBox]=\"viewBox\" [attr.width]=\"wholeSize\"\n  [attr.height]=\"wholeSize\" #svgRegion>\n  <g *ngFor=\"let square of squaresMap | keyvalue\" \n  (mousedown)=\"square.value.mouseDown($event)\" \n  (touchstart)=\"square.value.touchStart($event)\"\n  (click)=\"square.value.squareClicked()\"\n  >\n    <rect [attr.class]=\"square.value.cssClass\" [attr.width]=\"square.value.parent.squareSize\" [attr.height]=\"square.value.parent.squareSize\"\n      [attr.x]=\"square.value.squareXOffset\" [attr.y]=\"square.value.squareYOffset\"\n      >\n    </rect>\n  </g>\n  <g *ngFor=\"let square of squaresMap | keyvalue\" \n  class=\"draggable\" (mousedown)=\"square.value.mouseDown($event)\" (touchstart)=\"square.value.touchStart($event)\"\n    [attr.transform]=\"square.value.transform\">\n    <path *ngFor=\"let svgPath of square.value.svgData.paths\" \n    [attr.d]=\"svgPath.d\" [attr.class]=\"svgPath.className\"\n      [attr.transform]=\"svgPath.transform\" />\n    <circle *ngFor=\"let circle of square.value.svgData.circles\" [attr.cx]=\"circle.cx\" [attr.cy]=\"circle.cy\" [attr.r]=\"circle.r\"\n      [attr.classname]=\"circle.className\" />\n  </g>\n\n</svg>\n<br>\n<button mat-icon-button matTooltip=\"Show promotion dialog\" (click)=\"getPromotionPiece()\">\n  <mat-icon>skip_next\n  </mat-icon>\n</button>\n");

/***/ }),

/***/ "Rmpb":
/*!***********************************************!*\
  !*** ./src/app/trainer/trainer.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bullets {\n    list-style-type: none;\n    display: inline-block; \n    font-weight: bold;\n    padding-left: 5px;\n    word-break: break-all;\n}\n\n.floating-box {\n    margin: 1px;\n    display: inline-block; \n    vertical-align: top;\n}\n\n.trainerToolbar {\n    color: black;\n    display: inline-block;\n    background-color: white;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhaW5lci90cmFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3RyYWluZXIvdHJhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1bGxldHMge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmZsb2F0aW5nLWJveCB7XG4gICAgbWFyZ2luOiAxcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4udHJhaW5lclRvb2xiYXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuIl19 */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
        this.isSignedIn = false;
        this.googleDisplay = 'block';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.ctorParameters = function () { return []; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.component */ "zkdS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_google_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/google-auth.service */ "36VY");
/* harmony import */ var _services_record_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/record.service */ "oq9T");
/* harmony import */ var _services_alasql_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/alasql.service */ "gjcs");
/* harmony import */ var _services_js_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/js-loader.service */ "55tC");
/* harmony import */ var _services_spreadsheet_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/spreadsheet.service */ "8qoT");
/* harmony import */ var _trainer_trainer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trainer/trainer.component */ "7VxS");
/* harmony import */ var _sequences_sequences_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sequences/sequences.component */ "M22c");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _trainer_trainer_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./trainer/trainer-routing.module */ "0elY");
/* harmony import */ var _sequences_sequences_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sequences/sequences-routing.module */ "psuH");
/* harmony import */ var _about_about_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about-routing.module */ "+wPt");
/* harmony import */ var _chessboard_chessboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chessboard/chessboard.component */ "nQ69");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");
/* harmony import */ var _builder_builder_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./builder/builder-routing.module */ "4bdj");
/* harmony import */ var _builder_builder_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./builder/builder.component */ "oXLq");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_28__);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _trainer_trainer_routing_module__WEBPACK_IMPORTED_MODULE_14__["TrainerRoutingModule"],
                _sequences_sequences_routing_module__WEBPACK_IMPORTED_MODULE_15__["SequencesRoutingModule"],
                _about_about_routing_module__WEBPACK_IMPORTED_MODULE_16__["AboutRoutingModule"],
                _builder_builder_routing_module__WEBPACK_IMPORTED_MODULE_20__["BuilderRoutingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _trainer_trainer_component__WEBPACK_IMPORTED_MODULE_10__["TrainerComponent"],
                _sequences_sequences_component__WEBPACK_IMPORTED_MODULE_11__["SequencesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
                _chessboard_chessboard_component__WEBPACK_IMPORTED_MODULE_17__["ChessboardComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
                _builder_builder_component__WEBPACK_IMPORTED_MODULE_21__["BuilderComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            providers: [
                _services_js_loader_service__WEBPACK_IMPORTED_MODULE_8__["JsLoaderService"],
                _services_google_auth_service__WEBPACK_IMPORTED_MODULE_5__["GoogleAuthService"],
                _services_data_service__WEBPACK_IMPORTED_MODULE_19__["DataService"],
                _services_alasql_service__WEBPACK_IMPORTED_MODULE_7__["AlaSql"],
                _services_record_service__WEBPACK_IMPORTED_MODULE_6__["RecordService"],
                _services_spreadsheet_service__WEBPACK_IMPORTED_MODULE_9__["SpreadsheetService"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ce1d":
/*!********************************************!*\
  !*** ./src/app/chessboard/chess-square.ts ***!
  \********************************************/
/*! exports provided: ChessSquare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessSquare", function() { return ChessSquare; });
/* harmony import */ var _svg_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg-data */ "wcbe");
/* harmony import */ var _chess_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chess-enums */ "iLu0");
/*
A ChessSquare object represents a single square on the chessboard.
It keeps track of what piece is on it.
*/


// import { EventEmitter } from '@angular/core';
var ChessSquare = /** @class */ (function () {
    // coordinate must be in form a1
    function ChessSquare(coordinate, parent) {
        var _this = this;
        this.coordinate = coordinate;
        this.parent = parent;
        this.pieceColour = _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].WHITE;
        this.svgData = new _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgData"]();
        // Listen for a change in screen size
        this.parent.resize.subscribe(function () {
            _this.adjustPosition();
        });
        this.calculateRowColumn();
        this.adjustPosition();
    }
    Object.defineProperty(ChessSquare.prototype, "pieceXOffset", {
        // Where the piece starts in the svg region
        get: function () {
            return this.squareXOffset / this.scale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChessSquare.prototype, "pieceYOffset", {
        get: function () {
            return this.squareYOffset / this.scale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChessSquare.prototype, "squareXOffset", {
        // Where the square starts in the svg region
        get: function () {
            return this.column * this.parent.squareSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChessSquare.prototype, "squareYOffset", {
        get: function () {
            return (8 - this.row) * this.parent.squareSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChessSquare.prototype, "cssClass", {
        get: function () {
            return 'chess-square-'
                + ((this.squareColour === _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].WHITE) ? 'white' : 'black');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChessSquare.prototype, "pieceType", {
        get: function () {
            return this._pieceType;
        },
        set: function (value) {
            this.svgData = new _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgData"]();
            var sd = new _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgData"]();
            switch (value) {
                case _chess_enums__WEBPACK_IMPORTED_MODULE_1__["PieceType"].PAWN:
                    if (this.pieceColour === _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].BLACK) {
                        sd = _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgPieces"].blackPawn;
                    }
                    else {
                        sd = _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgPieces"].whitePawn;
                    }
                    break;
                case _chess_enums__WEBPACK_IMPORTED_MODULE_1__["PieceType"].KING:
                    if (this.pieceColour === _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].BLACK) {
                        sd = _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgPieces"].blackKing;
                    }
                    else {
                        sd = _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgPieces"].whiteKing;
                    }
                    break;
                case _chess_enums__WEBPACK_IMPORTED_MODULE_1__["PieceType"].QUEEN:
                    if (this.pieceColour === _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].BLACK) {
                        sd = _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgPieces"].blackQueen;
                    }
                    else {
                        sd = _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgPieces"].whiteQueen;
                    }
                    break;
                case _chess_enums__WEBPACK_IMPORTED_MODULE_1__["PieceType"].ROOK:
                    if (this.pieceColour === _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].BLACK) {
                        sd = _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgPieces"].blackRook;
                    }
                    else {
                        sd = _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgPieces"].whiteRook;
                    }
                    break;
                case _chess_enums__WEBPACK_IMPORTED_MODULE_1__["PieceType"].BISHOP:
                    if (this.pieceColour === _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].BLACK) {
                        sd = _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgPieces"].blackBishop;
                    }
                    else {
                        sd = _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgPieces"].whiteBishop;
                    }
                    break;
                case _chess_enums__WEBPACK_IMPORTED_MODULE_1__["PieceType"].KNIGHT:
                    if (this.pieceColour === _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].BLACK) {
                        sd = _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgPieces"].blackKnight;
                    }
                    else {
                        sd = _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgPieces"].whiteKnight;
                    }
                    break;
            }
            // copy the piece svg data to internal svgData variable
            for (var _i = 0, _a = sd.paths; _i < _a.length; _i++) {
                var sp = _a[_i];
                var svp = new _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgPath"](sp.d, sp.className);
                svp.transform = sp.transform;
                this.svgData.paths.push(svp);
            }
            for (var _b = 0, _c = sd.circles; _b < _c.length; _b++) {
                var c = _c[_b];
                this.svgData.circles.push(new _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgCircle"](c.cx, c.cy, c.r, c.className));
            }
            this.adjustPosition();
            this._pieceType = value;
        },
        enumerable: false,
        configurable: true
    });
    ChessSquare.prototype.calculateRowColumn = function () {
        // Work out which vertical column (file) of the board the square is on (0 - 7)
        this.column = _chess_enums__WEBPACK_IMPORTED_MODULE_1__["files"].indexOf(this.coordinate[0]);
        if (this.parent.boardSide === _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].BLACK) {
            this.column = 7 - this.column;
        }
        // Work out which horizontal row of the board the the square is on (1 - 8)
        this.row = Number.parseInt(this.coordinate[1], 10);
        if (this.parent.boardSide === _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].BLACK) {
            this.row = 9 - this.row;
        }
        // console.log("coord: " + coordinate + ", column: " + this.column
        // + ", row:" + this.row);
    };
    ChessSquare.prototype.adjustPosition = function () {
        // Change the starting position to be in the right square.
        this.scale = this.parent.wholeSize / 400;
        this.transform = 'scale(' + this.scale.toString()
            + ',' + this.scale.toString() + ')';
        this.movePiece(this.pieceXOffset, this.pieceYOffset);
    };
    ChessSquare.prototype.init = function () {
        // work out whether it's a dark or light square
        if (this.isEven(this.column)) {
            if (this.isEven(this.row)) {
                this.squareColour = _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].WHITE;
            }
            else {
                this.squareColour = _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].BLACK;
            }
        }
        else {
            if (this.isEven(this.row)) {
                this.squareColour = _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].BLACK;
            }
            else {
                this.squareColour = _chess_enums__WEBPACK_IMPORTED_MODULE_1__["Colour"].WHITE;
            }
        }
    };
    ChessSquare.prototype.isEven = function (num) {
        return (num % 2) === 0;
    };
    ChessSquare.prototype.removePiece = function () {
        this.svgData = new _svg_data__WEBPACK_IMPORTED_MODULE_0__["SvgData"]();
        this._pieceType = undefined;
        // console.log("piece removed from " + this.coordinate);
    };
    // Moves the piece relative to its original position
    ChessSquare.prototype.movePiece = function (x, y) {
        // Adjust svg values for actual placement of the square
        // if (this.pieceColour === Colour.WHITE
        //     && this.pieceType === PieceType.BISHOP) {
        //     console.log("movePiece " + this.pieceColour
        //         + this.pieceType
        //         + " to client pos "
        //         + Math.round(
        //             this.parent.boardClientX
        //             + this.pieceXOffset
        //             + x) + "," 
        //         + Math.round(
        //             this.parent.boardClientY
        //             + this.pieceYOffset
        //             + y));
        // }
        for (var _i = 0, _a = this.svgData.paths; _i < _a.length; _i++) {
            var sp = _a[_i];
            sp.d = this.incrementDXY(sp.origD, x, y);
        }
        for (var _b = 0, _c = this.svgData.circles; _b < _c.length; _b++) {
            var c = _c[_b];
            c.cx = c.origCx + x;
            c.cy = c.origCy + y;
        }
    };
    ChessSquare.prototype.incrementDXY = function (d, x, y) {
        var ret = '';
        var inXNumber = false;
        var inYNumber = false;
        var coord = '';
        for (var i = 0; i < d.length; i++) {
            var char = d[i];
            if (char === 'A') {
                // Elliptical arc, only adjust the last set of coords
                // Move forward to the 5th space
                ret += char;
                var spaceCount = 0;
                while (spaceCount < 5) {
                    i++;
                    char = d[i];
                    ret += char;
                    if (char === ' ') {
                        spaceCount++;
                    }
                }
            }
            if (inXNumber) {
                if (char === ',') {
                    ret += (Number.parseFloat(coord)
                        + x).toString() + ',';
                    inXNumber = false;
                    inYNumber = true;
                    coord = '';
                }
                else {
                    coord += char;
                }
            }
            else if (inYNumber) {
                if (char === ' ') {
                    ret += (Number.parseFloat(coord)
                        + y).toString() + ' ';
                    inYNumber = false;
                    coord = '';
                }
                else {
                    coord += char;
                }
            }
            else if (isNaN(Number.parseInt(char, 10))) {
                ret += char;
            }
            else {
                inXNumber = true;
                coord = char;
            }
        }
        return ret;
    };
    // The mouseDown event is only activated for a chess piece, so
    // in effect it always signals the start of the move of a piece
    ChessSquare.prototype.mouseDown = function (eventD) {
        var _this = this;
        var initialClientX = eventD.clientX;
        var initialClientY = eventD.clientY;
        this.parent.movingByDrag = true;
        this.parent.movingFromByDrag = this;
        // subscribe to the move event from the parent
        var sub = this.parent.mouseMoveLocal.subscribe(function (eventM) {
            _this.movePiece(_this.pieceXOffset + (eventM.clientX - initialClientX) / _this.scale, _this.pieceYOffset + (eventM.clientY - initialClientY) / _this.scale);
        });
        // subscribe to the mouse up event
        var sub2 = this.parent.mouseUpLocal.subscribe(function (eventU) {
            // console.log("mouseUp local event received");
            sub.unsubscribe();
            sub2.unsubscribe();
        });
    };
    ChessSquare.prototype.touchStart = function (eventD) {
        var _this = this;
        eventD.preventDefault();
        var t = eventD.targetTouches[0];
        // console.log("touch pressed at client pos " + Math.round(t.clientX)
        // + "," + Math.round(t.clientY));
        // console.log("mouse pressed down for " + this.coordinate);
        var initialClientX = t.clientX;
        var initialClientY = t.clientY;
        this.parent.movingByDrag = true;
        this.parent.movingFromByDrag = this;
        // subscribe to the move event from the parent
        var sub = this.parent.touchMoveLocal
            .subscribe(function (eventM) {
            var t2;
            if (eventM.targetTouches.length > 0)
                t2 = eventM.targetTouches[0];
            else
                t2 = eventM.changedTouches[0];
            _this.movePiece(_this.pieceXOffset + (t2.clientX - initialClientX) / _this.scale, _this.pieceYOffset + (t2.clientY - initialClientY) / _this.scale);
        });
        // subscribe to the touch end event
        var sub2 = this.parent.touchEndLocal.subscribe(function (eventU) {
            sub.unsubscribe();
            sub2.unsubscribe();
        });
    };
    ChessSquare.prototype.squareClicked = function () {
        if (this.pieceType === undefined) {
            if (this.parent.showProm) {
                console.log("squareClicked " + this.coordinate);
            }
            else if (this.parent.movingByClick) {
                this.parent.endMoveByClick(this);
            }
        }
    };
    ChessSquare.prototype.pieceClicked = function () {
        if (this.parent.showProm) {
            // console.log("pieceClicked " + this.coordinate);
            this.parent.promPieceSelected.emit(this.pieceType);
        }
        else if (this.parent.movingByClick) {
            this.parent.endMoveByClick(this);
        }
        else {
            this.parent.movingByClick = true;
            this.parent.movingFromByClick = this;
        }
    };
    return ChessSquare;
}()); // End of ChessSquare class



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "f+vM":
/*!***********************************************!*\
  !*** ./src/app/builder/builder.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bullets {\n    list-style-type: none;\n    display: inline-block; \n    font-weight: bold;\n    padding-left: 5px;\n    color: #b7d7d9;\n    word-break: break-all;\n}\n\n.nav {\n    padding-left: 10px;\n}\n\n.icon {\n    color: #b7d7d9;\n}\n\n.floating-box {\n    margin: 1px;\n    display: inline-block; \n    vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVpbGRlci9idWlsZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2J1aWxkZXIvYnVpbGRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1bGxldHMge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGNvbG9yOiAjYjdkN2Q5O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLm5hdiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uaWNvbiB7XG4gICAgY29sb3I6ICNiN2Q3ZDk7XG59XG5cbi5mbG9hdGluZy1ib3gge1xuICAgIG1hcmdpbjogMXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn0iXX0= */");

/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.css */ "DN7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_google_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/google-auth.service */ "36VY");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(gdata, cd, 
    // This causes the data to be loaded earlier on
    dataService) {
        var _this = this;
        this.gdata = gdata;
        this.cd = cd;
        this.dataService = dataService;
        this.isSignedIn = true;
        this.googleDisplay = "block";
        window.onSignIn = function (googleUser) { return _this.onSignIn(googleUser); };
    }
    HeaderComponent.prototype.onSignIn = function (googleUser) {
        this.gdata.onSignIn(googleUser);
        // this.isSignedIn = this.gdata.isSignedIn;
        this.googleDisplay = this.gdata.googleDisplay;
        this.cd.detectChanges();
    };
    HeaderComponent.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("calling gdata signout...");
                        return [4 /*yield*/, this.gdata.signOut()];
                    case 1:
                        _a.sent();
                        console.log("gdata signout finished");
                        // this.isSignedIn = this.gdata.isSignedIn;
                        this.googleDisplay = this.gdata.googleDisplay;
                        this.cd.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.ctorParameters = function () { return [
        { type: _services_google_auth_service__WEBPACK_IMPORTED_MODULE_3__["GoogleAuthService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_google_auth_service__WEBPACK_IMPORTED_MODULE_3__["GoogleAuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}()); // End of class HeaderComponent



/***/ }),

/***/ "gjcs":
/*!********************************************!*\
  !*** ./src/app/services/alasql.service.ts ***!
  \********************************************/
/*! exports provided: AlaSql */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlaSql", function() { return AlaSql; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var alasql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alasql */ "sZNv");
/* harmony import */ var alasql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alasql__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//import { AlaSql } from 'alasql';
// Wrapper around alasql
var AlaSql = /** @class */ (function () {
    function AlaSql() {
    }
    AlaSql.prototype.exec = function (sql) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log('Sql: ' + sql);
                        alasql__WEBPACK_IMPORTED_MODULE_1___default.a.promise(sql)
                            .then(function (res) {
                            // console.log('Result: ' + JSON.stringify(res));
                            resolve(res);
                        });
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    AlaSql.prototype.execSelect = function (sql) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log('Sql: ' + sql);
                        alasql__WEBPACK_IMPORTED_MODULE_1___default.a.promise(sql)
                            .then(function (res) {
                            // console.log('Result: ' + JSON.stringify(res));
                            resolve(res);
                        });
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    // Create a table from a Json object.
    // This is the form that alasql uses natively, so this
    // should be more efficient than repeating insert into calls.
    AlaSql.prototype.createTable = function (tableName, data) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var sql, isFirst, i;
                    return __generator(this, function (_a) {
                        sql = 'create table ' + tableName;
                        // Empty data
                        if (data.length < 1) {
                            throw new Error('Error - createTable called without even column headings.');
                            resolve();
                            return [2 /*return*/];
                        }
                        // Set column headings
                        sql += " (";
                        isFirst = true;
                        for (i = 0; i < Object.keys(data[0]).length; i++) {
                            if (isFirst)
                                isFirst = false;
                            else
                                sql += ", ";
                            sql += Object.keys(data[0])[i];
                        }
                        sql += ")";
                        // console.log("createTable sql: " + sql);
                        // Create the table
                        alasql__WEBPACK_IMPORTED_MODULE_1___default.a.promise(sql).then(function (res) {
                            // If there's data then add it in
                            // console.log("data: " + JSON.stringify(data));
                            // console.log("createTable data[0]: " 
                            // + JSON.stringify(data[0]));
                            // console.log("Object.values(data[0])[0]" + Object.values(data[0])[0]);
                            // console.log("createTable data.length: " + data.length);
                            if (data.length > 0 && Object.values(data[0])[0] !== "") {
                                var a = alasql__WEBPACK_IMPORTED_MODULE_1__;
                                for (var i = 0; i < Object.keys(a.tables).length; i++) {
                                    if (Object.keys(a.tables)[i] === tableName) {
                                        var table = Object.values(a.tables)[i];
                                        table.data = data;
                                        resolve();
                                        // console.log('data1: ' + JSON.stringify(table));
                                    }
                                }
                            }
                            else
                                resolve();
                        });
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    // Returns (presumably by reference) the data used by alasql.
    // As it should just return an existing reference, it isn't async.
    AlaSql.prototype.rawData = function (tableName) {
        var a = alasql__WEBPACK_IMPORTED_MODULE_1__;
        for (var i = 0; i < Object.keys(a.tables).length; i++) {
            if (Object.keys(a.tables)[i] === tableName) {
                var table = Object.values(a.tables)[i];
                return table.data;
            }
        }
        throw new Error('rawData called for invalid tablename ' + tableName);
    };
    AlaSql = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AlaSql);
    return AlaSql;
}());



/***/ }),

/***/ "iLu0":
/*!*******************************************!*\
  !*** ./src/app/chessboard/chess-enums.ts ***!
  \*******************************************/
/*! exports provided: Colour, PieceType, files, Move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colour", function() { return Colour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieceType", function() { return PieceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "files", function() { return files; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
var Colour;
(function (Colour) {
    Colour["WHITE"] = "w";
    Colour["BLACK"] = "b";
})(Colour || (Colour = {}));
var PieceType;
(function (PieceType) {
    PieceType["PAWN"] = "p";
    PieceType["KNIGHT"] = "n";
    PieceType["BISHOP"] = "b";
    PieceType["ROOK"] = "r";
    PieceType["QUEEN"] = "q";
    PieceType["KING"] = "k";
})(PieceType || (PieceType = {}));
var files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

var Move = /** @class */ (function () {
    function Move(from, to, promotion) {
        this.from = from;
        this.to = to;
        this.promotion = promotion;
    }
    return Move;
}());

// export interface IChessBoardParent {
//     resize: EventEmitter<void>;
//     squareSize: number;
//     boardSide: Colour;
//     wholeSize: number;
//     moving: boolean;
//     movingFrom: ChessSquare;
//     mouseMoveLocal: EventEmitter<MouseEvent>;
//     mouseUpLocal: EventEmitter<MouseEvent>;
//     touchMoveLocal: EventEmitter<TouchEvent>;
//     touchEndLocal: EventEmitter<TouchEvent>
// }
// export enum Coordinate {
//     "a8" = 0, "b8" = 1, "c8" = 2, "d8" = 3,
//     "e8" = 4, "f8" = 5, "g8" = 6, "h8" = 7,
//     "a7" = 16, "b7" = 17, "c7" = 18, "d7" = 19,
//     "e7" = 20, "f7" = 21, "g7" = 22, "h7" = 23,
//     "a6" = 32, "b6" = 33, "c6" = 34, "d6" = 35,
//     "e6" = 36, "f6" = 37, "g6" = 38, "h6" = 39,
//     "a5" = 48, "b5" = 49, "c5" = 50, "d5" = 51,
//     "e5" = 52, "f5" = 53, "g5" = 54, "h5" = 55,
//     "a4" = 64,"b4" = 65, "c4" = 66, "d4" = 67,
//     "e4" = 68, "f4" = 69, "g4" = 70, "h4" = 71,
//     "a3" = 80, "b3" = 81, "c3" = 82, "d3" = 83,
//     "e3" = 84, "f3" = 85, "g3" = 86, "h3" = 87,
//     "a2" = 96, "b2" = 97, "c2" = 98, "d2" = 99,
//     "e2" = 100, "f2" = 101, "g2" = 102, "h2" = 103,
//     "a1" = 112, "b1" = 113, "c1" = 114, "d1" = 115,
//     "e1" = 116, "f1" = 117, "g1" = 118, "h1" = 119
// }


/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1><a routerLink=''>\n        Chess Opening Trainer</a></h1>\n\n<div >\n    <button class=\"sign-out\" matTooltip=\"Sign out\" (click)=\"signOut()\" *ngIf=\"isSignedIn\">Sign out\n    </button>\n</div>\n<div [style.display]=\"googleDisplay\">\n    <div class=\"g-signin2\" data-onsuccess=\"onSignIn\" data-theme=\"dark\">\n    </div>\n</div>\n<nav>\n    <a routerLink=\"/trainer\" routerLinkActive=\"active\" matTooltip=\"Practice sequences\">\n        Trainer</a>\n    <a routerLink=\"/sequences\" routerLinkActive=\"active\" matTooltip=\"View sequences\">\n        Sequences</a>\n    <a routerLink=\"/about\" routerLinkActive=\"active\">\n        About</a>\n    <a routerLink=\"/builder\" routerLinkActive=\"active\" matTooltip=\"Prepare new sequences\">\n        Builder</a>\n</nav>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "nQ69":
/*!****************************************************!*\
  !*** ./src/app/chessboard/chessboard.component.ts ***!
  \****************************************************/
/*! exports provided: ChessboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessboardComponent", function() { return ChessboardComponent; });
/* harmony import */ var _raw_loader_chessboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./chessboard.component.html */ "PumO");
/* harmony import */ var _chessboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chessboard.component.css */ "8r+y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chess_square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chess-square */ "ce1d");
/* harmony import */ var _chess_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chess-enums */ "iLu0");
/* harmony import */ var _chess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chess */ "OYgV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ChessboardComponent = /** @class */ (function () {
    // private promPieceSubject: Subscription;
    function ChessboardComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.squaresMap = new Map();
        this.mouseMoveLocal = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.touchMoveLocal = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.mouseUpLocal = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.touchEndLocal = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.movingByDrag = false;
        this.movingByClick = false;
        this.boardSide = _chess_enums__WEBPACK_IMPORTED_MODULE_4__["Colour"].WHITE;
        this.moveMade = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // @ViewChild(PromotionComponent) promotion: PromotionComponent;
        // private tempPiece: PieceType;
        // For piece promotion
        // public promSquaresMap = new Map<string, ChessSquare>();
        this.showProm = false;
        this.promPieceSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.calculateSizes();
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                var coord = _chess_enums__WEBPACK_IMPORTED_MODULE_4__["files"][i]
                    + (j + 1).toString();
                var cs = new _chess_square__WEBPACK_IMPORTED_MODULE_3__["ChessSquare"](coord, this);
                cs.init();
                this.squaresMap.set(coord, cs);
            }
        }
        // https://github.com/jhlywa/chess.js
        this.chess = new _chess__WEBPACK_IMPORTED_MODULE_5__["Chess"]();
        this.chess.onChange.subscribe(function () {
            _this.positionPieces();
        });
        // For promotion dialog
        // const promotionSquares = ['a8', 'a7', 'a6', 'a5'];
        // for (let coord of promotionSquares) {
        //     const cs = new ChessSquare(coord, this);
        //     cs.init();
        //     this.promSquaresMap.set(coord, cs);
        // }
    }
    ChessboardComponent.prototype.ngAfterViewInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ChessboardComponent.prototype.getPromotionPiece = function (square) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    // console.log("getPromotionPiece");
                    _this.showProm = true;
                    _this.showPromotionChoices(_this.squaresMap.get(square.coordinate));
                    var promPieceSubject = _this.promPieceSelected.subscribe(function (pt) {
                        // console.log("showPromotionDialog: "
                        //     + pt);
                        resolve(pt);
                        promPieceSubject.unsubscribe();
                    });
                });
                return [2 /*return*/, p];
            });
        });
    };
    ChessboardComponent.prototype.showPromotionChoices = function (promSquare) {
        // console.log("showPromotionChoices");
        var useSquares;
        var boardSide;
        var file = promSquare.coordinate.substr(0, 1);
        if (promSquare.coordinate.endsWith('8')) {
            boardSide = _chess_enums__WEBPACK_IMPORTED_MODULE_4__["Colour"].WHITE;
            useSquares = [file + 8, file + 7, file + 6, file + 5];
        }
        else {
            boardSide = _chess_enums__WEBPACK_IMPORTED_MODULE_4__["Colour"].BLACK;
            useSquares = [file + 1, file + 2, file + 3, file + 4];
        }
        this.squaresMap.get(useSquares[0]).pieceColour = boardSide;
        this.squaresMap.get(useSquares[0]).pieceType = _chess_enums__WEBPACK_IMPORTED_MODULE_4__["PieceType"].QUEEN;
        this.squaresMap.get(useSquares[1]).pieceColour = boardSide;
        this.squaresMap.get(useSquares[1]).pieceType = _chess_enums__WEBPACK_IMPORTED_MODULE_4__["PieceType"].ROOK;
        this.squaresMap.get(useSquares[2]).pieceColour = boardSide;
        this.squaresMap.get(useSquares[2]).pieceType = _chess_enums__WEBPACK_IMPORTED_MODULE_4__["PieceType"].BISHOP;
        this.squaresMap.get(useSquares[3]).pieceColour = boardSide;
        this.squaresMap.get(useSquares[3]).pieceType = _chess_enums__WEBPACK_IMPORTED_MODULE_4__["PieceType"].KNIGHT;
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                var coord = _chess_enums__WEBPACK_IMPORTED_MODULE_4__["files"][i]
                    + (j + 1).toString();
                if (!useSquares.includes(coord)) {
                    this.squaresMap.get(coord).removePiece();
                }
            }
        }
    };
    Object.defineProperty(ChessboardComponent.prototype, "viewBox", {
        get: function () {
            return '0 0 '
                + (this.wholeSize).toString()
                + ' ' + (this.wholeSize).toString();
        },
        enumerable: false,
        configurable: true
    });
    ChessboardComponent.prototype.flipBoard = function () {
        this.boardSide === _chess_enums__WEBPACK_IMPORTED_MODULE_4__["Colour"].WHITE ? this.boardSide = _chess_enums__WEBPACK_IMPORTED_MODULE_4__["Colour"].BLACK
            : this.boardSide = _chess_enums__WEBPACK_IMPORTED_MODULE_4__["Colour"].WHITE;
        this.flip();
    };
    ChessboardComponent.prototype.flip = function () {
        var _this = this;
        this.squaresMap.forEach(function (cs, key) {
            cs.calculateRowColumn();
            _this.positionPieces();
        });
    };
    ChessboardComponent.prototype.flipBoardTo = function (colour) {
        this.boardSide = colour;
        this.flip();
    };
    ChessboardComponent.prototype.load = function (fen) {
        if (fen === void 0) { fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'; }
        var r = this.chess.validate_fen(fen);
        if (!r.valid) {
            throw new Error('Error: Invalid Fen. Fen=\'' + fen
                + '\', error=' + r.error);
        }
        // console.log('fen is valid');
        this.chess.load(fen);
        // Set board pieces to be the same
        this.positionPieces();
        // Reminder of how to iterate through a Map:
        // this.squaresMap.forEach((cs: ChessSquare, key: string) => {
        // });
    };
    // Puts the pieces on the board in line with the chess position
    ChessboardComponent.prototype.positionPieces = function () {
        // console.log("positionPieces called");
        for (var _i = 0, _a = Object.keys(this.chess.SQUARES); _i < _a.length; _i++) {
            var key = _a[_i];
            var coord = key;
            var index = this.chess.SQUARES[key];
            var piece = this.chess.board[index];
            var cs = this.squaresMap.get(coord);
            // console.log("coord: " + coord
            // + ", index: " + index
            // );
            if ((typeof piece) !== 'undefined'
                && piece !== undefined) {
                // console.log("piece: " + piece.type
                // + ", piece colour: " + piece.color);
                // if (cs.pieceColour != piece.color
                //  || cs.pieceType != piece.type) {
                cs.pieceColour = piece.color;
                cs.pieceType = piece.type;
                // }
            }
            else {
                // console.log("empty square");
                cs.removePiece();
            }
        }
    };
    ChessboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('resize', function ($event) {
            _this.calculateSizes();
        });
    }; // end of ngOnInit
    ChessboardComponent.prototype.calculateSizes = function () {
        if (window.innerHeight > window.innerWidth) {
            this.wholeSize = 280;
        }
        else {
            this.wholeSize = 400;
        }
        this.squareSize = this.wholeSize / 8;
        this.resize.emit();
    };
    ChessboardComponent.prototype.mouseMove = function (event) {
        this.mouseMoveLocal.emit(event);
    };
    ChessboardComponent.prototype.touchMove = function (event) {
        event.preventDefault();
        this.touchMoveLocal.emit(event);
    };
    ChessboardComponent.prototype.touchEnd = function (event) {
        if (this.movingByDrag) {
            event.preventDefault();
            var t = void 0;
            if (event.targetTouches.length > 0)
                t = event.targetTouches[0];
            else
                t = event.changedTouches[0];
            console.log("touchEnd ended at "
                + Math.round(t.clientX)
                + "," + Math.round(t.clientY));
            this.endMoveByDrag(t.clientX, t.clientY);
        }
        this.touchEndLocal.emit(event);
    };
    ChessboardComponent.prototype.mouseUp = function (event) {
        if (this.movingByDrag) {
            this.endMoveByDrag(event.clientX, event.clientY);
        }
        this.mouseUpLocal.emit(event);
    };
    ChessboardComponent.prototype.endMoveByDrag = function (clientX, clientY) {
        var boardClientX = this.svgRegion.nativeElement.getBoundingClientRect().left;
        var boardClientY = this.svgRegion.nativeElement.getBoundingClientRect().top;
        // console.log('board x: ' + boardClientX + ', board y: ' + boardClientY);
        var mouseClientX = clientX;
        var mouseClientY = clientY;
        var column = _chess_enums__WEBPACK_IMPORTED_MODULE_4__["files"][Math.floor((mouseClientX - boardClientX) / this.squareSize)];
        var row = 8 - Math.floor((mouseClientY - boardClientY) / this.squareSize);
        // console.log('row: ' + row);
        if (this.boardSide === _chess_enums__WEBPACK_IMPORTED_MODULE_4__["Colour"].BLACK) {
            var columnNumber = 7 - _chess_enums__WEBPACK_IMPORTED_MODULE_4__["files"].indexOf(column);
            column = _chess_enums__WEBPACK_IMPORTED_MODULE_4__["files"][columnNumber];
            row = 9 - row;
        }
        var coord = column + row.toString();
        // check whether no move was actually made
        if (this.movingFromByDrag.coordinate === coord) {
            // If there's a piece on the square
            if (this.movingFromByDrag.pieceType !== undefined) {
                this.movingFromByDrag.pieceClicked();
            }
            return;
        }
        // console.log("endMove calling makeMoveTo");
        this.movingByDrag = false;
        this.makeMoveTo(this.movingFromByDrag, this.squaresMap.get(coord));
    };
    ChessboardComponent.prototype.endMoveByClick = function (toSquare) {
        this.movingByClick = false;
        this.makeMoveTo(this.movingFromByClick, toSquare);
    };
    ChessboardComponent.prototype.makeMoveTo = function (fromSquare, toSquare) {
        var _this = this;
        // check if it needs a pawn promotion
        var isPromotion = false;
        if (fromSquare.pieceType === _chess_enums__WEBPACK_IMPORTED_MODULE_4__["PieceType"].PAWN) {
            if ((fromSquare.pieceColour === _chess_enums__WEBPACK_IMPORTED_MODULE_4__["Colour"].WHITE
                && toSquare.coordinate.substr(1, 1) === '8')
                ||
                    (fromSquare.pieceColour === _chess_enums__WEBPACK_IMPORTED_MODULE_4__["Colour"].BLACK
                        && toSquare.coordinate.substr(1, 1) === '1')) {
                isPromotion = true;
            }
        }
        if (isPromotion) {
            // console.log("makeMoveTo: pawn promotion");
            this.getPromotionPiece(toSquare).then(function (pieceType) {
                // console.log("makeMoveTo: piece chosen: " + pieceType);
                // check whether the move is valid
                var move = new _chess_enums__WEBPACK_IMPORTED_MODULE_4__["Move"](fromSquare.coordinate, toSquare.coordinate, pieceType);
                var chessMove = _this.chess.move(move);
                if (chessMove === undefined) {
                    _this.positionPieces();
                    console.log('invalid move');
                }
                else { // valid move
                    _this.moveMade.emit(move);
                }
            });
        }
        else {
            // check whether the move is valid
            var move = new _chess_enums__WEBPACK_IMPORTED_MODULE_4__["Move"](fromSquare.coordinate, toSquare.coordinate);
            var chessMove = this.chess.move(move);
            if (chessMove === undefined) {
                this.positionPieces();
                console.log('invalid move');
            }
            else { // valid move
                this.moveMade.emit(move);
            }
        }
    };
    ChessboardComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    ChessboardComponent.propDecorators = {
        svgRegion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['svgRegion', null,] }]
    };
    ChessboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-chessboard',
            template: _raw_loader_chessboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_chessboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], ChessboardComponent);
    return ChessboardComponent;
}()); // End of class ChessBoardComponent



/***/ }),

/***/ "ne9n":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sequences/sequences.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<p>The sequences you can practice are listed below.</p>\n<table mat-table [dataSource]=\"dataSource\" class=\"table\">\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let sequence\"> {{sequence.name}} </td>\n    </ng-container>\n\n    <!-- Practice Column -->\n    <ng-container matColumnDef=\"practice\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n        <td mat-cell *matCellDef=\"let sequence\">\n            <!-- <button type=\"button\" \n            (click)=\"practice(sequence)\">Practice</button> -->\n            <a class=\"btn btn-secondary btn-sm active\" role=\"button\" aria-pressed=\"true\" routerLink=\"/trainer/{{ sequence.name }}\" routerLinkActive=\"active\" matTooltip=\"Practice sequence\">\n                Practice</a>\n        </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (dblclick)=\"dblclick()\"></tr>\n</table>");

/***/ }),

/***/ "oXLq":
/*!**********************************************!*\
  !*** ./src/app/builder/builder.component.ts ***!
  \**********************************************/
/*! exports provided: BuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderComponent", function() { return BuilderComponent; });
/* harmony import */ var _raw_loader_builder_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./builder.component.html */ "4yIs");
/* harmony import */ var _builder_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder.component.css */ "f+vM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chessboard_chessboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chessboard/chessboard.component */ "nQ69");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FenRequest = /** @class */ (function () {
    function FenRequest() {
    }
    return FenRequest;
}());
var BuilderComponent = /** @class */ (function () {
    function BuilderComponent() {
        this.output = new Array();
        this.moves = new Array();
        this.fens = new Array();
        this.model = new FenRequest();
    }
    BuilderComponent.prototype.ngOnInit = function () {
        this.output.push('Move the pieces to build a sequence.');
        this.recordSequence();
        this.displayWidth = this.board.wholeSize;
    }; // end of ngOnInit
    BuilderComponent.prototype.recordSequence = function () {
        var _this = this;
        this.board.load();
        this.fens.push(this.board.chess.fen);
        this.board.moveMade.subscribe(function (move) {
            _this.moves.push(move);
            _this.fens.push(_this.board.chess.fen);
            _this.updateOutput();
            console.log(_this.board.chess.fen);
        });
    };
    BuilderComponent.prototype.flipBoard = function () {
        this.board.flipBoard();
    };
    BuilderComponent.prototype.restart = function () {
        this.moves.length = 0;
        this.fens.length = 0;
        this.fens.push(this.board.chess.fen);
        this.updateOutput();
    };
    BuilderComponent.prototype.onFenSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('new fen: ' + this.model.fen);
                this.board.load(this.model.fen);
                console.log(this.board.chess.fen);
                this.restart();
                return [2 /*return*/];
            });
        });
    };
    BuilderComponent.prototype.undoMove = function () {
        if (this.moves.length > 0) {
            this.fens.pop();
            this.moves.pop();
            this.board.load(this.fens[this.fens.length - 1]);
            this.updateOutput();
        }
    };
    BuilderComponent.prototype.updateOutput = function () {
        this.output.length = 0;
        this.output.push('Starting FEN: ' + this.fens[0]);
        var movesList = 'Moves: ';
        var isFirst = true;
        for (var _i = 0, _a = this.moves; _i < _a.length; _i++) {
            var moveMade = _a[_i];
            if (isFirst)
                isFirst = false;
            else
                movesList += ',';
            movesList += moveMade.from + moveMade.to;
        }
        this.output.push(movesList);
    };
    BuilderComponent.ctorParameters = function () { return []; };
    BuilderComponent.propDecorators = {
        board: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_chessboard_chessboard_component__WEBPACK_IMPORTED_MODULE_3__["ChessboardComponent"], null,] }]
    };
    BuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-builder',
            template: _raw_loader_builder_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_builder_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], BuilderComponent);
    return BuilderComponent;
}()); // End of class BuilderComponent



/***/ }),

/***/ "oq9T":
/*!********************************************!*\
  !*** ./src/app/services/record.service.ts ***!
  \********************************************/
/*! exports provided: RecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordService", function() { return RecordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _alasql_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alasql.service */ "gjcs");
/* harmony import */ var _spreadsheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spreadsheet.service */ "8qoT");
/* harmony import */ var _shared_classes_record__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-classes/record */ "Ooy2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RecordService = /** @class */ (function () {
    function RecordService(spreadsheetService, ala) {
        var _this = this;
        this.spreadsheetService = spreadsheetService;
        this.ala = ala;
        this.spreadsheetName = 'Chess Opening Trainer';
        this.tableName = 't_records';
        this.columns = ['name', 'lastSuccess', 'next', 'lastFail'];
        this.ready = new Array();
        this.ready.push(new Promise(function (resolve) {
            _this.retrieveRecords().then(function () {
                // Records on previous attempts have been retrieved from
                // the spreadsheet
                resolve();
            });
        }));
    }
    RecordService.prototype.retrieveRecords = function () {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, exists, tableData, tableData, records;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this;
                                return [4 /*yield*/, this.spreadsheetService.getSpreadsheet(this.spreadsheetName)];
                            case 1:
                                _a.spreadsheet = _b.sent();
                                return [4 /*yield*/, this.spreadsheet.sheetExists(this.tableName)];
                            case 2:
                                exists = _b.sent();
                                if (!!exists) return [3 /*break*/, 7];
                                console.log('t_records table being created...');
                                return [4 /*yield*/, this.spreadsheet.arrayToJson([this.columns])];
                            case 3:
                                tableData = _b.sent();
                                return [4 /*yield*/, this.ala.createTable(this.tableName, tableData)];
                            case 4:
                                _b.sent();
                                return [4 /*yield*/, this.spreadsheet.writeTable(this.tableName)];
                            case 5:
                                _b.sent();
                                return [4 /*yield*/, this.spreadsheet.setBold(this.tableName + '!A1:D1')];
                            case 6:
                                _b.sent();
                                resolve();
                                return [3 /*break*/, 12];
                            case 7: return [4 /*yield*/, this.spreadsheet.arrayToJson([this.columns])];
                            case 8:
                                tableData = _b.sent();
                                return [4 /*yield*/, this.ala.createTable(this.tableName, tableData)];
                            case 9:
                                _b.sent();
                                // Pull in any data from the spreadsheet
                                return [4 /*yield*/, this.spreadsheet.readTable(this.tableName)];
                            case 10:
                                // Pull in any data from the spreadsheet
                                _b.sent();
                                return [4 /*yield*/, this.ala.execSelect("select * from t_records")];
                            case 11:
                                records = _b.sent();
                                // console.log("retrieved records: " + JSON.stringify(records));
                                resolve();
                                _b.label = 12;
                            case 12: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    // finds a record from the records table
    RecordService.prototype.getRecord = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var res, record, _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, Promise.all(this.ready)];
                            case 1:
                                _c.sent();
                                return [4 /*yield*/, this.ala.execSelect('select * from '
                                        + this.tableName
                                        + ' where name = "' + name + '"')];
                            case 2:
                                res = _c.sent();
                                if (!(res.length === 0)) return [3 /*break*/, 3];
                                resolve(undefined);
                                return [2 /*return*/];
                            case 3:
                                _a = _shared_classes_record__WEBPACK_IMPORTED_MODULE_3__["Record"].bind;
                                _b = [void 0, res[0]['name']];
                                return [4 /*yield*/, this.stringToDate(res[0]['lastSuccess'])];
                            case 4:
                                _b = _b.concat([_c.sent()]);
                                return [4 /*yield*/, this.stringToDate(res[0]['next'])];
                            case 5:
                                _b = _b.concat([_c.sent()]);
                                return [4 /*yield*/, this.stringToDate(res[0]['lastFail'])];
                            case 6:
                                record = new (_a.apply(_shared_classes_record__WEBPACK_IMPORTED_MODULE_3__["Record"], _b.concat([_c.sent()])))();
                                // console.log('getRecord record created: ' 
                                // + JSON.stringify(record));
                                resolve(record);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    RecordService.prototype.addRecord = function (record) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var sqlDelete, deleteResult, sqlInsert, _a, _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0: return [4 /*yield*/, Promise.all(this.ready)];
                            case 1:
                                _d.sent();
                                sqlDelete = "delete from " + this.tableName
                                    + " where name = '" + record.name + "'";
                                return [4 /*yield*/, this.ala.exec(sqlDelete)];
                            case 2:
                                deleteResult = _d.sent();
                                _a = "insert into " + this.tableName
                                    + " VALUES ("
                                    + "'" + record.name + "', "
                                    + "'";
                                return [4 /*yield*/, this.dateToString(record.lastSuccess)];
                            case 3:
                                _b = _a + (_d.sent()) + "', "
                                    + "'";
                                return [4 /*yield*/, this.dateToString(record.next)];
                            case 4:
                                _c = _b + (_d.sent()) + "', "
                                    + "'";
                                return [4 /*yield*/, this.dateToString(record.lastFail)];
                            case 5:
                                sqlInsert = _c + (_d.sent()) + "'"
                                    + ")";
                                return [4 /*yield*/, this.ala.exec(sqlInsert)];
                            case 6:
                                _d.sent();
                                // console.log("new record added");
                                this.spreadsheet.writeTable(this.tableName);
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    RecordService.prototype.dateToString = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    var ret = "";
                    var year = date.getFullYear().toString();
                    var month = (date.getMonth() + 1).toString();
                    if (month.length === 1)
                        month = "0" + month;
                    var day = date.getDate().toString();
                    if (day.length === 1)
                        day = "0" + day;
                    var hour = date.getHours().toString();
                    if (hour.length === 1)
                        hour = "0" + hour;
                    var minute = date.getMinutes().toString();
                    if (minute.length === 1)
                        minute = "0" + minute;
                    resolve(year + "-" + month + "-" + day + " " + hour
                        + ":" + minute);
                });
                return [2 /*return*/, p];
            });
        });
    };
    RecordService.prototype.stringToDate = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    // console.log("stringToDate: " + date);
                    var pattern = /^(\d{4})\D+(\d{1,2})\D+(\d{1,2})\D+(\d{1,2})\D+(\d{1,2})/;
                    var matches = pattern.exec(date);
                    var year = matches[1];
                    if (year === undefined)
                        throw new Error("Couldn't find year in date string '"
                            + date + "'.");
                    var month = matches[2];
                    if (month === undefined)
                        throw new Error("Couldn't find month in date string '"
                            + date + "'.");
                    var day = matches[3];
                    if (day === undefined)
                        throw new Error("Couldn't find day in date string '"
                            + date + "'.");
                    var hour = matches[4];
                    if (hour === undefined)
                        throw new Error("Couldn't find hour in date string '"
                            + date + "'.");
                    var minute = matches[5];
                    if (minute === undefined)
                        throw new Error("Couldn't find minute in date string '"
                            + date + "'.");
                    resolve(new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute)));
                });
                return [2 /*return*/, p];
            });
        });
    };
    // Store all records back into the spreadsheet
    RecordService.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.spreadsheet.writeTable(this.tableName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RecordService.ctorParameters = function () { return [
        { type: _spreadsheet_service__WEBPACK_IMPORTED_MODULE_2__["SpreadsheetService"] },
        { type: _alasql_service__WEBPACK_IMPORTED_MODULE_1__["AlaSql"] }
    ]; };
    RecordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_spreadsheet_service__WEBPACK_IMPORTED_MODULE_2__["SpreadsheetService"],
            _alasql_service__WEBPACK_IMPORTED_MODULE_1__["AlaSql"]])
    ], RecordService);
    return RecordService;
}());



/***/ }),

/***/ "psuH":
/*!*******************************************************!*\
  !*** ./src/app/sequences/sequences-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SequencesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequencesRoutingModule", function() { return SequencesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sequences_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sequences.component */ "M22c");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'sequences', component: _sequences_component__WEBPACK_IMPORTED_MODULE_2__["SequencesComponent"] }
];
var SequencesRoutingModule = /** @class */ (function () {
    function SequencesRoutingModule() {
    }
    SequencesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: []
        })
    ], SequencesRoutingModule);
    return SequencesRoutingModule;
}());



/***/ }),

/***/ "sxcE":
/*!*****************************************!*\
  !*** ./src/app/services/spreadsheet.ts ***!
  \*****************************************/
/*! exports provided: Spreadsheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spreadsheet", function() { return Spreadsheet; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Spreadsheet = /** @class */ (function () {
    function Spreadsheet(id, gauth, ala) {
        this.id = id;
        this.gauth = gauth;
        this.ala = ala;
    }
    Spreadsheet.prototype.createSheetIfNotExists = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var sheets;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.sheets];
                            case 1:
                                sheets = _a.sent();
                                if (!!sheets.includes(name)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.createSheet(name)];
                            case 2:
                                _a.sent();
                                resolve();
                                return [3 /*break*/, 4];
                            case 3:
                                resolve();
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    Spreadsheet.prototype.sheetExists = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var sheets;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.sheets];
                            case 1:
                                sheets = _a.sent();
                                if (sheets.includes(name)) {
                                    resolve(true);
                                }
                                else
                                    resolve(false);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    Object.defineProperty(Spreadsheet.prototype, "sheets", {
        get: function () {
            var _this = this;
            var p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                var ret, response, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.all(this.gauth.ready)];
                        case 1:
                            _a.sent();
                            ret = new Array();
                            return [4 /*yield*/, gapi.client.sheets.spreadsheets.get({
                                    spreadsheetId: this.id
                                })];
                        case 2:
                            response = _a.sent();
                            for (i = 0; i < response.result.sheets.length; i++) {
                                ret.push(response.result.sheets[i].properties.title);
                            }
                            resolve(ret);
                            return [2 /*return*/];
                    }
                });
            }); });
            return p;
        },
        enumerable: false,
        configurable: true
    });
    // Usually called from createSheetIfNotExists
    Spreadsheet.prototype.createSheet = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var params, requestBody;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.all(this.gauth.ready)];
                            case 1:
                                _a.sent();
                                params = { spreadsheetId: this.id };
                                requestBody = {
                                    "requests": [
                                        {
                                            "addSheet": {
                                                "properties": {
                                                    "title": name,
                                                    "gridProperties": {
                                                        "rowCount": 20,
                                                        "columnCount": 12
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                };
                                gapi.client.sheets.spreadsheets.batchUpdate(params, requestBody).then(function (response) {
                                    resolve();
                                }, function (error) {
                                    throw new Error('Error creating sheet ' + name
                                        + '. reason: ' + JSON.stringify(error));
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    Spreadsheet.prototype.writeRange = function (range, data) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var params, requestBody;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.all(this.gauth.ready)];
                            case 1:
                                _a.sent();
                                params = {
                                    spreadsheetId: this.id,
                                    range: range,
                                    valueInputOption: 'USER_ENTERED'
                                };
                                requestBody = {
                                    "range": range,
                                    "values": data
                                };
                                // console.log('spreadsheet id: ' + this.id);
                                gapi.client.sheets.spreadsheets.values.update(params, requestBody).then(function (response) {
                                    // console.log('writeRange response: ' + JSON.stringify(response));
                                    resolve();
                                }, function (reason) {
                                    throw new Error('Error writing range ' + name
                                        + '. reason: ' + JSON.stringify(reason));
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    Spreadsheet.prototype.setBold = function (range) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var gridRange, params, requestBody;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.all(this.gauth.ready)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.a1ToGridRange(range)];
                            case 2:
                                gridRange = _a.sent();
                                params = {
                                    spreadsheetId: this.id
                                };
                                requestBody = {
                                    "requests": [
                                        {
                                            "repeatCell": {
                                                "range": gridRange,
                                                "cell": {
                                                    "userEnteredFormat": {
                                                        "horizontalAlignment": "LEFT",
                                                        "textFormat": {
                                                            "bold": true
                                                        }
                                                    }
                                                },
                                                "fields": "userEnteredFormat(textFormat,horizontalAlignment)"
                                            }
                                        },
                                    ]
                                };
                                gapi.client.sheets.spreadsheets.batchUpdate(params, requestBody).then(function (response) {
                                    resolve();
                                }, function (reason) {
                                    throw new Error('Error making range bold ' + name
                                        + '. reason: ' + JSON.stringify(reason));
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    // A1 notation must include the sheet name
    Spreadsheet.prototype.a1ToGridRange = function (range) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var parts, sheetName, sheetId, ret, from, to;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.all(this.gauth.ready)];
                            case 1:
                                _a.sent();
                                parts = range.match(/(^.+)!(.+):(.+$)/);
                                sheetName = parts[1];
                                return [4 /*yield*/, this.sheetId(sheetName)];
                            case 2:
                                sheetId = _a.sent();
                                ret = {};
                                ret.sheetId = sheetId;
                                from = parts[2].match(/(\D+)(\d+)/);
                                to = parts[3].match(/(\D+)(\d+)/);
                                if (from[2] !== undefined) {
                                    ret.startRowIndex = (parseInt(from[2], 10) - 1);
                                }
                                if (to[2] !== undefined) {
                                    ret.endRowIndex = (parseInt(to[2], 10));
                                }
                                if (from[1] !== undefined) {
                                    ret.startColumnIndex = this.toColumnIndex(from[1]) - 1;
                                }
                                if (to[1] !== undefined) {
                                    ret.endColumnIndex = this.toColumnIndex(to[1]);
                                }
                                // console.log(JSON.stringify(ret));
                                resolve(ret);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    Spreadsheet.prototype.toColumnIndex = function (letters) {
        var ret = 0;
        for (var i = 0; i < letters.length; i++) {
            var char = letters[i];
            ret += char.toUpperCase().charCodeAt(0) - 64;
        }
        return ret;
    };
    Spreadsheet.prototype.sheetId = function (sheetName) {
        var _this = this;
        var p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var response, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(this.gauth.ready)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, gapi.client.sheets.spreadsheets.get({
                                spreadsheetId: this.id
                            })];
                    case 2:
                        response = _a.sent();
                        for (i = 0; i < response.result.sheets.length; i++) {
                            if (response.result.sheets[i].properties.title ===
                                sheetName) {
                                resolve(response.result.sheets[i].properties.sheetId);
                            }
                        }
                        resolve(-1);
                        return [2 /*return*/];
                }
            });
        }); });
        return p;
    };
    // Writes an alasql table to a sheet in the spreadsheet.
    // Uses the existing alasql data rather than a select query for efficiency.
    Spreadsheet.prototype.writeTable = function (tableName) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var values;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.jsonToArray(this.ala.rawData(tableName))];
                            case 1:
                                values = _a.sent();
                                return [4 /*yield*/, this.createSheetIfNotExists(tableName)];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, this.clearSheet(tableName)];
                            case 3:
                                _a.sent();
                                return [4 /*yield*/, this.writeRange(tableName, values)];
                            case 4:
                                _a.sent();
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    Spreadsheet.prototype.jsonToArray = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    var r = new Array();
                    if (data.length === 0) {
                        resolve(r);
                        return;
                    }
                    var r1 = new Array();
                    // column names
                    for (var _i = 0, _a = Object.keys(data[0]); _i < _a.length; _i++) {
                        var key = _a[_i];
                        // r1.push(key.replace('"', '\"'));
                        r1.push(key);
                    }
                    r.push(r1);
                    // row data
                    for (var _b = 0, _c = Object.values(data); _b < _c.length; _b++) {
                        var row = _c[_b];
                        var r2 = new Array();
                        for (var _d = 0, _e = Object.values(row); _d < _e.length; _d++) {
                            var rowData = _e[_d];
                            // r2.push(rowData.replace('"', '\"'));
                            r2.push(rowData);
                        }
                        r.push(r2);
                    }
                    // This is how to get the array in the right format
                    // for the Sheets API
                    // console.log(JSON.stringify(r));
                    resolve(r);
                });
                return [2 /*return*/, p];
            });
        });
    };
    Spreadsheet.prototype.arrayToJson = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) {
                    if (data.length < 1) {
                        throw new Error('arrayToJson called without at least 1 line');
                    }
                    var ret = new Array();
                    if (data.length === 1) {
                        // empty table - just column names
                        var obj = new Object();
                        for (var k = 0; k < data[0].length; k++) {
                            var key = data[0][k];
                            obj[key] = '';
                        }
                        ret.push(obj);
                    }
                    else { // not an empty table
                        for (var i = 1; i < data.length; i++) {
                            var obj = new Object();
                            for (var k = 0; k < data[0].length; k++) {
                                var key = data[0][k];
                                obj[key] = data[i][k];
                            }
                            ret.push(obj);
                        }
                    }
                    // console.log(JSON.stringify(ret));
                    resolve(ret);
                });
                return [2 /*return*/, p];
            });
        });
    };
    Spreadsheet.prototype.deleteSheet = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var sheetId, params, requestBody;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.all(this.gauth.ready)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.sheetId(name)];
                            case 2:
                                sheetId = _a.sent();
                                if (sheetId === -1) {
                                    resolve();
                                    return [2 /*return*/];
                                }
                                params = { spreadsheetId: this.id };
                                requestBody = {
                                    "requests": [
                                        {
                                            "deleteSheet": {
                                                "sheetId": sheetId
                                            }
                                        }
                                    ]
                                };
                                gapi.client.sheets.spreadsheets.batchUpdate(params, requestBody).then(function (response) {
                                    resolve();
                                }, function (error) {
                                    throw new Error('Error deleting sheet ' + name
                                        + '. reason: ' + JSON.stringify(error));
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    Spreadsheet.prototype.clearSheet = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var sheetId, params, requestBody;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.all(this.gauth.ready)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.sheetId(name)];
                            case 2:
                                sheetId = _a.sent();
                                if (sheetId === -1) {
                                    resolve();
                                    return [2 /*return*/];
                                }
                                params = { spreadsheetId: this.id };
                                requestBody = {
                                    "requests": [
                                        {
                                            "updateCells": {
                                                "range": {
                                                    "sheetId": sheetId
                                                },
                                                "fields": "userEnteredValue"
                                            }
                                        }
                                    ]
                                };
                                gapi.client.sheets.spreadsheets.batchUpdate(params, requestBody).then(function (response) {
                                    resolve();
                                }, function (error) {
                                    throw new Error('Error deleting sheet ' + name
                                        + '. reason: ' + JSON.stringify(error));
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    // Reads an alasql table from a sheet in the spreadsheet.
    Spreadsheet.prototype.readTable = function (tableName) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var data, tableData, qr;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.readSheet(tableName)];
                            case 1:
                                data = _a.sent();
                                if (!(data.length > 0)) return [3 /*break*/, 6];
                                return [4 /*yield*/, this.arrayToJson(data)];
                            case 2:
                                tableData = _a.sent();
                                // console.log('readTable tableData: ' + JSON.stringify(tableData));
                                return [4 /*yield*/, this.ala.exec('drop table if exists ' + tableName)];
                            case 3:
                                // console.log('readTable tableData: ' + JSON.stringify(tableData));
                                _a.sent();
                                return [4 /*yield*/, this.ala.createTable(tableName, tableData)];
                            case 4:
                                _a.sent();
                                return [4 /*yield*/, this.ala.execSelect("select * from " + tableName)];
                            case 5:
                                qr = _a.sent();
                                _a.label = 6;
                            case 6:
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    Spreadsheet.prototype.readSheet = function (sheetName) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        resolve(this.readRange(sheetName));
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    Spreadsheet.prototype.readRange = function (rangeName) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return __generator(this, function (_a) {
                p = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    var ret, params;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.all(this.gauth.ready)];
                            case 1:
                                _a.sent();
                                ret = new Array();
                                params = {
                                    spreadsheetId: this.id,
                                    range: rangeName
                                };
                                gapi.client.sheets.spreadsheets.values.get(params).then(function (response) {
                                    if (response.result.values !== undefined) {
                                        for (var _i = 0, _a = response.result.values; _i < _a.length; _i++) {
                                            var v = _a[_i];
                                            ret.push(v);
                                        }
                                    }
                                    // console.log('return from readRange: ' + JSON.stringify(ret));
                                    resolve(ret);
                                }, function (error) {
                                    throw new Error('Error reading range ' + rangeName
                                        + '. reason: ' + JSON.stringify(error));
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, p];
            });
        });
    };
    return Spreadsheet;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "zkdS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    // { path: '', component: HeaderComponent },
    { path: '**', component: _not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: false // <-- debugging purposes only
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "wcbe":
/*!****************************************!*\
  !*** ./src/app/chessboard/svg-data.ts ***!
  \****************************************/
/*! exports provided: SvgPath, SvgCircle, SvgData, SvgPieces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgPath", function() { return SvgPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgCircle", function() { return SvgCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgData", function() { return SvgData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgPieces", function() { return SvgPieces; });
var SvgPath = /** @class */ (function () {
    function SvgPath(d, className) {
        this.d = d;
        this.className = className;
        this.transform = '';
        this.origD = d;
    }
    return SvgPath;
}());

var SvgCircle = /** @class */ (function () {
    function SvgCircle(cx, cy, r, className) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.className = className;
        this.origCx = cx;
        this.origCy = cy;
    }
    return SvgCircle;
}());

// This class holds svg data in a form that can be accessed
// from an Angular template
var SvgData = /** @class */ (function () {
    function SvgData() {
        this.paths = new Array();
        this.circles = new Array();
    }
    return SvgData;
}());

// This class holds the svg data for each chess piece
var SvgPieces = /** @class */ (function () {
    function SvgPieces() {
    }
    Object.defineProperty(SvgPieces, "blackPawn", {
        get: function () {
            var ret = new SvgData();
            ret.paths.push(new SvgPath('M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z', 'black-piece black-body'));
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgPieces, "whitePawn", {
        get: function () {
            var ret = new SvgData();
            ret.paths.push(new SvgPath('M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z', 'white-piece'));
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgPieces, "blackKing", {
        get: function () {
            var ret = new SvgData();
            ret.paths.push(new SvgPath('M 22.5,11.63 L 22.5,6 ', 'black-piece'));
            ret.paths.push(new SvgPath('M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25 ', 'black-body'));
            ret.paths.push(new SvgPath('M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z', 'black-body'));
            ret.paths.push(new SvgPath('M 20,8 L 25,8 ', 'black-piece'));
            ret.paths.push(new SvgPath('M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85 ', 'black-piece white-line'));
            ret.paths.push(new SvgPath('M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37 ', 'black-piece white-line'));
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgPieces, "whiteKing", {
        get: function () {
            var ret = new SvgData();
            ret.paths.push(new SvgPath('M 22.5,11.63 L 22.5,6 ', 'white-piece'));
            ret.paths.push(new SvgPath('M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25 ', 'white-body'));
            ret.paths.push(new SvgPath('M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z', 'white-piece'));
            // part of cross:
            ret.paths.push(new SvgPath('M 20,8 L 25,8 ', 'white-piece'));
            ret.paths.push(new SvgPath('M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37 ', 'white-piece black-line'));
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgPieces, "blackQueen", {
        get: function () {
            var ret = new SvgData();
            ret.paths.push(new SvgPath('M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z', 'black-body'));
            ret.paths.push(new SvgPath('M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z', 'black-body'));
            ret.paths.push(new SvgPath('M 11,38.5 A 35,35 1 0 0 34,38.5 ', 'black-piece'));
            ret.paths.push(new SvgPath('M 11,29 A 35,35 1 0 1 34,29 ', 'black-piece  white-line'));
            ret.paths.push(new SvgPath('M 12.5,31.5 L 32.5,31.5 ', 'black-piece  white-line'));
            ret.paths.push(new SvgPath('M 11.5,34.5 A 35,35 1 0 0 33.5,34.5 ', 'black-piece  white-line'));
            ret.paths.push(new SvgPath('M 10.5,37.5 A 35,35 1 0 0 34.5,37.5 ', 'black-piece  white-line'));
            ret.circles.push(new SvgCircle(6, 12, 2.75, 'black-piece'));
            ret.circles.push(new SvgCircle(14, 9, 2.75, 'black-piece'));
            ret.circles.push(new SvgCircle(22.5, 8, 2.75, 'black-piece'));
            ret.circles.push(new SvgCircle(31, 9, 2.75, 'black-piece'));
            ret.circles.push(new SvgCircle(39, 12, 2.75, 'black-piece'));
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgPieces, "whiteQueen", {
        get: function () {
            var ret = new SvgData();
            ret.paths.push(new SvgPath('M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z', 'white-body'));
            ret.paths.push(new SvgPath('M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z ', 'white-body'));
            ret.paths.push(new SvgPath('M 11.5,30 C 15,29 30,29 33.5,30 ', 'white-piece'));
            ret.paths.push(new SvgPath('M 12,33.5 C 18,32.5 27,32.5 33,33.5 ', 'white-piece  black-line'));
            var sp = new SvgPath('M 9,13 A 2,2 0 1 1 5,13 A 2,2 0 1 1 9,13 z', 'white-piece');
            sp.transform = 'translate(-1,-1)';
            ret.paths.push(sp);
            sp = new SvgPath('M 9,13 A 2,2 0 1 1 5,13 A 2,2 0 1 1 9,13 z', 'white-piece');
            sp.transform = 'translate(15.5,-5.5)';
            ret.paths.push(sp);
            sp = new SvgPath('M 9,13 A 2,2 0 1 1 5,13 A 2,2 0 1 1 9,13 z', 'white-piece');
            sp.transform = 'translate(32,-1)';
            ret.paths.push(sp);
            sp = new SvgPath('M 9,13 A 2,2 0 1 1 5,13 A 2,2 0 1 1 9,13 z', 'white-piece');
            sp.transform = 'translate(7,-4.5)';
            ret.paths.push(sp);
            sp = new SvgPath('M 9,13 A 2,2 0 1 1 5,13 A 2,2 0 1 1 9,13 z', 'white-piece');
            sp.transform = 'translate(24,-4)';
            ret.paths.push(sp);
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgPieces, "blackRook", {
        get: function () {
            var ret = new SvgData();
            ret.paths.push(new SvgPath('M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z', 'black-body'));
            ret.paths.push(new SvgPath('M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z', 'black-body'));
            ret.paths.push(new SvgPath('M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z', 'black-body'));
            ret.paths.push(new SvgPath('M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z', 'black-body'));
            ret.paths.push(new SvgPath('M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z', 'black-body'));
            ret.paths.push(new SvgPath('M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z', 'black-body'));
            ret.paths.push(new SvgPath('M 12,35.5 L 33,35.5 L 33,35.5 ', 'black-piece  white-line'));
            ret.paths.push(new SvgPath('M 13,31.5 L 32,31.5 ', 'black-piece  white-line'));
            ret.paths.push(new SvgPath('M 14,29.5 L 31,29.5 ', 'black-piece  white-line'));
            ret.paths.push(new SvgPath('M 14,16.5 L 31,16.5 ', 'black-piece  white-line'));
            ret.paths.push(new SvgPath('M 11,14 L 34,14 ', 'black-piece  white-line'));
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgPieces, "whiteRook", {
        get: function () {
            var ret = new SvgData();
            ret.paths.push(new SvgPath('M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z', 'white-body'));
            ret.paths.push(new SvgPath('M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z', 'white-body'));
            ret.paths.push(new SvgPath('M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 ', 'white-body'));
            ret.paths.push(new SvgPath('M 34,14 L 31,17 L 14,17 L 11,14 ', 'white-body'));
            ret.paths.push(new SvgPath('M 31,17 L 31,29.5 L 14,29.5 L 14,17 ', 'white-body'));
            ret.paths.push(new SvgPath('M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5 ', 'white-body'));
            ret.paths.push(new SvgPath('M 11,14 L 34,14 ', 'white-piece  black-line'));
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgPieces, "blackBishop", {
        get: function () {
            var ret = new SvgData();
            ret.paths.push(new SvgPath('M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z', 'black-body'));
            ret.paths.push(new SvgPath('M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z', 'black-body'));
            ret.paths.push(new SvgPath('M 25,8 A 2.5,2.5 0 1 1 20,8 A 2.5,2.5 0 1 1 25,8 z', 'black-body'));
            ret.paths.push(new SvgPath('M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18 ', 'black-piece  white-line'));
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgPieces, "whiteBishop", {
        get: function () {
            var ret = new SvgData();
            ret.paths.push(new SvgPath('M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z', 'white-body'));
            ret.paths.push(new SvgPath('M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z', 'white-body'));
            // top circle:
            ret.paths.push(new SvgPath('M 25,8 A 2.5,2.5 0 1 1  20,8 A 2.5,2.5 0 1 1  25,8 z', 'white-body'));
            // middle cross and line:
            ret.paths.push(new SvgPath('M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18 ', 'white-piece  black-line'));
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgPieces, "blackKnight", {
        get: function () {
            var ret = new SvgData();
            ret.paths.push(new SvgPath('M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18 ', 'black-body'));
            ret.paths.push(new SvgPath('M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10 ', 'black-body'));
            // nostril:
            ret.paths.push(new SvgPath('M 9.5,25.5 A 0.5,0.5 0 1 1 8.5,25.5 A 0.5,0.5 0 1 1 9.5,25.5 z', 'black-piece  white-line'));
            // eye:
            var eye = new SvgPath('M 13.5,15 A 0.5,0.9 0 1 1 13,16 A 0.5,1.5 0 1 1 14,16 z', 'white-line');
            ret.paths.push(eye);
            // mane:
            ret.paths.push(new SvgPath('M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z', 'white-line-inner'));
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SvgPieces, "whiteKnight", {
        get: function () {
            var ret = new SvgData();
            ret.paths.push(new SvgPath('M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18 ', 'white-body'));
            ret.paths.push(new SvgPath('M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10 ', 'white-body'));
            // nostril:
            ret.paths.push(new SvgPath('M 9.5,25.5 A 0.5,0.5 0 1 1 8.5,25.5 A 0.5,0.5 0 1 1 9.5,25.5 z', 'white-piece  black-line'));
            // eye:
            var eye = new SvgPath('M 13.5,15 A 0.5,0.9 0 1 1 13,16 A 0.5,1.5 0 1 1 14,16 z', 'black-line');
            ret.paths.push(eye);
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    return SvgPieces;
}());



/***/ }),

/***/ "zB5p":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trainer/trainer.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n    <button class=\"again-button\" mat-icon-button matTooltip=\"Again\" (click)=\"redoSequence()\">\n        <mat-icon>redo\n        </mat-icon>\n    </button>\n    <button mat-icon-button matTooltip=\"Previous\" (click)=\"prevSequence()\">\n        <mat-icon>skip_previous\n        </mat-icon>\n    </button>\n    <button mat-icon-button matTooltip=\"Next\" (click)=\"nextSequence()\">\n        <mat-icon>skip_next\n        </mat-icon>\n    </button>\n</nav>\n\n<app-chessboard class=\"floating-box\"></app-chessboard>\n<section class=\"floating-box\" [style.max-width.px]=\"displayWidth\">\n    <section class=\"floating-box\" *ngIf=\"record !== undefined\">\n        <ul class=\"bullets\">\n            <li [ngStyle]=\"{color: record.colour}\">{{ record.name }}</li>\n            <li [ngStyle]=\"{color: record.colour}\">{{ \"Last completed with no mistakes: \" + record.lastSS }}</li>\n            <li [ngStyle]=\"{color: record.colour}\">{{ \"Next attempt due: \" + record.nextS }}</li>\n            <li [ngStyle]=\"{color: record.colour}\">{{ \"Last completed but with mistakes: \" + record.lastFS }}</li>\n        </ul>\n    </section>\n    <section class=\"floating-box\">\n        <ul class=\"bullets\" [ngStyle]=\"{color: outputColour}\">\n            <li *ngFor=\"let line of output\">{{ line }}</li>\n        </ul>\n    </section>\n</section>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "zkdS":
/*!****************************************!*\
  !*** ./src/app/not-found.component.ts ***!
  \****************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '<h2>Page not found</h2>'
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map