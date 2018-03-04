webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(navCtrl, formBuilder, nav) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.settingsForm = formBuilder.group({
            count: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(30)])],
            secondsLimit: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1)])]
        });
    }
    SettingsPage.prototype.onSubmit = function (value) {
        if (this.settingsForm.valid) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_2__game_game__["a" /* GamePage */], value);
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'settings',template:/*ion-inline-start:"D:\ionic\memory\memory\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="settingsForm" (ngSubmit)="onSubmit(settingsForm.value)">\n    <ion-item>\n      <ion-label floating>Number of boxes</ion-label>\n      <ion-input formControlName="count" type="number" value="4"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Time limit</ion-label>\n      <ion-input formControlName="secondsLimit" type="number" value="20"></ion-input>\n    </ion-item>\n\n    <button ion-button full color="primary" [disabled]="!settingsForm.valid" style="margin-top: 20px;" type="submit">Save</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\memory\memory\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_game__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__game_game__["a" /* GamePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\memory\memory\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Settings" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Game" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\ionic\memory\memory\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BoxState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoxState;
(function (BoxState) {
    BoxState[BoxState["Closed"] = 0] = "Closed";
    BoxState[BoxState["Open"] = 1] = "Open";
    BoxState[BoxState["Selected"] = 2] = "Selected";
    BoxState[BoxState["Error"] = 3] = "Error";
})(BoxState || (BoxState = {}));
/**
 * Generated class for the BoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BoxComponent = (function () {
    function BoxComponent() {
    }
    Object.defineProperty(BoxComponent.prototype, "value", {
        get: function () {
            var state = this.box.state;
            if (state === BoxState.Selected) {
                var interaction = this.box.interaction;
                return interaction < 0 ? "- " + (interaction * -1) : "+ " + interaction;
            }
            else if (state === BoxState.Closed) {
                return null;
            }
            return this.box.value;
        },
        enumerable: true,
        configurable: true
    });
    BoxComponent.prototype.getBoxClass = function () {
        return "box box-" + BoxState[this.box.state].toLowerCase();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BoxComponent.prototype, "box", void 0);
    BoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'box',template:/*ion-inline-start:"D:\ionic\memory\memory\src\components\box\box.html"*/'<!-- Generated template for the BoxComponent component -->\n<div [className]="getBoxClass()">\n <ion-item > {{value}} </ion-item>\n</div>\n'/*ion-inline-end:"D:\ionic\memory\memory\src\components\box\box.html"*/,
        })
    ], BoxComponent);
    return BoxComponent;
}());

//# sourceMappingURL=box.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimerService = (function () {
    function TimerService() {
        // const must be READONLY but need to change Web Storm typescript compiler before that :)
        this.END_PROGRESS = 100;
        // Observable string sources
        this.startSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.endSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.progressSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.start$ = this.startSource.asObservable();
        this.end$ = this.endSource.asObservable();
        this.progress$ = this.progressSource.asObservable();
    }
    TimerService.prototype.init = function (secondsLimit) {
        this.secondsLimit = secondsLimit;
    };
    TimerService.prototype.start = function () {
        this.clearInterval();
        this.startTimer();
        this.startSource.next();
    };
    TimerService.prototype.end = function () {
        this.clearInterval();
        this.changeProgress(this.END_PROGRESS);
        this.endSource.next();
    };
    TimerService.prototype.changeProgress = function (progress) {
        this.progressSource.next(progress);
    };
    TimerService.prototype.clearInterval = function () {
        clearInterval(this.intervalId);
    };
    TimerService.prototype.startTimer = function () {
        var _this = this;
        var progress = 0;
        this.changeProgress(progress);
        this.intervalId = setInterval(function () {
            progress += 1;
            _this.changeProgress(progress);
            if (progress >= _this.END_PROGRESS) {
                clearInterval(_this.intervalId);
                _this.end();
            }
        }, 10 * this.secondsLimit);
    };
    TimerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], TimerService);
    return TimerService;
}());

