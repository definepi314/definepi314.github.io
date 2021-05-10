(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ispatel\Documents\Adobe Xd\rogveda\src\main.ts */"zUnb");


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PliL":
/*!********************************************************************************************!*\
  !*** ./src/app/medical-search-results-sidenav/medical-search-results-sidenav.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MedicalSearchResultsSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalSearchResultsSidenavComponent", function() { return MedicalSearchResultsSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MedicalSearchResultsSidenavComponent {
    constructor() { }
    ngOnInit() {
    }
}
MedicalSearchResultsSidenavComponent.ɵfac = function MedicalSearchResultsSidenavComponent_Factory(t) { return new (t || MedicalSearchResultsSidenavComponent)(); };
MedicalSearchResultsSidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MedicalSearchResultsSidenavComponent, selectors: [["app-medical-search-results-sidenav"]], decls: 0, vars: 0, template: function MedicalSearchResultsSidenavComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpY2FsLXNlYXJjaC1yZXN1bHRzLXNpZGVuYXYuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TYpc":
/*!**********************************************************************!*\
  !*** ./src/app/medical-search-page/medical-search-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: MedicalSearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalSearchPageComponent", function() { return MedicalSearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_phrase_sharing_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-phrase-sharing-service.service */ "vuq7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class MedicalSearchPageComponent {
    constructor(router, searchPhraseSharingServiceService) {
        this.router = router;
        this.searchPhraseSharingServiceService = searchPhraseSharingServiceService;
        this.title = 'rogveda';
        this.searchPhrase = "";
        this.buttonValue1 = "Pain in hand";
        this.buttonValue2 = "Pain in hand while opening the lid of a jar";
        this.buttonValue3 = "Pain near thumb";
    }
    ngOnInit() {
    }
    goToSearchPage() {
        this.searchPhraseSharingServiceService.searchPhrase = this.searchPhrase;
        console.log("hey", this.searchPhrase);
        this.router.navigateByUrl("/searchResults");
    }
    goToSearchPag(event) {
        this.searchPhraseSharingServiceService.searchPhrase = event;
        console.log(event);
        this.router.navigateByUrl("/searchResults");
    }
}
MedicalSearchPageComponent.ɵfac = function MedicalSearchPageComponent_Factory(t) { return new (t || MedicalSearchPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_phrase_sharing_service_service__WEBPACK_IMPORTED_MODULE_2__["SearchPhraseSharingServiceService"])); };
MedicalSearchPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MedicalSearchPageComponent, selectors: [["app-medical-search-page"]], decls: 29, vars: 4, consts: [[1, "logo"], ["xmlns", "http://www.w3.org/2000/svg", "width", "238", "height", "75.389", "viewBox", "0 0 238 75.389"], ["id", "Group_7", "data-name", "Group 7", "transform", "translate(-815 -326.61)"], ["id", "Rogveda", "transform", "translate(815 389.999)", "fill", "#090909", "font-size", "60", "font-family", "Ubuntu"], ["x", "0", "y", "0"], ["id", "Component_1_1", "data-name", "Component 1 \u2013 1", "transform", "translate(1024.327 326.61)"], ["id", "Rectangle_1", "data-name", "Rectangle 1", "width", "6", "height", "25", "rx", "3", "transform", "matrix(0.574, 0.819, -0.819, 0.574, 20.479, 0)", "fill", "#f1ba07"], ["id", "Rectangle_2", "data-name", "Rectangle 2", "width", "6", "height", "23", "rx", "3", "transform", "matrix(0.574, 0.819, -0.819, 0.574, 21.84, 9.147)", "fill", "#9b07f1"], [1, "bar"], ["type", "text", "title", "Search", 1, "searchbar", 3, "ngModel", "ngModelChange"], ["xmlns", "http://www.w3.org/2000/svg", "width", "15.416", "height", "17.047", "viewBox", "0 0 15.416 17.047"], ["id", "Group_9", "data-name", "Group 9", "transform", "translate(-548 -475)"], ["id", "Ellipse_1", "data-name", "Ellipse 1", "transform", "translate(548 475)", "fill", "#fff", "stroke", "rgba(112,112,112,0.63)", "stroke-width", "1.8"], ["cx", "6.5", "cy", "6.5", "r", "6.5", "stroke", "none"], ["cx", "6.5", "cy", "6.5", "r", "5.6", "fill", "none"], ["id", "Rectangle_4", "data-name", "Rectangle 4", "transform", "translate(558.467 485.683) rotate(45)", "fill", "#a4a4a4", "stroke", "#a4a4a4", "stroke-linecap", "round", "stroke-linejoin", "bevel", "stroke-width", "1"], ["width", "7", "height", "2", "stroke", "none"], ["x", "0.5", "y", "0.5", "width", "6", "height", "1", "fill", "none"], [1, "search-buttons"], ["mat-raised-button", "", "color", "primary", 1, "search-button-purple", 3, "click"], ["mat-raised-button", "", "color", "accent", 1, "search-button-gold", 3, "click"], [1, "buttons"], ["mat-raised-button", "", "color", "primary", 1, "button", 3, "click"]], template: function MedicalSearchPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tspan", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Rogveda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MedicalSearchPageComponent_Template_input_ngModelChange_10_listener($event) { return ctx.searchPhrase = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "rect", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicalSearchPageComponent_Template_button_click_20_listener() { return ctx.goToSearchPag(ctx.buttonValue1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicalSearchPageComponent_Template_button_click_22_listener() { return ctx.goToSearchPag(ctx.buttonValue2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicalSearchPageComponent_Template_button_click_24_listener() { return ctx.goToSearchPag(ctx.buttonValue3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicalSearchPageComponent_Template_button_click_27_listener() { return ctx.goToSearchPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchPhrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonValue1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonValue2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonValue3);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".logo[_ngcontent-%COMP%]{\r\n    margin-top:200px;\r\n    margin-bottom:20px;\r\n    text-align: center;\r\n  }\r\n\r\n.bar[_ngcontent-%COMP%]{\r\n    margin:0 auto;\r\n    width:575px;\r\n    border-radius:30px;\r\n    border:1px solid #dcdddc;\r\n    text-align: center;\r\n  }\r\n.bar[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 1px 1px 8px 1px #dcdcdc;\r\n  }\r\n.bar[_ngcontent-%COMP%]:focus-within{\r\n    box-shadow: 1px 1px 8px 1px #dcdcdc;\r\n    outline:none;\r\n  }\r\n.searchbar[_ngcontent-%COMP%]{\r\n    height:45px;\r\n    border:none;\r\n    width:500px;\r\n    font-size:16px;\r\n    outline: none;\r\n    text-align: left;\r\n  }\r\n.buttons[_ngcontent-%COMP%]{\r\n    margin-top:10px;\r\n    text-align: center;\r\n  }\r\n.button[_ngcontent-%COMP%]{\r\n    background-color: #f5f5f5;\r\n    border:none;\r\n    color:#263238;\r\n    font-size:15px;\r\n    padding: 10px 20px;\r\n    margin:5px;\r\n    border-radius:4px;\r\n    outline:none;\r\n  }\r\n.button[_ngcontent-%COMP%]:hover{\r\n    border: 1px solid #c8c8c8;\r\n    padding: 9px 19px;\r\n    color:#808080;\r\n  }\r\n.button[_ngcontent-%COMP%]:focus{\r\n    padding: 9px 19px;\r\n  }\r\n.search-buttons[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-weight: bold;\r\n  }\r\n.search-button-purple[_ngcontent-%COMP%]{\r\n    border:none;\r\n    color:white;\r\n    font-size:15px;\r\n    padding: 10px 20px;\r\n    margin:5px;\r\n    border-radius:30px;\r\n    outline:none;\r\n  }\r\n.search-button-purple[_ngcontent-%COMP%]:hover, .search-button-purple[_ngcontent-%COMP%]:focus {\r\n    border: 1px solid #c8c8c8;\r\n    padding: 9px 19px;\r\n    color:white;\r\n    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);\r\n    transform: translateY(-0.25em);\r\n  }\r\n.search-button-gold[_ngcontent-%COMP%]{\r\n    border:none;\r\n    color:white;\r\n    font-size:15px;\r\n    padding: 10px 20px;\r\n    margin:5px;\r\n    border-radius:30px;\r\n    outline:none;\r\n  }\r\n.search-button-gold[_ngcontent-%COMP%]:hover, .search-button-gold[_ngcontent-%COMP%]:focus {\r\n    border: 1px solid #c8c8c8;\r\n    padding: 9px 19px;\r\n    color:white;\r\n    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);\r\n    transform: translateY(-0.25em);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYWwtc2VhcmNoLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQkc7QUFFRDtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLG1DQUFtQztFQUNyQztBQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLFlBQVk7RUFDZDtBQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsYUFBYTtFQUNmO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtBQUNBOztJQUVFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLDZDQUE2QztJQUM3Qyw4QkFBOEI7RUFDaEM7QUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtBQUNBOztJQUVFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLDZDQUE2QztJQUM3Qyw4QkFBOEI7RUFDaEMiLCJmaWxlIjoibWVkaWNhbC1zZWFyY2gtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XHJcbiAgICBtYXJnaW4tdG9wOjIwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuLyogdWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5saSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAgMCAwIDE4cHg7XHJcbn1cclxuI2JvdHRvbWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlNGU0ZTQ7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDIxNXB4O1xyXG4gICAgZm9udDogMTIuNXB4LzIwcHggQXJpYWw7XHJcbn1cclxuI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuI2JvdHRvbWJhciB1bCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjdweDtcclxuICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuI2JvdHRvbWxlZnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuI2JvdHRvbXJpZ2h0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMjdweDtcclxufSAqL1xyXG5cclxuICAuYmFye1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIHdpZHRoOjU3NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czozMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZGNkZGRjO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYmFyOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMXB4ICNkY2RjZGM7XHJcbiAgfVxyXG4gIC5iYXI6Zm9jdXMtd2l0aGlue1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMXB4ICNkY2RjZGM7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgfVxyXG4gIC5zZWFyY2hiYXJ7XHJcbiAgICBoZWlnaHQ6NDVweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAuYnV0dG9uc3tcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGNvbG9yOiMyNjMyMzg7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIG1hcmdpbjo1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICB9XHJcbiAgLmJ1dHRvbjpob3ZlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XHJcbiAgICBwYWRkaW5nOiA5cHggMTlweDtcclxuICAgIGNvbG9yOiM4MDgwODA7XHJcbiAgfVxyXG4gIC5idXR0b246Zm9jdXN7XHJcbiAgICBwYWRkaW5nOiA5cHggMTlweDtcclxuICB9XHJcbiAgLnNlYXJjaC1idXR0b25ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5zZWFyY2gtYnV0dG9uLXB1cnBsZXtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIG1hcmdpbjo1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgfVxyXG4gIC5zZWFyY2gtYnV0dG9uLXB1cnBsZTpob3ZlcixcclxuICAuc2VhcmNoLWJ1dHRvbi1wdXJwbGU6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcclxuICAgIHBhZGRpbmc6IDlweCAxOXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNWVtIDAuNWVtIC0wLjRlbSB2YXIoLS1ob3Zlcik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWJ1dHRvbi1nb2xke1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MzBweDtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICB9XHJcbiAgLnNlYXJjaC1idXR0b24tZ29sZDpob3ZlcixcclxuICAuc2VhcmNoLWJ1dHRvbi1nb2xkOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XHJcbiAgICBwYWRkaW5nOiA5cHggMTlweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVlbSAwLjVlbSAtMC40ZW0gdmFyKC0taG92ZXIpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xyXG4gIH0iXX0= */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _medical_search_results_medical_search_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./medical-search-results/medical-search-results.component */ "c11w");
/* harmony import */ var _medical_search_page_medical_search_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medical-search-page/medical-search-page.component */ "TYpc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _medical_search_results_sidenav_medical_search_results_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./medical-search-results-sidenav/medical-search-results-sidenav.component */ "PliL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-fusioncharts */ "sQwp");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! fusioncharts */ "j2hg");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! fusioncharts/fusioncharts.charts */ "8nMf");
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! fusioncharts/themes/fusioncharts.theme.fusion */ "UgYH");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var fusioncharts_fusioncharts_widgets__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! fusioncharts/fusioncharts.widgets */ "LqO8");
/* harmony import */ var fusioncharts_fusioncharts_widgets__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_widgets__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ "fXoL");




























