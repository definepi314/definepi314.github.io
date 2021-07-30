(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+0H/":
/*!****************************************************************!*\
  !*** ./src/app/pain-score-table/pain-score-table.component.ts ***!
  \****************************************************************/
/*! exports provided: PainScoreTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainScoreTableComponent", function() { return PainScoreTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


class PainScoreTableComponent {
    constructor() { }
    ngAfterViewInit() {
        $('.pain-scale__level').hover(function () {
            $(this).addClass("pain-scale__level--active").prevAll().addClass("pain-scale__level--active");
        }, function () {
            $(this).removeClass("pain-scale__level--active").prevAll().removeClass("pain-scale__level--active");
        });
        $('.pain-scale__level').click(function () {
            $(this).siblings().removeClass("pain-scale__level--selected pain-scale__level--active-emoji");
            $(this).addClass("pain-scale__level--selected pain-scale__level--active-emoji pain-scale__level--blink").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                $(this).removeClass("pain-scale__level--blink");
            });
            $(this).prevAll().addClass("pain-scale__level--selected pain-scale__level--blink").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                $(this).removeClass("pain-scale__level--blink");
            });
        });
    }
    ngOnInit() {
    }
}
PainScoreTableComponent.ɵfac = function PainScoreTableComponent_Factory(t) { return new (t || PainScoreTableComponent)(); };
PainScoreTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PainScoreTableComponent, selectors: [["app-pain-score-table"]], decls: 177, vars: 0, consts: [[1, "example-h2"], [1, "pain-scale"], [1, "pain-scale__level", "pain-scale__level--1"], [1, "pain-scale__number"], [1, "pain-scale__emoji"], [1, "pain-scale__level", "pain-scale__level--3"], [1, "pain-scale__level", "pain-scale__level--6"], [1, "pain-scale__level", "pain-scale__level--9"], [1, "pain-scale__level", "pain-scale__level--10"]], template: function PainScoreTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How strong has been your pain (in past 7 days) in following scenarios ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Wrist at rest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \uD83D\uDE0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \uD83D\uDE03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \uD83D\uDE10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \uD83D\uDE16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \uD83D\uDE2D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mild");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Very Severe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "When doing a task with repeated wrist movement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \uD83D\uDE0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \uD83D\uDE03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \uD83D\uDE10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " \uD83D\uDE16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " \uD83D\uDE2D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Mild");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Very Severe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "When lifting a heavy object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " \uD83D\uDE0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " \uD83D\uDE03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " \uD83D\uDE10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " \uD83D\uDE16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " \uD83D\uDE2D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Mild");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Very Severe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "When it is at its worst");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " \uD83D\uDE0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " \uD83D\uDE03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " \uD83D\uDE10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " \uD83D\uDE16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " \uD83D\uDE2D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Mild");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Very Severe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "How often do you have pain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " \uD83D\uDE0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " \uD83D\uDE03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " \uD83D\uDE10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " \uD83D\uDE16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " \uD83D\uDE2D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Rarely");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Always");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat');\r\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,500\");\r\n.example-section[_ngcontent-%COMP%] {\r\n  margin: 12px 0;\r\n}\r\n.example-h2[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\nmat-slider[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n.example-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n.example-margin[_ngcontent-%COMP%], .history-injury[_ngcontent-%COMP%], .history-fever[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n.mat-card-content[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\r\n.mat-toolbar[_ngcontent-%COMP%]{\r\nheight: 21vh;\r\n}\r\n.mat-sidenav-container[_ngcontent-%COMP%]{\r\nbackground-color: whitesmoke;\r\nmin-height: 93vh !important;\r\n}\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  font-size: 110%;\r\n  white-space: normal;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  font-size: 110%;\r\n  min-width: -webkit-min-content;\r\n  min-width: min-content;\r\n}\r\n.example-icon[_ngcontent-%COMP%] {\r\n  padding: 0 14px;\r\n}\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n.toolbar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #9B07F1;\r\n    color: white;\r\n    font-weight: 600;\r\n  }\r\n.bar[_ngcontent-%COMP%]{\r\n    margin:0 auto;\r\n    width:875px;\r\n    border-radius:30px;\r\n    border:1px solid #dcdddc;\r\n    background-color: white;\r\n    text-align: center;\r\n  }\r\n.bar[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 1px 1px 8px 1px #dcdcdc;\r\n  }\r\n.bar[_ngcontent-%COMP%]:focus-within{\r\n    box-shadow: 1px 1px 8px 1px #dcdcdc;\r\n    outline:none;\r\n  }\r\n.searchbar[_ngcontent-%COMP%]{\r\n    height:35px;\r\n    border:none;\r\n    width:800px;\r\n    font-size:16px;\r\n    outline: none;\r\n    text-align: left;\r\n  }\r\n\r\nbody[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\nli[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n  }\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n    box-sizing: border-box;\r\n  }\r\nbody[_ngcontent-%COMP%] {\r\n    background-color: #f3f5f7;\r\n    font-size: 15px;\r\n    line-height: 1.4675;\r\n    color: #555;\r\n  }\r\nh3[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    color: #2b3535;\r\n    margin-bottom: 32px;\r\n  }\r\n.wrapper[_ngcontent-%COMP%] {\r\n    margin: 50px auto 0 auto;\r\n    padding: 120px 20px 130px 20px;\r\n    max-width: 779px;\r\n    background: #fff;\r\n    box-shadow: 0 1px 3px 0 rgba(148, 164, 179, 0.329);\r\n    border-radius: 5px;\r\n    text-align: center;\r\n  }\r\n@media (min-width: 768px) {\r\n    .wrapper[_ngcontent-%COMP%] {\r\n      padding: 120px 30px 130px 30px;\r\n    }\r\n  }\r\n.pain-scale[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    max-width: 450px;\r\n    margin: 0 auto;\r\n  }\r\n.pain-scale[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 1px;\r\n    height: 32px;\r\n    top: 45px;\r\n    left: 0;\r\n    background-color: #dbe1e6;\r\n  }\r\n.pain-scale[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 1px;\r\n    height: 32px;\r\n    top: 45px;\r\n    right: 0;\r\n    background-color: #dbe1e6;\r\n  }\r\n.pain-scale__level[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 19%;\r\n    height: 2em;\r\n    background: #e7ebee;\r\n    transition: all 0.2s ease;\r\n    cursor: pointer;\r\n    margin: -2px;\r\n    z-index: 1;\r\n  }\r\n.pain-scale__level[_ngcontent-%COMP%]:hover   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n.pain-scale__level.pain-scale__level--active-emoji[_ngcontent-%COMP%] {\r\n    width: 3em;\r\n  }\r\n.pain-scale__level.pain-scale__level--active-emoji[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n  }\r\n.pain-scale__level--1[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--1[_ngcontent-%COMP%] {\r\n    background-color: #fcc419;\r\n  }\r\n.pain-scale__level--1[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--1[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #fcc419;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--2[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--2[_ngcontent-%COMP%] {\r\n    background-color: #f8ae1d;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--2[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--2[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #f8ae1d;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--3[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--3[_ngcontent-%COMP%] {\r\n    background-color: #f5a01f;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--3[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--3[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #f5a01f;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--4[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--4[_ngcontent-%COMP%] {\r\n    background-color: #f39122;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--4[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--4[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #f39122;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--5[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--5[_ngcontent-%COMP%] {\r\n    background-color: #f08224;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--5[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--5[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #f08224;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--6[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--6[_ngcontent-%COMP%] {\r\n    background-color: #ed7427;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--6[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--6[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #ed7427;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--7[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--7[_ngcontent-%COMP%] {\r\n    background-color: #ea6529;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--7[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--7[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #ea6529;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--8[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--8[_ngcontent-%COMP%] {\r\n    background-color: #e7562b;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--8[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--8[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #e7562b;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--9[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--9[_ngcontent-%COMP%] {\r\n    background-color: #e5482e;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--9[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--9[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #e5482e;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--10[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--10[_ngcontent-%COMP%] {\r\n    background-color: #e03131;\r\n  }\r\n.pain-scale__level--active.pain-scale__level--10[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%], .pain-scale__level--selected.pain-scale__level--10[_ngcontent-%COMP%]   .pain-scale__emoji[_ngcontent-%COMP%] {\r\n    background-color: #e03131;\r\n  }\r\n.pain-scale__level--blink[_ngcontent-%COMP%] {\r\n    animation: fade 0.2s ease;\r\n  }\r\n.pain-scale__number[_ngcontent-%COMP%] {\r\n    display: block;\r\n    display: none;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 0;\r\n    height: 32px;\r\n    padding-top: 5px;\r\n  }\r\n.pain-scale__emoji[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    left: 5px;\r\n    font-size: 2em;\r\n    padding-top: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 100;\r\n    background: #e8552b;\r\n    border: 2px solid white;\r\n    border-radius: 20%;\r\n    color: white;\r\n    width: auto;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n  }\r\n.legend[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    max-width: 450px;\r\n    margin: 0 auto;\r\n  }\r\n.legend__beginning[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 30px;\r\n  }\r\n@media (min-width: 768px) {\r\n    .legend__beginning[_ngcontent-%COMP%] {\r\n      transform: translatex(-50%);\r\n    }\r\n  }\r\n.legend__end[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 30px;\r\n  }\r\n@media (min-width: 768px) {\r\n    .legend__end[_ngcontent-%COMP%] {\r\n      transform: translatex(50%);\r\n    }\r\n  }\r\n@keyframes fade {\r\n    0% {\r\n      opacity: 1;\r\n    }\r\n    50% {\r\n      opacity: 0.6;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW4tc2NvcmUtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7QUFDakUscUVBQXFFO0FBRXJFO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBRUE7QUFDQSw0QkFBNEI7QUFDNUIsMkJBQTJCO0FBQzNCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUFzQjtFQUF0QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLG1DQUFtQztFQUNyQztBQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLFlBQVk7RUFDZDtBQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFFQSxnQkFBZ0I7QUFDaEI7O0lBRUUsU0FBUztJQUNULFVBQVU7RUFDWjtBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUE7Ozs7O0lBS0UsU0FBUztFQUNYO0FBRUEsY0FBYztBQUNkOzs7SUFHRSxzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtBQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0RBQWtEO0lBQ2xELGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFO01BQ0UsOEJBQThCO0lBQ2hDO0VBQ0Y7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxPQUFPO0lBQ1AseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUix5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtFQUNaO0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFlBQVk7SUFDWixTQUFTO0lBQ1QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7RUFDWDtBQUNBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0VBQ1g7QUFDQTtJQUNFO01BQ0UsMEJBQTBCO0lBQzVCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InBhaW4tc2NvcmUtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCcpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMFwiKTtcclxuXHJcbi5leGFtcGxlLXNlY3Rpb24ge1xyXG4gIG1hcmdpbjogMTJweCAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oMiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5tYXQtc2xpZGVyIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLW1hcmdpbiwgLmhpc3RvcnktaW5qdXJ5LCAuaGlzdG9yeS1mZXZlciB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuaDJ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5tYXQtdG9vbGJhcntcclxuaGVpZ2h0OiAyMXZoO1xyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYtY29udGFpbmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5taW4taGVpZ2h0OiA5M3ZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTEwJTtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgZm9udC1zaXplOiAxMTAlO1xyXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4udG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUIwN0YxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC5iYXJ7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgd2lkdGg6ODc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNkY2RkZGM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmJhcjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IDFweCAjZGNkY2RjO1xyXG4gIH1cclxuICAuYmFyOmZvY3VzLXdpdGhpbntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IDFweCAjZGNkY2RjO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gIH1cclxuICAuc2VhcmNoYmFye1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHdpZHRoOjgwMHB4O1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC8qIEJlZ2luIHJlc2V0ICovXHJcbiAgYm9keSxcclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICBcclxuICBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCxcclxuICBoNSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEVuZCByZXNldCAqL1xyXG4gICosXHJcbiAgKjpiZWZvcmUsXHJcbiAgKjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y1Zjc7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Njc1O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgfVxyXG4gIFxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzJiMzUzNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvIDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDEyMHB4IDIwcHggMTMwcHggMjBweDtcclxuICAgIG1heC13aWR0aDogNzc5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgxNDgsIDE2NCwgMTc5LCAwLjMyOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBwYWRkaW5nOiAxMjBweCAzMHB4IDEzMHB4IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWluLXNjYWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLnBhaW4tc2NhbGU6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgdG9wOiA0NXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmUxZTY7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgdG9wOiA0NXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlMWU2O1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE5JTtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZWJlZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IC0ycHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWw6aG92ZXIgLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLWVtb2ppIHtcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLWVtb2ppIC5wYWluLXNjYWxlX19lbW9qaSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLTEsIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYzQxOTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS0xIC5wYWluLXNjYWxlX19lbW9qaSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tMSAucGFpbi1zY2FsZV9fZW1vamkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYzQxOTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTIsIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4YWUxZDtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTIgLnBhaW4tc2NhbGVfX2Vtb2ppLCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS0yIC5wYWluLXNjYWxlX19lbW9qaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhhZTFkO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tMywgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVhMDFmO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tMyAucGFpbi1zY2FsZV9fZW1vamksIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTMgLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWEwMWY7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS00LCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS00IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzkxMjI7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS00IC5wYWluLXNjYWxlX19lbW9qaSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tNCAucGFpbi1zY2FsZV9fZW1vamkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOTEyMjtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTUsIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwODIyNDtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTUgLnBhaW4tc2NhbGVfX2Vtb2ppLCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS01IC5wYWluLXNjYWxlX19lbW9qaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4MjI0O1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tNiwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tNiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ3NDI3O1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tNiAucGFpbi1zY2FsZV9fZW1vamksIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTYgLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDc0Mjc7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS03LCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS03IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTY1Mjk7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS03IC5wYWluLXNjYWxlX19lbW9qaSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tNyAucGFpbi1zY2FsZV9fZW1vamkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNjUyOTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTgsIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NTYyYjtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTggLnBhaW4tc2NhbGVfX2Vtb2ppLCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS04IC5wYWluLXNjYWxlX19lbW9qaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc1NjJiO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tOSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tOSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU0ODJlO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tOSAucGFpbi1zY2FsZV9fZW1vamksIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTkgLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTQ4MmU7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS0xMCwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tMTAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwMzEzMTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTEwIC5wYWluLXNjYWxlX19lbW9qaSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tMTAgLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDMxMzE7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYmxpbmsge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlIDAuMnMgZWFzZTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX251bWJlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fZW1vamkge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgYmFja2dyb3VuZDogI2U4NTUyYjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIH1cclxuICBcclxuICAubGVnZW5kIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmxlZ2VuZF9fYmVnaW5uaW5nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmxlZ2VuZF9fYmVnaW5uaW5nIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC01MCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAubGVnZW5kX19lbmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmxlZ2VuZF9fZW5kIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDUwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9Il19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Documents\Cg\rgv\rogveda\src\main.ts */"zUnb");


