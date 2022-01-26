"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 7242:
/*!****************************************!*\
  !*** ./src/app/api/weather.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherService": () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3981);



let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
    }
    getWeather(text) {
        if (text.length === 0) {
            text = 'Zlín';
        }
        return this.http.get('https://api.weatherapi.com/v1/current.json?key=770217920e53414d85e193006222401&q=' + text + '&aqi=no');
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
WeatherService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], WeatherService);



/***/ }),

/***/ 8383:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 4265:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 8383);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 2371:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_Skola_Ionic_Projektos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab1.page.html */ 2817);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 8443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _api_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/weather.service */ 7242);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 872);






let Tab1Page = class Tab1Page {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.myinput = '';
        this.Teplota = '';
        this.PocTeplota = '';
        this.Lokacia = '';
        this.Vietor = '';
        this.SmerVetra = '';
        this.Oblacnost = '';
        this.Cas = '';
        this.Tlak = '';
        this.Viditelnost = '';
        this.KEY_HISTORY = "search_history";
        this.weatherService.getWeather("").subscribe((data) => {
            this.Teplota = data['current']['temp_c'];
            this.PocTeplota = data['current']['feelslike_c'];
            this.Vietor = data['current']['wind_kph'];
            this.SmerVetra = data['current']['wind_dir'];
            this.Oblacnost = data['current']['cloud'];
            this.Tlak = data['current']['pressure_in'];
            this.Viditelnost = data['current']['vis_km'];
            this.Lokacia = data['location']['country'];
            console.log(data);
        });
    }
    btnClicked() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.weatherService.getWeather(this.myinput).subscribe((data) => {
                this.Teplota = data['current']['temp_c'];
                this.PocTeplota = data['current']['feelslike_c'];
                this.Vietor = data['current']['wind_kph'];
                this.SmerVetra = data['current']['wind_dir'];
                this.Oblacnost = data['current']['cloud'];
                this.Tlak = data['current']['pressure_in'];
                this.Viditelnost = data['current']['vis_km'];
                this.Lokacia = data['location']['country'];
                console.log(data);
            });
            var entry = { "input": this.myinput };
            var history = JSON.parse((yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: this.KEY_HISTORY })).value);
            if (history == null) {
                history = [];
            }
            history.unshift(entry);
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                key: this.KEY_HISTORY,
                value: JSON.stringify(history),
            });
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _api_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab1',
        template: _E_Skola_Ionic_Projektos_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 2817:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/tab1.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<script type=\"module\" src=\"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js\"></script>\n    <script nomodule src=\"https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css\" />\n    <style>\n      :root {\n        --ion-safe-area-top: 20px;\n        --ion-safe-area-bottom: 22px;\n      }\n    </style>\n\n\n\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Weather API \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n  <ion-card-content>\n\n  <ion-input [(ngModel)]=\"myinput\" placeholder=\"Zlín\"></ion-input>\n\n  </ion-card-content>\n  <ion-button (click)=\"btnClicked()\" expand=\"block\">Zobraziť počasie</ion-button>\n  </ion-card>\n\n      <ion-item>\n        <ion-label>Teplota: </ion-label>\n        <ion-note slot=\"end\" color=\"primary\">{{ Teplota }} °C</ion-note>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>Pocitová teplota: </ion-label>\n        <ion-note slot=\"end\" color=\"primary\">{{ PocTeplota }} °C</ion-note>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Sila vetru: </ion-label>\n        <ion-note slot=\"end\" color=\"success\">{{ Vietor }} km/h </ion-note>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Smer vetru: </ion-label>\n        <ion-note slot=\"end\" color=\"success\">{{ SmerVetra }} </ion-note>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Oblačnosť: </ion-label>\n        <ion-note slot=\"end\" color=\"danger\">{{ Oblacnost }} %</ion-note>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Tlak: </ion-label>\n        <ion-note slot=\"end\" color=\"danger\">{{ Tlak }} pa</ion-note>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Viditelnosť: </ion-label>\n        <ion-note slot=\"end\" color=\"danger\">{{ Viditelnost }} km</ion-note>\n      </ion-item>\n\n      \n\n  </ion-content>\n");

/***/ }),

/***/ 8443:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map