//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
angular_fusioncharts__WEBPACK_IMPORTED_MODULE_21__["FusionChartsModule"].fcRoot(fusioncharts__WEBPACK_IMPORTED_MODULE_22__, fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_23__, fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_24__, fusioncharts_fusioncharts_widgets__WEBPACK_IMPORTED_MODULE_25__);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCarouselConfig"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
            angular_fusioncharts__WEBPACK_IMPORTED_MODULE_21__["FusionChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _medical_search_results_medical_search_results_component__WEBPACK_IMPORTED_MODULE_4__["MedicalSearchResultsComponent"],
        _medical_search_page_medical_search_page_component__WEBPACK_IMPORTED_MODULE_5__["MedicalSearchPageComponent"],
        _medical_search_results_sidenav_medical_search_results_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["MedicalSearchResultsSidenavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__["MatSliderModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
        angular_fusioncharts__WEBPACK_IMPORTED_MODULE_21__["FusionChartsModule"]] }); })();


/***/ }),

/***/ "c11w":
/*!****************************************************************************!*\
  !*** ./src/app/medical-search-results/medical-search-results.component.ts ***!
  \****************************************************************************/
/*! exports provided: MedicalSearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalSearchResultsComponent", function() { return MedicalSearchResultsComponent; });
/* harmony import */ var _medical_search_page_medical_search_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../medical-search-page/medical-search-page.component */ "TYpc");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _search_phrase_sharing_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-phrase-sharing-service.service */ "vuq7");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");