/***/ }),

/***/ "7mXz":
/*!********************************************************************************************!*\
  !*** ./src/app/treatment-card-female-pregnant/treatment-card-female-pregnant.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TreatmentCardFemalePregnantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentCardFemalePregnantComponent", function() { return TreatmentCardFemalePregnantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");


class TreatmentCardFemalePregnantComponent {
    constructor() { }
    ngOnInit() {
    }
}
TreatmentCardFemalePregnantComponent.ɵfac = function TreatmentCardFemalePregnantComponent_Factory(t) { return new (t || TreatmentCardFemalePregnantComponent)(); };
TreatmentCardFemalePregnantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreatmentCardFemalePregnantComponent, selectors: [["app-treatment-card-female-pregnant"]], decls: 82, vars: 0, consts: [[1, "subtitle"], ["mat-align-tabs", "start"], ["label", "Symptoms"], ["label", "Overview"], ["label", "Treatment"], ["label", "Protocol"], ["label", "Dont's"], ["label", "Expected Course"], ["label", "Exercises"]], template: function TreatmentCardFemalePregnantComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "De Quervain's Tenosynovitis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Treatment for Pregnant Females ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pain near the base of your thumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Swelling near the base of your thumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Difficulty moving your thumb and wrist when you're doing something that invulves grasping or pinching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "A \"sticking\" or \"stop-and-go\" sensation in your thumb when moving it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "De Quervain's tenosynovitis (dih-kwer-VAINS ten-oh-sine-oh-VIE-tis) is a painful condition affecting the tendons on the thumb side of your wrist. If you have de Quervain's tenosynovitis, it will probably hurt when you turn your wrist, grasp anything or make a fist. Although the exact cause of de Quervain's tenosynovitis isn't known, any activity that relies on repetitive hand or wrist movement \u2014 such as working in the garden, playing golf or racket sports, or lifting your baby \u2014 can make it worse. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tab. Paracetamol 650mg Thrice daily after food for 5 days > Twice daily after food for 10 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cold Pack at site of pain (at 2-3 hourly intervals, 3-5 mins per session)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "De Quervain\u2019s Splint (wear it while working, can remove it when resting)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Follow Up: After 15 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "No hot packs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "No Massages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Recovery is slow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "1-2% improvement per day is a good recovery rate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Overall recovery may take 2-3 Months. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "If there is no/minimal relief after medicine and resting for 3 weeks, then you will be recommended intralesional injection. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\nThe individual places the affected hand palm down on a flat surface, such as a table. With the other hand, the affected thumb is gently moved away from the table then replaced slowly and smoothly. This movement should be repeated 5 to 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "The person places the affected hand sideways, little finger first, on a flat surface. With the other hand, the affected thumb is moved away from the fingers, then brought back in line with them. The movement is repeated 5 to 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "The affected hand is placed flat on the table, palm first. Keeping the hand still, the thumb is moved out to the side, as far as feels comfortable, then returned. The exercise is repeated 5 to 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Once exercise three has ceased to cause pain, it can be carried out with the wrist off the edge of the table.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "With the palm down on the table, the individual should lift the thumb, as far away from the surface as possible, then bring it back down. This is repeated 10 times, increasing repetitions, as the movement becomes more comfortable.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "An elastic band is placed around the fingers and thumb, and the thumb is moved against the resistance of the band 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Resting the affected hand on the table palm up, the person touches the top of the thumb to the little finger. The stretch is held for 6 seconds and done 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Holding the affected arm out in front, the person uses the other hand to press down the back of the hand, stretching the wrist. The position is held for 15 to 30 seconds and repeated three times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "As above, but the other hand is used to push the hand upwards, stretching the wrist in the other direction. The stretch is held for 15 to 30 seconds and repeated three times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Holding a can in the affected hand, with the palm facing up, the individual can lower the weight then return to the starting position. Two sets of 15 are recommended.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "The person holds a can and places the wrist in a sideways position with the thumb at the top. They then gently bend their wrist up, with the thumb reaching towards the ceiling, then gently lower to the starting position, all without moving the forearm. Two sets of 15 are advised.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "A person can strengthen their grip by squeezing a soft rubber ball and holding the stretch for 5 seconds. Two sets of 15 are recommended.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "These exercises should be used for rehabilitation and only done once the initial pain has eased.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "The first step to tackling De Quervain\u2019s tenosynovitis is resting from the activity or activities that have caused the pain. Wearing a splint and regularly applying heat or cold packs will also help.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"]], styles: [".mat-tab-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 48px;\r\n  }\r\n  .sample-card[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n     margin: 1rem;\r\n    position: relative;\r\n    width: 900px;\r\n    border: 1px solid #7B1FA2;\r\n  }\r\n  .mat-card-subtitle[_ngcontent-%COMP%] {\r\n    color: #FCC419;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n  .mat-card-title[_ngcontent-%COMP%] {\r\n    color: #7B1FA2;\r\n  }\r\n  .mat-card-content[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  h2[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n  }\r\n  .subtitle[_ngcontent-%COMP%]{\r\n    color: orangered;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWF0bWVudC1jYXJkLWZlbWFsZS1wcmVnbmFudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7S0FDakIsWUFBWTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCO0VBRUE7SUFDRSxjQUFjO0lBQ2QseUNBQXlDO0VBQzNDO0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoidHJlYXRtZW50LWNhcmQtZmVtYWxlLXByZWduYW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYi1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gIH1cclxuICAuc2FtcGxlLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgIG1hcmdpbjogMXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3QjFGQTI7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogI0ZDQzQxOTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6ICM3QjFGQTI7XHJcbiAgfVxyXG4gIC5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBoMntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9ICBcclxuICAuc3VidGl0bGV7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xyXG4gIH0iXX0= */"] });


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

/***/ "ClVs":
/*!****************************************************!*\
  !*** ./src/app/pain-score/pain-score.component.ts ***!
  \****************************************************/
/*! exports provided: PainScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainScoreComponent", function() { return PainScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class PainScoreComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.nsaidsChecked = false;
        this.braceChecked = false;
        this.injectionChecked = false;
        this.surgeryChecked = false;
        this.nsaidsChecked = (localStorage.getItem("nsaids") == "true");
        this.braceChecked = (localStorage.getItem("brace") == "true");
        this.injectionChecked = (localStorage.getItem("injection") == "true");
        this.surgeryChecked = (localStorage.getItem("surgery") == "true");
    }
    ngOnInit() {
    }
    checkActivity(event) {
        localStorage.setItem(event.source.id, event.checked);
    }
}
PainScoreComponent.ɵfac = function PainScoreComponent_Factory(t) { return new (t || PainScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
PainScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PainScoreComponent, selectors: [["app-pain-score"]], decls: 13, vars: 4, consts: [["color", "primary"], [1, "example-h2"], [1, "example-section"], ["id", "nsaids", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["id", "brace", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["id", "injection", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["id", "surgery", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"]], template: function PainScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Medications Received:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PainScoreComponent_Template_mat_checkbox_ngModelChange_5_listener($event) { return ctx.nsaidsChecked = $event; })("change", function PainScoreComponent_Template_mat_checkbox_change_5_listener($event) { return ctx.checkActivity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "NSAIDS (Nonsteroidal anti-inflammatory drugs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PainScoreComponent_Template_mat_checkbox_ngModelChange_7_listener($event) { return ctx.braceChecked = $event; })("change", function PainScoreComponent_Template_mat_checkbox_change_7_listener($event) { return ctx.checkActivity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Brace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PainScoreComponent_Template_mat_checkbox_ngModelChange_9_listener($event) { return ctx.injectionChecked = $event; })("change", function PainScoreComponent_Template_mat_checkbox_change_9_listener($event) { return ctx.checkActivity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Injection at wrist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PainScoreComponent_Template_mat_checkbox_ngModelChange_11_listener($event) { return ctx.surgeryChecked = $event; })("change", function PainScoreComponent_Template_mat_checkbox_change_11_listener($event) { return ctx.checkActivity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Surgery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nsaidsChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.braceChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.injectionChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.surgeryChecked);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat');\r\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,500\");\r\n.example-section[_ngcontent-%COMP%] {\r\n  margin: 12px 0;\r\n}\r\n.example-h2[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\nmat-slider[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n.example-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n.example-margin[_ngcontent-%COMP%], .history-injury[_ngcontent-%COMP%], .history-fever[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n.mat-card-content[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW4tc2NvcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7QUFDakUscUVBQXFFO0FBRXJFO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJwYWluLXNjb3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQnKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDBcIik7XHJcblxyXG4uZXhhbXBsZS1zZWN0aW9uIHtcclxuICBtYXJnaW46IDEycHggMDtcclxufVxyXG5cclxuLmV4YW1wbGUtaDIge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxubWF0LXNsaWRlciB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbi5leGFtcGxlLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1tYXJnaW4sIC5oaXN0b3J5LWluanVyeSwgLmhpc3RvcnktZmV2ZXIge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtY29udGVudHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuaDJ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "OZK+":
/*!************************************************************!*\
  !*** ./src/app/treatment-card/treatment-card.component.ts ***!
  \************************************************************/
/*! exports provided: TreatmentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentCardComponent", function() { return TreatmentCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");



class TreatmentCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
TreatmentCardComponent.ɵfac = function TreatmentCardComponent_Factory(t) { return new (t || TreatmentCardComponent)(); };
TreatmentCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreatmentCardComponent, selectors: [["app-treatment-card"]], decls: 88, vars: 0, consts: [["color", "primary"], [1, "subtitle"], ["mat-align-tabs", "start"], ["label", "Symptoms"], ["label", "Overview"], ["label", "Treatment"], ["label", "Protocol"], ["label", "Dont's"], ["label", "Expected Course"], ["label", "Exercises"]], template: function TreatmentCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "De Quervain's Tenosynovitis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "For those who haven't tried any treatment yet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pain near the base of your thumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Swelling near the base of your thumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Difficulty moving your thumb and wrist when you're doing something that invulves grasping or pinching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "A \"sticking\" or \"stop-and-go\" sensation in your thumb when moving it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "De Quervain's tenosynovitis (dih-kwer-VAINS ten-oh-sine-oh-VIE-tis) is a painful condition affecting the tendons on the thumb side of your wrist. If you have de Quervain's tenosynovitis, it will probably hurt when you turn your wrist, grasp anything or make a fist. Although the exact cause of de Quervain's tenosynovitis isn't known, any activity that relies on repetitive hand or wrist movement \u2014 such as working in the garden, playing golf or racket sports, or lifting your baby \u2014 can make it worse. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-tab-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tab. Paracetamol 650mg Thrice daily after food for 5 days > Twice daily after food for 10 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tab. Piroxicam 10mg Twice daily after food for 15 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Tab. Pantoprazole 20mg Once daily in morning before food for 15 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cold Pack at site of pain (at 2-3 hourly intervals, 3-5 mins per session)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "De Quervain\u2019s Splint (wear it while working, can remove it when resting)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Follow Up: After 15 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " No hot packs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "No Massages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Avoid repetitive thumb movements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Avoid activities involving handle grips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Recovery is moderately paced");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "3-5% improvement per day is a good recovery rate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Overall recovery may take 1-1.5 Months. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "If there is no/minimal relief after injection, medicine and resting for 3 weeks, then you will be recommended one more intralesional injection. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\nThe individual places the affected hand palm down on a flat surface, such as a table. With the other hand, the affected thumb is gently moved away from the table then replaced slowly and smoothly. This movement should be repeated 5 to 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "The person places the affected hand sideways, little finger first, on a flat surface. With the other hand, the affected thumb is moved away from the fingers, then brought back in line with them. The movement is repeated 5 to 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "The affected hand is placed flat on the table, palm first. Keeping the hand still, the thumb is moved out to the side, as far as feels comfortable, then returned. The exercise is repeated 5 to 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Once exercise three has ceased to cause pain, it can be carried out with the wrist off the edge of the table.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "With the palm down on the table, the individual should lift the thumb, as far away from the surface as possible, then bring it back down. This is repeated 10 times, increasing repetitions, as the movement becomes more comfortable.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "An elastic band is placed around the fingers and thumb, and the thumb is moved against the resistance of the band 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Resting the affected hand on the table palm up, the person touches the top of the thumb to the little finger. The stretch is held for 6 seconds and done 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Holding the affected arm out in front, the person uses the other hand to press down the back of the hand, stretching the wrist. The position is held for 15 to 30 seconds and repeated three times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "As above, but the other hand is used to push the hand upwards, stretching the wrist in the other direction. The stretch is held for 15 to 30 seconds and repeated three times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Holding a can in the affected hand, with the palm facing up, the individual can lower the weight then return to the starting position. Two sets of 15 are recommended.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "The person holds a can and places the wrist in a sideways position with the thumb at the top. They then gently bend their wrist up, with the thumb reaching towards the ceiling, then gently lower to the starting position, all without moving the forearm. Two sets of 15 are advised.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "A person can strengthen their grip by squeezing a soft rubber ball and holding the stretch for 5 seconds. Two sets of 15 are recommended.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "These exercises should be used for rehabilitation and only done once the initial pain has eased.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "The first step to tackling De Quervain\u2019s tenosynovitis is resting from the activity or activities that have caused the pain. Wearing a splint and regularly applying heat or cold packs will also help.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"]], styles: [".mat-tab-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 48px;\r\n  }\r\n  .sample-card[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    margin: 1rem;\r\n    position: relative;\r\n    width: 900px;\r\n    border: 1px solid #7B1FA2;\r\n  }\r\n  .mat-card-subtitle[_ngcontent-%COMP%] {\r\n    color: #FCC419;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n  .mat-card-title[_ngcontent-%COMP%] {\r\n    color: #7B1FA2;\r\n  }\r\n  .mat-card-content[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  h2[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n  }\r\n  .subtitle[_ngcontent-%COMP%]{\r\n    color: orangered;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWF0bWVudC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLGNBQWM7SUFDZCx5Q0FBeUM7RUFDM0M7RUFFQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUVBOztLQUVHIiwiZmlsZSI6InRyZWF0bWVudC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYi1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gIH1cclxuICAuc2FtcGxlLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdCMUZBMjtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjRkNDNDE5O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzdCMUZBMjtcclxuICB9XHJcbiAgLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH0gIFxyXG5cclxuICAuc3VidGl0bGV7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xyXG4gIH1cclxuXHJcbiAgLyogZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdCMUZBMjtcclxuICB9ICovIl19 */"] });


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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _treatment_card_female_pregnant_treatment_card_female_pregnant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../treatment-card-female-pregnant/treatment-card-female-pregnant.component */ "7mXz");
/* harmony import */ var _treatment_card_medication_treatment_card_medication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../treatment-card-medication/treatment-card-medication.component */ "t63s");
/* harmony import */ var _treatment_card_treatment_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../treatment-card/treatment-card.component */ "OZK+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");











function MedicalSearchResultsSidenavComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "circle-progress", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("percent", ctx_r0.percentage)("radius", 50)("outerStrokeWidth", 8)("innerStrokeWidth", 4)("outerStrokeColor", "#78C000")("innerStrokeColor", "#C7E596")("animation", false)("animationDuration", 500);
} }
function MedicalSearchResultsSidenavComponent_div_12_li_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cardMedicine_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cardMedicine_r6, " ");
} }
function MedicalSearchResultsSidenavComponent_div_12_li_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cardDevice_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cardDevice_r7, " ");
} }
function MedicalSearchResultsSidenavComponent_div_12_li_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cardMedication_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cardMedication_r8, " ");
} }
function MedicalSearchResultsSidenavComponent_div_12_li_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cardTherapy_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cardTherapy_r9, " ");
} }
function MedicalSearchResultsSidenavComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-tab", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "De Quervain's tenosynovitis (dih-kwer-VAINS ten-oh-sine-oh-VIE-tis) is a painful condition affecting the tendons on the thumb side of your wrist. If you have de Quervain's tenosynovitis, it will probably hurt when you turn your wrist, grasp anything or make a fist. Although the exact cause of de Quervain's tenosynovitis isn't known, any activity that relies on repetitive hand or wrist movement \u2014 such as working in the garden, playing golf or racket sports, or lifting your baby \u2014 can make it worse.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Pain near the base of your thumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Swelling near the base of your thumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Difficulty moving your thumb and wrist when you're doing something that invulves grasping or pinching");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "A \"sticking\" or \"stop-and-go\" sensation in your thumb when moving it");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-tab-group", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedIndexChange", function MedicalSearchResultsSidenavComponent_div_12_Template_mat_tab_group_selectedIndexChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.currentTab = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-accordion", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-expansion-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsSidenavComponent_div_12_Template_p_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.openGroup(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Self-Care");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsSidenavComponent_div_12_Template_p_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.openGroup(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "RICE (Rest, Ice, Compression, Elevation)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-expansion-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsSidenavComponent_div_12_Template_p_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.openGroup(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Devices");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsSidenavComponent_div_12_Template_p_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.openGroup(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Splint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-expansion-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsSidenavComponent_div_12_Template_p_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.openGroup(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Medications");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsSidenavComponent_div_12_Template_p_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.openGroup(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Nonsteroidal anti-inflammatory drug and Steroid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-expansion-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsSidenavComponent_div_12_Template_p_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.openGroup(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Therapies");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsSidenavComponent_div_12_Template_p_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.openGroup(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Occupational Therapy, Stretching, Physical Therapy and Massage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, MedicalSearchResultsSidenavComponent_div_12_li_49_Template, 2, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, MedicalSearchResultsSidenavComponent_div_12_li_52_Template, 2, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-tab", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, MedicalSearchResultsSidenavComponent_div_12_li_55_Template, 2, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "mat-tab", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, MedicalSearchResultsSidenavComponent_div_12_li_58_Template, 2, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx_r1.currentTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", true)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", true)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", true)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", true)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.cardData.cardMedicines);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.cardData.cardDevices);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.cardData.cardMedications);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.cardData.cardTherapies);
} }
class MedicalSearchResultsSidenavComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.treatmentConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        this.panelOpenState = false;
        this.badgeColors = ['primary', 'accent', 'warn'];
        this.currentTab = 0;
    }
    ngOnInit() {
    }
    openTreatmentCard(cardId) {
        this.treatmentConfig.disableClose = false;
        this.treatmentConfig.autoFocus = true;
        this.treatmentConfig.width = "60%";
        this.treatmentConfig.height = "80%";
        switch (cardId) {
            case "pregnantfemale":
                this.dialog.open(_treatment_card_female_pregnant_treatment_card_female_pregnant_component__WEBPACK_IMPORTED_MODULE_1__["TreatmentCardFemalePregnantComponent"], this.treatmentConfig);
                break;
            case "nonmedication":
                this.dialog.open(_treatment_card_treatment_card_component__WEBPACK_IMPORTED_MODULE_3__["TreatmentCardComponent"], this.treatmentConfig);
                break;
            case "medication":
                this.dialog.open(_treatment_card_medication_treatment_card_medication_component__WEBPACK_IMPORTED_MODULE_2__["TreatmentCardMedicationComponent"], this.treatmentConfig);
                break;
        }
    }
    openGroup(tab) {
        this.currentTab = tab;
    }
}
MedicalSearchResultsSidenavComponent.ɵfac = function MedicalSearchResultsSidenavComponent_Factory(t) { return new (t || MedicalSearchResultsSidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
MedicalSearchResultsSidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MedicalSearchResultsSidenavComponent, selectors: [["app-medical-search-results-sidenav"]], inputs: { cardData: "cardData", percentage: "percentage", diseaseShow: "diseaseShow", diseaseShow2: "diseaseShow2", titlesShow: "titlesShow" }, decls: 13, vars: 4, consts: [[1, "sample-card"], [4, "ngIf"], [3, "percent", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "animationDuration"], ["label", "Overview"], [1, "para"], ["label", "Symptoms"], ["label", "Treatments"], [3, "selectedIndex", "selectedIndexChange"], ["label", "All"], ["multi", "", "hideToggle", "true", 1, "example-headers-align"], [3, "expanded", "disabled"], [3, "click"], ["label", "Self-Care"], [4, "ngFor", "ngForOf"], ["label", "Devices"], ["label", "Medications"], ["label", "Therapies", 1, "sub-label"]], template: function MedicalSearchResultsSidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MedicalSearchResultsSidenavComponent_div_11_Template, 2, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MedicalSearchResultsSidenavComponent_div_12_Template, 59, 13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.cardData.cardTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.cardData.cardSubtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.diseaseShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.diseaseShow && ctx.diseaseShow2);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["CircleProgressComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["hr[_ngcontent-%COMP%]{\r\n  border: 0;\r\n  border-bottom: 1px solid #dfe1e5;\r\n  margin: 0;\r\n  border-style: inset;\r\n  border-width: 1px;\r\n}\r\n\r\n\r\nmat-expansion-panel[_ngcontent-%COMP%], mat-expansion-panel-header[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n\r\n  .example-headers-align  > .mat-expansion-indicator{\r\n  color: #7B1FA2 !important;\r\n}\r\n\r\n\r\n .mat-tab-label,  .mat-tab-label-active{\r\n  min-width: -webkit-fit-content !important;\r\n  min-width: -moz-fit-content !important;\r\n  min-width: fit-content !important;\r\n }\r\n\r\n\r\n.mat-expansion-panel-header[_ngcontent-%COMP%]:hover{\r\n  text-decoration: underline;\r\n}\r\n\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%]{\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  color: rgba(0,0,0,.50);\r\n}\r\n\r\n\r\n  .mat-tab-header-pagination {\r\n  display: none !important;\r\n}\r\n\r\n\r\n  .mat-expansion-panel-header[aria-disabled=true]{\r\n  color: rgba(0,0,0,.87);\r\n  padding-left: 22px;\r\n}\r\n\r\n\r\n.para[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{\r\n  padding-top: 20px;\r\n  font-size: 14px;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif\r\n}\r\n\r\n\r\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-left: 8px;\r\n  flex-basis: 0;\r\n}\r\n\r\n\r\n.sample-card[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  margin: 1rem;\r\n  position: relative;\r\n  width: 700px;\r\n  \r\n}\r\n\r\n\r\n.sample-card-treatment[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  margin: 1rem;\r\n  position: relative;\r\n  width: 900px;\r\n  border: 1px solid #00FF00;\r\n}\r\n\r\n\r\n.sample-card-warn[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  margin: 1rem;\r\n  position: relative;\r\n  width: 900px;\r\n  border: 1px solid #FF0000;\r\n}\r\n\r\n\r\n.sample-card-reading[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  margin: 1rem;\r\n  position: relative;\r\n  width: 900px;\r\n  border: 1px solid #7B1FA2;\r\n}\r\n\r\n\r\n.mat-card-subtitle[_ngcontent-%COMP%] {\r\n  color: #FCC419;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n  color: #7B1FA2;\r\n}\r\n\r\n\r\n.mat-card-content[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYWwtc2VhcmNoLXJlc3VsdHMtc2lkZW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4RUc7OztBQUdIO0VBQ0UsU0FBUztFQUNULGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLFNBQVM7QUFDWDs7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UseUNBQWlDO0VBQWpDLHNDQUFpQztFQUFqQyxpQ0FBaUM7Q0FDbEM7OztBQUVEO0VBQ0UsMEJBQTBCO0FBQzVCOzs7QUFFQTtFQUNFLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7OztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmO0FBQ0Y7OztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UsY0FBYztFQUNkLHlDQUF5QztBQUMzQzs7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFDQTtFQUNFLGVBQWU7QUFDakI7OztBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJtZWRpY2FsLXNlYXJjaC1yZXN1bHRzLXNpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5tYXQtaWNvbntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5zdWItY29udGVudHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubXktY2FyZHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubXktc3VidGl0bGV7XHJcbiAgZm9udC1zaXplOiA3cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2FyZHN7XHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4jc3ViLWNhcmR7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5zYW1wbGUtY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDkwMHB4O1xyXG59XHJcblxyXG4uc2FtcGxlLWNhcmQtdHJlYXRtZW50IHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogOTAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwRkYwMDtcclxufVxyXG5cclxuLnNhbXBsZS1jYXJkLXdhcm4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRkYwMDAwO1xyXG59XHJcblxyXG4uc2FtcGxlLWNhcmQtcmVhZGluZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDkwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3QjFGQTI7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgY29sb3I6ICNGQ0M0MTk7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgY29sb3I6ICM3QjFGQTI7XHJcbn1cclxuLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbmgye1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1iYWRnZS1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IDEzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG59ICovXHJcblxyXG5cclxuaHJ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZlMWU1O1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG59XHJcblxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsLFxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZXhhbXBsZS1oZWFkZXJzLWFsaWduICA+IC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcntcclxuICBjb2xvcjogIzdCMUZBMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXRhYi1sYWJlbCwgOjpuZy1kZWVwLm1hdC10YWItbGFiZWwtYWN0aXZle1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuNTApO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVde1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC44Nyk7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG59XHJcblxyXG4ucGFyYSwgdWx7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxyXG59XHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbn1cclxuXHJcbi5zYW1wbGUtY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICM3QjFGQTI7ICovXHJcbn1cclxuXHJcbi5zYW1wbGUtY2FyZC10cmVhdG1lbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDBGRjAwO1xyXG59XHJcblxyXG4uc2FtcGxlLWNhcmQtd2FybiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDkwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRjAwMDA7XHJcbn1cclxuXHJcbi5zYW1wbGUtY2FyZC1yZWFkaW5nIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogOTAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzdCMUZBMjtcclxufVxyXG5cclxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICBjb2xvcjogI0ZDQzQxOTtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlIHtcclxuICBjb2xvcjogIzdCMUZBMjtcclxufVxyXG4ubWF0LWNhcmQtY29udGVudHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuaDJ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59Il19 */"] });


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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(cookieService) {
        this.cookieService = cookieService;
        this.counter = 0;
        if (this.cookieService.get('Count') != null) {
            this.counter = (Number(this.cookieService.get('Count')));
            this.counter++;
        }
        this.cookieService.set('Count', (this.counter++).toString());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_phrase_sharing_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-phrase-sharing-service.service */ "vuq7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class MedicalSearchPageComponent {
    constructor(router, searchPhraseSharingServiceService) {
        this.router = router;
        this.searchPhraseSharingServiceService = searchPhraseSharingServiceService;
        this.timeout_var = null;
        this.title = 'rogveda';
        this.searchPhrase = "";
        this.buttonValue1 = "Pain in hand";
        this.buttonValue2 = "Pain in hand while opening the lid of a jar";
        this.buttonValue3 = "Pain near thumb";
    }
    ngOnInit() {
        this.run();
    }
    goToSearchPage() {
        this.searchPhraseSharingServiceService.searchPhrase = this.searchPhrase;
        this.router.navigateByUrl("/searchResults");
    }
    goToSearchPag(event) {
        this.searchPhraseSharingServiceService.searchPhrase = event;
        this.router.navigateByUrl("/searchResults");
    }
    // Add something to given element placeholder
    addToPlaceholder(toAdd, el) {
        el.attr('placeholder', el.attr('placeholder') + toAdd);
        // Delay between symbols "typing" 
        return new Promise(resolve => setTimeout(resolve, 100));
    }
    // Cleare placeholder attribute in given element
    clearPlaceholder(el) {
        el.attr("placeholder", "");
    }
    // Print one phrase
    printPhrase(phrase, el) {
        return new Promise(resolve => {
            // Clear placeholder before typing next phrase
            this.clearPlaceholder(el);
            let letters = phrase.split('');
            // For each letter in phrase
            letters.reduce((promise, letter, index) => promise.then(_ => {
                // Resolve promise when all letters are typed
                if (index === letters.length - 1) {
                    // Delay before start next phrase "typing"
                    setTimeout(resolve, 1000);
                }
                el.attr('placeholder', el.attr('placeholder') + letter);
                // Delay between symbols "typing" 
                return new Promise(resolve => setTimeout(resolve, 100));
            }), Promise.resolve());
        });
    }
    // Print given phrases to element
    printPhrases(phrases, el) {
        // For each phrase
        // wait for phrase to be typed
        // before start typing next
        this.clearPlaceholder(el);
        phrases.reduce((promise, phrase) => promise.then((_) => this.printPhrase(phrase, el)), Promise.resolve());
    }
    // Start typing
    run() {
        this.clearPlaceholder(jquery__WEBPACK_IMPORTED_MODULE_0__('#searchbox'));
        let phrases = [
            //"Search Website e.g. \"Dancing Cats\"",
            "Pain in wrist after pregnancy",
            "Wrist pain diy treatment",
            "Wrist pain treatment",
            "Wrist pain thumb side treatment",
            "Wrist pain treatment in ayurveda"
        ];
        this.printPhrases(phrases, jquery__WEBPACK_IMPORTED_MODULE_0__('#searchbox'));
    }
}
MedicalSearchPageComponent.ɵfac = function MedicalSearchPageComponent_Factory(t) { return new (t || MedicalSearchPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_search_phrase_sharing_service_service__WEBPACK_IMPORTED_MODULE_3__["SearchPhraseSharingServiceService"])); };
MedicalSearchPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MedicalSearchPageComponent, selectors: [["app-medical-search-page"]], decls: 29, vars: 4, consts: [[1, "logo"], ["xmlns", "http://www.w3.org/2000/svg", "width", "238", "height", "75.389", "viewBox", "0 0 238 75.389"], ["id", "Group_7", "data-name", "Group 7", "transform", "translate(-815 -326.61)"], ["id", "Rogveda", "transform", "translate(815 389.999)", "fill", "#090909", "font-size", "60", "font-family", "Ubuntu"], ["x", "0", "y", "0"], ["id", "Component_1_1", "data-name", "Component 1 \u2013 1", "transform", "translate(1024.327 326.61)"], ["id", "Rectangle_1", "data-name", "Rectangle 1", "width", "6", "height", "25", "rx", "3", "transform", "matrix(0.574, 0.819, -0.819, 0.574, 20.479, 0)", "fill", "#f1ba07"], ["id", "Rectangle_2", "data-name", "Rectangle 2", "width", "6", "height", "23", "rx", "3", "transform", "matrix(0.574, 0.819, -0.819, 0.574, 21.84, 9.147)", "fill", "#9b07f1"], [1, "bar"], ["id", "searchbox", "type", "text", "title", "Search", 1, "searchbar", 3, "ngModel", "ngModelChange"], ["xmlns", "http://www.w3.org/2000/svg", "width", "15.416", "height", "17.047", "viewBox", "0 0 15.416 17.047"], ["id", "Group_9", "data-name", "Group 9", "transform", "translate(-548 -475)"], ["id", "Ellipse_1", "data-name", "Ellipse 1", "transform", "translate(548 475)", "fill", "#fff", "stroke", "rgba(112,112,112,0.63)", "stroke-width", "1.8"], ["cx", "6.5", "cy", "6.5", "r", "6.5", "stroke", "none"], ["cx", "6.5", "cy", "6.5", "r", "5.6", "fill", "none"], ["id", "Rectangle_4", "data-name", "Rectangle 4", "transform", "translate(558.467 485.683) rotate(45)", "fill", "#a4a4a4", "stroke", "#a4a4a4", "stroke-linecap", "round", "stroke-linejoin", "bevel", "stroke-width", "1"], ["width", "7", "height", "2", "stroke", "none"], ["x", "0.5", "y", "0.5", "width", "6", "height", "1", "fill", "none"], [1, "search-buttons"], ["mat-raised-button", "", "color", "primary", 1, "search-button-purple", 3, "click"], ["mat-raised-button", "", "color", "accent", 1, "search-button-gold", 3, "click"], [1, "buttons"], ["mat-raised-button", "", "color", "primary", 1, "button", 3, "click"]], template: function MedicalSearchPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tspan", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Rogveda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MedicalSearchPageComponent_Template_input_ngModelChange_10_listener($event) { return ctx.searchPhrase = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "circle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "rect", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "rect", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MedicalSearchPageComponent_Template_button_click_20_listener() { return ctx.goToSearchPag(ctx.buttonValue1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MedicalSearchPageComponent_Template_button_click_22_listener() { return ctx.goToSearchPag(ctx.buttonValue2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MedicalSearchPageComponent_Template_button_click_24_listener() { return ctx.goToSearchPag(ctx.buttonValue3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MedicalSearchPageComponent_Template_button_click_27_listener() { return ctx.goToSearchPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchPhrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.buttonValue1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.buttonValue2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.buttonValue3);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".logo[_ngcontent-%COMP%]{\r\n    margin-top:200px;\r\n    margin-bottom:20px;\r\n    text-align: center;\r\n  }\r\n\r\n  .bar[_ngcontent-%COMP%]{\r\n    margin:0 auto;\r\n    width:575px;\r\n    border-radius:30px;\r\n    border:1px solid #dcdddc;\r\n    text-align: center;\r\n  }\r\n\r\n  .bar[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 1px 1px 8px 1px #dcdcdc;\r\n  }\r\n\r\n  .bar[_ngcontent-%COMP%]:focus-within{\r\n    box-shadow: 1px 1px 8px 1px #dcdcdc;\r\n    outline:none;\r\n  }\r\n\r\n  .searchbar[_ngcontent-%COMP%]{\r\n    height:45px;\r\n    border:none;\r\n    width:500px;\r\n    font-size:16px;\r\n    outline: none;\r\n    text-align: left;\r\n  }\r\n\r\n  .buttons[_ngcontent-%COMP%]{\r\n    margin-top:10px;\r\n    text-align: center;\r\n  }\r\n\r\n  .button[_ngcontent-%COMP%]{\r\n    background-color: #f5f5f5;\r\n    border:none;\r\n    color:#263238;\r\n    font-size:15px;\r\n    padding: 10px 20px;\r\n    margin:5px;\r\n    border-radius:4px;\r\n    outline:none;\r\n  }\r\n\r\n  .button[_ngcontent-%COMP%]:hover{\r\n    border: 1px solid #c8c8c8;\r\n    padding: 9px 19px;\r\n    color:#808080;\r\n  }\r\n\r\n  .button[_ngcontent-%COMP%]:focus{\r\n    padding: 9px 19px;\r\n  }\r\n\r\n  .search-buttons[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .search-button-purple[_ngcontent-%COMP%]{\r\n    border:none;\r\n    color:white;\r\n    font-size:15px;\r\n    padding: 10px 20px;\r\n    margin:5px;\r\n    border-radius:30px;\r\n    outline:none;\r\n  }\r\n\r\n  .search-button-purple[_ngcontent-%COMP%]:hover, .search-button-purple[_ngcontent-%COMP%]:focus {\r\n    border: 1px solid #c8c8c8;\r\n    padding: 9px 19px;\r\n    color:white;\r\n    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);\r\n    transform: translateY(-0.25em);\r\n  }\r\n\r\n  .search-button-gold[_ngcontent-%COMP%]{\r\n    border:none;\r\n    color:white;\r\n    font-size:15px;\r\n    padding: 10px 20px;\r\n    margin:5px;\r\n    border-radius:30px;\r\n    outline:none;\r\n  }\r\n\r\n  .search-button-gold[_ngcontent-%COMP%]:hover, .search-button-gold[_ngcontent-%COMP%]:focus {\r\n    border: 1px solid #c8c8c8;\r\n    padding: 9px 19px;\r\n    color:white;\r\n    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);\r\n    transform: translateY(-0.25em);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYWwtc2VhcmNoLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLG1DQUFtQztFQUNyQzs7RUFDQTtJQUNFLG1DQUFtQztJQUNuQyxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUNBOztJQUVFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLDZDQUE2QztJQUM3Qyw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBQ0E7O0lBRUUseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsNkNBQTZDO0lBQzdDLDhCQUE4QjtFQUNoQyIsImZpbGUiOiJtZWRpY2FsLXNlYXJjaC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICAgIG1hcmdpbi10b3A6MjAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYmFye1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIHdpZHRoOjU3NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czozMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZGNkZGRjO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYmFyOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMXB4ICNkY2RjZGM7XHJcbiAgfVxyXG4gIC5iYXI6Zm9jdXMtd2l0aGlue1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMXB4ICNkY2RjZGM7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgfVxyXG4gIC5zZWFyY2hiYXJ7XHJcbiAgICBoZWlnaHQ6NDVweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAuYnV0dG9uc3tcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGNvbG9yOiMyNjMyMzg7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIG1hcmdpbjo1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICB9XHJcbiAgLmJ1dHRvbjpob3ZlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XHJcbiAgICBwYWRkaW5nOiA5cHggMTlweDtcclxuICAgIGNvbG9yOiM4MDgwODA7XHJcbiAgfVxyXG4gIC5idXR0b246Zm9jdXN7XHJcbiAgICBwYWRkaW5nOiA5cHggMTlweDtcclxuICB9XHJcbiAgLnNlYXJjaC1idXR0b25ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5zZWFyY2gtYnV0dG9uLXB1cnBsZXtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIG1hcmdpbjo1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgfVxyXG4gIC5zZWFyY2gtYnV0dG9uLXB1cnBsZTpob3ZlcixcclxuICAuc2VhcmNoLWJ1dHRvbi1wdXJwbGU6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcclxuICAgIHBhZGRpbmc6IDlweCAxOXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNWVtIDAuNWVtIC0wLjRlbSB2YXIoLS1ob3Zlcik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWJ1dHRvbi1nb2xke1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MzBweDtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICB9XHJcbiAgLnNlYXJjaC1idXR0b24tZ29sZDpob3ZlcixcclxuICAuc2VhcmNoLWJ1dHRvbi1nb2xkOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XHJcbiAgICBwYWRkaW5nOiA5cHggMTlweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVlbSAwLjVlbSAtMC40ZW0gdmFyKC0taG92ZXIpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1ZW0pO1xyXG4gIH0iXX0= */"] });


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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-typewriter-effect */ "uAFX");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _pain_score_pain_score_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pain-score/pain-score.component */ "ClVs");
/* harmony import */ var _pain_score_table_pain_score_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pain-score-table/pain-score-table.component */ "+0H/");
/* harmony import */ var _treatment_card_treatment_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./treatment-card/treatment-card.component */ "OZK+");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _treatment_card_female_pregnant_treatment_card_female_pregnant_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./treatment-card-female-pregnant/treatment-card-female-pregnant.component */ "7mXz");
/* harmony import */ var _treatment_card_medication_treatment_card_medication_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./treatment-card-medication/treatment-card-medication.component */ "t63s");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ "fXoL");




