//# sourceMappingURL=timerService.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_game_game__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_timer_timer__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_keypad_keypad__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_box_box__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__components_timer_timer__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_keypad_keypad__["a" /* KeypadComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_box_box__["a" /* BoxComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\memory\memory\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionic\memory\memory\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_timerService__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TimerComponent = (function () {
    function TimerComponent(timerService) {
        var _this = this;
        this.timerService = timerService;
        this.progress = 0;
        this.subscription = timerService.progress$.subscribe(function (progress) {
            _this.progress = progress;
        });
    }
    TimerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'timer',template:/*ion-inline-start:"D:\ionic\memory\memory\src\components\timer\timer.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{progress}}%\n  </div>\n</div>'/*ion-inline-end:"D:\ionic\memory\memory\src\components\timer\timer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_timerService__["a" /* TimerService */]])
    ], TimerComponent);
    return TimerComponent;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeypadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Command;
(function (Command) {
    Command["Clear"] = "C";
    Command["Exit"] = "E";
})(Command || (Command = {}));
/**
 * Generated class for the KeypadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var KeypadComponent = (function () {
    function KeypadComponent() {
        this.value = "";
    }
    KeypadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onClean.subscribe(function (event) {
            _this.value = '';
        });
    };
    KeypadComponent.prototype.ngOnDestroy = function () {
        // needed if child gets re-created (eg on some model changes)
        // note that subsequent subscriptions on the same subject will fail
        // so the parent has to re-create parentSubject on changes
        this.onClean.unsubscribe();
    };
    KeypadComponent.prototype.onKeyTap = function (val) {
        var handleKey;
        if (isNaN(parseInt(val))) {
            handleKey = this.handleCommand.bind(this);
        }
        else {
            handleKey = this.handleNumber.bind(this);
        }
        var shouldUpdate = handleKey(val);
        if (shouldUpdate) {
            this.onUpdate(this.value);
        }
    };
    KeypadComponent.prototype.handleNumber = function (val) {
        if (this.value === '0') {
            this.value = '';
        }
        this.value += val;
        return true;
    };
    KeypadComponent.prototype.handleCommand = function (val) {
        if (val === Command.Clear) {
            this.value = "0";
            return false;
        }
        else if (val === Command.Exit) {
            this.value = "";
        }
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], KeypadComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"])
    ], KeypadComponent.prototype, "onClean", void 0);
    KeypadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'keypad',template:/*ion-inline-start:"D:\ionic\memory\memory\src\components\keypad\keypad.html"*/'\n  <ion-toolbar style="padding: 1.2rem">\n    <ion-title> &nbsp;{{value}}</ion-title>\n    <ion-buttons class="btn-row">\n      <button (click)="onKeyTap(\'1\')" class="btn" ion-button solid>1</button>\n      <button (click)="onKeyTap(\'2\')" class="btn" ion-button solid>2</button>\n      <button (click)="onKeyTap(\'3\')" class="btn" ion-button solid>3</button>\n      <button (click)="onKeyTap(\'E\')" class="btn" ion-button solid>E</button>\n    </ion-buttons>\n    <ion-buttons class="btn-row">\n      <button (click)="onKeyTap(\'4\')" class="btn" ion-button solid>4</button>\n      <button (click)="onKeyTap(\'5\')" class="btn" ion-button solid>5</button>\n      <button (click)="onKeyTap(\'6\')" class="btn" ion-button solid>6</button>\n      <button (click)="onKeyTap(\'C\')" class="btn" ion-button solid>C</button>\n    </ion-buttons>\n    <ion-buttons class="btn-row">\n      <button (click)="onKeyTap(\'7\')" class="btn" ion-button solid>7</button>\n      <button (click)="onKeyTap(\'8\')" class="btn" ion-button solid>8</button>\n      <button (click)="onKeyTap(\'9\')" class="btn" ion-button solid>9</button>\n      <button (click)="onKeyTap(\'0\')" class="btn" ion-button solid>0</button>\n    </ion-buttons>\n  </ion-toolbar>\n\n'/*ion-inline-end:"D:\ionic\memory\memory\src\components\keypad\keypad.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], KeypadComponent);
    return KeypadComponent;
}());

//# sourceMappingURL=keypad.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_box_box__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_timerService__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GamePage = (function () {
    function GamePage(navCtrl, navParams, timerService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timerService = timerService;
        this.onCleanKeypad = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.score = 0;
        this.index = 0;
        this.showKeypad = false;
        this.generateInitialValues(parseInt(navParams.data.count));
        // timer service
        this.timerService.init(parseInt(navParams.data.secondsLimit));
        this.timerService.end$.subscribe(function () { return _this.endGame(); });
    }
    GamePage.prototype.generateInitialValues = function (boxCount) {
        var _this = this;
        var difficulty = 20;
        this.boxData = Array(boxCount).fill(null).map(function () { return ({ value: _this.generateRandomNumber(difficulty), state: __WEBPACK_IMPORTED_MODULE_4__components_box_box__["b" /* BoxState */].Open, interaction: 0 }); });
        console.log("generateInitialValues", this.boxData);
    };
    GamePage.prototype.ngOnInit = function () {
        this.onUpdateBound = this.onUpdate.bind(this);
    };
    GamePage.prototype.generateRandomNumber = function (to, from) {
        if (from === void 0) { from = 1; }
        return Math.floor(Math.random() * to) + from;
    };
    GamePage.prototype.onUpdate = function (val) {
        if (val === '') {
            this.endGame();
            this.endTimer();
        }
        if (parseInt(val) === this.boxData[this.index].value) {
            this.boxData[this.index].state = __WEBPACK_IMPORTED_MODULE_4__components_box_box__["b" /* BoxState */].Closed;
            this.index++;
            if (this.index >= this.boxData.length) {
                this.index = 0;
            }
            this.cleanKeypad();
            this.score += 1;
            this.startGameRound();
        }
    };
    GamePage.prototype.cleanKeypad = function () {
        this.onCleanKeypad.next("Success");
    };
    GamePage.prototype.closeGame = function () {
        this.endTimer();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
    };
    GamePage.prototype.startGame = function () {
        this.showKeypad = true;
        this.hideBoxValues();
        this.startGameRound();
    };
    GamePage.prototype.startGameRound = function () {
        var difficulty = 5;
        var num = this.generateRandomNumber(difficulty);
        var sign = this.generateRandomNumber(2, 1);
        var box = this.boxData[this.index];
        if (box.value <= 5) {
            sign = 2;
        }
        if (sign === 1) {
            num = num * -1;
        }
        box.value += num;
        box.interaction = num;
        box.state = __WEBPACK_IMPORTED_MODULE_4__components_box_box__["b" /* BoxState */].Selected;
        this.startTimer();
    };
    GamePage.prototype.hideBoxValues = function () {
        this.boxData.forEach(function (box) { return box.state = __WEBPACK_IMPORTED_MODULE_4__components_box_box__["b" /* BoxState */].Closed; });
    };
    GamePage.prototype.endGame = function () {
        this.cleanKeypad();
        this.boxData.forEach(function (box) { return box.state = __WEBPACK_IMPORTED_MODULE_4__components_box_box__["b" /* BoxState */].Open; });
        this.boxData[this.index].state = __WEBPACK_IMPORTED_MODULE_4__components_box_box__["b" /* BoxState */].Error;
    };
    GamePage.prototype.startTimer = function () {
        this.timerService.start();
    };
    GamePage.prototype.endTimer = function () {
        this.timerService.end();
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"D:\ionic\memory\memory\src\pages\game\game.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Game\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <timer></timer>\n  <ion-item>Score: {{score}}</ion-item>\n  <ion-toolbar>\n    <button *ngIf="!showKeypad; else elseBlock" start (click)="startGame()" ion-button solid>Start</button>\n    <ng-template #elseBlock><button end (click)="closeGame()" ion-button solid>Close</button></ng-template>\n  </ion-toolbar>\n  <ion-list>\n    <box *ngFor="let box of boxData" [box]="box"></box>\n  </ion-list>\n  <keypad [onUpdate]="onUpdateBound" [onClean]="onCleanKeypad" [style.visibility]="showKeypad ? \'visible\' : \'hidden\'"></keypad>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\memory\memory\src\pages\game\game.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_timerService__["a" /* TimerService */]]
            /*directives: [TimerComponent]*/ // Directives was REMOVED !!!
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_timerService__["a" /* TimerService */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map