const _c0 = ["sliderRange"];
function MedicalSearchResultsComponent_mat_radio_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MedicalSearchResultsComponent_mat_radio_button_20_Template_mat_radio_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const i_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.checkGender(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r12, "");
} }
function MedicalSearchResultsComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 38);
} }
function MedicalSearchResultsComponent_mat_radio_button_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r15);
} }
function MedicalSearchResultsComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 40);
} }
function MedicalSearchResultsComponent_mat_radio_button_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r16);
} }
function MedicalSearchResultsComponent_mat_radio_button_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r17);
} }
function MedicalSearchResultsComponent_mat_radio_button_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", i_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r18);
} }
function MedicalSearchResultsComponent_mat_radio_button_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r19);
} }
function MedicalSearchResultsComponent_mat_radio_button_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-radio-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", i_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r20);
} }
class MedicalSearchResultsComponent {
    constructor(searchPhraseSharingServiceService, carousel) {
        this.searchPhraseSharingServiceService = searchPhraseSharingServiceService;
        this.searchPhrase = "de quervain";
        this.ageValue = 15;
        this.yesNos = ["Yes", "No"];
        this.genders = ["Male", "Female"];
        this.noOfDays = ["0-3 Days", "4+ Days"];
        this.painArray = ["YAS", "Yeah", "Mmkay", "Ouch", "Owwwww", "AHHHHHHH"];
        this.pain = [];
        this.disabled = true;
        this.gender = "Male";
        this.imageUrl = 'image.svg';
        this.image = 'https://www.completedietsolutions.org/Member/completedietsolutions/Images/woman-smiling-png-e1422243041656.png';
    }
    ngAfterViewInit() {
        // this.needle = $("#needle");
        // this.prevFace = ".faces #Ouch";
        jquery__WEBPACK_IMPORTED_MODULE_2__('.pain-scale__level').hover(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).addClass("pain-scale__level--active").prevAll().addClass("pain-scale__level--active");
        }, function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).removeClass("pain-scale__level--active").prevAll().removeClass("pain-scale__level--active");
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__('.pain-scale__level').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).siblings().removeClass("pain-scale__level--selected pain-scale__level--active-emoji");
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).addClass("pain-scale__level--selected pain-scale__level--active-emoji pain-scale__level--blink").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).removeClass("pain-scale__level--blink");
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).prevAll().addClass("pain-scale__level--selected pain-scale__level--blink").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).removeClass("pain-scale__level--blink");
            });
        });
    }
    ngOnInit() {
        console.log('trying to access');
        this.searchPhrase = this.searchPhraseSharingServiceService.searchPhrase;
        this.painArray = ["YAS", "Yeah", "Mmkay", "Ouch", "Owwwww", "AHHHHHHH"];
        for (var i = 0; i < this.painArray.length; i++) {
            this.pain[i] = this.painArray[i];
        }
    }
    findPainLevel(value) {
        var painLevel = Math.floor(value / (Math.round(100 / 6)));
        return painLevel;
    }
    checkGender(gender) {
        console.log("gender check", this.gender);
        if (gender == "Female") {
            this.disabled = false;
        }
        else {
            this.disabled = true;
        }
    }
    moveGauge(input) {
        var value = Number(input);
        var maxScale = 943;
        var minScale = 471;
        var maxDegree = 85;
        var scaledValue = ((maxScale - minScale) / 100) * value + minScale;
        var midScale = (maxScale - minScale) / 2 + minScale; // mid is actually rotate 0
        if (scaledValue <= midScale) {
            var rotate = 1;
        }
        else {
            var rotate = -1;
        }
        var scalePerDegree = (midScale - minScale) / maxDegree;
        var rotateValue = (midScale - scaledValue) / scalePerDegree;
        var rotation = rotate * rotateValue;
        var tl = new gsap__WEBPACK_IMPORTED_MODULE_1__["TimelineLite"]();
        tl.to(this.needle, 1, { rotation: rotateValue });
    }
    morphFace(painLevel) {
        var mouthExpression;
        console.log("painlvl ", painLevel);
        mouthExpression = "#mouth_" + painLevel;
        console.log("mouthexprn ", mouthExpression);
        var facialExpression = ".faces #" + this.pain[painLevel];
        console.log("facial ", facialExpression);
        var tl = new gsap__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]();
        tl.to("#mouth_3", 1, { morphSVG: mouthExpression });
        jquery__WEBPACK_IMPORTED_MODULE_2__(this.prevFace).css("visibility", "hidden");
        jquery__WEBPACK_IMPORTED_MODULE_2__(facialExpression).css("visibility", "visible");
        this.prevFace = facialExpression;
    }
    visibilityChange(value) {
        var currentLevel = Number(value.target.value);
        var painLevel = this.findPainLevel(currentLevel);
        this.moveGauge(currentLevel);
        this.morphFace(painLevel);
    }
    formatLabel(value) {
        return value;
    }
    onMouseEnter(event) {
        event.target.click();
    }
}
MedicalSearchResultsComponent.ɵfac = function MedicalSearchResultsComponent_Factory(t) { return new (t || MedicalSearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_search_phrase_sharing_service_service__WEBPACK_IMPORTED_MODULE_4__["SearchPhraseSharingServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"])); };
MedicalSearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MedicalSearchResultsComponent, selectors: [["app-medical-search-results"]], viewQuery: function MedicalSearchResultsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_medical_search_page_medical_search_page_component__WEBPACK_IMPORTED_MODULE_0__["MedicalSearchPageComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.medicalSearchPage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
    } }, decls: 104, vars: 16, consts: [["color", "primary"], [1, "bar"], ["type", "text", "title", "Search", 1, "searchbar", 3, "ngModel", "ngModelChange"], ["xmlns", "http://www.w3.org/2000/svg", "width", "15.416", "height", "17.047", "viewBox", "0 0 15.416 17.047"], ["id", "Group_9", "data-name", "Group 9", "transform", "translate(-548 -475)"], ["id", "Ellipse_1", "data-name", "Ellipse 1", "transform", "translate(548 475)", "fill", "#fff", "stroke", "rgba(112,112,112,0.63)", "stroke-width", "1.8"], ["cx", "6.5", "cy", "6.5", "r", "6.5", "stroke", "none"], ["cx", "6.5", "cy", "6.5", "r", "5.6", "fill", "none"], ["id", "Rectangle_4", "data-name", "Rectangle 4", "transform", "translate(558.467 485.683) rotate(45)", "fill", "#a4a4a4", "stroke", "#a4a4a4", "stroke-linecap", "round", "stroke-linejoin", "bevel", "stroke-width", "1"], ["width", "7", "height", "2", "stroke", "none"], ["x", "0.5", "y", "0.5", "width", "6", "height", "1", "fill", "none"], ["color", "primary", 3, "hasBackdrop"], ["mode", "over", "opened", "true"], ["sidenav", ""], [1, "example-h2"], [1, "example-section"], [3, "ngModel", "ngModelChange"], ["class", "example-margin", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "example-margin", 3, "disabled"], ["thumbLabel", "", "tickInterval", "1", "min", "1", "max", "130", 3, "displayWith", "ngModel", "ngModelChange"], ["deQuervain", ""], ["type", "button", "placement", "top", "popoverTitle", "De Quervain's Test", "triggers", "mouseenter:mouseleave", 1, "btn", "btn-primary", 3, "ngbPopover"], ["class", "example-margin", 3, "value", 4, "ngFor", "ngForOf"], ["finkelsteinTest", ""], ["type", "button", "placement", "top", "popoverTitle", "Finkelstein's Test", "triggers", "mouseenter:mouseleave", 1, "btn", "btn-primary", 3, "ngbPopover"], ["type", "button", 1, "btn", "btn-primary"], [1, "pain-scale"], [1, "pain-scale__level", "pain-scale__level--1"], [1, "pain-scale__number"], [1, "pain-scale__emoji"], [1, "pain-scale__level", "pain-scale__level--3"], [1, "pain-scale__level", "pain-scale__level--6"], [1, "pain-scale__level", "pain-scale__level--9"], [1, "pain-scale__level", "pain-scale__level--10"], [1, "legend"], [1, "legend__beginning"], [1, "legend__end"], [1, "example-margin", 3, "value", "click"], ["src", "/assets/images/De quervain gif.gif", "width", "140", "height", "180"], [1, "example-margin", 3, "value"], ["src", "/assets/images/finkelstein_test.jpg", "width", "140", "height", "180"]], template: function MedicalSearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MedicalSearchResultsComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchPhrase = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "circle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-sidenav-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-sidenav", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-radio-group", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MedicalSearchResultsComponent_Template_mat_radio_group_ngModelChange_19_listener($event) { return ctx.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, MedicalSearchResultsComponent_mat_radio_button_20_Template, 2, 2, "mat-radio-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Pregnant");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-slider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MedicalSearchResultsComponent_Template_mat_slider_ngModelChange_27_listener($event) { return ctx.ageValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, MedicalSearchResultsComponent_ng_template_30_Template, 1, 0, "ng-template", 0, 20, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " Does it pain when you do this ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, MedicalSearchResultsComponent_mat_radio_button_35_Template, 2, 2, "mat-radio-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, MedicalSearchResultsComponent_ng_template_38_Template, 1, 0, "ng-template", 0, 23, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Does it pain at this area ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, MedicalSearchResultsComponent_mat_radio_button_43_Template, 2, 2, "mat-radio-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Have you tried any medication ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, MedicalSearchResultsComponent_mat_radio_button_49_Template, 2, 2, "mat-radio-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "How strong is your pain?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " \uD83D\uDE0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " \uD83D\uDE03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " \uD83D\uDE10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " \uD83D\uDE16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " \uD83D\uDE2D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Mild");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Very severe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Duration of pain");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, MedicalSearchResultsComponent_mat_radio_button_90_Template, 2, 2, "mat-radio-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "History of Injury");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, MedicalSearchResultsComponent_mat_radio_button_96_Template, 2, 2, "mat-radio-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Fever History");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](102, MedicalSearchResultsComponent_mat_radio_button_102_Template, 2, 2, "mat-radio-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](31);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchPhrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hasBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.genders);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Age: ", ctx.ageValue, " years");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx.formatLabel)("ngModel", ctx.ageValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbPopover", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.yesNos);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbPopover", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.yesNos);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.yesNos);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.noOfDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.yesNos);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.yesNos);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSlider"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopover"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioButton"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat');\r\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,500\");\r\n.example-section[_ngcontent-%COMP%] {\r\n  margin: 12px 0;\r\n}\r\n.example-h2[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\nmat-slider[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n.example-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n.example-margin[_ngcontent-%COMP%], .history-injury[_ngcontent-%COMP%], .history-fever[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n.mat-card-content[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\r\n.mat-toolbar[_ngcontent-%COMP%]{\r\nheight: 21vh;\r\n}\r\n.mat-sidenav-container[_ngcontent-%COMP%]{\r\nbackground-color: whitesmoke;\r\nmin-height: 93vh !important;\r\n}\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  font-size: 110%;\r\n  white-space: normal;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  font-size: 110%;\r\n  min-width: -webkit-min-content;\r\n  min-width: min-content;\r\n}\r\n.example-icon[_ngcontent-%COMP%] {\r\n  padding: 0 14px;\r\n}\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n.mat-sidenav-content[_ngcontent-%COMP%]{\r\n    font-size: 200%;\r\n    text-align: center;\r\n}\r\n.toolbar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #9B07F1;\r\n    color: white;\r\n    font-weight: 600;\r\n  }\r\n.bar[_ngcontent-%COMP%]{\r\n    margin:0 auto;\r\n    width:875px;\r\n    border-radius:30px;\r\n    border:1px solid #dcdddc;\r\n    background-color: white;\r\n    text-align: center;\r\n  }\r\n.bar[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 1px 1px 8px 1px #dcdcdc;\r\n  }\r\n.bar[_ngcontent-%COMP%]:focus-within{\r\n    box-shadow: 1px 1px 8px 1px #dcdcdc;\r\n    outline:none;\r\n  }\r\n.searchbar[_ngcontent-%COMP%]{\r\n    height:35px;\r\n    border:none;\r\n    width:800px;\r\n    font-size:16px;\r\n    outline: none;\r\n    text-align: left;\r\n  }\r\n\r\nbody[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\nli[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n  }\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n    box-sizing: border-box;\r\n  }\r\nbody[_ngcontent-%COMP%] {\r\n    background-color: #f3f5f7;\r\n    font-size: 15px;\r\n    line-height: 1.4675;\r\n    color: #555;\r\n  }\r\nh3[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    color: #2b3535;\r\n    margin-bottom: 32px;\r\n  }\r\n.wrapper[_ngcontent-%COMP%] {\r\n    margin: 50px auto 0 auto;\r\n    padding: 120px 20px 130px 20px;\r\n    max-width: 779px;\r\n    background: #fff;\r\n    box-shadow: 0 1px 3px 0 rgba(148, 164, 179, 0.329);\r\n    border-radius: 5px;\r\n    text-align: center;\r\n  }\r\n@media (min-width: 768px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      padding: 120px 30px 130px 30px;\r\n    }\r\n  }\r\n.pain-scale[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    max-width: 450px;\r\n    margin: 0 auto;\r\n  }\r\n.pain-scale[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 1px;\r\n    height: 32px;\r\n    top: 45px;\r\n    left: 0;\r\n    background-color: #dbe1e6;\r\n  }\r\n.pain-scale[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 1px;\r\n    height: 32px;\r\n    top: 45px;\r\n    right: 0;\r\n    background-color: #dbe1e6;\r\n  }\r\n.pain-scale__level[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 19%;\r\n    height: 2em;\r\n    background: #e7ebee;\r\n    transition: all 0.2s ease;\r\n    cursor: pointer;\r\n    margin: -2px;\r\n    z-index: 1;\r\n  }\r\n.pain-scale__level[_ngcontent-%COMP%]:hover   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n.pain-scale__level.pain-scale__level--active-emoji[_ngcontent-%COMP%] {\r\n    width: 3em;\r\n  }\r\n.pain-scale__level.pain-scale__level--active-emoji[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n.pain-scale__level--1[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--1[_ngcontent-%COMP%] {\r\n    background-color: #fcc419;\r\n  }\r\n.pain-scale__level--1[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--1[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #fcc419;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--2[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--2[_ngcontent-%COMP%] {\r\n    background-color: #f8ae1d;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--2[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--2[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #f8ae1d;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--3[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--3[_ngcontent-%COMP%] {\r\n    background-color: #f5a01f;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--3[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--3[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #f5a01f;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--4[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--4[_ngcontent-%COMP%] {\r\n    background-color: #f39122;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--4[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--4[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #f39122;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--5[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--5[_ngcontent-%COMP%] {\r\n    background-color: #f08224;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--5[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--5[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #f08224;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--6[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--6[_ngcontent-%COMP%] {\r\n    background-color: #ed7427;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--6[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--6[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #ed7427;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--7[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--7[_ngcontent-%COMP%] {\r\n    background-color: #ea6529;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--7[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--7[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #ea6529;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--8[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--8[_ngcontent-%COMP%] {\r\n    background-color: #e7562b;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--8[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--8[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #e7562b;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--9[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--9[_ngcontent-%COMP%] {\r\n    background-color: #e5482e;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--9[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--9[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #e5482e;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--10[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--10[_ngcontent-%COMP%] {\r\n    background-color: #e03131;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--10[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--10[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #e03131;\r\n  }\r\n.pain-scale__level--blink[_ngcontent-%COMP%] {\r\n    animation: fade 0.2s ease;\r\n  }\r\n.pain-scale__number[_ngcontent-%COMP%] {\r\n    display: block;\r\n    display: none;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 0;\r\n    height: 32px;\r\n    padding-top: 5px;\r\n  }\r\n.pain-scale__emoji[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    left: 5px;\r\n    font-size: 2em;\r\n    padding-top: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 100;\r\n    background: #e8552b;\r\n    border: 2px solid white;\r\n    border-radius: 20%;\r\n    color: white;\r\n    width: auto;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n  }\r\n.legend[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    max-width: 450px;\r\n    margin: 0 auto;\r\n  }\r\n.legend__beginning[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 30px;\r\n  }\r\n@media (min-width: 768px) {\r\n    .legend__beginning[_ngcontent-%COMP%] {\r\n      transform: translatex(-50%);\r\n    }\r\n  }\r\n.legend__end[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 30px;\r\n  }\r\n@media (min-width: 768px) {\r\n    .legend__end[_ngcontent-%COMP%] {\r\n      transform: translatex(50%);\r\n    }\r\n  }\r\n@keyframes fade {\r\n    0% {\r\n      opacity: 1;\r\n    }\r\n    50% {\r\n      opacity: 0.6;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYWwtc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7QUFDakUscUVBQXFFO0FBRXJFO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBRUE7QUFDQSw0QkFBNEI7QUFDNUIsMkJBQTJCO0FBQzNCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUFzQjtFQUF0QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLG1DQUFtQztFQUNyQztBQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLFlBQVk7RUFDZDtBQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFHQSxnQkFBZ0I7QUFDaEI7O0lBRUUsU0FBUztJQUNULFVBQVU7RUFDWjtBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUE7Ozs7O0lBS0UsU0FBUztFQUNYO0FBRUEsY0FBYztBQUNkOzs7SUFHRSxzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtBQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0RBQWtEO0lBQ2xELGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFO01BQ0UsOEJBQThCO0lBQ2hDO0VBQ0Y7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxPQUFPO0lBQ1AseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUix5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtFQUNaO0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFlBQVk7SUFDWixTQUFTO0lBQ1QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7RUFDWDtBQUNBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0VBQ1g7QUFDQTtJQUNFO01BQ0UsMEJBQTBCO0lBQzVCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGO0FBR0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEdHIiwiZmlsZSI6Im1lZGljYWwtc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCcpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMFwiKTtcclxuXHJcbi5leGFtcGxlLXNlY3Rpb24ge1xyXG4gIG1hcmdpbjogMTJweCAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oMiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5tYXQtc2xpZGVyIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLW1hcmdpbiwgLmhpc3RvcnktaW5qdXJ5LCAuaGlzdG9yeS1mZXZlciB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50e1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5oMntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLm1hdC10b29sYmFye1xyXG5oZWlnaHQ6IDIxdmg7XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdi1jb250YWluZXJ7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbm1pbi1oZWlnaHQ6IDkzdmggIWltcG9ydGFudDtcclxufVxyXG5cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMTAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBmb250LXNpemU6IDExMCU7XHJcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcclxufVxyXG5cclxuLmV4YW1wbGUtaWNvbiB7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYtY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMjAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUIwN0YxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC5iYXJ7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgd2lkdGg6ODc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNkY2RkZGM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmJhcjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IDFweCAjZGNkY2RjO1xyXG4gIH1cclxuICAuYmFyOmZvY3VzLXdpdGhpbntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IDFweCAjZGNkY2RjO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gIH1cclxuICAuc2VhcmNoYmFye1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHdpZHRoOjgwMHB4O1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIFxyXG4gIC8qIEJlZ2luIHJlc2V0ICovXHJcbiAgYm9keSxcclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICBcclxuICBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCxcclxuICBoNSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEVuZCByZXNldCAqL1xyXG4gICosXHJcbiAgKjpiZWZvcmUsXHJcbiAgKjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y1Zjc7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Njc1O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgfVxyXG4gIFxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzJiMzUzNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvIDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDEyMHB4IDIwcHggMTMwcHggMjBweDtcclxuICAgIG1heC13aWR0aDogNzc5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgxNDgsIDE2NCwgMTc5LCAwLjMyOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nOiAxMjBweCAzMHB4IDEzMHB4IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWluLXNjYWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLnBhaW4tc2NhbGU6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgdG9wOiA0NXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmUxZTY7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgdG9wOiA0NXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlMWU2O1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE5JTtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZWJlZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IC0ycHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWw6aG92ZXIgLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLWVtb2ppIHtcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLWVtb2ppIC5wYWluLXNjYWxlX19lbW9qaSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLTEsIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYzQxOTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS0xIC5wYWluLXNjYWxlX19lbW9qaSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tMSAucGFpbi1zY2FsZV9fZW1vamkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYzQxOTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTIsIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4YWUxZDtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTIgLnBhaW4tc2NhbGVfX2Vtb2ppLCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS0yIC5wYWluLXNjYWxlX19lbW9qaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhhZTFkO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tMywgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVhMDFmO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tMyAucGFpbi1zY2FsZV9fZW1vamksIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTMgLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWEwMWY7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS00LCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS00IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzkxMjI7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS00IC5wYWluLXNjYWxlX19lbW9qaSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tNCAucGFpbi1zY2FsZV9fZW1vamkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOTEyMjtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTUsIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwODIyNDtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTUgLnBhaW4tc2NhbGVfX2Vtb2ppLCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS01IC5wYWluLXNjYWxlX19lbW9qaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4MjI0O1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tNiwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tNiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ3NDI3O1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tNiAucGFpbi1zY2FsZV9fZW1vamksIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTYgLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDc0Mjc7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS03LCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS03IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTY1Mjk7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS03IC5wYWluLXNjYWxlX19lbW9qaSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tNyAucGFpbi1zY2FsZV9fZW1vamkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNjUyOTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTgsIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NTYyYjtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTggLnBhaW4tc2NhbGVfX2Vtb2ppLCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS04IC5wYWluLXNjYWxlX19lbW9qaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc1NjJiO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tOSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tOSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU0ODJlO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tOSAucGFpbi1zY2FsZV9fZW1vamksIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTkgLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTQ4MmU7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS0xMCwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tMTAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwMzEzMTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTEwIC5wYWluLXNjYWxlX19lbW9qaSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tMTAgLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDMxMzE7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYmxpbmsge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlIDAuMnMgZWFzZTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX251bWJlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fZW1vamkge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgYmFja2dyb3VuZDogI2U4NTUyYjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIH1cclxuICBcclxuICAubGVnZW5kIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmxlZ2VuZF9fYmVnaW5uaW5nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmxlZ2VuZF9fYmVnaW5uaW5nIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC01MCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAubGVnZW5kX19lbmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmxlZ2VuZF9fZW5kIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDUwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4vKiAjc2NhbGV7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgc3Ryb2tlLXdpZHRoOiA1MDtcclxuICBmaWxsOiBub25lO1xyXG59XHJcblxyXG4jWUFTe1xyXG4gIHN0cm9rZTogIzI5Y2U1ODtcclxuICBzdHJva2UtZGFzaGFycmF5OiA0NzEsIDk0MztcclxufVxyXG5cclxuI1llYWh7XHJcbiAgc3Ryb2tlOiAjODdkMTljO1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDM5MywgOTQzO1xyXG59XHJcblxyXG4jTW1rYXl7XHJcbiAgc3Ryb2tlOiAjZmZkNjUxO1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMxNSwgOTQzO1xyXG59XHJcblxyXG4jT3VjaHtcclxuICBzdHJva2U6ICNlZjk2MWE7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjM3LCA5NDM7XHJcbn1cclxuXHJcbiNPd3d3d3d7XHJcbiAgc3Ryb2tlOiAjZjI2ZDBlO1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDE1OSwgOTQzO1xyXG59XHJcblxyXG4jQUhISEhISEh7XHJcbiAgc3Ryb2tlOiAjY2UyZDJkO1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDgxLCA5NDM7XHJcbn1cclxuXHJcbiNuZWVkbGV7XHJcbiAgZmlsbDogIzY2QjlCRjtcclxufVxyXG5cclxuI2NvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICNFRUFBN0I7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZhY2Vze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogMjAlO1xyXG4gIHRvcDogMzclO1xyXG4gIGxlZnQ6IDQwJTtcclxufVxyXG5cclxuLmZhY2VzICNZQVMsIC5mYWNlcyAjWWVhaCwgLmZhY2VzICNNbWtheSwgLmZhY2VzICNPd3d3d3csIC5mYWNlcyAjQUhISEhISEh7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4jc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBcclxufVxyXG5cclxuaDEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYwJTtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICByaWdodDogMDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4jc2xpZGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA3MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2QjlCRjsgXHJcbn1cclxuXHJcbiNzbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3NsaWRlcjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTsgXHJcbn1cclxuXHJcbiNsZXZlbCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTVwdDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0b3A6IDc1JTtcclxuICB3aWR0aDogMTAlO1xyXG4gIGxlZnQ6IDQ1JTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgZm9udC1zaXplOiAuOWVtO1xyXG4gIGNvbG9yOiAjRUVBQTdCO1xyXG59ICovIl19 */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _medical_search_results_medical_search_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medical-search-results/medical-search-results.component */ "c11w");
/* harmony import */ var _medical_search_page_medical_search_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medical-search-page/medical-search-page.component */ "TYpc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _medical_search_page_medical_search_page_component__WEBPACK_IMPORTED_MODULE_2__["MedicalSearchPageComponent"] },
    { path: 'searchResults', component: _medical_search_results_medical_search_results_component__WEBPACK_IMPORTED_MODULE_1__["MedicalSearchResultsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vuq7":
/*!**********************************************************!*\
  !*** ./src/app/search-phrase-sharing-service.service.ts ***!
  \**********************************************************/
/*! exports provided: SearchPhraseSharingServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPhraseSharingServiceService", function() { return SearchPhraseSharingServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchPhraseSharingServiceService {
    constructor() { }
    set searchPhrase(searchPhrase) {
        this._searchPhrase = searchPhrase;
    }
    get searchPhrase() {
        return this._searchPhrase;
    }
}
SearchPhraseSharingServiceService.ɵfac = function SearchPhraseSharingServiceService_Factory(t) { return new (t || SearchPhraseSharingServiceService)(); };
SearchPhraseSharingServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchPhraseSharingServiceService, factory: SearchPhraseSharingServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map