//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbCarouselConfig"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_31__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__["MatExpansionModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
            angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_23__["AngularTypewriterEffectModule"],
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_33__["NgCircleProgressModule"].forRoot({
                radius: 100,
                outerStrokeWidth: 16,
                innerStrokeWidth: 8,
                outerStrokeColor: "#78C000",
                innerStrokeColor: "#C7E596",
                animationDuration: 300
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _medical_search_results_medical_search_results_component__WEBPACK_IMPORTED_MODULE_4__["MedicalSearchResultsComponent"],
        _medical_search_page_medical_search_page_component__WEBPACK_IMPORTED_MODULE_5__["MedicalSearchPageComponent"],
        _medical_search_results_sidenav_medical_search_results_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["MedicalSearchResultsSidenavComponent"],
        _pain_score_pain_score_component__WEBPACK_IMPORTED_MODULE_25__["PainScoreComponent"],
        _pain_score_table_pain_score_table_component__WEBPACK_IMPORTED_MODULE_26__["PainScoreTableComponent"],
        _treatment_card_treatment_card_component__WEBPACK_IMPORTED_MODULE_27__["TreatmentCardComponent"],
        _treatment_card_female_pregnant_treatment_card_female_pregnant_component__WEBPACK_IMPORTED_MODULE_29__["TreatmentCardFemalePregnantComponent"],
        _treatment_card_medication_treatment_card_medication_component__WEBPACK_IMPORTED_MODULE_30__["TreatmentCardMedicationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__["MatExpansionModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
        angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_23__["AngularTypewriterEffectModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_33__["NgCircleProgressModule"]] }); })();


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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _pain_score_pain_score_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pain-score/pain-score.component */ "ClVs");
/* harmony import */ var _pain_score_table_pain_score_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pain-score-table/pain-score-table.component */ "+0H/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _search_phrase_sharing_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-phrase-sharing-service.service */ "vuq7");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _medical_search_results_sidenav_medical_search_results_sidenav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../medical-search-results-sidenav/medical-search-results-sidenav.component */ "PliL");




















const _c0 = ["sliderRange"];
function MedicalSearchResultsComponent_mat_radio_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-radio-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsComponent_mat_radio_button_21_Template_mat_radio_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const i_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.setInjuryHistory(i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r13);
} }
function MedicalSearchResultsComponent_mat_radio_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-radio-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsComponent_mat_radio_button_29_Template_mat_radio_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const i_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.setFeverHistory(i_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r16);
} }
function MedicalSearchResultsComponent_mat_radio_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-radio-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsComponent_mat_radio_button_36_Template_mat_radio_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const i_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.checkGender(i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r19, "");
} }
function MedicalSearchResultsComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 43);
} }
function MedicalSearchResultsComponent_mat_radio_button_60_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-radio-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsComponent_mat_radio_button_60_Template_mat_radio_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const i_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.filterFinkelsteinResults(i_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r22);
} }
function MedicalSearchResultsComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 44);
} }
function MedicalSearchResultsComponent_mat_radio_button_68_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-radio-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsComponent_mat_radio_button_68_Template_mat_radio_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const i_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.filterDeQResults(i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", i_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r25);
} }
function MedicalSearchResultsComponent_mat_radio_button_74_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-radio-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsComponent_mat_radio_button_74_Template_mat_radio_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const i_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.openMedications(i_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", i_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r28);
} }
function MedicalSearchResultsComponent_mat_radio_button_132_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-radio-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsComponent_mat_radio_button_132_Template_mat_radio_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const i_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.setPainDuration(i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", i_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r31);
} }
function MedicalSearchResultsComponent_app_medical_search_results_sidenav_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-medical-search-results-sidenav", 45);
} if (rf & 2) {
    const card_r34 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("percentage", ctx_r12.percentage)("diseaseShow2", ctx_r12.diseaseShow2)("diseaseShow", ctx_r12.diseaseShow)("cardData", card_r34);
} }
class MedicalSearchResultsComponent {
    constructor(searchPhraseSharingServiceService, carousel, dialog, cookieService) {
        this.searchPhraseSharingServiceService = searchPhraseSharingServiceService;
        this.dialog = dialog;
        this.cookieService = cookieService;
        this.searchPhrase = "de quervain";
        this.ageValue = 15;
        this.painScoreValue = 2;
        this.yesNos = ["Yes", "No"];
        this.genders = ["Male", "Female"];
        this.noOfDays = ["0-3 Days", "4+ Days"];
        this.pain = [];
        this.disabled = true;
        this.gender = "Male";
        this.dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this.prweDialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        this.percentage = 20;
        this.finkelsteinVisit = false;
        this.deQuervainVisit = false;
        this.medicationVisit = false;
        this.historyInjuryVisit = false;
        this.historyFeverVisit = false;
        this.painDurationVisit = false;
        this.scoreSet = new Set();
        this.diseaseShow = false;
        this.diseaseShow2 = false;
        this.feverCounter = 0;
        this.preggo = false;
    }
    ngAfterViewInit() {
        this.setSearchResult();
        this.calculateFilterParams();
        if ((Number)(this.cookieService.get('Count')) == 1)
            this.introJS();
    }
    ngOnInit() {
        localStorage.clear();
        this.searchPhrase = this.searchPhraseSharingServiceService.searchPhrase;
        this.cards = [];
        this.filterVars = {
            brace: false,
            deQuervainsTest: false,
            finkelsteinTest: false,
            gender: 'Male',
            painDuration: false,
            historyOfFever: true,
            historyOfInjury: true,
            injection: false,
            medication: false,
            nsaids: false,
            painscore: 'Mild',
            pregnancy: false,
            surgery: false,
            age: this.ageValue,
            noTreatmentOptionInjury: false,
            noTreatmentOptionFever: false,
            noTreatmentOptionFinkelstein: false,
            noTreatmentOptionDeQ: false
        };
    }
    checkGender(gender) {
        if (gender == "Female") {
            this.disabled = false;
            this.filterVars.gender = "female";
        }
        else {
            this.preggo = false;
            this.disabled = true;
            this.filterVars.gender = "male";
        }
        this.setSearchResult();
        this.calculateFilterParams();
    }
    openMedications(yes) {
        if (yes == "Yes") {
            this.filterVars.medication = true;
            this.dialogConfig.disableClose = false;
            this.dialogConfig.autoFocus = true;
            this.dialogConfig.width = "60%";
            let dialogRef = this.dialog.open(_pain_score_pain_score_component__WEBPACK_IMPORTED_MODULE_2__["PainScoreComponent"], this.dialogConfig);
            dialogRef.afterClosed().subscribe(result => {
                this.filterVars.nsaids = (localStorage.getItem('nsaids') == 'true');
                this.filterVars.brace = (localStorage.getItem('brace') == 'true');
                this.filterVars.injection = (localStorage.getItem('injection') == 'true');
                this.filterVars.surgery = (localStorage.getItem('surgery') == 'true');
                this.setSearchResult();
                this.calculateFilterParams();
            });
        }
        else {
            this.filterVars.medication = false;
        }
        this.medicationVisit = true;
        this.setSearchResult();
        this.calculateFilterParams();
    }
    formatLabel(value) {
        return value;
    }
    onMouseEnter(event) {
        event.target.click();
    }
    increaseValue() {
        if (this.ageValue < 130)
            this.ageValue++;
    }
    decreaseValue() {
        if (this.ageValue > 0)
            this.ageValue--;
    }
    increasePainValue() {
        if (this.painScoreValue < 9)
            this.painScoreValue++;
    }
    decreasePainValue() {
        if (this.painScoreValue > 0)
            this.painScoreValue--;
    }
    clearSearchResults() {
        this.cards.length = 0;
    }
    modifySearchResults(event) {
        if (event.checked)
            this.ageValue = 26;
        this.filterVars.pregnancy = event.checked;
        this.setSearchResult();
        this.calculateFilterParams();
    }
    openPrwe() {
        this.prweDialogConfig.disableClose = false;
        this.prweDialogConfig.autoFocus = true;
        this.prweDialogConfig.width = "60%";
        this.dialog.open(_pain_score_table_pain_score_table_component__WEBPACK_IMPORTED_MODULE_3__["PainScoreTableComponent"], this.prweDialogConfig);
    }
    filterFinkelsteinResults(yesNo) {
        if (yesNo == "No") {
            this.filterVars.finkelsteinTest = false;
            this.filterVars.noTreatmentOptionFinkelstein = true;
        }
        else {
            this.filterVars.finkelsteinTest = true;
            this.filterVars.noTreatmentOptionFinkelstein = false;
        }
        this.finkelsteinVisit = true;
        this.scoreSet.add('finkelsteinVisit');
        this.setSearchResult();
        this.calculateFilterParams();
    }
    filterDeQResults(yesNo) {
        if (yesNo == "No") {
            this.filterVars.deQuervainsTest = false;
            this.filterVars.noTreatmentOptionDeQ = true;
        }
        else {
            this.filterVars.deQuervainsTest = true;
            this.filterVars.noTreatmentOptionDeQ = false;
        }
        this.deQuervainVisit = true;
        this.scoreSet.add('deQuervainVisit');
        this.setSearchResult();
        this.calculateFilterParams();
    }
    setPainDuration(noOfDays) {
        if (noOfDays == this.noOfDays[0]) {
            this.filterVars.painDuration = false;
        }
        else {
            this.filterVars.painDuration = true;
        }
        this.painDurationVisit = true;
        this.setSearchResult();
        this.calculateFilterParams();
    }
    setSearchResult() {
        this.diseaseShow = false;
        this.diseaseShow2 = false;
        this.clearSearchResults();
        if (this.checkNoTreatment()) {
            this.setNoTreatmentResult();
            this.diseaseShow = true;
            this.diseaseShow2 = false;
            return;
        }
        if (this.filterVars.gender == "female" && this.filterVars.pregnancy) {
            if (this.checkAllFilterParams()) {
                if (this.filterVars.medication) {
                    if (this.filterVars.injection && !this.filterVars.surgery) {
                        this.pushPregantFemaleSurgeryCard();
                    }
                    else if ((this.filterVars.nsaids || this.filterVars.brace) && !this.filterVars.injection && !this.filterVars.surgery) {
                        this.pushPregantFemaleInjectionCard();
                    }
                    else if (this.filterVars.surgery) {
                        this.setNoTreatmentResult();
                        this.diseaseShow = true;
                        this.diseaseShow2 = false;
                        return;
                    }
                    // if(this.filterVars.brace && this.filterVars.injection && this.filterVars.nsaids){
                    //   this.pushPregantFemaleSurgeryCard();
                    // } else if(this.filterVars.brace && !this.filterVars.injection && this.filterVars.nsaids) {
                    //   this.pushPregantFemaleInjectionCard();
                    // } 
                    else {
                        this.setFemalePregnantResults();
                    }
                }
                else {
                    this.setFemalePregnantResults();
                }
                this.diseaseShow = true;
                this.diseaseShow2 = true;
                return;
            }
            if (this.checkAllOtherFilters()) {
                this.setFemalePregnantOverview();
                this.diseaseShow = true;
                this.diseaseShow2 = true;
            }
            else {
                this.pushApplyFilterCard();
                this.diseaseShow = false;
                this.diseaseShow2 = false;
            }
            return;
        }
        else {
            if (this.checkAllFilterParams()) {
                if (this.filterVars.medication) {
                    if (this.filterVars.injection) {
                        this.pushNonPregantSurgeryCard();
                    }
                    else if ((this.filterVars.nsaids || this.filterVars.brace) && !this.filterVars.injection && !this.filterVars.surgery) {
                        this.pushNonPregantInjectionCard();
                    }
                    else if (this.filterVars.surgery) {
                        this.setNoTreatmentResult();
                        this.diseaseShow = true;
                        this.diseaseShow2 = false;
                        return;
                    }
                    //   }
                    // if(this.filterVars.brace && this.filterVars.injection && this.filterVars.nsaids){
                    // } else if(this.filterVars.brace && !this.filterVars.injection && this.filterVars.nsaids) {
                    //   this.pushNonPregantInjectionCard();
                    // }
                    else {
                        this.pushNonMedicationCard();
                    }
                }
                else {
                    this.pushNonMedicationCard();
                }
                this.diseaseShow = true;
                this.diseaseShow2 = true;
                return;
            }
            if (this.checkAllOtherFilters()) {
                this.pushNonPregantCardOverview();
                this.diseaseShow = true;
                this.diseaseShow2 = true;
            }
            else {
                this.pushApplyFilterCard();
                this.diseaseShow = false;
                this.diseaseShow2 = false;
            }
            return;
            // if (!this.filterVars.medication) {
            //   if (!this.checkAllFilterParams()) {
            //     this.pushApplyFilterCard();
            //     this.diseaseShow = false;
            //     this.diseaseShow2 = false;
            //     return;
            //   }
            //   if (!this.checkAllOtherFilters()) {
            //     this.pushNonMedicationCard();
            //     this.diseaseShow = true;
            //     this.diseaseShow2 = true;
            //   } else if (this.checkAllFilterParams()) {
            //     this.pushNonMedicationCard();
            //     this.diseaseShow = true;
            //     this.diseaseShow2 = true;
            //   }
            // } else {
            //   if (!this.checkAllFilterParams()) {
            //     this.pushApplyFilterCard();
            //     this.diseaseShow = false;
            //     this.diseaseShow2 = false;
            //     return;
            //   }
            //   if (!this.checkAllOtherFilters()) {
            //     this.pushMedicationCard();
            //     this.diseaseShow = true;
            //     this.diseaseShow2 = true;
            //   } else if (this.checkAllFilterParams()) {
            //     this.pushMedicationCard();
            //     this.diseaseShow = true;
            //     this.diseaseShow2 = true;
            //     //this.pushNonMedicationCard();
            //     //this.pushPregantFemaleCard();
            //   }
            // }
        }
    }
    checkNoTreatment() {
        return (this.filterVars.noTreatmentOptionDeQ || this.filterVars.noTreatmentOptionFever
            || this.filterVars.noTreatmentOptionFinkelstein || this.filterVars.noTreatmentOptionInjury);
    }
    checkAllFilterParams() {
        if (this.finkelsteinVisit && this.historyFeverVisit && this.historyInjuryVisit &&
            this.medicationVisit && this.deQuervainVisit && this.painDurationVisit)
            return true;
        return false;
    }
    calculateFilterParams() {
        this.percentage = this.scoreSet.size * 20 + 20;
        if (this.percentage == 100) {
            this.diseaseShow = true;
        }
    }
    checkAllOtherFilters() {
        if (this.filterVars.finkelsteinTest && this.filterVars.deQuervainsTest
            && this.filterVars.age > 10 && !this.filterVars.historyOfFever
            && !this.filterVars.historyOfInjury)
            return true;
        return false;
    }
    setFeverHistory(yesNos) {
        if (yesNos == "Yes") {
            this.filterVars.historyOfFever = true;
            this.filterVars.noTreatmentOptionFever = true;
        }
        else {
            this.filterVars.historyOfFever = false;
            this.filterVars.noTreatmentOptionFever = false;
        }
        this.historyFeverVisit = true;
        this.scoreSet.add('historyFeverVisit');
        this.setSearchResult();
        this.calculateFilterParams();
        if (this.cookieService.get('FeverCount') != null) {
            this.feverCounter = (Number(this.cookieService.get('FeverCount')));
            this.feverCounter++;
        }
        this.cookieService.set('FeverCount', (this.feverCounter++).toString());
        if ((Number)(this.cookieService.get('FeverCount')) == 1)
            this.hoverIntro();
    }
    setInjuryHistory(yesNos) {
        if (yesNos == "Yes") {
            this.filterVars.historyOfInjury = true;
            this.filterVars.noTreatmentOptionInjury = true;
        }
        else {
            this.filterVars.historyOfInjury = false;
            this.filterVars.noTreatmentOptionInjury = false;
        }
        this.historyInjuryVisit = true;
        this.scoreSet.add('historyInjuryVisit');
        this.setSearchResult();
        this.calculateFilterParams();
    }
    setFemalePregnantResults() {
        this.pushPregantFemaleCard();
        //this.pushOtherCards();
    }
    setFemalePregnantOverview() {
        this.pushPregantFemaleCardOverview();
        //this.pushOtherCards();
    }
    setNonFemalePregnantResults() {
        //this.pushOtherCards();
        this.pushNonMedicationCard();
        //this.pushPregantFemaleCard();
    }
    setNonMedicationResults() {
        this.pushNonMedicationCards();
        //this.pushPregantFemaleCard();
    }
    pushNonMedicationCards() {
        this.pushNonMedicationCard();
        //this.pushMedicationCard();
    }
    setMedicationResults() {
        this.pushMedicationCards();
        //this.pushPregantFemaleCard();
    }
    pushMedicationCards() {
        this.pushMedicationCard();
        //this.pushNonMedicationCard();
    }
    setNoTreatmentResult() {
        this.pushNoTreatment();
    }
    //Cold Pack at site of pain (at 2-3 hourly intervals, 3-5 mins per session)
    pushNoTreatment() {
        this.cards.push({
            cardTitle: "No treatment available",
            cardSubtitle: "Please consult a doctor",
            cardMedicines: [],
            cardMedications: [],
            cardDevices: [],
            cardTherapies: []
        });
    }
    pushPregantFemaleCard() {
        this.cards.push({
            cardTitle: "De Quervain's Tenosynovitis",
            cardSubtitle: "For pregnant / breastfeeding females only",
            cardMedicines: ['Cold Pack at site of pain (at 2-3 hourly intervals, 3-5 mins per session)'],
            cardMedications: ['Tablet - Paracetamol 650mg Thrice daily after food for 5 days > Twice daily after food for 10 days', 'Follow Up after 15 days'],
            cardDevices: ['De Quervain’s Splint (wear it while working, can remove it when resting)'],
            cardTherapies: [
                'The individual places the affected hand palm down on a flat surface, such as a table. With the other hand, the affected thumb is gently moved away from the table then replaced slowly and smoothly. This movement should be repeated 5 to 10 times.',
                'The person places the affected hand sideways, little finger first, on a flat surface. With the other hand, the affected thumb is moved away from the fingers, then brought back in line with them. The movement is repeated 5 to 10 times.',
                'The affected hand is placed flat on the table, palm first. Keeping the hand still, the thumb is moved out to the side, as far as feels comfortable, then returned. The exercise is repeated 5 to 10 times.',
                'Once exercise three has ceased to cause pain, it can be carried out with the wrist off the edge of the table.',
                'With the palm down on the table, the individual should lift the thumb, as far away from the surface as possible, then bring it back down. This is repeated 10 times, increasing repetitions, as the movement becomes more comfortable.',
                'An elastic band is placed around the fingers and thumb, and the thumb is moved against the resistance of the band 10 times.',
                'Resting the affected hand on the table palm up, the person touches the top of the thumb to the little finger. The stretch is held for 6 seconds and done 10 times.',
                'Holding the affected arm out in front, the person uses the other hand to press down the back of the hand, stretching the wrist. The position is held for 15 to 30 seconds and repeated three times.',
                'As above, but the other hand is used to push the hand upwards, stretching the wrist in the other direction. The stretch is held for 15 to 30 seconds and repeated three times.',
                'Holding a can in the affected hand, with the palm facing up, the individual can lower the weight then return to the starting position. Two sets of 15 are recommended.',
                'The person holds a can and places the wrist in a sideways position with the thumb at the top. They then gently bend their wrist up, with the thumb reaching towards the ceiling, then gently lower to the starting position, all without moving the forearm. Two sets of 15 are advised.',
                'A person can strengthen their grip by squeezing a soft rubber ball and holding the stretch for 5 seconds. Two sets of 15 are recommended.',
                'These exercises should be used for rehabilitation and only done once the initial pain has eased.',
                'The first step to tackling De Quervain’s tenosynovitis is resting from the activity or activities that have caused the pain. Wearing a splint and regularly applying heat or cold packs will also help.'
            ]
        });
    }
    pushPregantFemaleCardOverview() {
        this.cards.push({
            cardTitle: "De Quervain's Tenosynovitis",
            cardSubtitle: "For pregnant / breastfeeding females only",
            cardMedicines: ['Please add more filters to get accurate treatment'],
            cardMedications: ['Please add more filters to get accurate treatment'],
            cardDevices: ['Please add more filters to get accurate treatment'],
            cardTherapies: [
                'Please add more filters to get accurate treatment'
            ]
        });
    }
    pushNonPregantCardOverview() {
        this.cards.push({
            cardTitle: "De Quervain's Tenosynovitis",
            cardSubtitle: "General",
            cardMedicines: ['Please add more filters to get accurate treatment'],
            cardMedications: ['Please add more filters to get accurate treatment'],
            cardDevices: ['Please add more filters to get accurate treatment'],
            cardTherapies: [
                'Please add more filters to get accurate treatment'
            ]
        });
    }
    pushPregantFemaleSurgeryCard() {
        this.cards.push({
            cardTitle: "De Quervain's Tenosynovitis",
            cardSubtitle: "For pregnant / breastfeeding females only",
            cardMedicines: ['-'],
            cardMedications: ['Surgical release of lesion'],
            cardDevices: ['-'],
            cardTherapies: ['-']
        });
    }
    pushNonPregantSurgeryCard() {
        this.cards.push({
            cardTitle: "De Quervain's Tenosynovitis",
            cardSubtitle: "For those for whom injections and other medications didn't work",
            cardMedicines: ['-'],
            cardMedications: ['Surgical release of lesion'],
            cardDevices: ['-'],
            cardTherapies: ['-']
        });
    }
    pushPregantFemaleInjectionCard() {
        this.cards.push({
            cardTitle: "De Quervain's Tenosynovitis",
            cardSubtitle: "For pregnant / breastfeeding females only",
            cardMedicines: ['Cold Pack at site of pain (at 2-3 hourly intervals, 3-5 mins per session)'],
            cardMedications: ['Intralesional Injection of Kenacort',
                'Tablet -  Paracetamol 650mg Thrice daily after food for 5 days > Twice daily after food for 10 days',
                'Follow Up after 15 days'],
            cardDevices: ['De Quervain’s Splint (wear it while working, can remove it when resting)'],
            cardTherapies: [
                'The individual places the affected hand palm down on a flat surface, such as a table. With the other hand, the affected thumb is gently moved away from the table then replaced slowly and smoothly. This movement should be repeated 5 to 10 times.',
                'The person places the affected hand sideways, little finger first, on a flat surface. With the other hand, the affected thumb is moved away from the fingers, then brought back in line with them. The movement is repeated 5 to 10 times.',
                'The affected hand is placed flat on the table, palm first. Keeping the hand still, the thumb is moved out to the side, as far as feels comfortable, then returned. The exercise is repeated 5 to 10 times.',
                'Once exercise three has ceased to cause pain, it can be carried out with the wrist off the edge of the table.',
                'With the palm down on the table, the individual should lift the thumb, as far away from the surface as possible, then bring it back down. This is repeated 10 times, increasing repetitions, as the movement becomes more comfortable.',
                'An elastic band is placed around the fingers and thumb, and the thumb is moved against the resistance of the band 10 times.',
                'Resting the affected hand on the table palm up, the person touches the top of the thumb to the little finger. The stretch is held for 6 seconds and done 10 times.',
                'Holding the affected arm out in front, the person uses the other hand to press down the back of the hand, stretching the wrist. The position is held for 15 to 30 seconds and repeated three times.',
                'As above, but the other hand is used to push the hand upwards, stretching the wrist in the other direction. The stretch is held for 15 to 30 seconds and repeated three times.',
                'Holding a can in the affected hand, with the palm facing up, the individual can lower the weight then return to the starting position. Two sets of 15 are recommended.',
                'The person holds a can and places the wrist in a sideways position with the thumb at the top. They then gently bend their wrist up, with the thumb reaching towards the ceiling, then gently lower to the starting position, all without moving the forearm. Two sets of 15 are advised.',
                'A person can strengthen their grip by squeezing a soft rubber ball and holding the stretch for 5 seconds. Two sets of 15 are recommended.',
                'These exercises should be used for rehabilitation and only done once the initial pain has eased.',
                'The first step to tackling De Quervain’s tenosynovitis is resting from the activity or activities that have caused the pain. Wearing a splint and regularly applying heat or cold packs will also help.'
            ]
        });
    }
    pushNonPregantInjectionCard() {
        this.cards.push({
            cardTitle: "De Quervain's Tenosynovitis",
            cardSubtitle: "For those who didn't recover after medicines but haven't taken an injection",
            cardMedicines: ['Cold Pack at site of pain (at 2-3 hourly intervals, 3-5 mins per session)'],
            cardMedications: ['Intralesional Injection of Kenacort',
                'Tablet -  Paracetamol 650mg Thrice daily after food for 5 days > Twice daily after food for 10 days',
                'Follow Up after 15 days'],
            cardDevices: ['De Quervain’s Splint (wear it while working, can remove it when resting)'],
            cardTherapies: [
                'The individual places the affected hand palm down on a flat surface, such as a table. With the other hand, the affected thumb is gently moved away from the table then replaced slowly and smoothly. This movement should be repeated 5 to 10 times.',
                'The person places the affected hand sideways, little finger first, on a flat surface. With the other hand, the affected thumb is moved away from the fingers, then brought back in line with them. The movement is repeated 5 to 10 times.',
                'The affected hand is placed flat on the table, palm first. Keeping the hand still, the thumb is moved out to the side, as far as feels comfortable, then returned. The exercise is repeated 5 to 10 times.',
                'Once exercise three has ceased to cause pain, it can be carried out with the wrist off the edge of the table.',
                'With the palm down on the table, the individual should lift the thumb, as far away from the surface as possible, then bring it back down. This is repeated 10 times, increasing repetitions, as the movement becomes more comfortable.',
                'An elastic band is placed around the fingers and thumb, and the thumb is moved against the resistance of the band 10 times.',
                'Resting the affected hand on the table palm up, the person touches the top of the thumb to the little finger. The stretch is held for 6 seconds and done 10 times.',
                'Holding the affected arm out in front, the person uses the other hand to press down the back of the hand, stretching the wrist. The position is held for 15 to 30 seconds and repeated three times.',
                'As above, but the other hand is used to push the hand upwards, stretching the wrist in the other direction. The stretch is held for 15 to 30 seconds and repeated three times.',
                'Holding a can in the affected hand, with the palm facing up, the individual can lower the weight then return to the starting position. Two sets of 15 are recommended.',
                'The person holds a can and places the wrist in a sideways position with the thumb at the top. They then gently bend their wrist up, with the thumb reaching towards the ceiling, then gently lower to the starting position, all without moving the forearm. Two sets of 15 are advised.',
                'A person can strengthen their grip by squeezing a soft rubber ball and holding the stretch for 5 seconds. Two sets of 15 are recommended.',
                'These exercises should be used for rehabilitation and only done once the initial pain has eased.',
                'The first step to tackling De Quervain’s tenosynovitis is resting from the activity or activities that have caused the pain. Wearing a splint and regularly applying heat or cold packs will also help.'
            ]
        });
    }
    pushOtherCards() {
        this.pushNonMedicationCard();
        //this.pushMedicationCard();
    }
    pushNonMedicationCard() {
        this.cards.push({
            cardTitle: "De Quervain's Tenosynovitis",
            cardSubtitle: "For those who haven't received any medications",
            cardMedicines: ['Cold Pack at site of pain (at 2-3 hourly intervals, 3-5 mins per session)'],
            cardMedications: ['Tablet - Paracetamol 650mg Thrice daily after food for 5 days > Twice daily after food for 10 days',
                'Tablet - Piroxicam 10mg Twice daily after food for 15 days',
                'Tablet - Pantoprazole 20mg Once daily in morning before food for 15 days',
                'Follow Up after 15 days'],
            cardDevices: ['De Quervain’s Splint (wear it while working, can remove it when resting)'],
            cardTherapies: [
                'The individual places the affected hand palm down on a flat surface, such as a table. With the other hand, the affected thumb is gently moved away from the table then replaced slowly and smoothly. This movement should be repeated 5 to 10 times.',
                'The person places the affected hand sideways, little finger first, on a flat surface. With the other hand, the affected thumb is moved away from the fingers, then brought back in line with them. The movement is repeated 5 to 10 times.',
                'The affected hand is placed flat on the table, palm first. Keeping the hand still, the thumb is moved out to the side, as far as feels comfortable, then returned. The exercise is repeated 5 to 10 times.',
                'Once exercise three has ceased to cause pain, it can be carried out with the wrist off the edge of the table.',
                'With the palm down on the table, the individual should lift the thumb, as far away from the surface as possible, then bring it back down. This is repeated 10 times, increasing repetitions, as the movement becomes more comfortable.',
                'An elastic band is placed around the fingers and thumb, and the thumb is moved against the resistance of the band 10 times.',
                'Resting the affected hand on the table palm up, the person touches the top of the thumb to the little finger. The stretch is held for 6 seconds and done 10 times.',
                'Holding the affected arm out in front, the person uses the other hand to press down the back of the hand, stretching the wrist. The position is held for 15 to 30 seconds and repeated three times.',
                'As above, but the other hand is used to push the hand upwards, stretching the wrist in the other direction. The stretch is held for 15 to 30 seconds and repeated three times.',
                'Holding a can in the affected hand, with the palm facing up, the individual can lower the weight then return to the starting position. Two sets of 15 are recommended.',
                'The person holds a can and places the wrist in a sideways position with the thumb at the top. They then gently bend their wrist up, with the thumb reaching towards the ceiling, then gently lower to the starting position, all without moving the forearm. Two sets of 15 are advised.',
                'A person can strengthen their grip by squeezing a soft rubber ball and holding the stretch for 5 seconds. Two sets of 15 are recommended.',
                'These exercises should be used for rehabilitation and only done once the initial pain has eased.',
                'The first step to tackling De Quervain’s tenosynovitis is resting from the activity or activities that have caused the pain. Wearing a splint and regularly applying heat or cold packs will also help.'
            ]
        });
    }
    pushMedicationCard() {
        this.cards.push({
            cardTitle: "De Quervain's Tenosynovitis",
            cardSubtitle: "For those who have already tried Medications",
            cardMedicines: ['Cold Pack at site of pain (at 2-3 hourly intervals, 3-5 mins per session)'],
            cardMedications: ['Intralesional Injection of Kenacort',
                'Tablet -  Paracetamol 650mg Thrice daily after food for 5 days > Twice daily after food for 10 days',
                'Follow Up after 15 days'],
            cardDevices: ['De Quervain’s Splint (wear it while working, can remove it when resting)'],
            cardTherapies: [
                'The individual places the affected hand palm down on a flat surface, such as a table. With the other hand, the affected thumb is gently moved away from the table then replaced slowly and smoothly. This movement should be repeated 5 to 10 times.',
                'The person places the affected hand sideways, little finger first, on a flat surface. With the other hand, the affected thumb is moved away from the fingers, then brought back in line with them. The movement is repeated 5 to 10 times.',
                'The affected hand is placed flat on the table, palm first. Keeping the hand still, the thumb is moved out to the side, as far as feels comfortable, then returned. The exercise is repeated 5 to 10 times.',
                'Once exercise three has ceased to cause pain, it can be carried out with the wrist off the edge of the table.',
                'With the palm down on the table, the individual should lift the thumb, as far away from the surface as possible, then bring it back down. This is repeated 10 times, increasing repetitions, as the movement becomes more comfortable.',
                'An elastic band is placed around the fingers and thumb, and the thumb is moved against the resistance of the band 10 times.',
                'Resting the affected hand on the table palm up, the person touches the top of the thumb to the little finger. The stretch is held for 6 seconds and done 10 times.',
                'Holding the affected arm out in front, the person uses the other hand to press down the back of the hand, stretching the wrist. The position is held for 15 to 30 seconds and repeated three times.',
                'As above, but the other hand is used to push the hand upwards, stretching the wrist in the other direction. The stretch is held for 15 to 30 seconds and repeated three times.',
                'Holding a can in the affected hand, with the palm facing up, the individual can lower the weight then return to the starting position. Two sets of 15 are recommended.',
                'The person holds a can and places the wrist in a sideways position with the thumb at the top. They then gently bend their wrist up, with the thumb reaching towards the ceiling, then gently lower to the starting position, all without moving the forearm. Two sets of 15 are advised.',
                'A person can strengthen their grip by squeezing a soft rubber ball and holding the stretch for 5 seconds. Two sets of 15 are recommended.',
                'These exercises should be used for rehabilitation and only done once the initial pain has eased.',
                'The first step to tackling De Quervain’s tenosynovitis is resting from the activity or activities that have caused the pain. Wearing a splint and regularly applying heat or cold packs will also help.'
            ]
        });
    }
    pushApplyFilterCard() {
        this.cards.push({
            cardTitle: "Determining your disease",
            cardSubtitle: "Apply filters in filter section",
            cardMedicines: [],
            cardMedications: [],
            cardDevices: [],
            cardTherapies: []
        });
    }
    introJS() {
        const IntroJs = __webpack_require__(/*! ../../../node_modules/intro.js/intro */ "R5/Y");
        let intro = IntroJs();
        intro.setOptions({
            steps: [
                {
                    intro: "Welcome to Rogveda!"
                },
                {
                    element: '#bar',
                    intro: "Try searching for your disease, illness or troubles here.",
                    position: "top"
                },
                {
                    element: "#filterBar",
                    intro: "Apply filters here. The more, the merrier. Try to apply all the filters to get accurate treatment suggestions",
                    position: "top"
                },
                {
                    element: "#searchResultsBar",
                    intro: "Treatment suggestions page where you will get either accurate treatment or closely related medical advice",
                    position: "Top"
                }
            ],
            showProgress: true,
            skipLabel: "Skip",
            doneLabel: "Done",
            nextLabel: "Next",
            prevLabel: "Previous",
            overlayOpacity: "0.5"
        });
        intro.start();
    }
    hoverIntro() {
        const IntroJs = __webpack_require__(/*! ../../../node_modules/intro.js/intro */ "R5/Y");
        let intro = IntroJs();
        intro.setOptions({
            steps: [
                {
                    element: "#hoverbutton",
                    intro: "Hover / click on this button to see infographic",
                    position: "right"
                }
            ],
            showProgress: true,
            skipLabel: "Skip",
            doneLabel: "Done",
            nextLabel: "Next",
            prevLabel: "Previous",
            overlayOpacity: "0.5"
        });
        intro.start();
    }
}
MedicalSearchResultsComponent.ɵfac = function MedicalSearchResultsComponent_Factory(t) { return new (t || MedicalSearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_search_phrase_sharing_service_service__WEBPACK_IMPORTED_MODULE_5__["SearchPhraseSharingServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"])); };
MedicalSearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MedicalSearchResultsComponent, selectors: [["app-medical-search-results"]], viewQuery: function MedicalSearchResultsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_medical_search_page_medical_search_page_component__WEBPACK_IMPORTED_MODULE_0__["MedicalSearchPageComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.medicalSearchPage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
    } }, decls: 136, vars: 24, consts: [["color", "primary"], ["id", "bar", 1, "bar"], ["type", "text", "title", "Search", 1, "searchbar", 3, "ngModel", "ngModelChange"], ["xmlns", "http://www.w3.org/2000/svg", "width", "15.416", "height", "17.047", "viewBox", "0 0 15.416 17.047"], ["id", "Group_9", "data-name", "Group 9", "transform", "translate(-548 -475)"], ["id", "Ellipse_1", "data-name", "Ellipse 1", "transform", "translate(548 475)", "fill", "#fff", "stroke", "rgba(112,112,112,0.63)", "stroke-width", "1.8"], ["cx", "6.5", "cy", "6.5", "r", "6.5", "stroke", "none"], ["cx", "6.5", "cy", "6.5", "r", "5.6", "fill", "none"], ["id", "Rectangle_4", "data-name", "Rectangle 4", "transform", "translate(558.467 485.683) rotate(45)", "fill", "#a4a4a4", "stroke", "#a4a4a4", "stroke-linecap", "round", "stroke-linejoin", "bevel", "stroke-width", "1"], ["width", "7", "height", "2", "stroke", "none"], ["x", "0.5", "y", "0.5", "width", "6", "height", "1", "fill", "none"], ["color", "primary", 3, "hasBackdrop"], ["mode", "side", "opened", "true", "id", "filterBar"], ["sidenav", ""], [1, "example-h2"], ["matTooltip", "History of injury to wrist in \n      recent past", 3, "inline"], ["class", "example-margin", 3, "value", "click", 4, "ngFor", "ngForOf"], ["matTooltip", "History of fever along with injury to wrist in recent past", 3, "inline"], [1, "example-section"], [3, "ngModel", "ngModelChange"], [1, "example-margin", 3, "ngModel", "disabled", "ngModelChange", "change"], [2, "float", "left"], [1, "quantity-field"], ["title", "Azalt", 1, "value-button", "decrease-button", 3, "click"], [1, "number"], ["title", "Arrt\u0131r", 1, "value-button", "increase-button", 3, "click"], ["thumbLabel", "", "tickInterval", "1", "min", "1", "max", "130", 3, "displayWith", "ngModel", "ngModelChange"], ["finkelsteinTest", ""], ["id", "hoverbutton", "type", "button", "placement", "top", "popoverTitle", "Finkelstein's Test", "triggers", "mouseenter:mouseleave", 1, "btn", "btn-primary", 3, "ngbPopover"], ["deQuervain", ""], ["type", "button", "placement", "top", "popoverTitle", "De Quervain's Test", "triggers", "mouseenter:mouseleave", 1, "btn", "btn-primary", 3, "ngbPopover"], ["type", "button", 1, "btn", "btn-primary"], [1, "range"], [1, "ticks"], [1, "tick"], ["tickInterval", "1", "min", "0", "max", "9", 1, "pain-slider", 3, "ngModel", "color", "ngModelChange"], [1, "severity-ticks"], [1, "severity-tick"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "searchResultsNav"], [1, "searchResultsBar"], [3, "percentage", "diseaseShow2", "diseaseShow", "cardData", 4, "ngFor", "ngForOf"], [1, "example-margin", 3, "value", "click"], ["src", "/assets/images/finkelstein_test.jpg", "width", "140", "height", "180"], ["src", "/assets/images/De quervain gif.gif", "width", "140", "height", "180"], [3, "percentage", "diseaseShow2", "diseaseShow", "cardData"]], template: function MedicalSearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MedicalSearchResultsComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchPhrase = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "circle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "circle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-sidenav-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-sidenav", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "History of Injury");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, MedicalSearchResultsComponent_mat_radio_button_21_Template, 2, 2, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Fever History");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, MedicalSearchResultsComponent_mat_radio_button_29_Template, 2, 2, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-radio-group", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MedicalSearchResultsComponent_Template_mat_radio_group_ngModelChange_35_listener($event) { return ctx.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, MedicalSearchResultsComponent_mat_radio_button_36_Template, 2, 2, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-checkbox", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MedicalSearchResultsComponent_Template_mat_checkbox_ngModelChange_37_listener($event) { return ctx.preggo = $event; })("change", function MedicalSearchResultsComponent_Template_mat_checkbox_change_37_listener($event) { return ctx.modifySearchResults($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Pregnant/Breastfeeding");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsComponent_Template_button_click_45_listener() { return ctx.decreaseValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsComponent_Template_button_click_49_listener() { return ctx.increaseValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-slider", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MedicalSearchResultsComponent_Template_mat_slider_ngModelChange_52_listener($event) { return ctx.ageValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, MedicalSearchResultsComponent_ng_template_55_Template, 1, 0, "ng-template", 0, 27, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, " Does it pain at this area ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, MedicalSearchResultsComponent_mat_radio_button_60_Template, 2, 2, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, MedicalSearchResultsComponent_ng_template_63_Template, 1, 0, "ng-template", 0, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, " Does it pain when you do this ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](68, MedicalSearchResultsComponent_mat_radio_button_68_Template, 2, 2, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, " Have you tried any medication ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, MedicalSearchResultsComponent_mat_radio_button_74_Template, 2, 2, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "How strong is your pain?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsComponent_Template_button_click_81_listener() { return ctx.decreasePainValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsComponent_Template_button_click_85_listener() { return ctx.increasePainValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "+ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "mat-slider", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MedicalSearchResultsComponent_Template_mat_slider_ngModelChange_109_listener($event) { return ctx.painScoreValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Mild");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](113, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](116, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](118, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](119, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "Very Severe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MedicalSearchResultsComponent_Template_button_click_125_listener() { return ctx.openPrwe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, " Advanced ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "Duration of pain");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "mat-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](132, MedicalSearchResultsComponent_mat_radio_button_132_Template, 2, 2, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "mat-sidenav-content", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](135, MedicalSearchResultsComponent_app_medical_search_results_sidenav_135_Template, 1, 4, "app-medical-search-results-sidenav", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](56);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchPhrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hasBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.yesNos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.yesNos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.genders);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.preggo)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Age: ", ctx.ageValue, " years");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.ageValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayWith", ctx.formatLabel)("ngModel", ctx.ageValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbPopover", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.yesNos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbPopover", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.yesNos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.yesNos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.painScoreValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.painScoreValue)("color", ctx.painScoreValue < 4 ? "primary" : ctx.painScoreValue < 7 ? "accent" : "warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.noOfDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenav"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckbox"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSlider"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPopover"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], _medical_search_results_sidenav_medical_search_results_sidenav_component__WEBPACK_IMPORTED_MODULE_18__["MedicalSearchResultsSidenavComponent"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Montserrat');\r\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,500\");\r\n.sample-card[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  margin: 1rem;\r\n  position: relative;\r\n  width: 900px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border-radius: 2px;\r\n  display: inline-block;\r\n  height: 300px;\r\n  margin: 1rem;\r\n  position: relative;\r\n  width: 250px;\r\n}\r\n.card[_ngcontent-%COMP%]   .card-1[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .card-3[_ngcontent-%COMP%]   .card-4[_ngcontent-%COMP%]   .card-5[_ngcontent-%COMP%] {\r\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n}\r\n.card[_ngcontent-%COMP%]:hover   .card-1[_ngcontent-%COMP%]:hover   .card-2[_ngcontent-%COMP%]:hover   .card-3[_ngcontent-%COMP%]:hover   .card-4[_ngcontent-%COMP%]:hover   .card-5[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n}\r\n  .mat-tooltip {\r\n  font-size: 14px;\r\n}\r\n.example-section[_ngcontent-%COMP%] {\r\n  margin: 12px 0;\r\n}\r\n.example-h2[_ngcontent-%COMP%] { \r\n  margin: 10px;\r\n}\r\n  .pain-slider.mat-slider.mat-slider-horizontal .mat-slider-wrapper {\r\n  top: 18px;\r\n}\r\n  .pain-slider.mat-slider.mat-slider-horizontal .mat-slider-track-wrapper {\r\n  height: 12px;\r\n  border-radius: 10px\r\n}\r\n  .pain-slider.mat-slider.mat-slider-horizontal .mat-slider-track-background,   .pain-slider.mat-slider.mat-slider-horizontal .mat-slider-track-fill {\r\n  height: 100%;\r\n}\r\n\r\n\r\n  .pain-slider.mat-accent .mat-slider-thumb {\r\n  height: 30px;\r\n  width: 30px;\r\n  background-color: white;\r\n  border: solid 2px gray;\r\n  bottom: -20px;\r\n  right: -20px;\r\n}\r\n  .pain-slider.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\r\n  background-color: white;\r\n}\r\n\r\nmat-slider[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n\r\n\r\n.example-section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n.example-margin[_ngcontent-%COMP%], .history-injury[_ngcontent-%COMP%], .history-fever[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n.mat-card-content[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\r\n.mat-toolbar[_ngcontent-%COMP%]{\r\nheight: 21vh;\r\n}\r\n.mat-sidenav-container[_ngcontent-%COMP%]{\r\nbackground-color: whitesmoke;\r\nmin-height: 93vh !important;\r\n}\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  font-size: 110%;\r\n  white-space: normal;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  font-size: 110%;\r\n  min-width: -webkit-min-content;\r\n  min-width: min-content;\r\n}\r\n.example-icon[_ngcontent-%COMP%] {\r\n  padding: 0 14px;\r\n}\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n.toolbar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #9B07F1;\r\n    color: white;\r\n    font-weight: 600;\r\n  }\r\n.bar[_ngcontent-%COMP%]{\r\n    margin:0 auto;\r\n    width:875px;\r\n    border-radius:30px;\r\n    border:1px solid #dcdddc;\r\n    background-color: white;\r\n    text-align: center;\r\n  }\r\n.bar[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 1px 1px 8px 1px #dcdcdc;\r\n  }\r\n.bar[_ngcontent-%COMP%]:focus-within{\r\n    box-shadow: 1px 1px 8px 1px #dcdcdc;\r\n    outline:none;\r\n  }\r\n.searchbar[_ngcontent-%COMP%]{\r\n    height:35px;\r\n    border:none;\r\n    width:800px;\r\n    font-size:16px;\r\n    outline: none;\r\n    text-align: left;\r\n  }\r\n*[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n  }\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    line-height: 20px;\r\n    color: black;\r\n    background: white;\r\n  }\r\ninput[type=range][_ngcontent-%COMP%] {\r\n    -webkit-appearance: none;\r\n    display: block;\r\n    margin: 0;\r\n    width: 100%;\r\n    background: transparent;\r\n  }\r\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 40px;\r\n    color: transparent;\r\n    background: lightgray;\r\n    border-radius: 999px;\r\n    border: none;\r\n  }\r\ninput[type=range][_ngcontent-%COMP%]::-moz-range-track {\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 40px;\r\n    color: transparent;\r\n    background: lightgray;\r\n    border-radius: 999px;\r\n    border: none;\r\n  }\r\ninput[type=range][_ngcontent-%COMP%]::-ms-track {\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 40px;\r\n    color: transparent;\r\n    background: lightgray;\r\n    border-radius: 999px;\r\n    border: none;\r\n  }\r\ninput[type=range][_ngcontent-%COMP%]::-ms-fill-lower {\r\n    display: none;\r\n  }\r\ninput[type=range][_ngcontent-%COMP%]::-ms-fill-upper {\r\n    display: none;\r\n  }\r\ninput[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 30px;\r\n    background: black;\r\n    box-shadow: 0px 2px 10px -2px black(1);\r\n  }\r\ninput[type=range][_ngcontent-%COMP%]::-moz-range-thumb {\r\n    -webkit-appearance: none;\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 30px;\r\n    background: black;\r\n    box-shadow: 0px 2px 10px -2px black(1);\r\n  }\r\ninput[type=range][_ngcontent-%COMP%]::-ms-thumb {\r\n    -webkit-appearance: none;\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 30px;\r\n    background: black;\r\n    box-shadow: 0px 2px 10px -2px black(1);\r\n  }\r\n.ticks[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    width: 90%;\r\n  }\r\n.tick[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    height: 5px;\r\n    line-height: 50px;\r\n    margin-bottom: 10px;\r\n    font-weight: 500;\r\n  }\r\n.severity-ticks[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    width: 90%;\r\n  }\r\n  .mat-form-field-infix {\r\n    width: 40px !important;\r\n    height: 10px !important;;\r\n  }\r\n.quantity-field[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 90px; \r\n    height: 30px;\r\n    margin: 0 auto;    \r\n  }\r\n.quantity-field[_ngcontent-%COMP%]   .value-button[_ngcontent-%COMP%]{ \r\n    border: 1px solid #ddd;\r\n    margin: 0px;\r\n    width: 40px;\r\n    height: 100%;   \r\n    padding: 0;\r\n    background: #eee; \r\n    outline: none;\r\n    cursor: pointer;\r\n  }\r\n.quantity-field[_ngcontent-%COMP%]   .value-button[_ngcontent-%COMP%]:hover {\r\n    background: rgb(230, 230, 230);\r\n  }\r\n.quantity-field[_ngcontent-%COMP%]   .value-button[_ngcontent-%COMP%]:active{\r\n    background: rgb(210, 210, 210);\r\n  }\r\n.quantity-field[_ngcontent-%COMP%]   .decrease-button[_ngcontent-%COMP%] {\r\n    margin-right: -4px;\r\n    border-radius: 8px 0 0 8px;\r\n  }\r\n.quantity-field[_ngcontent-%COMP%]   .increase-button[_ngcontent-%COMP%] {\r\n    margin-left: -4px;\r\n    border-radius: 0 8px 8px 0;\r\n  }\r\n.quantity-field[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    text-align: center;\r\n    border: none;\r\n    border-top: none;\r\n    border-bottom: none;\r\n    margin: 0px;\r\n    width: 40px;\r\n    font-size: 11pt;\r\n    font-family: calibri;\r\n  }\r\n.quantity-field[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]::selection{\r\n    background: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYWwtc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7QUFDakUscUVBQXFFO0FBRXJFO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtFQUFrRTtFQUNsRSwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLHNFQUFzRTtBQUN4RTtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWjtBQUNGO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBRUE7Ozs7R0FJRztBQUNIOztHQUVHO0FBQ0g7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7Ozs7R0FJRztBQUVIO0VBQ0UsWUFBWTtBQUNkO0FBRUE7OztHQUdHO0FBRUg7Ozs7R0FJRztBQUVIO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QiwyQkFBMkI7QUFDM0I7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQXNCO0VBQXRCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsbUNBQW1DO0VBQ3JDO0FBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsWUFBWTtFQUNkO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCO0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixZQUFZO0VBQ2Q7QUFFQTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLFlBQVk7RUFDZDtBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsWUFBWTtFQUNkO0FBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFFQTtJQUNFLGFBQWE7RUFDZjtBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixzQ0FBc0M7RUFDeEM7QUFFQTtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsc0NBQXNDO0VBQ3hDO0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHNDQUFzQztFQUN4QztBQUVBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixVQUFVO0VBQ1o7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjtBQUVBO0lBQ0UsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixVQUFVO0VBQ1o7QUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7QUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztFQUNoQjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7RUFDakI7QUFFQTtJQUNFLDhCQUE4QjtFQUNoQztBQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsMEJBQTBCO0VBQzVCO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsMEJBQTBCO0VBQzVCO0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLG9CQUFvQjtFQUN0QjtBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUEsZ0JBQWdCO0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBa0JjO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWlDSTtBQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E4S0ciLCJmaWxlIjoibWVkaWNhbC1zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0Jyk7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwXCIpO1xyXG5cclxuLnNhbXBsZS1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogOTAwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtMSAuY2FyZC0yIC5jYXJkLTMgLmNhcmQtNCAuY2FyZC01IHtcclxuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5jYXJkLTE6aG92ZXIgLmNhcmQtMjpob3ZlciAuY2FyZC0zOmhvdmVyIC5jYXJkLTQ6aG92ZXIgLmNhcmQtNTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdG9vbHRpcCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zZWN0aW9uIHtcclxuICBtYXJnaW46IDEycHggMDtcclxufVxyXG5cclxuLmV4YW1wbGUtaDIgeyBcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucGFpbi1zbGlkZXIubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItd3JhcHBlciB7XHJcbiAgdG9wOiAxOHB4O1xyXG59XHJcbjo6bmctZGVlcCAucGFpbi1zbGlkZXIubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdHJhY2std3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHhcclxufVxyXG46Om5nLWRlZXAgLnBhaW4tc2xpZGVyLm1hdC1zbGlkZXIubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXHJcbjo6bmctZGVlcCAucGFpbi1zbGlkZXIubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdHJhY2stZmlsbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiA6Om5nLWRlZXAgLnBhaW4tc2xpZGVyIC5tYXQtc2xpZGVyLXRpY2tzIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAuMTAxJSAycHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCg1LjA1MDUxJSk7XHJcbn0gKi9cclxuLyogOjpuZy1kZWVwIC5wYWluLXNsaWRlci5tYXQtc2xpZGVyLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10cmFjay1maWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59ICovXHJcbjo6bmctZGVlcCAucGFpbi1zbGlkZXIubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYiB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogc29saWQgMnB4IGdyYXk7XHJcbiAgYm90dG9tOiAtMjBweDtcclxuICByaWdodDogLTIwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5wYWluLXNsaWRlci5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiA6Om5nLWRlZXAgLnBhaW4tc2xpZGVye1xyXG4gIGhlaWdodDogMTJweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7ICBcclxuICB3aWR0aDogMzAwcHg7XHJcbn0gKi9cclxuXHJcbm1hdC1zbGlkZXIge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLyogLnNlYXJjaFJlc3VsdHNOYXZ7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogNjkuMDA1dmhcclxufSAqL1xyXG5cclxuLyogLnNlYXJjaFJlc3VsdHNCYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgd2lkdGg6IDV2aDtcclxufSAqL1xyXG5cclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLW1hcmdpbiwgLmhpc3RvcnktaW5qdXJ5LCAuaGlzdG9yeS1mZXZlciB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuaDJ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5tYXQtdG9vbGJhcntcclxuaGVpZ2h0OiAyMXZoO1xyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYtY29udGFpbmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5taW4taGVpZ2h0OiA5M3ZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTEwJTtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgZm9udC1zaXplOiAxMTAlO1xyXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4udG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUIwN0YxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC5iYXJ7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgd2lkdGg6ODc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNkY2RkZGM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmJhcjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IDFweCAjZGNkY2RjO1xyXG4gIH1cclxuICAuYmFyOmZvY3VzLXdpdGhpbntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IDFweCAjZGNkY2RjO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gIH1cclxuICAuc2VhcmNoYmFye1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHdpZHRoOjgwMHB4O1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9cmFuZ2VdIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdHJhY2sge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLWxvd2VyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC11cHBlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggLTJweCBibGFjaygxKTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggLTJweCBibGFjaygxKTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10aHVtYiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAtMnB4IGJsYWNrKDEpO1xyXG4gIH1cclxuICBcclxuICAudGlja3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRpY2sge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLnNldmVyaXR5LXRpY2tze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTBweCAhaW1wb3J0YW50OztcclxuICB9XHJcblxyXG4gIC5xdWFudGl0eS1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDkwcHg7IFxyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87ICAgIFxyXG4gIH1cclxuICBcclxuICAucXVhbnRpdHktZmllbGQgLnZhbHVlLWJ1dHRvbnsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMTAwJTsgICBcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyBcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWFudGl0eS1maWVsZCAudmFsdWUtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICB9XHJcbiAgXHJcbiAgLnF1YW50aXR5LWZpZWxkIC52YWx1ZS1idXR0b246YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIxMCwgMjEwLCAyMTApO1xyXG4gIH1cclxuICBcclxuICAucXVhbnRpdHktZmllbGQgLmRlY3JlYXNlLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC00cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcclxuICB9XHJcbiAgXHJcbiAgLnF1YW50aXR5LWZpZWxkIC5pbmNyZWFzZS1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMDtcclxuICB9XHJcbiAgIFxyXG4gIC5xdWFudGl0eS1maWVsZCAubnVtYmVye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgZm9udC1mYW1pbHk6IGNhbGlicmk7XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWFudGl0eS1maWVsZCAubnVtYmVyOjpzZWxlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBCZWdpbiByZXNldCAqL1xyXG4gIC8qIGJvZHksXHJcbiAgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAvKiBFbmQgcmVzZXQgKi9cclxuICAvKiAqLFxyXG4gICo6YmVmb3JlLFxyXG4gICo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNWY3O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDY3NTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gIH1cclxuICBcclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMyYjM1MzU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0byAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMjBweCAyMHB4IDEzMHB4IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDc3OXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMTQ4LCAxNjQsIDE3OSwgMC4zMjkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMTIwcHggMzBweCAxMzBweCAzMHB4O1xyXG4gICAgfVxyXG4gIH0gICovXHJcbiAgXHJcbiAgLyogLnBhaW4tc2NhbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZTpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB0b3A6IDQ1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZTFlNjtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGU6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB0b3A6IDQ1cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmUxZTY7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTklO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTdlYmVlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogLTJweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbDpob3ZlciAucGFpbi1zY2FsZV9fZW1vamkge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUtZW1vamkge1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUtZW1vamkgLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tMSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNjNDE5O1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLTEgLnBhaW4tc2NhbGVfX2Vtb2ppLCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS0xIC5wYWluLXNjYWxlX19lbW9qaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNjNDE5O1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tMiwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhhZTFkO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tMiAucGFpbi1zY2FsZV9fZW1vamksIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTIgLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGFlMWQ7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS0zLCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS0zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWEwMWY7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS0zIC5wYWluLXNjYWxlX19lbW9qaSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tMyAucGFpbi1zY2FsZV9fZW1vamkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YTAxZjtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTQsIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzOTEyMjtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTQgLnBhaW4tc2NhbGVfX2Vtb2ppLCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS00IC5wYWluLXNjYWxlX19lbW9qaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM5MTIyO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tNSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tNSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4MjI0O1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tNSAucGFpbi1zY2FsZV9fZW1vamksIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTUgLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDgyMjQ7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS02LCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS02IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDc0Mjc7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS02IC5wYWluLXNjYWxlX19lbW9qaSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tNiAucGFpbi1zY2FsZV9fZW1vamkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkNzQyNztcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTcsIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNjUyOTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTcgLnBhaW4tc2NhbGVfX2Vtb2ppLCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS03IC5wYWluLXNjYWxlX19lbW9qaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE2NTI5O1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tOCwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tOCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc1NjJiO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tOCAucGFpbi1zY2FsZV9fZW1vamksIC5wYWluLXNjYWxlX19sZXZlbC0tc2VsZWN0ZWQucGFpbi1zY2FsZV9fbGV2ZWwtLTggLnBhaW4tc2NhbGVfX2Vtb2ppIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzU2MmI7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS05LCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS05IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTQ4MmU7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19sZXZlbC0tYWN0aXZlLnBhaW4tc2NhbGVfX2xldmVsLS05IC5wYWluLXNjYWxlX19lbW9qaSwgLnBhaW4tc2NhbGVfX2xldmVsLS1zZWxlY3RlZC5wYWluLXNjYWxlX19sZXZlbC0tOSAucGFpbi1zY2FsZV9fZW1vamkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1NDgyZTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1hY3RpdmUucGFpbi1zY2FsZV9fbGV2ZWwtLTEwLCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS0xMCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTAzMTMxO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbGV2ZWwtLWFjdGl2ZS5wYWluLXNjYWxlX19sZXZlbC0tMTAgLnBhaW4tc2NhbGVfX2Vtb2ppLCAucGFpbi1zY2FsZV9fbGV2ZWwtLXNlbGVjdGVkLnBhaW4tc2NhbGVfX2xldmVsLS0xMCAucGFpbi1zY2FsZV9fZW1vamkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwMzEzMTtcclxuICB9XHJcbiAgLnBhaW4tc2NhbGVfX2xldmVsLS1ibGluayB7XHJcbiAgICBhbmltYXRpb246IGZhZGUgMC4ycyBlYXNlO1xyXG4gIH1cclxuICAucGFpbi1zY2FsZV9fbnVtYmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG4gIC5wYWluLXNjYWxlX19lbW9qaSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTg1NTJiO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWdlbmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAubGVnZW5kX19iZWdpbm5pbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMzBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubGVnZW5kX19iZWdpbm5pbmcge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTUwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sZWdlbmRfX2VuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMzBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubGVnZW5kX19lbmQge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoNTAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH0gKi8iXX0= */"] });


/***/ }),

/***/ "t63s":
/*!**********************************************************************************!*\
  !*** ./src/app/treatment-card-medication/treatment-card-medication.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TreatmentCardMedicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentCardMedicationComponent", function() { return TreatmentCardMedicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");


class TreatmentCardMedicationComponent {
    constructor() { }
    ngOnInit() {
    }
}
TreatmentCardMedicationComponent.ɵfac = function TreatmentCardMedicationComponent_Factory(t) { return new (t || TreatmentCardMedicationComponent)(); };
TreatmentCardMedicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreatmentCardMedicationComponent, selectors: [["app-treatment-card-medication"]], decls: 88, vars: 0, consts: [[1, "subtitle"], ["mat-align-tabs", "start"], ["label", "Symptoms"], ["label", "Overview"], ["label", "Treatment"], ["label", "Protocol"], ["label", "Dont's"], ["label", "Expected Course"], ["label", "Exercises"]], template: function TreatmentCardMedicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "De Quervain's Tenosynovitis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "For those who already tried some form of medication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pain near the base of your thumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Swelling near the base of your thumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Difficulty moving your thumb and wrist when you're doing something that invulves grasping or pinching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "A \"sticking\" or \"stop-and-go\" sensation in your thumb when moving it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "De Quervain's tenosynovitis (dih-kwer-VAINS ten-oh-sine-oh-VIE-tis) is a painful condition affecting the tendons on the thumb side of your wrist. If you have de Quervain's tenosynovitis, it will probably hurt when you turn your wrist, grasp anything or make a fist. Although the exact cause of de Quervain's tenosynovitis isn't known, any activity that relies on repetitive hand or wrist movement \u2014 such as working in the garden, playing golf or racket sports, or lifting your baby \u2014 can make it worse. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Intralesional Injection of Kenacort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Tab. Paracetamol 650mg Thrice daily after food for 5 days > Twice daily after food for 10 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cold Pack at site of pain (at 2-3 hourly intervals, 3-5 mins per session)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "De Quervain\u2019s Splint (wear it while working, can remove it when resting)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Follow Up: After 15 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "No hot packs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "No Massages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Avoid repetitive thumb movements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Avoid activities involving handle grips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Recovery is moderately paced");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "3-5% improvement per day is a good recovery rate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Overall recovery may take 1-1.5 Months. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "If there is no/minimal relief after injection, medicine and resting for 3 weeks, then you will be recommended one more intralesional injection. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\nThe individual places the affected hand palm down on a flat surface, such as a table. With the other hand, the affected thumb is gently moved away from the table then replaced slowly and smoothly. This movement should be repeated 5 to 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "The person places the affected hand sideways, little finger first, on a flat surface. With the other hand, the affected thumb is moved away from the fingers, then brought back in line with them. The movement is repeated 5 to 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "The affected hand is placed flat on the table, palm first. Keeping the hand still, the thumb is moved out to the side, as far as feels comfortable, then returned. The exercise is repeated 5 to 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Once exercise three has ceased to cause pain, it can be carried out with the wrist off the edge of the table.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "With the palm down on the table, the individual should lift the thumb, as far away from the surface as possible, then bring it back down. This is repeated 10 times, increasing repetitions, as the movement becomes more comfortable.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "An elastic band is placed around the fingers and thumb, and the thumb is moved against the resistance of the band 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Resting the affected hand on the table palm up, the person touches the top of the thumb to the little finger. The stretch is held for 6 seconds and done 10 times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Holding the affected arm out in front, the person uses the other hand to press down the back of the hand, stretching the wrist. The position is held for 15 to 30 seconds and repeated three times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "As above, but the other hand is used to push the hand upwards, stretching the wrist in the other direction. The stretch is held for 15 to 30 seconds and repeated three times.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Holding a can in the affected hand, with the palm facing up, the individual can lower the weight then return to the starting position. Two sets of 15 are recommended.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "The person holds a can and places the wrist in a sideways position with the thumb at the top. They then gently bend their wrist up, with the thumb reaching towards the ceiling, then gently lower to the starting position, all without moving the forearm. Two sets of 15 are advised.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "A person can strengthen their grip by squeezing a soft rubber ball and holding the stretch for 5 seconds. Two sets of 15 are recommended.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "These exercises should be used for rehabilitation and only done once the initial pain has eased.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "The first step to tackling De Quervain\u2019s tenosynovitis is resting from the activity or activities that have caused the pain. Wearing a splint and regularly applying heat or cold packs will also help.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"]], styles: [".mat-tab-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 48px;\r\n  }\r\n  .sample-card[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n     margin: 1rem;\r\n    position: relative;\r\n    width: 900px;\r\n    border: 1px solid #7B1FA2;\r\n  }\r\n  .mat-card-subtitle[_ngcontent-%COMP%] {\r\n    color: #FCC419;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n  .mat-card-title[_ngcontent-%COMP%] {\r\n    color: #7B1FA2;\r\n  }\r\n  .mat-card-content[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  h2[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n  }\r\n  .subtitle[_ngcontent-%COMP%]{\r\n    color: orangered;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWF0bWVudC1jYXJkLW1lZGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0tBQ2pCLFlBQVk7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0UsY0FBYztJQUNkLHlDQUF5QztFQUMzQztFQUVBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InRyZWF0bWVudC1jYXJkLW1lZGljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFiLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgfVxyXG4gIC5zYW1wbGUtY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdCMUZBMjtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjRkNDNDE5O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzdCMUZBMjtcclxuICB9XHJcbiAgLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH0gIFxyXG4gIC5zdWJ0aXRsZXtcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XHJcbiAgfSJdfQ== */"] });


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