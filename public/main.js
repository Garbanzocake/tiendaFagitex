(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+7Hz":
/*!*************************************************************!*\
  !*** ./src/app/home-page/components/moon/moon.component.ts ***!
  \*************************************************************/
/*! exports provided: MoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoonComponent", function() { return MoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MoonComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoonComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onClickedBomb(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoonComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TIENDA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoonComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} }
function MoonComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
class MoonComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.estadoLuna = '';
    }
    ngOnInit() {
        if (this.router.url.includes('tienda')) {
            this.estadoLuna = 'tienda';
        }
        else if (this.router.url.includes('servicios')) {
            this.estadoLuna = 'servicios';
        }
        else {
            this.estadoLuna = 'cohete';
        }
    }
    //Animacion cohete desplazado
    onClickedBomb() {
        let tl = gsap.timeline();
        tl.to('#bombaimg1', {
            duration: 3,
            y: -100,
            x: 200,
            scale: 1.5,
            ease: 'sine'
        });
        tl.to('#bombaimg1', {
            duration: 6,
            rotation: 80,
            scale: 0.5,
            x: 600,
            y: 400,
            ease: 'sine'
        });
        // setTimeout(this.redireccion, 10000);
    }
    //Animacion escalado
    onClickedBomb2() {
        let tl = gsap.timeline();
        tl.to('#bombaimg2', {
            duration: 1,
            scale: 1.5,
            ease: 'sine'
        });
        tl.to('#bombaimg2', {
            duration: 1,
            opacity: 0,
            scale: 1.0,
            ease: 'sine'
        });
        // setTimeout(this.redireccion,4000);
    }
    redireccion() {
        window.location.replace('/store/landingPage');
    }
}
MoonComponent.ɵfac = function MoonComponent_Factory(t) { return new (t || MoonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MoonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoonComponent, selectors: [["app-moon"]], decls: 11, vars: 4, consts: [[1, "container-fluid", "d-none", "d-sm-block", "p-0", "border-0"], [1, "row", "align-items-center", "animate__animated", "animate__fadeInLeft", "animate__delay-1s", "d-flex", "justify-content-center", "p-0"], ["class", "d-block", 3, "click", 4, "ngIf"], ["class", "nav-link moon-texts p2Tienda", "routerLink", "/store/tienda", 4, "ngIf"], ["src", "../../../../assets/img/UIBlitz/luna.png", "alt", "", 1, "img-moon"], [1, "container-fluid", "p-0", "border-0", "d-block", "d-sm-none"], [1, "col-12"], ["class", "img-moon-middle animate__animated animate__headShake animate__infinite", "src", "../../../../assets/img/UIBlitz/lunablitzsolo.png", "alt", "", 4, "ngIf"], ["class", "img-moon-store animate__animated animate__fadeIn", "src", "../../../../assets/img/UIBlitz/lunablitzsolo.png", "alt", "", 4, "ngIf"], [1, "d-block", 3, "click"], ["id", "bombaimg1", "src", "../../../../assets/img/UIBlitz/intrologobomba.png", "alt", "", 1, "img-bomb"], ["routerLink", "/store/tienda", 1, "nav-link", "moon-texts", "p2Tienda"], ["src", "../../../../assets/img/UIBlitz/lunablitzsolo.png", "alt", "", 1, "img-moon-middle", "animate__animated", "animate__headShake", "animate__infinite"], ["src", "../../../../assets/img/UIBlitz/lunablitzsolo.png", "alt", "", 1, "img-moon-store", "animate__animated", "animate__fadeIn"]], template: function MoonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MoonComponent_a_2_Template, 2, 0, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MoonComponent_a_3_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MoonComponent_img_7_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MoonComponent_img_10_Template, 1, 0, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estadoLuna === "cohete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estadoLuna === "tienda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estadoLuna !== "tienda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estadoLuna === "tienda");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".img-moon[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n\n.img-moon-middle[_ngcontent-%COMP%] {\n  display: flex;\n\n  width: 100%;\n  margin-top: 140px;\n\n}\n\n.img-moon-store[_ngcontent-%COMP%] {\n  display: flex;\n\n  width: 100%;\n  \n}\n\n.img-bomb[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  border-radius: 300px;\n}\n\n.img-logo[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n\n  \n  width: 80%;\n  height: 80%;\n  top: 40px;\n  left: 40px;\n  border-radius: 300px;\n}\n\n.img-logo2[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n\n  \n  width: 80%;\n  height: 80%;\n  top: 40px;\n  \n  border-radius: 300px;\n}\n\n.moon-texts[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTs7RUFFYixXQUFXO0VBQ1gsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGFBQWE7O0VBRWIsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjs7RUFFbEI7cUJBQ21CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCOztFQUVsQjtxQkFDbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6Im1vb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctbW9vbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWctbW9vbi1taWRkbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNDBweDtcblxufVxuXG4uaW1nLW1vb24tc3RvcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBtYXJnaW4tdG9wOiAxNDBweDsgKi9cbn1cblxuXG4uaW1nLWJvbWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzMDBweDtcbn1cblxuLmltZy1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIC8qIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMi4yNXJlbTsgKi9cbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzAwcHg7XG59XG5cbi5pbWctbG9nbzIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgLyogbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyLjI1cmVtOyAqL1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgdG9wOiA0MHB4O1xuICAvKiBsZWZ0OiA0MHB4OyAqL1xuICBib3JkZXItcmFkaXVzOiAzMDBweDtcbn1cblxuLm1vb24tdGV4dHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-moon',
                templateUrl: './moon.component.html',
                styleUrls: ['./moon.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "/mk7":
/*!*********************************************************************!*\
  !*** ./src/app/home-page/components/thebomb1/thebomb1.component.ts ***!
  \*********************************************************************/
/*! exports provided: Thebomb1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thebomb1Component", function() { return Thebomb1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = ["bombadiv"];
class Thebomb1Component {
    constructor() { }
    ngOnInit() {
    }
    onClickeBomb() {
        let tl = gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].timeline();
        tl.to('#bombaimg', {
            duration: 1,
            scale: 1.5,
            ease: 'sine'
        });
        tl.to('#bombaimg', {
            duration: 1,
            opacity: 0,
            scale: 1.0,
            ease: 'sine'
        });
        setTimeout(this.redireccion, 4000);
    }
    redireccion() {
        window.location.replace('/store/landingPage');
    }
}
Thebomb1Component.ɵfac = function Thebomb1Component_Factory(t) { return new (t || Thebomb1Component)(); };
Thebomb1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Thebomb1Component, selectors: [["app-thebomb1"]], viewQuery: function Thebomb1Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bomba = _t.first);
    } }, decls: 6, vars: 0, consts: [[1, "container-fluid", "border-0"], [1, "row", "background", "animate__animated", "animate__fadeInLeft", "animate__delay-1s"], [1, "col-12", "col-lg-6", "animate__animated", "animate__fadeIn"], ["bombadiv", ""], ["routerLink", "", 3, "click"], ["id", "bombaimg", "src", "../../../../assets/img/UIBlitz/intrologobomba.png", "alt", "", 1, "img-bomb", "img-bomb-dropped", "animate__animated", "animate__headShake", "animate__repeat-3"]], template: function Thebomb1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Thebomb1Component_Template_a_click_4_listener() { return ctx.onClickeBomb(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".img-bomb[_ngcontent-%COMP%]{\n  display: flex;\n\n  width: 100%;\n  max-height: 31.25rem;\n  border-radius: 300px;\n  --animate-repeat: 2;\n\n}\n\n\n\n\n\n.background[_ngcontent-%COMP%]{\n  display: flex;\n  \n  background-color: #FFFFFF;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZWJvbWIxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhOztFQUViLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjs7QUFFckI7Ozs7OztBQU1BO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckIiLCJmaWxlIjoidGhlYm9tYjEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctYm9tYntcbiAgZGlzcGxheTogZmxleDtcblxuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzEuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICAtLWFuaW1hdGUtcmVwZWF0OiAyO1xuXG59XG5cblxuXG5cblxuLmJhY2tncm91bmR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGhlaWdodDogMTAwdmg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Thebomb1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thebomb1',
                templateUrl: './thebomb1.component.html',
                styleUrls: ['./thebomb1.component.css'],
            }]
    }], function () { return []; }, { bomba: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['bombadiv', { static: true }]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/test/Desktop/DeveloperCareer/Desarrolloweb/TiendaApp/src/main.ts */"zUnb");


/***/ }),

/***/ "0CBe":
/*!**************************************!*\
  !*** ./src/app/pipes/imagen.pipe.ts ***!
  \**************************************/
/*! exports provided: ImagenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenPipe", function() { return ImagenPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ImagenPipe {
    transform(objeto) {
        if (!objeto._id && !objeto.img) {
            return 'assets/no-image.jpg';
        }
        else if (objeto.img) {
            return objeto.img;
        }
        else {
            return `assets/no-image.jpg`;
        }
    }
}
ImagenPipe.ɵfac = function ImagenPipe_Factory(t) { return new (t || ImagenPipe)(); };
ImagenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "imagen", type: ImagenPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'imagen',
            }]
    }], null, null); })();


/***/ }),

/***/ "0HwK":
/*!******************************************************!*\
  !*** ./src/app/home-page/homepage-routing.module.ts ***!
  \******************************************************/
/*! exports provided: HomepageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageRoutingModule", function() { return HomepageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ "RbsL");
/* harmony import */ var _pages_public_product_public_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/public-product/public-product.component */ "Nga3");
/* harmony import */ var _pages_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/servicios/servicios.component */ "5alf");
/* harmony import */ var _pages_tienda_tienda_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/tienda/tienda.component */ "AXWa");
/* harmony import */ var _pages_ignition_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/ignition/start.component */ "YP/F");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "g1bI");
/* harmony import */ var _pages_galleria_stickers_galleria_stickers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/galleria-stickers/galleria-stickers.component */ "9nQ4");











const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        children: [
            { path: 'start', component: _pages_ignition_start_component__WEBPACK_IMPORTED_MODULE_6__["StartComponent"] },
            { path: 'servicios', component: _pages_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_4__["ServiciosComponent"] },
            { path: 'tienda', component: _pages_tienda_tienda_component__WEBPACK_IMPORTED_MODULE_5__["TiendaComponent"] },
            { path: 'landingPage', component: _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
            { path: 'galleria', component: _pages_galleria_stickers_galleria_stickers_component__WEBPACK_IMPORTED_MODULE_8__["GalleriaStickersComponent"] },
            { path: ':id', component: _pages_public_product_public_product_component__WEBPACK_IMPORTED_MODULE_3__["PublicProductComponent"] },
            { path: 'sticker/:id', component: _pages_public_product_public_product_component__WEBPACK_IMPORTED_MODULE_3__["PublicProductComponent"] },
            { path: '**', redirectTo: 'start' },
        ],
    },
];
class HomepageRoutingModule {
}
HomepageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomepageRoutingModule });
HomepageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomepageRoutingModule_Factory(t) { return new (t || HomepageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomepageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "0cch":
/*!************************************************************!*\
  !*** ./src/app/pedidos/pages/listado/listado.component.ts ***!
  \************************************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_tabla_ventas_tabla_ventas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tabla-ventas/tabla-ventas.component */ "QJXv");



class ListadoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListadoComponent.ɵfac = function ListadoComponent_Factory(t) { return new (t || ListadoComponent)(); };
ListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadoComponent, selectors: [["app-listado"]], decls: 3, vars: 2, consts: [[1, "container-fluid", "m-0", "p-0"], [3, "filtro"]], template: function ListadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tabla-ventas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-tabla-ventas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filtro", "Completas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filtro", "Incompletas");
    } }, directives: [_components_tabla_ventas_tabla_ventas_component__WEBPACK_IMPORTED_MODULE_1__["TablaVentasComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YWRvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listado',
                templateUrl: './listado.component.html',
                styleUrls: ['./listado.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "20HZ":
/*!*************************************************************!*\
  !*** ./src/app/shared/whatsappbtn/whatsappbtn.component.ts ***!
  \*************************************************************/
/*! exports provided: WhatsappbtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappbtnComponent", function() { return WhatsappbtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




class WhatsappbtnComponent {
    constructor() { }
    ngOnInit() {
    }
}
WhatsappbtnComponent.ɵfac = function WhatsappbtnComponent_Factory(t) { return new (t || WhatsappbtnComponent)(); };
WhatsappbtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhatsappbtnComponent, selectors: [["app-whatsappbtn"]], inputs: { producto: "producto" }, decls: 4, vars: 1, consts: [["mat-button", "", "color", "primary"], ["target", "_blank", 1, "btn-wsp", 3, "href"]], template: function WhatsappbtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " whatsapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://api.whatsapp.com/send?phone=573223080414&text=Hola me interesa saber mas informacion sobre el producto: ", ctx.producto.nombre, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".btn-wsp[_ngcontent-%COMP%]{\nposition: fixed;\nwidth: 55px;\nheight:55px;\nline-height: 55px;\nbottom: 30px;\nright: 30px;\nbackground-color: #0df053;\ncolor: #ffffff;\nborder-radius: 50px;\ntext-align: center;\nfont-size: 30px;\nbox-shadow: 0px 1px 10px rgba(0,0,0,0.3);\nz-index:1000;\n\n}\n\n.btn-wsp[_ngcontent-%COMP%]:hover{\n  text-decoration: none;\n  background-color: #ffffff;\ncolor: #0df053;\ntransition: all 1s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoYXRzYXBwYnRuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0EsZUFBZTtBQUNmLFdBQVc7QUFDWCxXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixXQUFXO0FBQ1gseUJBQXlCO0FBQ3pCLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZix3Q0FBd0M7QUFDeEMsWUFBWTs7QUFFWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0IsY0FBYztBQUNkLHVCQUF1QjtBQUN2QiIsImZpbGUiOiJ3aGF0c2FwcGJ0bi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYnRuLXdzcHtcbnBvc2l0aW9uOiBmaXhlZDtcbndpZHRoOiA1NXB4O1xuaGVpZ2h0OjU1cHg7XG5saW5lLWhlaWdodDogNTVweDtcbmJvdHRvbTogMzBweDtcbnJpZ2h0OiAzMHB4O1xuYmFja2dyb3VuZC1jb2xvcjogIzBkZjA1MztcbmNvbG9yOiAjZmZmZmZmO1xuYm9yZGVyLXJhZGl1czogNTBweDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtc2l6ZTogMzBweDtcbmJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDAsMCwwLDAuMyk7XG56LWluZGV4OjEwMDA7XG5cbn1cblxuLmJ0bi13c3A6aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbmNvbG9yOiAjMGRmMDUzO1xudHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhatsappbtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-whatsappbtn',
                templateUrl: './whatsappbtn.component.html',
                styleUrls: ['./whatsappbtn.component.css']
            }]
    }], function () { return []; }, { producto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "2BsO":
/*!*************************************************************************************!*\
  !*** ./src/app/productos/components/producto-tarjeta/producto-tarjeta.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductoTarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoTarjetaComponent", function() { return ProductoTarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/imagen.pipe */ "0CBe");
/* harmony import */ var _pipes_disponible_item_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/disponible-item.pipe */ "P2oc");








const _c0 = function (a1) { return ["/productos/editar", a1]; };
function ProductoTarjetaComponent_mat_card_0_button_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar Producto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.producto._id));
} }
const _c1 = function (a1) { return ["/productos", a1]; };
function ProductoTarjetaComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Disponibilidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "disponibleItem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Ver Producto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProductoTarjetaComponent_mat_card_0_button_24_Template, 2, 3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.producto.categoria.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx_r0.producto), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](14, 9, ctx_r0.producto.precio, "COP$", "symbol", "5.0-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 14, ctx_r0.producto));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx_r0.producto._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.modo);
} }
function ProductoTarjetaComponent_mat_card_1_button_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar Producto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r3.productosCat._id));
} }
function ProductoTarjetaComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Disponibilidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "disponibleItem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Ver Producto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProductoTarjetaComponent_mat_card_1_button_24_Template, 2, 3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.productosCat.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.productosCat.categoria.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx_r1.productosCat), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](14, 9, ctx_r1.productosCat.precio, "COP$", "symbol", "5.0-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 14, ctx_r1.productosCat));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx_r1.productosCat._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.modo);
} }
class ProductoTarjetaComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductoTarjetaComponent.ɵfac = function ProductoTarjetaComponent_Factory(t) { return new (t || ProductoTarjetaComponent)(); };
ProductoTarjetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductoTarjetaComponent, selectors: [["app-producto-tarjeta"]], inputs: { producto: "producto", productosCat: "productosCat", modo: "modo" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["mat-card-image", "", "alt", "", 3, "src"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["mat-button", "", "color", "secondary", 3, "routerLink", 4, "ngIf"], ["mat-button", "", "color", "secondary", 3, "routerLink"]], template: function ProductoTarjetaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductoTarjetaComponent_mat_card_0_Template, 25, 18, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductoTarjetaComponent_mat_card_1_Template, 25, 18, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.producto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productosCat);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_5__["ImagenPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _pipes_disponible_item_pipe__WEBPACK_IMPORTED_MODULE_6__["DisponibleItemPipe"]], styles: ["mat-card[_ngcontent-%COMP%]{\n      margin-top:20px;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductoTarjetaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-producto-tarjeta',
                templateUrl: './producto-tarjeta.component.html',
                styles: [
                    `
    mat-card{
      margin-top:20px;
    }
    `
                ]
            }]
    }], function () { return []; }, { producto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], productosCat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "2kTN":
/*!***********************************************************************************!*\
  !*** ./src/app/home-page/components/slider-stickers/slider-stickers.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SliderStickersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderStickersComponent", function() { return SliderStickersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stickers_services_stickers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../stickers/services/stickers.service */ "m1PF");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/sticker", a1]; };
function SliderStickersComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ver Sticker ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r1._id));
} }
class SliderStickersComponent {
    constructor(stickersService) {
        this.stickersService = stickersService;
        this.stickers = [];
    }
    ngOnInit() {
        this.stickersService.getStickers().subscribe(({ stickers }) => {
            // console.log(productos);
            this.stickers = stickers;
        });
    }
}
SliderStickersComponent.ɵfac = function SliderStickersComponent_Factory(t) { return new (t || SliderStickersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_stickers_services_stickers_service__WEBPACK_IMPORTED_MODULE_1__["StickersService"])); };
SliderStickersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderStickersComponent, selectors: [["app-slider-stickers"]], decls: 7, vars: 1, consts: [[1, "container-fluid", "m-0", "p-0"], [1, "row", "m-0", "p-0"], ["class", "col-12 col-sm-2 mb-4 d-flex flex-wrap", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-2", "mb-4", "d-flex", "flex-wrap"], ["oncontextmenu", "return false", 1, "img-fluid", 3, "src", "alt"], [1, "row", "d-inline"], ["mat-button", "", "color", "primary", 3, "routerLink"]], template: function SliderStickersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Galleria de Stickers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SliderStickersComponent_div_6_Template, 8, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stickers);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbGlkZXItc3RpY2tlcnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderStickersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slider-stickers',
                templateUrl: './slider-stickers.component.html',
                styleUrls: ['./slider-stickers.component.css'],
            }]
    }], function () { return [{ type: _stickers_services_stickers_service__WEBPACK_IMPORTED_MODULE_1__["StickersService"] }]; }, null); })();


/***/ }),

/***/ "3N6W":
/*!*******************************************************************************!*\
  !*** ./src/app/productos/components/producto-info/producto-info.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductoInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoInfoComponent", function() { return ProductoInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _pipes_genero_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/genero.pipe */ "baVJ");




class ProductoInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductoInfoComponent.ɵfac = function ProductoInfoComponent_Factory(t) { return new (t || ProductoInfoComponent)(); };
ProductoInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductoInfoComponent, selectors: [["app-producto-info"]], inputs: { producto: "producto" }, decls: 27, vars: 9, consts: [[1, "container", "m-0", "p-0"], [1, "row", "m-0", "p-0", "justify-content-around"], [1, "col-9"], [1, "col-3", "d-flex", "justify-content-center"], ["mat-card-lg-image", "", "alt", "Photo of a Shiba Inu", 3, "src"]], template: function ProductoInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "generoProducto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.producto.nombre, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.producto.categoria.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("precio: ", ctx.producto.precio, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Unidades Disponibles: ", ctx.producto.unidades, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Genero: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 7, ctx.producto.genero), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Descripcion: ", ctx.producto.descripcion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.producto.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardLgImage"]], pipes: [_pipes_genero_pipe__WEBPACK_IMPORTED_MODULE_2__["generoPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0by1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductoInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-producto-info',
                templateUrl: './producto-info.component.html',
                styleUrls: ['./producto-info.component.css']
            }]
    }], function () { return []; }, { producto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "5Ovr":
/*!*********************************************!*\
  !*** ./src/app/prime-ng/prime-ng.module.ts ***!
  \*********************************************/
/*! exports provided: PrimeNgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeNgModule", function() { return PrimeNgModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/fieldset */ "fk4S");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/carousel */ "LwO5");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/galleria */ "2art");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tag */ "hYoW");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tabview */ "dPl2");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/fileupload */ "NCSE");
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/chips */ "RGqm");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/badge */ "fqaE");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/radiobutton */ "LuMj");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/divider */ "lUkA");

//PrimeNG





















class PrimeNgModule {
}
PrimeNgModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PrimeNgModule });
PrimeNgModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PrimeNgModule_Factory(t) { return new (t || PrimeNgModule)(); }, imports: [primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_2__["CardModule"],
        primeng_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_4__["MenubarModule"],
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_6__["FieldsetModule"],
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__["FileUploadModule"],
        primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__["ToolbarModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
        primeng_tag__WEBPACK_IMPORTED_MODULE_13__["TagModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_14__["TabViewModule"],
        primeng_galleria__WEBPACK_IMPORTED_MODULE_11__["GalleriaModule"],
        primeng_chips__WEBPACK_IMPORTED_MODULE_16__["ChipsModule"],
        primeng_badge__WEBPACK_IMPORTED_MODULE_17__["BadgeModule"],
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__["RadioButtonModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_19__["InputNumberModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_20__["DividerModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimeNgModule, { exports: [primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_2__["CardModule"],
        primeng_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_4__["MenubarModule"],
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_6__["FieldsetModule"],
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__["FileUploadModule"],
        primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__["ToolbarModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
        primeng_tag__WEBPACK_IMPORTED_MODULE_13__["TagModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_14__["TabViewModule"],
        primeng_galleria__WEBPACK_IMPORTED_MODULE_11__["GalleriaModule"],
        primeng_chips__WEBPACK_IMPORTED_MODULE_16__["ChipsModule"],
        primeng_badge__WEBPACK_IMPORTED_MODULE_17__["BadgeModule"],
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__["RadioButtonModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_19__["InputNumberModule"],
        primeng_divider__WEBPACK_IMPORTED_MODULE_20__["DividerModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimeNgModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                exports: [
                    primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"],
                    primeng_card__WEBPACK_IMPORTED_MODULE_2__["CardModule"],
                    primeng_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
                    primeng_menubar__WEBPACK_IMPORTED_MODULE_4__["MenubarModule"],
                    primeng_fieldset__WEBPACK_IMPORTED_MODULE_6__["FieldsetModule"],
                    primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__["FileUploadModule"],
                    primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"],
                    primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__["ToolbarModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
                    primeng_tag__WEBPACK_IMPORTED_MODULE_13__["TagModule"],
                    primeng_tabview__WEBPACK_IMPORTED_MODULE_14__["TabViewModule"],
                    primeng_galleria__WEBPACK_IMPORTED_MODULE_11__["GalleriaModule"],
                    primeng_chips__WEBPACK_IMPORTED_MODULE_16__["ChipsModule"],
                    primeng_badge__WEBPACK_IMPORTED_MODULE_17__["BadgeModule"],
                    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__["RadioButtonModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_19__["InputNumberModule"],
                    primeng_divider__WEBPACK_IMPORTED_MODULE_20__["DividerModule"],
                    primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "5alf":
/*!******************************************************************!*\
  !*** ./src/app/home-page/pages/servicios/servicios.component.ts ***!
  \******************************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/workingprogress/workingprogress.component */ "xQQl");
/* harmony import */ var _shared_footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/footerpublic/footerpublic.component */ "tns5");




class ServiciosComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiciosComponent.ɵfac = function ServiciosComponent_Factory(t) { return new (t || ServiciosComponent)(); };
ServiciosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiciosComponent, selectors: [["app-servicios"]], decls: 5, vars: 0, consts: [[1, "container-fluid", "bg-black"], [1, "row", "container-fluid", "m-0"], [1, "col-12", "col-lg-12"]], template: function ServiciosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-workingprogress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footerpublic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_1__["WorkingprogressComponent"], _shared_footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_2__["FooterpublicComponent"]], styles: ["*[_ngcontent-%COMP%]{\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2lvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNlcnZpY2lvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiciosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-servicios',
                templateUrl: './servicios.component.html',
                styleUrls: ['./servicios.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "64/j":
/*!***********************************************!*\
  !*** ./src/app/home-page/home-page.module.ts ***!
  \***********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/carousel */ "LwO5");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../prime-ng/prime-ng.module */ "5Ovr");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "dX5d");
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage-routing.module */ "0HwK");
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ "RbsL");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _components_producto_tarjeta_producto_tarjeta_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/producto-tarjeta/producto-tarjeta.component */ "9Vgl");
/* harmony import */ var _pages_public_product_public_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/public-product/public-product.component */ "Nga3");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _pedidos_pedidos_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pedidos/pedidos.module */ "lRpP");
/* harmony import */ var _productos_productos_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../productos/productos.module */ "LYHX");
/* harmony import */ var _components_categorias_slider_categorias_slider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/categorias-slider/categorias-slider.component */ "wIMV");
/* harmony import */ var _pages_galleria_stickers_galleria_stickers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/galleria-stickers/galleria-stickers.component */ "9nQ4");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/home/home.component */ "g1bI");
/* harmony import */ var _components_moon_moon_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/moon/moon.component */ "+7Hz");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "VjTH");
/* harmony import */ var _pages_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/servicios/servicios.component */ "5alf");
/* harmony import */ var _components_slider_stickers_slider_stickers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/slider-stickers/slider-stickers.component */ "2kTN");
/* harmony import */ var _pages_ignition_start_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/ignition/start.component */ "YP/F");
/* harmony import */ var _components_tabs_productos_tabs_productos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/tabs-productos/tabs-productos.component */ "a5gm");
/* harmony import */ var _components_thebomb1_thebomb1_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/thebomb1/thebomb1.component */ "/mk7");
/* harmony import */ var _pages_tienda_tienda_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/tienda/tienda.component */ "AXWa");
/* harmony import */ var _components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/workingprogress/workingprogress.component */ "xQQl");































// import { DisponibleItemPipe } from './pipes/disponibleitem.pipe';
// import { ImagenPipe } from './pipes/imagen.pipe';
class HomePageModule {
}
HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomePageModule_Factory(t) { return new (t || HomePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _homepage_routing_module__WEBPACK_IMPORTED_MODULE_9__["HomepageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_7__["PrimeNgModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _productos_productos_module__WEBPACK_IMPORTED_MODULE_16__["ProductosModule"],
            _pedidos_pedidos_module__WEBPACK_IMPORTED_MODULE_15__["PedidosModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__["LandingPageComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"],
        _components_producto_tarjeta_producto_tarjeta_component__WEBPACK_IMPORTED_MODULE_12__["ProductoTarjetaComponent"],
        _pages_public_product_public_product_component__WEBPACK_IMPORTED_MODULE_13__["PublicProductComponent"],
        _components_thebomb1_thebomb1_component__WEBPACK_IMPORTED_MODULE_26__["Thebomb1Component"],
        _pages_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_22__["ServiciosComponent"],
        _pages_tienda_tienda_component__WEBPACK_IMPORTED_MODULE_27__["TiendaComponent"],
        _components_moon_moon_component__WEBPACK_IMPORTED_MODULE_20__["MoonComponent"],
        _pages_ignition_start_component__WEBPACK_IMPORTED_MODULE_24__["StartComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
        _components_moon_moon_component__WEBPACK_IMPORTED_MODULE_20__["MoonComponent"],
        _components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_28__["WorkingprogressComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
        _components_categorias_slider_categorias_slider_component__WEBPACK_IMPORTED_MODULE_17__["CategoriasSliderComponent"],
        _components_tabs_productos_tabs_productos_component__WEBPACK_IMPORTED_MODULE_25__["TabsProductosComponent"],
        _pages_galleria_stickers_galleria_stickers_component__WEBPACK_IMPORTED_MODULE_18__["GalleriaStickersComponent"],
        _components_slider_stickers_slider_stickers_component__WEBPACK_IMPORTED_MODULE_23__["SliderStickersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _homepage_routing_module__WEBPACK_IMPORTED_MODULE_9__["HomepageRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_7__["PrimeNgModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
        primeng_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _productos_productos_module__WEBPACK_IMPORTED_MODULE_16__["ProductosModule"],
        _pedidos_pedidos_module__WEBPACK_IMPORTED_MODULE_15__["PedidosModule"]], exports: [_components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_28__["WorkingprogressComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__["LandingPageComponent"],
                    _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"],
                    _components_producto_tarjeta_producto_tarjeta_component__WEBPACK_IMPORTED_MODULE_12__["ProductoTarjetaComponent"],
                    _pages_public_product_public_product_component__WEBPACK_IMPORTED_MODULE_13__["PublicProductComponent"],
                    _components_thebomb1_thebomb1_component__WEBPACK_IMPORTED_MODULE_26__["Thebomb1Component"],
                    _pages_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_22__["ServiciosComponent"],
                    _pages_tienda_tienda_component__WEBPACK_IMPORTED_MODULE_27__["TiendaComponent"],
                    _components_moon_moon_component__WEBPACK_IMPORTED_MODULE_20__["MoonComponent"],
                    _pages_ignition_start_component__WEBPACK_IMPORTED_MODULE_24__["StartComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                    _components_moon_moon_component__WEBPACK_IMPORTED_MODULE_20__["MoonComponent"],
                    _components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_28__["WorkingprogressComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
                    _components_categorias_slider_categorias_slider_component__WEBPACK_IMPORTED_MODULE_17__["CategoriasSliderComponent"],
                    _components_tabs_productos_tabs_productos_component__WEBPACK_IMPORTED_MODULE_25__["TabsProductosComponent"],
                    _pages_galleria_stickers_galleria_stickers_component__WEBPACK_IMPORTED_MODULE_18__["GalleriaStickersComponent"],
                    _components_slider_stickers_slider_stickers_component__WEBPACK_IMPORTED_MODULE_23__["SliderStickersComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _homepage_routing_module__WEBPACK_IMPORTED_MODULE_9__["HomepageRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_7__["PrimeNgModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                    primeng_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _productos_productos_module__WEBPACK_IMPORTED_MODULE_16__["ProductosModule"],
                    _pedidos_pedidos_module__WEBPACK_IMPORTED_MODULE_15__["PedidosModule"]
                ],
                exports: [
                    _components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_28__["WorkingprogressComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "6BtO":
/*!*******************************************************************!*\
  !*** ./src/app/shared/loading-screen/loading-screen.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoadingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenComponent", function() { return LoadingScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");



class LoadingScreenComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingScreenComponent.ɵfac = function LoadingScreenComponent_Factory(t) { return new (t || LoadingScreenComponent)(); };
LoadingScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingScreenComponent, selectors: [["app-loading-screen"]], decls: 3, vars: 0, consts: [[1, "row", "container-fluid", "d-flex", "justify-content-center", "align-content-center", 2, "height", "100vh"], [1, "col-auto", "spinner"]], template: function LoadingScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["MatSpinner"]], styles: [".spinner[_ngcontent-%COMP%]{\n  \n  background-color: #FAFAFA;\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5Qjs7O0FBRzNCIiwiZmlsZSI6ImxvYWRpbmctc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zcGlubmVye1xuICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG5cblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-screen',
                templateUrl: './loading-screen.component.html',
                styleUrls: ['./loading-screen.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8puP":
/*!***********************************************************!*\
  !*** ./src/app/shared/error-page/error-page.component.ts ***!
  \***********************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 10, vars: 0, consts: [["href", "/auth/login"], ["href", "/productos/home"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ir a Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ir a Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-page',
                templateUrl: './error-page.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9/6Q":
/*!*****************************************************************************************!*\
  !*** ./src/app/productos/components/galleria-productos/galleria-productos.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: GalleriaProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaProductosComponent", function() { return GalleriaProductosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../productos/services/productos.service */ "epog");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/galleria */ "2art");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










const _c0 = ["galleria"];
function GalleriaProductosComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GalleriaProductosComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a1) { return ["/store", a1]; };
function GalleriaProductosComponent_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r7.productos[ctx_r7.activeIndex]._id));
} }
function GalleriaProductosComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaProductosComponent_ng_template_4_div_1_Template, 2, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.productos);
} }
const _c2 = function () { return { "max-width": "800px" }; };
class GalleriaProductosComponent {
    constructor(productosService) {
        this.productosService = productosService;
        this.productos = [];
        this.imagenes = [];
        this.images = [];
        this.displayBasic = false;
        this.activeIndex = 0;
        this.fullscreen = false;
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5,
            },
            {
                breakpoint: '960px',
                numVisible: 4,
            },
            {
                breakpoint: '768px',
                numVisible: 3,
            },
            {
                breakpoint: '560px',
                numVisible: 1,
            },
        ];
        this.responsiveOptions2 = [
            {
                breakpoint: '1500px',
                numVisible: 5,
            },
            {
                breakpoint: '1024px',
                numVisible: 3,
            },
            {
                breakpoint: '768px',
                numVisible: 2,
            },
            {
                breakpoint: '560px',
                numVisible: 1,
            },
        ];
    }
    ngOnInit() {
        this.obtenerImagenes();
    }
    ngOnChanges(changes) {
        this.obtenerImagenes();
    }
    // Metodos de llenado galleria
    obtenerImagenes() {
        if (this.termino !== '') {
            this.cargarProductosPorCategoria();
        }
        else {
            this.cargarAllProducts();
        }
    }
    cargarAllProducts() {
        this.productosService.getProductos().subscribe((resp) => {
            this.productos = resp.productos;
            console.log(this.productos);
            for (let i = 0; i < this.productos.length; i++) {
                const element = this.productos[i];
                this.imagenes.push(element.img);
            }
            this.images = this.imagenes;
            // console.log(this.images);
        });
    }
    cargarProductosPorCategoria() {
        this.productosService
            .getProductosPorCategoria(this.termino)
            .subscribe((producto) => {
            this.productos = producto.results;
            // console.log(this.productos);
        });
    }
    //  Funcionamiento basico de la galleria
    imageClick(index) {
        this.activeIndex = index;
    }
    OnfullScreenClick() {
        this.displayBasic = !this.displayBasic;
    }
    //METODOS DE PRIME NG
    toggleFullScreen() {
        if (this.fullscreen) {
            this.closePreviewFullScreen();
        }
        else {
            this.openPreviewFullScreen();
        }
    }
    openPreviewFullScreen() {
        let elem = this.galleria.element.nativeElement.querySelector('.p-galleria');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem['mozRequestFullScreen']) {
            /* Firefox */
            elem['mozRequestFullScreen']();
        }
        else if (elem['webkitRequestFullscreen']) {
            /* Chrome, Safari & Opera */
            elem['webkitRequestFullscreen']();
        }
        else if (elem['msRequestFullscreen']) {
            /* IE/Edge */
            elem['msRequestFullscreen']();
        }
    }
    onFullScreenChange() {
        this.fullscreen = !this.fullscreen;
    }
    closePreviewFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        // else if (document['mozCancelFullScreen']) {
        //     document['mozCancelFullScreen']();
        // }
        // else if (document['webkitExitFullscreen']) {
        //     document['webkitExitFullscreen']();
        // }
        // else if (document['msExitFullscreen']) {
        //     document['msExitFullscreen']();
        // }
    }
    bindDocumentListeners() {
        this.onFullScreenListener = this.onFullScreenChange.bind(this);
        document.addEventListener('fullscreenchange', this.onFullScreenListener);
        document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.addEventListener('msfullscreenchange', this.onFullScreenListener);
    }
    unbindDocumentListeners() {
        document.removeEventListener('fullscreenchange', this.onFullScreenListener);
        document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
        this.onFullScreenListener = null;
    }
    ngOnDestroy() {
        this.unbindDocumentListeners();
    }
    galleriaClass() {
        return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
    }
}
GalleriaProductosComponent.ɵfac = function GalleriaProductosComponent_Factory(t) { return new (t || GalleriaProductosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"])); };
GalleriaProductosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleriaProductosComponent, selectors: [["app-galleria-productos"]], viewQuery: function GalleriaProductosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.galleria = _t.first);
    } }, inputs: { termino: "termino" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 9, consts: [[3, "value", "activeIndex", "numVisible", "circular", "responsiveOptions", "containerStyle", "containerClass", "showItemNavigators", "activeIndexChange"], ["galleria", ""], ["pTemplate", "item"], ["pTemplate", "thumbnail"], ["pTemplate", "footer"], [1, "animate__animated", "animate__fadeIn", "animate__delay-1s", 2, "width", "100%", "display", "block", 3, "src"], [1, "p-grid", "p-nogutter", "p-justify-center"], [1, "img-mini", 3, "src"], [1, "container-fluid", "custom-galleria-footer", "animate__animated", "animate__fadeIn", "animate__delay-1s", "d-flex", "justify-content-center"], ["class", "title-container row d-flex justify-content-center", 4, "ngIf"], [1, "title-container", "row", "d-flex", "justify-content-center"], ["pButton", "", "pRipple", "", "type", "button", "label", "Ver mas...", 1, "p-button-info", 3, "routerLink"]], template: function GalleriaProductosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleria", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIndexChange", function GalleriaProductosComponent_Template_p_galleria_activeIndexChange_0_listener($event) { return ctx.activeIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaProductosComponent_ng_template_2_Template, 1, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GalleriaProductosComponent_ng_template_3_Template, 2, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GalleriaProductosComponent_ng_template_4_Template, 2, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.productos)("activeIndex", ctx.activeIndex)("numVisible", 5)("circular", true)("responsiveOptions", ctx.responsiveOptions)("containerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2))("containerClass", ctx.galleriaClass())("showItemNavigators", false);
    } }, directives: [primeng_galleria__WEBPACK_IMPORTED_MODULE_2__["Galleria"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"], primeng_ripple__WEBPACK_IMPORTED_MODULE_6__["Ripple"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%]     .custom-galleria.p-galleria.fullscreen {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]     .custom-galleria.p-galleria.fullscreen .p-galleria-content {\n  flex-grow: 1;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .custom-galleria.p-galleria .p-galleria-content {\n  position: relative;\n}\n[_nghost-%COMP%]     .custom-galleria.p-galleria .p-galleria-thumbnail-wrapper {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n[_nghost-%COMP%]     .custom-galleria.p-galleria .p-galleria-thumbnail-items-container {\n  width: 100%;\n}\n[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer {\n  display: flex;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.9);\n  color: #ffffff;\n  padding: 10px;\n}\n[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer > button {\n  background-color: transparent;\n  color: #ffffff;\n  border: 0 none;\n  border-radius: 0;\n  margin: 0.2rem 0;\n}\n[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer > button.fullscreen-button {\n  margin-left: auto;\n}\n[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer > button:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n[_nghost-%COMP%]     .custom-galleria.p-galleria .title-container > span {\n  font-size: 0.9rem;\n  padding-left: 0.829rem;\n}\n[_nghost-%COMP%]     .custom-galleria.p-galleria .title-container > span.title {\n  font-weight: bold;\n}\n.img-mini[_ngcontent-%COMP%] {\n  height: 65px;\n  width: 65px;\n}\n.zoom[_ngcontent-%COMP%] {\n  \n  transition: width 2s, height 2s, transform 2s;\n}\n.zoom[_ngcontent-%COMP%]:hover {\n  \n  transform: scale(2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2dhbGxlcmlhLXByb2R1Y3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFWjtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFOO0FBQ007RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUVJO0VBQ0Usa0JBQUE7QUFBTjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFBTjtBQUVJO0VBQ0UsV0FBQTtBQUFOO0FBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQU47QUFDTTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFBUTtFQUNFLGlCQUFBO0FBRVY7QUFBUTtFQUNFLDBDQUFBO0FBRVY7QUFJTTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUFGUjtBQUlRO0VBQ0UsaUJBQUE7QUFGVjtBQVNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFORjtBQVVBO0VBQ0Usc0RBQUE7RUFDQSw2Q0FBQTtBQVBGO0FBU0E7RUFDRTs4QkFBQTtFQUVBLG1CQUFBO0FBTkYiLCJmaWxlIjoiZ2FsbGVyaWEtcHJvZHVjdG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZ2FsbGVyaWEge1xuICAmLnAtZ2FsbGVyaWEge1xuICAgICYuZnVsbHNjcmVlbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC5wLWdhbGxlcmlhLWNvbnRlbnQge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAucC1nYWxsZXJpYS1jb250ZW50IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnAtZ2FsbGVyaWEtdGh1bWJuYWlsLXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAucC1nYWxsZXJpYS10aHVtYm5haWwtaXRlbXMtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuY3VzdG9tLWdhbGxlcmlhLWZvb3RlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KSA7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICA+IGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIG1hcmdpbjogMC4ycmVtIDA7XG4gICAgICAgICYuZnVsbHNjcmVlbi1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAudGl0bGUtY29udGFpbmVyIHtcblxuICAgICAgPiBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMC44MjlyZW07XG5cbiAgICAgICAgJi50aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmltZy1taW5pIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICB3aWR0aDogNjVweDtcbiAgLy8gcGFkZGluZzogMTBweDtcbn1cblxuLnpvb217XG4gIC8qIEF1bWVudGFtb3MgbGEgYW5jaHVyYSB5IGFsdHVyYSBkdXJhbnRlIDIgc2VndW5kb3MgKi9cbiAgdHJhbnNpdGlvbjogd2lkdGggMnMsIGhlaWdodCAycywgdHJhbnNmb3JtIDJzO1xufVxuLnpvb206aG92ZXJ7XG4gIC8qIHRyYW5mb3JtYW1vcyBlbCBlbGVtZW50byBhbCBwYXNhciBlbCBtb3VzZSBwb3IgZW5jaW1hIGFsIGRvYmxlIGRlXG4gICAgIHN1IHRhbWHDsW8gY29uIHNjYWxlKDIpLiAqL1xuICB0cmFuc2Zvcm0gOiBzY2FsZSgyKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaProductosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-galleria-productos',
                templateUrl: './galleria-productos.component.html',
                styleUrls: ['./galleria-productos.component.scss'],
            }]
    }], function () { return [{ type: _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"] }]; }, { termino: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], galleria: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['galleria']
        }] }); })();


/***/ }),

/***/ "9Vgl":
/*!*************************************************************************************!*\
  !*** ./src/app/home-page/components/producto-tarjeta/producto-tarjeta.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductoTarjetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoTarjetaComponent", function() { return ProductoTarjetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/imagen.pipe */ "0CBe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_disponible_item_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/disponible-item.pipe */ "P2oc");








const _c0 = function (a1) { return ["/store", a1]; };
class ProductoTarjetaComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductoTarjetaComponent.ɵfac = function ProductoTarjetaComponent_Factory(t) { return new (t || ProductoTarjetaComponent)(); };
ProductoTarjetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductoTarjetaComponent, selectors: [["app-producto-tarjeta"]], inputs: { producto: "producto", modo: "modo" }, decls: 24, vars: 17, consts: [["mat-card-image", "", "alt", "", 3, "src"], ["mat-button", "", "color", "primary", 3, "routerLink"]], template: function ProductoTarjetaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Disponibilidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "disponibleItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Ver Producto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.producto.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.producto.categoria.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.producto), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](14, 8, ctx.producto.precio, "COP$", "symbol", "5.0-2"), " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 13, ctx.producto));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.producto._id));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_4__["ImagenPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"], _pipes_disponible_item_pipe__WEBPACK_IMPORTED_MODULE_6__["DisponibleItemPipe"]], styles: ["mat-card[_ngcontent-%COMP%]{\n      margin-top:20px;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductoTarjetaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-producto-tarjeta',
                templateUrl: './producto-tarjeta.component.html',
                styles: [
                    `
    mat-card{
      margin-top:20px;
    }
    `
                ]
            }]
    }], function () { return []; }, { producto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9nQ4":
/*!**********************************************************************************!*\
  !*** ./src/app/home-page/pages/galleria-stickers/galleria-stickers.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GalleriaStickersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaStickersComponent", function() { return GalleriaStickersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/menu/menu.component */ "HoiU");
/* harmony import */ var _components_slider_stickers_slider_stickers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/slider-stickers/slider-stickers.component */ "2kTN");
/* harmony import */ var _components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/workingprogress/workingprogress.component */ "xQQl");





class GalleriaStickersComponent {
    constructor() { }
    ngOnInit() {
    }
}
GalleriaStickersComponent.ɵfac = function GalleriaStickersComponent_Factory(t) { return new (t || GalleriaStickersComponent)(); };
GalleriaStickersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleriaStickersComponent, selectors: [["app-galleria-stickers"]], decls: 4, vars: 0, consts: [[1, "container-fluid", "p-0", "m-0", "col-12"]], template: function GalleriaStickersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-slider-stickers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-workingprogress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _components_slider_stickers_slider_stickers_component__WEBPACK_IMPORTED_MODULE_2__["SliderStickersComponent"], _components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_3__["WorkingprogressComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxsZXJpYS1zdGlja2Vycy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaStickersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-galleria-stickers',
                templateUrl: './galleria-stickers.component.html',
                styleUrls: ['./galleria-stickers.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AXWa":
/*!************************************************************!*\
  !*** ./src/app/home-page/pages/tienda/tienda.component.ts ***!
  \************************************************************/
/*! exports provided: TiendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiendaComponent", function() { return TiendaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/menu/menu.component */ "HoiU");
/* harmony import */ var _components_moon_moon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/moon/moon.component */ "+7Hz");
/* harmony import */ var _components_tabs_productos_tabs_productos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tabs-productos/tabs-productos.component */ "a5gm");
/* harmony import */ var _components_categorias_slider_categorias_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/categorias-slider/categorias-slider.component */ "wIMV");
/* harmony import */ var _shared_footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/footerpublic/footerpublic.component */ "tns5");







class TiendaComponent {
    constructor() { }
    ngOnInit() {
    }
}
TiendaComponent.ɵfac = function TiendaComponent_Factory(t) { return new (t || TiendaComponent)(); };
TiendaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TiendaComponent, selectors: [["app-tienda"]], decls: 12, vars: 0, consts: [[1, "container-fluid", "m-0", "p-0", "col-auto", "animate__animated", "animate__fadeIn", "animate__delay-1s"], [1, "row", "container-fluid", "m-0", "p-0"], [1, "container-fluid", "p-0", "m-0", "col-12"], [1, "container-fluid", "p-0", "m-0", "col-12", "col-lg-3"], [1, "container-fluid", "p-0", "m-0", "col-12", "col-md-9"], [1, "grid", "flex", "justify-content-center"], [1, "col"]], template: function TiendaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-moon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-tabs-productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-categorias-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footerpublic");
    } }, directives: [_shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _components_moon_moon_component__WEBPACK_IMPORTED_MODULE_2__["MoonComponent"], _components_tabs_productos_tabs_productos_component__WEBPACK_IMPORTED_MODULE_3__["TabsProductosComponent"], _components_categorias_slider_categorias_slider_component__WEBPACK_IMPORTED_MODULE_4__["CategoriasSliderComponent"], _shared_footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_5__["FooterpublicComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWVuZGEuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TiendaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tienda',
                templateUrl: './tienda.component.html',
                styleUrls: ['./tienda.component.css'],
            }]
    }], function () { return []; }, null); })();


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
    production: false,
    baseUrl: 'http://localhost:8080/api',
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

/***/ "BnjK":
/*!*********************************************************************************!*\
  !*** ./src/app/pedidos/components/workingprogress/workingprogress.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WorkingprogressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingprogressComponent", function() { return WorkingprogressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class WorkingprogressComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkingprogressComponent.ɵfac = function WorkingprogressComponent_Factory(t) { return new (t || WorkingprogressComponent)(); };
WorkingprogressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkingprogressComponent, selectors: [["app-workingprogress"]], decls: 10, vars: 0, consts: [[1, "container-fluid", "p-0", "m-0"], [1, "row", "p-0", "m-0", "background", "animate__animated", "animate__fadeIn", "animate__delay-1s"], [1, "col", "col-sm-6", "col-md-6", "col-lg-6", "animate__animated", "animate__fadeIn", "justify-content-center"], ["bombadiv", ""], [1, "row", "container-fluid", "align-content-center"], [1, "row", "p-0", "m-0", "container-fluid"], ["routerLink", "/store/landingPage"], ["id", "", "src", "../../../../assets/img/UIBlitz/estamostrabajando.png", "alt", "", 1, "img"]], template: function WorkingprogressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Estamos Trabajando en proximos servicios,pronto disponibles!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".img[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  max-height: 31.25rem;\n  border-radius: 300px;\n\n}\n\n.background[_ngcontent-%COMP%]{\n  display: flex;\n  background-color: black;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\nh1[_ngcontent-%COMP%]{\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtpbmdwcm9ncmVzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsb0JBQW9COztBQUV0QjtBQUNBLFlBQVk7QUFDWjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ3b3JraW5ncHJvZ3Jlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzMS4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMzAwcHg7XG5cbn1cbi8qICNGQUZBRkEgKi9cbi5iYWNrZ3JvdW5ke1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgxe1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkingprogressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-workingprogress',
                templateUrl: './workingprogress.component.html',
                styleUrls: ['./workingprogress.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "DeIa":
/*!********************************************!*\
  !*** ./src/app/auth/guards/admin.guard.ts ***!
  \********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "N/25");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AdminGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.validarAdmin()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(esAdmin => {
            if (!esAdmin) {
                this.router.navigateByUrl('/store/tienda');
            }
        }));
    }
    canLoad(route, segments) {
        return this.authService.validarAdmin()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(esAdmin => {
            if (!esAdmin) {
                this.router.navigateByUrl('/store/tienda');
            }
        }));
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "G4Ok":
/*!****************************************************!*\
  !*** ./src/app/pedidos/services/ventas.service.ts ***!
  \****************************************************/
/*! exports provided: VentasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasService", function() { return VentasService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");





class VentasService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    getVentas() {
        return this.http.get(`${this.baseUrl}/ventas?limite=20`);
    }
    getVentasCompletadas() {
        return this.http.get(`${this.baseUrl}/ventas/completadas`);
    }
    getVentasSinCompletar() {
        return this.http.get(`${this.baseUrl}/ventas/sinCompletar`);
    }
    getVentaPorId(id) {
        return this.http.get(`${this.baseUrl}/ventas/${id}`);
    }
    agregarVenta(venta) {
        const url = `${this.baseUrl}/ventas`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.post(url, venta, { headers });
    }
    actualizarVenta(venta) {
        const url = `${this.baseUrl}/ventas/${venta._id}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.put(url, venta, { headers });
    }
    borrarVenta(id) {
        const url = `${this.baseUrl}/ventas/${id}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.delete(url, { headers });
    }
}
VentasService.ɵfac = function VentasService_Factory(t) { return new (t || VentasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
VentasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VentasService, factory: VentasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VentasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HFE/":
/*!************************************************************!*\
  !*** ./src/app/pedidos/pages/agregar/agregar.component.ts ***!
  \************************************************************/
/*! exports provided: AgregarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarComponent", function() { return AgregarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_confirmar_confirmar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/confirmar/confirmar.component */ "M61o");
/* harmony import */ var _services_pedidos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/pedidos.service */ "zIZD");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ventas.service */ "G4Ok");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/chips */ "RGqm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _components_tabla_pedidos_tabla_pedidos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/tabla-pedidos/tabla-pedidos.component */ "z8QN");






















function AgregarComponent_mat_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estado_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", estado_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", estado_r9.desc, " ");
} }
function AgregarComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fecha de entregado de la venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker-toggle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-datepicker", null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r10)("value", ctx_r2.venta.fechaEntrega);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r10);
} }
function AgregarComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fecha Entrega:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Aun no se ha completado la venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgregarComponent_mat_icon_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgregarComponent_mat_icon_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgregarComponent_button_70_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgregarComponent_button_70_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.borrar(ctx_r11.venta); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Borrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgregarComponent_app_tabla_pedidos_74_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tabla-pedidos", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onIdPedidoDelete", function AgregarComponent_app_tabla_pedidos_74_Template_app_tabla_pedidos_onIdPedidoDelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.borrarPedido($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idVenta", ctx_r8.venta._id);
} }
class AgregarComponent {
    // Formulario reactivo
    constructor(pedidosService, ventasService, activatedRoute, router, fb, dialog) {
        this.pedidosService = pedidosService;
        this.ventasService = ventasService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.fb = fb;
        this.dialog = dialog;
        //chips component
        this.pedidosInput = [];
        this.venta = {
            _id: '',
            estado: true,
            completada: false,
            pedidos: this.pedidosInput,
            total: 0,
            subtotal: 0,
            envio: 0,
            fecha: new Date(),
            direccion: '',
            detalleDireccion: '',
            usuario: {
                _id: '',
                nombre: '',
                correo: '',
                rol: '',
                telefono: '',
                estado: true,
                google: false,
            },
        };
        this.pedido = {
            unidades: 0,
            stickers: [],
            subtotal: 0,
            instrucciones: [],
            estado: true,
            talla: '',
            despachado: false,
            producto: {
                precio: 0,
                disponible: true,
                imgs: [],
                estado: true,
                unidades: 0,
                genero: '',
                _id: '',
                nombre: '',
                usuario: {
                    _id: '',
                    correo: '',
                    nombre: '',
                },
                etiquetas: [],
                tallas: [],
                categoria: {
                    _id: '',
                    nombre: '',
                },
                descripcion: 'string',
                img: '',
            },
        };
        this.producto = this.pedido.producto;
        // Arreglo de completada o no
        this.estadoVenta = [
            { id: true, desc: 'Completada' },
            { id: false, desc: 'Sin Completar' },
        ];
        //  pedidosDespachados si o no
        this.despachados = false;
        this.isDisabled = true;
        // Formulario reactivo
        this.miFormulario = this.fb.group({
            direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            detalleDireccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(12)]],
            telefono: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)],
            ],
            envio: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)],
            ],
            total: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)],
            ],
            subtotal: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)],
            ],
            fecha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fechaEntrega: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            completada: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pedidos: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ngOnInit() {
        // Cuando se entra a editar el pedido hace esto
        if (!this.router.url.includes('editar')) {
            const carritoJSON = localStorage.getItem('carritoBlitz');
            if (!carritoJSON) {
                return;
            }
            const carrito = JSON.parse(carritoJSON);
            this.pedidosInput = carrito;
            // let subtotal = this.calcularSubtotal(carrito);
            let subtotalA = 0;
            for (let i = 0; i < carrito.length; i++) {
                const element = carrito[i];
                this.pedidosService.getPedidoPorId(element).subscribe(({ pedido }) => {
                    console.log(pedido);
                    subtotalA = subtotalA + pedido.subtotal;
                });
            }
            console.log(subtotalA, 'subtotalA');
            let envio = 0;
            if (subtotalA < 40000) {
                envio = 10000;
            }
            this.miFormulario.reset({
                envio,
                subtotal: subtotalA,
                total: subtotalA + envio,
                completada: this.venta.completada,
            });
        }
        else {
            this.establecerVentaPorID();
        }
        // Cuando se entra a editar el pedido hace esto
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        // console.log('afterview ejecutado')
        // this.revisarPedidosDespachados(this.pedidosInput);
    }
    establecerVentaPorID() {
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ id }) => this.ventasService.getVentaPorId(id)))
            .subscribe(({ venta }) => {
            this.venta = venta;
            this.pedidosInput = venta.pedidos;
            this.miFormulario.reset({
                correo: this.venta.usuario.correo,
                direccion: this.venta.direccion,
                detalleDireccion: this.venta.detalleDireccion,
                envio: this.venta.envio,
                fecha: this.venta.fecha,
                fechaEntrega: this.venta.fechaEntrega,
                pedidos: this.venta.pedidos,
                subtotal: this.venta.subtotal,
                telefono: this.venta.usuario.telefono,
                total: this.venta.total,
                completada: this.venta.completada,
            });
        });
    }
    guardarVenta() {
        const { total, subtotal, envio, direccion, detalleDireccion, fecha, completada, pedidos, } = this.miFormulario.value;
        // console.log(ventaActEnvio);
        if (completada === true) {
            //Revisar sl todos los pedidos de la venta estan despachados
            const despachados = this.revisarPedidosDespachados(pedidos);
            console.log('Pedidos despachados guardarVenta', despachados);
            if (despachados === false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Pedidos sin Despacho',
                    text: `No se puede Completar la venta sin despachar antes los pedidos de la venta!`,
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok',
                });
            }
            else {
                // Actualizar la venta completandola
                const ventaEnvioCompletada = {
                    fecha,
                    fechaEntrega: new Date(),
                    pedidos,
                    detalleDireccion,
                    direccion,
                    envio,
                    subtotal,
                    total,
                    _id: this.venta._id,
                    completada,
                    estado: this.venta.estado,
                    nombreComprador: this.venta.usuario.nombre,
                };
                this.ventasService
                    .actualizarVenta(ventaEnvioCompletada)
                    .subscribe((resp) => {
                    console.log('Venta Actualizada', resp);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Venta Actualizada!', '', 'success');
                });
            }
        }
        else {
            // Actualizar la venta sin completarla
            const ventaEnvioSinCompletar = {
                fecha,
                pedidos,
                detalleDireccion,
                direccion,
                envio,
                subtotal,
                total,
                _id: this.venta._id,
                completada,
                estado: this.venta.estado,
                nombreComprador: this.venta.usuario.nombre,
            };
            this.ventasService
                .actualizarVenta(ventaEnvioSinCompletar)
                .subscribe((resp) => {
                console.log('Venta Actualizada', resp);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Venta Actualizada!', '', 'success');
            });
            // Actualizar la venta sin completarla
        }
    }
    borrar(venta) {
        const dialog = this.dialog.open(_components_confirmar_confirmar_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmarComponent"], {
            width: '550px',
            data: venta,
        });
        dialog.afterClosed().subscribe((result) => {
            if (result === true) {
                // Borrar los pedidos de la venta
                const pedidos = venta.pedidos;
                for (let i = 0; i < pedidos.length; i++) {
                    const pedido = pedidos[i];
                    this.eliminarPedido(pedido);
                }
                // Borrar los pedidos de la venta
                // Borrar la venta
                this.ventasService.borrarVenta(venta._id).subscribe((resp) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: 'Venta Eliminada',
                        text: `La venta ${resp._id} ha sido borrada con exito`,
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Vale!',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.router.navigate(['/pedidos/listado']);
                        }
                    });
                });
                // Borrar la venta
            }
        });
    }
    revisarPedidosDespachados(pedidosInput) {
        const pedidos = pedidosInput;
        let estadoDespacho;
        for (let i = 0; i < pedidos.length; i++) {
            const pedidoID = pedidos[i];
            this.pedidosService.getPedidoPorId(pedidoID).subscribe(({ pedido }) => {
                // console.log('estado pedidoPorId despachado', pedido.despachado);
                if (pedido.despachado === true) {
                    estadoDespacho = true;
                }
                else {
                    estadoDespacho = false;
                }
            });
        }
        console.log('Pedidos Despachados revisarPedidos:', estadoDespacho);
        return estadoDespacho;
    }
    borrarPedido(idPedido) {
        // Traer el pedido, asignarlo,ejecutar acciones respectivas de eliminacion
        this.pedidosService.getPedidoPorId(idPedido).subscribe(({ pedido }) => {
            // Obtener Valores del formulario
            const { total, subtotal, envio, direccion, detalleDireccion, fecha, completada, } = this.miFormulario.value;
            // Hacer las restas de saldos
            const nuevoSubtotal = subtotal - pedido.subtotal;
            const nuevoTotal = total - pedido.subtotal;
            // Filtar el arreglo de pedidos(quitar el pedido del listado)
            let pedidosFiltro = this.pedidosInput.filter((word) => word != idPedido);
            this.pedidosInput === pedidosFiltro;
            // Preparar la venta a enviar
            const ventaActEnvio = {
                fecha,
                pedidos: pedidosFiltro,
                detalleDireccion,
                direccion,
                envio,
                subtotal: nuevoSubtotal,
                total: nuevoTotal,
                _id: this.venta._id,
                completada,
                estado: this.venta.estado,
                nombreComprador: this.venta.usuario.nombre,
            };
            // Ejecutar la actualizacion de la venta
            this.ventasService.actualizarVenta(ventaActEnvio).subscribe((resp) => {
                console.log('Venta Actualizada', resp);
            });
        });
        // Borrar el pedido
        this.eliminarPedido(idPedido);
        // Retroalimentacion al usuario
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Venta Actualizada',
            text: 'La venta ha sido actualizada con exito',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Vale,Genial B)!',
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        });
    }
    eliminarPedido(idPedido) {
        this.pedidosService.borrarPedido(idPedido).subscribe((pedido) => {
            console.log(pedido._id, 'pedido Eliminado');
        });
    }
    calcularSubtotal(carrito) {
        let subtotal = 0;
        for (let i = 0; i < carrito.length; i++) {
            const element = carrito[i];
            this.pedidosService.getPedidoPorId(element).subscribe(({ pedido }) => {
                console.log(pedido);
                subtotal = subtotal + pedido.subtotal;
            });
            console.log(subtotal, 'subtotal');
        }
        return subtotal;
    }
}
AgregarComponent.ɵfac = function AgregarComponent_Factory(t) { return new (t || AgregarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pedidos_service__WEBPACK_IMPORTED_MODULE_5__["PedidosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_6__["VentasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
AgregarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgregarComponent, selectors: [["app-agregar"]], decls: 75, vars: 16, consts: [[1, "row", "m-0", "p-0"], [1, "col-5", "m-0", "p-0", "animate__animated", "animate__fadeIn", "animate__delay-1s"], [3, "formGroup", "ngSubmit"], [1, "mb-2", "p-0"], ["fxFlex", "100"], ["matInput", "", "type", "text", "formControlName", "correo", "required", ""], ["matInput", "", "type", "text", "formControlName", "telefono", "required", ""], ["matInput", "", "type", "text", "formControlName", "direccion", "placeholder", "Direccion"], ["matInput", "", "type", "text", "formControlName", "detalleDireccion", "required", ""], ["appearance", "fill", "fxFlex", "100"], ["matInput", "", "formControlName", "fecha", 3, "matDatepicker", "value"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "type", "number", "formControlName", "subtotal", "required", "", 3, "value"], ["matInput", "", "type", "number", "formControlName", "envio", "required", "", 3, "value"], ["matInput", "", "type", "number", "formControlName", "total", "required", "", 3, "value"], ["formControlName", "completada", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "mb-2 p-0", 4, "ngIf", "ngIfElse"], ["sinFechaEntrega", ""], [1, "container-fluid", "mb-4", "p-0"], [1, "col"], ["for", "pedidos-ids", 1, "form-label"], ["id", "inputPedidos", "formControlName", "pedidos"], [1, "container"], [1, "row", "justify-content-between"], [1, "col-4"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "click"], [4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "col-7", "m-0", "p-0", "animate__animated", "animate__fadeIn", "animate__delay-1s"], [3, "idVenta", "onIdPedidoDelete", 4, "ngIf"], [3, "value"], ["matInput", "", "formControlName", "fechaEntrega", 3, "matDatepicker", "value"], ["mat-raised-button", "", "color", "warn", 3, "click"], [3, "idVenta", "onIdPedidoDelete"]], template: function AgregarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AgregarComponent_Template_form_ngSubmit_4_listener() { return ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cliente de la venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Telefono de la venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Direccion de entrega");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Detalle direccion de entrega");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Fecha de creacion de la venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Subtotal de la venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Envio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Total de la venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Estado de Venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AgregarComponent_mat_option_53_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AgregarComponent_div_54_Template, 8, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AgregarComponent_ng_template_55_Template, 4, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Pedidos/IDS: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "p-chips", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgregarComponent_Template_button_click_65_listener() { return ctx.guardarVenta(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AgregarComponent_mat_icon_66_Template, 2, 0, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AgregarComponent_mat_icon_67_Template, 2, 0, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AgregarComponent_button_70_Template, 4, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Articulos del pedido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AgregarComponent_app_tabla_pedidos_74_Template, 1, 1, "app-tabla-pedidos", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", !ctx.venta._id ? "Nueva" : "Editar", " Venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.miFormulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("value", ctx.venta.fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.venta.subtotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.venta.envio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.venta.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estadoVenta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.venta.fechaEntrega)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.venta._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.venta._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.venta._id ? "Crear" : "Actualizar", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.venta._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.venta._id);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], primeng_chips__WEBPACK_IMPORTED_MODULE_15__["Chips"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _components_tabla_pedidos_tabla_pedidos_component__WEBPACK_IMPORTED_MODULE_19__["TablaPedidosComponent"]], styles: [".file-input[_ngcontent-%COMP%] {\n        display: none;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgregarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agregar',
                templateUrl: './agregar.component.html',
                styles: [
                    `
      .file-input {
        display: none;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _services_pedidos_service__WEBPACK_IMPORTED_MODULE_5__["PedidosService"] }, { type: _services_ventas_service__WEBPACK_IMPORTED_MODULE_6__["VentasService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "HoiU":
/*!***********************************************!*\
  !*** ./src/app/shared/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "N/25");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/badge */ "fqaE");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");








function MenuComponent_p_menubar_0_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_p_menubar_0_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_p_menubar_0_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_p_menubar_0_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_p_menubar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-menubar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuComponent_p_menubar_0_button_6_Template, 1, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuComponent_p_menubar_0_button_7_Template, 1, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.itemsCarrito.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hola ", ctx_r0.usuario ? ctx_r0.usuario.nombre : " ", "! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.token !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.token);
} }
function MenuComponent_p_menubar_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_p_menubar_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_p_menubar_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_p_menubar_1_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_p_menubar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-menubar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuComponent_p_menubar_1_button_6_Template, 1, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuComponent_p_menubar_1_button_7_Template, 1, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r1.itemsPublic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.itemsCarrito.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hola ", ctx_r1.usuario ? ctx_r1.usuario.nombre : " ", "! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.token !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.token);
} }
function MenuComponent_p_menubar_2_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_p_menubar_2_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_p_menubar_2_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_p_menubar_2_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_p_menubar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-menubar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuComponent_p_menubar_2_button_6_Template, 1, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuComponent_p_menubar_2_button_7_Template, 1, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r2.itemsPublic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.itemsCarrito.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hola ", ctx_r2.usuario ? ctx_r2.usuario.nombre : " ", "! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.token);
} }
class MenuComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.items = [];
        this.itemsPublic = [];
        this.token = localStorage.getItem('x-token');
        this.usuario = {
            nombre: '',
            rol: '',
        };
        // expiradoToken: boolean = false;
        //Carrito articulos
        this.itemsCarrito = [];
    }
    ngOnInit() {
        // Verificar si el token esta activo aun o no
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                routerLink: '/store/tienda',
            },
            {
                label: 'Servicios',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Galeria Diseños',
                        icon: 'pi pi-camera',
                        routerLink: '/store/galleria',
                    },
                    {
                        label: 'Productos',
                        icon: 'pi pi-palette',
                        routerLink: '/productos',
                    },
                ],
            },
        ];
        this.itemsPublic = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                routerLink: '/store/tienda',
            },
            {
                label: 'Servicios',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Galeria',
                        icon: 'pi pi-camera',
                        routerLink: '/store/galleria',
                    },
                    {
                        label: 'Productos',
                        icon: 'pi pi-palette',
                        routerLink: '/store/tienda',
                    },
                    {
                        label: 'No Comunes',
                        icon: 'pi pi-briefcase',
                        routerLink: 'no-comunes',
                    },
                ],
            },
        ];
        if (this.token) {
            this.verificarTiempoToken();
        }
    }
    ngOnChanges(changes) {
        this.verificarTiempoToken();
    }
    logout() {
        localStorage.setItem('x-token', '');
        this.router.navigate(['/home/']);
        window.location.reload();
    }
    login() {
        this.router.navigateByUrl('/auth/login');
    }
    establecerUsuario() {
        this.authService.validarSesion().subscribe((resp) => {
            this.usuario = {
                nombre: resp.nombre,
                rol: resp.rol,
            };
        });
    }
    verificarTiempoToken() {
        this.authService.validarTiempoToken().subscribe((resp) => {
            // console.log(resp,"respuesta de validartiempotoken")
            if (resp.ok === true) {
                // localStorage.removeItem('x-token');
                localStorage.setItem('x-token', '');
                window.location.reload();
            }
            else {
                this.establecerCarrito();
                this.establecerUsuario();
            }
            // console.log(resp, 'respuesta ok de verificartiempo');
        });
    }
    // Manejo de errores en las peticiones OwO
    // (resp) => {console.log(resp,"respuesta ok de verificartiempo")},
    // (error) => {
    //   console.log(error.error.ok,"respuesta error de verificarTiempo")
    //   // this.tiempoToken=error.error.ok;
    // }
    establecerCarrito() {
        let carrito = localStorage.getItem('carritoBlitz');
        if (carrito) {
            this.itemsCarrito = JSON.parse(carrito);
        }
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { itemsCarrito: "itemsCarrito" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [["class", "animate__animated animate__fadeIn animate__delay-1s", 3, "model", 4, "ngIf"], [1, "animate__animated", "animate__fadeIn", "animate__delay-1s", 3, "model"], [2, "display", "flex", "align-items", "center", "justify-content", "center"], ["routerLink", "/checkout/cart"], ["pBadge", "", 1, "pi", "pi-shopping-cart", "p-mr-4", "p-text-secondary", 2, "font-size", "1.5rem", 3, "value"], [2, "margin-left", "10px"], ["pButton", "", "label", "Logout", "class", "p-button-text", "icon", "pi pi-power-off", 3, "click", 4, "ngIf"], ["pButton", "", "label", "LogIn", "class", "p-button-text", "icon", "pi pi-power-on", 3, "click", 4, "ngIf"], ["pButton", "", "label", "Logout", "icon", "pi pi-power-off", 1, "p-button-text", 3, "click"], ["pButton", "", "label", "LogIn", "icon", "pi pi-power-on", 1, "p-button-text", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuComponent_p_menubar_0_Template, 8, 5, "p-menubar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_p_menubar_1_Template, 8, 5, "p-menubar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_p_menubar_2_Template, 8, 5, "p-menubar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario.rol === "ADMIN_ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario.rol === "USER_ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuario.rol === "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], primeng_menubar__WEBPACK_IMPORTED_MODULE_4__["Menubar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], primeng_badge__WEBPACK_IMPORTED_MODULE_5__["BadgeDirective"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, { itemsCarrito: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Jasj":
/*!******************************************************!*\
  !*** ./src/app/pedidos/pages/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/services/auth.service */ "N/25");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/badge */ "fqaE");










class HomeComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        //Carrito articulos
        this.itemsCarritoPedido = [];
    }
    get usuario() {
        return this.authService.usuario;
    }
    ngOnInit() {
        this.establecerCarritoPedido();
    }
    logOut() {
        this.authService.logout();
        this.router.navigateByUrl('/home/landingPage');
    }
    establecerCarritoPedido() {
        let carrito = localStorage.getItem('carritoBlitz');
        if (carrito) {
            this.itemsCarritoPedido = JSON.parse(carrito);
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 57, vars: 2, consts: [[1, "animate__animated", "animate__fadeInLeft", "animate__delay-1s"], [2, "height", "100vh"], ["mode", "push"], ["sidenav", ""], ["color", "primary"], [1, "spacer"], ["mat-icon-button", "", 3, "click"], ["routerLink", "../store/tienda", "mat-list-item", "", 3, "click"], ["mat-list-icon", "", "color", "primary"], ["routerLink", "./listado", "mat-list-item", "", 3, "click"], ["routerLink", "./agregar", "mat-list-item", "", 3, "click"], ["routerLink", "./buscar", "mat-list-item", "", 3, "click"], ["routerLink", "../productos", "mat-list-item", "", 3, "click"], ["routerLink", "../stickers", "mat-list-item", "", 3, "click"], ["routerLink", "/checkout/cart", 2, "padding-right", "5px"], ["pBadge", "", 1, "pi", "pi-shopping-cart", "p-mr-4", "p-text-secondary", 2, "font-size", "1.5rem", 3, "value"], ["mat-button", "", 3, "click"], [1, "container-fluid"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "HomePage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Listado de Pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Agregar Pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Buscar Pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "shopping_basket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Administrar Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "fireplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Administrar Stickers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_51_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Cerrar Sesion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.itemsCarritoPedido.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hola ", ctx.usuario.nombre, "!");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListIconCssMatStyler"], primeng_badge__WEBPACK_IMPORTED_MODULE_8__["BadgeDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n        margin: 10px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styles: [
                    `
      .container {
        margin: 10px;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "KF5Q":
/*!**************************************************************!*\
  !*** ./src/app/productos/pages/agregar/agregar.component.ts ***!
  \**************************************************************/
/*! exports provided: AgregarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarComponent", function() { return AgregarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _components_confirmar_confirmar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/confirmar/confirmar.component */ "NAiZ");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/productos.service */ "epog");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/chips */ "RGqm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _components_cargar_archivo_cargar_archivo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/cargar-archivo/cargar-archivo.component */ "SA0X");
/* harmony import */ var _pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../pipes/imagen.pipe */ "0CBe");




















function AgregarComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genero_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", genero_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genero_r7.desc, " ");
} }
function AgregarComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", categoria_r8._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", categoria_r8.nombre, " ");
} }
function AgregarComponent_mat_icon_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgregarComponent_mat_icon_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgregarComponent_button_51_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgregarComponent_button_51_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.borrar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Borrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgregarComponent_button_53_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgregarComponent_button_53_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.limpiarImagenes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Limpiar Imagenes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgregarComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cargar-archivo", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("producto", ctx_r6.producto);
} }
class AgregarComponent {
    constructor(productosService, activatedRoute, router, snackbar, dialog) {
        this.productosService = productosService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.snackbar = snackbar;
        this.dialog = dialog;
        //chips component
        this.etiquetasInput = [];
        this.tallasInput = [];
        this.categorias = [];
        // Para crear el producto solo necesito el nombre y el id de categoria
        this.producto = {
            precio: 0,
            disponible: true,
            estado: true,
            genero: '',
            nombre: '',
            descripcion: '',
            categoria: {
                _id: '',
                nombre: '',
            },
            etiquetas: this.etiquetasInput,
            tallas: this.tallasInput,
            unidades: 0
        };
        // Arreglo de completada o no
        this.generoOpciones = [
            { id: 'F', desc: 'Femenino' },
            { id: 'M', desc: 'Masculino' },
        ];
    }
    ngOnInit() {
        // Obtener las categorias
        this.productosService.getCategorias().subscribe((categorias) => {
            // console.log(categorias);
            this.categorias = categorias;
        });
        if (!this.router.url.includes('editar')) {
            return;
        }
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(({ id }) => this.productosService.getProductoPorId(id)))
            .subscribe(({ producto }) => {
            this.producto = producto;
            this.etiquetasInput = producto.etiquetas;
            this.tallasInput = producto.tallas;
        });
    }
    guardar() {
        // console.log(this.producto);
        // Crear Producto
        if (this.producto.nombre.trim().length === 0) {
            return;
        }
        if (this.producto._id) {
            const { _id, nombre, precio, categoria: { _id: categoria }, descripcion, disponible, etiquetas, tallas, unidades, genero } = this.producto;
            const productoEnvAct = {
                _id,
                nombre,
                precio,
                categoria,
                descripcion,
                disponible,
                etiquetas: this.etiquetasInput,
                tallas: this.tallasInput,
                unidades,
                genero
            };
            // Actualizar Producto
            this.productosService
                .actualizarProducto(productoEnvAct)
                .subscribe((resp) => {
                this.mostrarSnackBar('Producto Actualizado');
                console.log('respuesta Actualizando Producto', resp);
            });
        }
        else {
            const { nombre, precio, categoria: { _id }, descripcion, disponible, unidades, genero } = this.producto;
            const productoEnv = {
                nombre,
                precio,
                categoria: _id,
                descripcion,
                unidades,
                genero,
                disponible,
                etiquetas: this.etiquetasInput,
                tallas: this.tallasInput,
            };
            // Agregar el producto
            this.productosService
                .agregarProducto(productoEnv)
                .subscribe((producto) => {
                this.router.navigate(['/productos/editar', producto._id]);
                this.mostrarSnackBar('Producto Creado');
            });
        }
    }
    borrar() {
        const dialog = this.dialog.open(_components_confirmar_confirmar_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmarComponent"], {
            width: '550px',
            data: this.producto,
        });
        dialog.afterClosed().subscribe((resp) => {
            if (resp) {
                this.productosService
                    .borrarProducto(this.producto._id)
                    .subscribe((resp) => {
                    this.router.navigate(['/productos']);
                    console.log('Producto borrado', resp);
                });
            }
        });
    }
    limpiarImagenes() {
        this.productosService
            .limpiarImagenesProducto(this.producto._id)
            .subscribe((resp) => {
            this.router.navigate(['/productos']);
            console.log('Imagenes eliminadas!', resp);
        });
    }
    mostrarSnackBar(mensaje) {
        this.snackbar.open(mensaje, 'Ok!', {
            duration: 2500,
        });
    }
}
AgregarComponent.ɵfac = function AgregarComponent_Factory(t) { return new (t || AgregarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
AgregarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgregarComponent, selectors: [["app-agregar"]], decls: 60, vars: 25, consts: [["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "40px", 2, "margin-bottom", "40px"], ["fxFlex", "50", "fxLayout", "column"], ["fxLayout", "column", "fxLayout.xs", "column", "fxLayoutGap", "20px"], ["fxFlex", "100"], ["matInput", "", "type", "text", "required", "", 3, "ngModel", "value", "ngModelChange"], ["matInput", "", "type", "number", "required", "", 3, "ngModel", "value", "ngModelChange"], ["matInput", "", "type", "number", "min", "0", "required", "", 3, "ngModel", "value", "ngModelChange"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "ngModel", "value", "ngModelChange"], ["fxFlex", "100", 1, "row"], [1, "col"], ["for", "exampleFormControlInput1", 1, "form-label"], ["id", "inputPassword5", 3, "ngModel", "ngModelChange"], [1, "form-label"], [3, "ngModel", "ngModelChange"], ["fxLayout", "", 1, ""], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf"], [1, "spacer"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["fxLayout", "column", "fxLayout.xs", "column", "fxLayoutGap", "20px", 4, "ngIf"], ["fxFlex", "100", "fxLayout", "column"], ["alt", "", 3, "src"], [3, "value"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "card"], [3, "producto"]], template: function AgregarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nombre de Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_10_listener($event) { return ctx.producto.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Precio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_14_listener($event) { return ctx.producto.precio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Unidades ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_input_ngModelChange_18_listener($event) { return ctx.producto.unidades = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Genero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_mat_select_ngModelChange_22_listener($event) { return ctx.producto.genero = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AgregarComponent_mat_option_23_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_mat_select_ngModelChange_27_listener($event) { return ctx.producto.categoria._id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AgregarComponent_mat_option_28_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Descripcion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_textarea_ngModelChange_32_listener($event) { return ctx.producto.descripcion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Estilos/Tags: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p-chips", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_p_chips_ngModelChange_38_listener($event) { return ctx.etiquetasInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Tallas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p-chips", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AgregarComponent_Template_p_chips_ngModelChange_43_listener($event) { return ctx.tallasInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgregarComponent_Template_button_click_46_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AgregarComponent_mat_icon_47_Template, 2, 0, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AgregarComponent_mat_icon_48_Template, 2, 0, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AgregarComponent_button_51_Template, 4, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AgregarComponent_button_53_Template, 4, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AgregarComponent_div_55_Template, 3, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.producto._id ? "Nuevo" : "Editar", " Producto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.producto.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.producto.nombre)("value", ctx.producto.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.producto.precio)("value", ctx.producto.precio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.producto.unidades)("value", ctx.producto.unidades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.producto.genero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.generoOpciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.producto.categoria._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.producto.descripcion)("value", ctx.producto.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.etiquetasInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tallasInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.producto._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.producto._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.producto._id ? "Crear" : "Actualizar", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.producto._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.producto._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.producto._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 23, ctx.producto), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], primeng_chips__WEBPACK_IMPORTED_MODULE_13__["Chips"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _components_cargar_archivo_cargar_archivo_component__WEBPACK_IMPORTED_MODULE_17__["CargarArchivoComponent"]], pipes: [_pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_18__["ImagenPipe"]], styles: [".file-input[_ngcontent-%COMP%] {\n        display: none;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgregarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agregar',
                templateUrl: './agregar.component.html',
                styles: [
                    `
      .file-input {
        display: none;
      }
    `,
                ],
            }]
    }], function () { return [{ type: _services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "LARa":
/*!**************************************************************!*\
  !*** ./src/app/productos/pages/listado/listado.component.ts ***!
  \**************************************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/productos.service */ "epog");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "N/25");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_producto_tarjeta_producto_tarjeta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/producto-tarjeta/producto-tarjeta.component */ "2BsO");








function ListadoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-producto-tarjeta", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("producto", producto_r1);
} }
class ListadoComponent {
    constructor(productosService, authService) {
        this.productosService = productosService;
        this.authService = authService;
        this.productos = [];
    }
    get usuario() {
        return this.authService.usuario;
    }
    ngOnInit() {
        this.productosService.getProductos().subscribe(({ productos }) => {
            // console.log(productos);
            this.productos = productos;
        });
    }
}
ListadoComponent.ɵfac = function ListadoComponent_Factory(t) { return new (t || ListadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ListadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadoComponent, selectors: [["app-listado"]], decls: 6, vars: 1, consts: [["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "20px"], ["fxflex", "20", "fxFlex.lg", "15", "fxFlex.sm", "30", 4, "ngFor", "ngForOf"], ["fxflex", "20", "fxFlex.lg", "15", "fxFlex.sm", "30"], [3, "producto"]], template: function ListadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Listado de Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListadoComponent_div_5_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productos);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _components_producto_tarjeta_producto_tarjeta_component__WEBPACK_IMPORTED_MODULE_6__["ProductoTarjetaComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listado',
                templateUrl: './listado.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"] }, { type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "LYHX":
/*!***********************************************!*\
  !*** ./src/app/productos/productos.module.ts ***!
  \***********************************************/
/*! exports provided: ProductosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosModule", function() { return ProductosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _productos_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productos-routing.module */ "rodV");
/* harmony import */ var _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../prime-ng/prime-ng.module */ "5Ovr");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _pages_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/agregar/agregar.component */ "KF5Q");
/* harmony import */ var _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/buscar/buscar.component */ "u/dK");
/* harmony import */ var _components_cargar_archivo_cargar_archivo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/cargar-archivo/cargar-archivo.component */ "SA0X");
/* harmony import */ var _components_chips_chips_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/chips/chips.component */ "q8Hj");
/* harmony import */ var _components_confirmar_confirmar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/confirmar/confirmar.component */ "NAiZ");
/* harmony import */ var _components_galleria_producto_galleria_producto_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/galleria-producto/galleria-producto.component */ "odhV");
/* harmony import */ var _components_galleria_productos_galleria_productos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/galleria-productos/galleria-productos.component */ "9/6Q");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/home/home.component */ "hBXT");
/* harmony import */ var _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/listado/listado.component */ "LARa");
/* harmony import */ var _pages_producto_producto_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/producto/producto.component */ "pvvI");
/* harmony import */ var _components_producto_tarjeta_producto_tarjeta_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/producto-tarjeta/producto-tarjeta.component */ "2BsO");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-image-zoom */ "1zy2");
/* harmony import */ var _components_producto_info_producto_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/producto-info/producto-info.component */ "3N6W");





















// Pipes
// import { ImagenPipe } from '../pipes/imagen.pipe';
// import { DisponibleItemPipe } from '../pipes/disponible-item.pipe';
// Imagenes zoom



class ProductosModule {
}
ProductosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductosModule });
ProductosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductosModule_Factory(t) { return new (t || ProductosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _productos_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductosRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_7__["PrimeNgModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            ngx_image_zoom__WEBPACK_IMPORTED_MODULE_21__["NgxImageZoomModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductosModule, { declarations: [_pages_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_10__["AgregarComponent"],
        _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_11__["BuscarComponent"],
        _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_18__["ListadoComponent"],
        _pages_producto_producto_component__WEBPACK_IMPORTED_MODULE_19__["ProductoComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _components_producto_tarjeta_producto_tarjeta_component__WEBPACK_IMPORTED_MODULE_20__["ProductoTarjetaComponent"],
        _components_confirmar_confirmar_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmarComponent"],
        _components_cargar_archivo_cargar_archivo_component__WEBPACK_IMPORTED_MODULE_12__["CargarArchivoComponent"],
        _components_chips_chips_component__WEBPACK_IMPORTED_MODULE_13__["ChipsComponent"],
        _components_galleria_producto_galleria_producto_component__WEBPACK_IMPORTED_MODULE_15__["GalleriaProductoComponent"],
        _components_galleria_productos_galleria_productos_component__WEBPACK_IMPORTED_MODULE_16__["GalleriaProductosComponent"],
        _components_producto_info_producto_info_component__WEBPACK_IMPORTED_MODULE_22__["ProductoInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _productos_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductosRoutingModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_7__["PrimeNgModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
        ngx_image_zoom__WEBPACK_IMPORTED_MODULE_21__["NgxImageZoomModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]], exports: [_components_galleria_producto_galleria_producto_component__WEBPACK_IMPORTED_MODULE_15__["GalleriaProductoComponent"], _components_galleria_productos_galleria_productos_component__WEBPACK_IMPORTED_MODULE_16__["GalleriaProductosComponent"], _components_producto_info_producto_info_component__WEBPACK_IMPORTED_MODULE_22__["ProductoInfoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_10__["AgregarComponent"],
                    _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_11__["BuscarComponent"],
                    _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_18__["ListadoComponent"],
                    _pages_producto_producto_component__WEBPACK_IMPORTED_MODULE_19__["ProductoComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                    _components_producto_tarjeta_producto_tarjeta_component__WEBPACK_IMPORTED_MODULE_20__["ProductoTarjetaComponent"],
                    _components_confirmar_confirmar_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmarComponent"],
                    _components_cargar_archivo_cargar_archivo_component__WEBPACK_IMPORTED_MODULE_12__["CargarArchivoComponent"],
                    _components_chips_chips_component__WEBPACK_IMPORTED_MODULE_13__["ChipsComponent"],
                    _components_galleria_producto_galleria_producto_component__WEBPACK_IMPORTED_MODULE_15__["GalleriaProductoComponent"],
                    _components_galleria_productos_galleria_productos_component__WEBPACK_IMPORTED_MODULE_16__["GalleriaProductosComponent"],
                    _components_producto_info_producto_info_component__WEBPACK_IMPORTED_MODULE_22__["ProductoInfoComponent"],
                ],
                exports: [_components_galleria_producto_galleria_producto_component__WEBPACK_IMPORTED_MODULE_15__["GalleriaProductoComponent"], _components_galleria_productos_galleria_productos_component__WEBPACK_IMPORTED_MODULE_16__["GalleriaProductosComponent"], _components_producto_info_producto_info_component__WEBPACK_IMPORTED_MODULE_22__["ProductoInfoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _productos_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductosRoutingModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                    _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_7__["PrimeNgModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
                    ngx_image_zoom__WEBPACK_IMPORTED_MODULE_21__["NgxImageZoomModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "M61o":
/*!*********************************************************************!*\
  !*** ./src/app/pedidos/components/confirmar/confirmar.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarComponent", function() { return ConfirmarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class ConfirmarComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    borrar() {
        this.dialogRef.close(true);
    }
    cerrar() {
        this.dialogRef.close();
    }
}
ConfirmarComponent.ɵfac = function ConfirmarComponent_Factory(t) { return new (t || ConfirmarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmarComponent, selectors: [["app-confirmar"]], decls: 12, vars: 1, consts: [["mat-button", "", "color", "warn", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"]], template: function ConfirmarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00BFEsta Seguro ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00BFDesea Continuar?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmarComponent_Template_button_click_8_listener() { return ctx.borrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Si ,Borrar!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmarComponent_Template_button_click_10_listener() { return ctx.cerrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Esta a punto de borrar la venta ", ctx.data._id, " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmar',
                templateUrl: './confirmar.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "N/25":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");







class AuthService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    get usuario() {
        return Object.assign({}, this._usuario);
    }
    get auth() {
        return Object.assign({}, this._auth);
    }
    get authR() {
        return Object.assign({}, this._authR);
    }
    get admin() {
        return Object.assign({}, this._admin);
    }
    validarToken() {
        // Api proveedora
        const url = `${this.baseUrl}/auth/renew`;
        //Parametros headers a preguntar
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.get(url, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => {
            this._usuario = {
                nombre: resp.nombre,
                uid: resp._id,
                correo: resp.correo,
                rol: resp.rol,
                telefono: resp.telefono
            };
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false)));
    }
    validarAdmin() {
        const { uid } = this._usuario;
        const url = `${this.baseUrl}/usuarios/${uid}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => {
            if (resp.usuario.rol === 'ADMIN_ROLE') {
                return true;
            }
            else {
                return false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false)));
    }
    validarSesion() {
        const url = `${this.baseUrl}/auth/renew`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.get(url, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((resp) => {
            this._usuario = {
                nombre: resp.nombre,
                uid: resp._id,
                correo: resp.correo,
                rol: resp.rol,
                telefono: resp.telefono
            };
            localStorage.setItem('x-token', resp.token);
        }));
    }
    validarTiempoToken() {
        const url = `${this.baseUrl}/auth/expired`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.get(url, { headers });
    }
    login(correo, password) {
        const url = `${this.baseUrl}/auth/login`;
        const body = {
            correo,
            password,
        };
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((auth) => (this._auth = auth)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((resp) => {
            if (resp.msg === 'Login Ok! ') {
                // Agregando el token al localstorage
                localStorage.setItem('x-token', resp.token);
                this._usuario = {
                    nombre: resp.usuario.nombre,
                    uid: resp.usuario.uid,
                    correo: resp.usuario.correo,
                    rol: resp.usuario.rol,
                    telefono: resp.usuario.telefono
                };
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => resp.msg), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(err.error.msg)));
    }
    registro(usuario) {
        const url = `${this.baseUrl}/usuarios`;
        // const body = {
        //   nombre,
        //   correo,
        //   password,
        //   rol,
        // };
        return this.http.post(url, usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((resp) => {
            if (resp.ok === true) {
                // Agregando el token al localstorage
                localStorage.setItem('x-token', resp.token);
                this._usuario = {
                    nombre: resp.usuario.nombre,
                    uid: resp.usuario.uid,
                    correo: resp.usuario.correo,
                    telefono: resp.usuario.telefono
                };
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(err.error.msg)));
    }
    logout() {
        // localStorage.clear();
        localStorage.setItem('x-token', '');
        location.reload();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "NAiZ":
/*!***********************************************************************!*\
  !*** ./src/app/productos/components/confirmar/confirmar.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarComponent", function() { return ConfirmarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class ConfirmarComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    borrar() {
        this.dialogRef.close(true);
    }
    cerrar() {
        this.dialogRef.close();
    }
}
ConfirmarComponent.ɵfac = function ConfirmarComponent_Factory(t) { return new (t || ConfirmarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmarComponent, selectors: [["app-confirmar"]], decls: 12, vars: 1, consts: [["mat-button", "", "color", "warn", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"]], template: function ConfirmarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00BFEsta Seguro ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00BFDesea Continuar?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmarComponent_Template_button_click_8_listener() { return ctx.borrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Si ,Borrar!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmarComponent_Template_button_click_10_listener() { return ctx.cerrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Esta a punto de borrar ", ctx.data.nombre, " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmar',
                templateUrl: './confirmar.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Nga3":
/*!****************************************************************************!*\
  !*** ./src/app/home-page/pages/public-product/public-product.component.ts ***!
  \****************************************************************************/
/*! exports provided: PublicProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProductComponent", function() { return PublicProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../productos/services/productos.service */ "epog");
/* harmony import */ var _pedidos_services_pedidos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pedidos/services/pedidos.service */ "zIZD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/menu/menu.component */ "HoiU");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _productos_components_galleria_producto_galleria_producto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../productos/components/galleria-producto/galleria-producto.component */ "odhV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_whatsappbtn_whatsappbtn_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/whatsappbtn/whatsappbtn.component */ "20HZ");
/* harmony import */ var _shared_footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/footerpublic/footerpublic.component */ "tns5");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/radiobutton */ "LuMj");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _pipes_disponible_item_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../pipes/disponible-item.pipe */ "P2oc");






















function PublicProductComponent_mat_grid_list_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PublicProductComponent_ng_template_1_div_45_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-radioButton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicProductComponent_ng_template_1_div_45_Template_p_radioButton_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.tallaSeleccionada = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const talla_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", talla_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", talla_r6)("ngModel", ctx_r3.tallaSeleccionada);
} }
function PublicProductComponent_ng_template_1_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicProductComponent_ng_template_1_div_55_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.agregarAlCarrito(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Agregar Al Carrito ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicProductComponent_ng_template_1_div_55_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.regresar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Regresar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PublicProductComponent_ng_template_1_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicProductComponent_ng_template_1_div_56_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.irCarrito(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ir Al Carrito ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicProductComponent_ng_template_1_div_56_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.regresar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Seguir Comprando OwO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PublicProductComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-galleria-producto", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Categoria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "Strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Precio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "Strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Descripcion:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "Strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Disponibilidad:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "disponibleItem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "Strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Tallas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, PublicProductComponent_ng_template_1_div_45_Template, 2, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Unidades:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p-inputNumber", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PublicProductComponent_ng_template_1_Template_p_inputNumber_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.unidades = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-whatsappbtn", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, PublicProductComponent_ng_template_1_div_55_Template, 8, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, PublicProductComponent_ng_template_1_div_56_Template, 5, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-footerpublic");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsCarrito", ctx_r2.itemsCarrito);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productoGalleria", ctx_r2.producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", ctx_r2.producto.categoria.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.producto.precio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.producto.descripcion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 14, ctx_r2.producto), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.producto.tallas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.unidades)("showButtons", true)("step", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("producto", ctx_r2.producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.seguirComprando);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.seguirComprando);
} }
class PublicProductComponent {
    constructor(activatedRoute, productosService, pedidosService, router) {
        this.activatedRoute = activatedRoute;
        this.productosService = productosService;
        this.pedidosService = pedidosService;
        this.router = router;
        //Carrito articulos
        this.itemsCarrito = [];
        this.unidades = 1;
        this.pedidoEnvio = {
            subtotal: 0,
            producto: '',
            talla: '',
            unidades: 0,
            despachado: false
        };
        this.seguirComprando = false;
    }
    ngOnInit() {
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(({ id }) => this.productosService.getProductoPorId(id)))
            .subscribe(({ producto }) => {
            // console.log(producto);
            this.producto = producto;
            // this.productos = productos;
        });
        // llenar si hay carrito anterior
        let carritoAnterior = localStorage.getItem('carritoBlitz');
        if (carritoAnterior) {
            let carrito = JSON.parse(carritoAnterior);
            this.itemsCarrito = carrito;
        }
    }
    regresar() {
        this.router.navigate(['/store/tienda']);
    }
    agregarAlCarrito() {
        let token = localStorage.getItem('x-token');
        if (!token) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(`Inicio de Sesion Requerido`, `Por Favor inicia sesion para realizar el pedido OwO!`, 'warning');
            return;
        }
        const pedidoEnv = {
            subtotal: this.producto.precio * this.unidades,
            producto: this.producto._id,
            talla: this.tallaSeleccionada,
            unidades: this.unidades,
            despachado: false
        };
        this.pedidosService.agregarPedido(pedidoEnv).subscribe((pedido) => {
            // llenar si hay carrito anterior
            let carritoAnterior = localStorage.getItem('carritoBlitz');
            if (carritoAnterior) {
                let carritoante = JSON.parse(carritoAnterior);
                this.itemsCarrito = carritoante;
            }
            //  Agregando al carrito localstorage
            this.itemsCarrito.push(pedido._id);
            let carrito = JSON.stringify(this.itemsCarrito);
            localStorage.setItem('carritoBlitz', carrito);
        });
        // Actualizar las unidades de stock del producto
        const unidadesRestantes = this.producto.unidades - this.unidades;
        const productoEnv = {
            _id: this.producto._id,
            unidades: unidadesRestantes
        };
        this.productosService.actualizarProducto(productoEnv).subscribe(resp => {
            console.log(resp, 'producto con unidades modificadas');
        });
        // console.log(pedidoEnv);
        this.seguirComprando = true;
        // console.log(this.itemsCarrito);
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(`Producto Agregado al Carrito! `, `${this.producto.nombre}`, 'success');
    }
    irCarrito() {
        this.router.navigateByUrl('/checkout/cart');
    }
}
PublicProductComponent.ɵfac = function PublicProductComponent_Factory(t) { return new (t || PublicProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_productos_services_productos_service__WEBPACK_IMPORTED_MODULE_4__["ProductosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pedidos_services_pedidos_service__WEBPACK_IMPORTED_MODULE_5__["PedidosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PublicProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicProductComponent, selectors: [["app-public-product"]], decls: 3, vars: 2, consts: [["cols", "1", 4, "ngIf", "ngIfElse"], ["divProducto", ""], ["cols", "1"], [1, "container-fluid", "p-0", "m-0", "col-12"], [3, "itemsCarrito"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "30px", 1, "m-0", "p-0", "animate__animated", "animate__fadeIn", "animate__delay-1s"], ["fxFlex", "50", 1, "container-fluid", "m-0", "p-0"], [1, ""], [3, "productoGalleria"], ["fxFlex", "50"], [1, "row"], [1, "col-auto"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col-3"], [1, "p-field", "p-col-12", "p-md-3"], ["for", "vertical", 2, "display", "block"], ["buttonLayout", "horizontal", "spinnerMode", "horizontal", "inputId", "horizontal", "decrementButtonClass", "p-button-primary", "incrementButtonClass", "p-button-primary", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", 3, "ngModel", "showButtons", "step", "ngModelChange"], [3, "producto"], ["class", "container-fluid", 4, "ngIf"], [1, "col"], ["name", "tallas", 3, "label", "value", "ngModel", "ngModelChange"], [1, "container-fluid"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "click"]], template: function PublicProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PublicProductComponent_mat_grid_list_0_Template, 3, 0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PublicProductComponent_ng_template_1_Template, 58, 16, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.producto)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _productos_components_galleria_producto_galleria_producto_component__WEBPACK_IMPORTED_MODULE_12__["GalleriaProductoComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__["InputNumber"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _shared_whatsappbtn_whatsappbtn_component__WEBPACK_IMPORTED_MODULE_16__["WhatsappbtnComponent"], _shared_footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_17__["FooterpublicComponent"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__["RadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"]], pipes: [_pipes_disponible_item_pipe__WEBPACK_IMPORTED_MODULE_20__["DisponibleItemPipe"]], styles: ["*[_ngcontent-%COMP%] {box-sizing: border-box;}\n\n.img-zoom-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.img-zoom-lens[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  \n  width: 40px;\n  height: 40px;\n}\n\n.img-zoom-result[_ngcontent-%COMP%] {\n  border: 1px solid #d4d4d4;\n  \n  width: 300px;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpYy1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyxzQkFBc0IsQ0FBQzs7QUFFMUI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osYUFBYTtBQUNmIiwiZmlsZSI6InB1YmxpYy1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cblxuLmltZy16b29tLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltZy16b29tLWxlbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIC8qc2V0IHRoZSBzaXplIG9mIHRoZSBsZW5zOiovXG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5pbWctem9vbS1yZXN1bHQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAvKnNldCB0aGUgc2l6ZSBvZiB0aGUgcmVzdWx0IGRpdjoqL1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-public-product',
                templateUrl: './public-product.component.html',
                styleUrls: ['./public-product.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_4__["ProductosService"] }, { type: _pedidos_services_pedidos_service__WEBPACK_IMPORTED_MODULE_5__["PedidosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Oiwu":
/*!**********************************************************!*\
  !*** ./src/app/pedidos/pages/pedido/pedido.component.ts ***!
  \**********************************************************/
/*! exports provided: PedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoComponent", function() { return PedidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_pedidos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pedidos.service */ "zIZD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../productos/services/productos.service */ "epog");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _productos_components_producto_info_producto_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../productos/components/producto-info/producto-info.component */ "3N6W");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


















function PedidoComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estado_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", estado_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", estado_r4.desc, " ");
} }
function PedidoComponent_mat_icon_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PedidoComponent_mat_icon_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PedidoComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.borrar(ctx_r5.pedido._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Borrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PedidoComponent {
    constructor(pedidosService, activatedRoute, productosService, fb, router, _location) {
        this.pedidosService = pedidosService;
        this.activatedRoute = activatedRoute;
        this.productosService = productosService;
        this.fb = fb;
        this.router = router;
        this._location = _location;
        this.idVenta = '';
        this.pedido = {
            _id: '',
            despachado: false,
            estado: true,
            instrucciones: [],
            stickers: [],
            subtotal: 0,
            talla: '',
            unidades: 0,
        };
        this.producto = {
            _id: '',
            categoria: {
                _id: '',
                nombre: '',
            },
            descripcion: '',
            disponible: true,
            estado: true,
            etiquetas: [''],
            genero: '',
            img: '',
            imgs: [''],
            nombre: '',
            precio: 0,
            tallas: [''],
            unidades: 0,
            usuario: {
                _id: '',
                nombre: '',
                correo: '',
            },
        };
        // Formulario reactivo
        this.miFormulario = this.fb.group({
            talla: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            producto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            stickers: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(12)]],
            instrucciones: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(12)]],
            subtotal: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)],
            ],
            unidades: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)],
            ],
            despachado: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        // Formulario reactivo
        this.estadoPedido = [
            { id: true, desc: 'Despachado' },
            { id: false, desc: 'Sin Despachar' },
        ];
    }
    ngOnInit() {
        // this.activatedRoute.params.subscribe(({id})=>{this.idVenta=id});
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ id }) => this.pedidosService.getPedidoPorId(id)))
            .subscribe(({ pedido }) => {
            this.pedido = pedido;
            this.miFormulario.reset({
                talla: this.pedido.talla,
                stickers: this.pedido.stickers,
                instrucciones: this.pedido.instrucciones,
                unidades: this.pedido.unidades,
                subtotal: this.pedido.subtotal,
                despachado: this.pedido.despachado,
                producto: this.pedido.producto._id,
            });
            const idProducto = pedido.producto._id;
            this.productosService
                .getProductoPorId(idProducto)
                .subscribe(({ producto }) => {
                this.producto = producto;
            });
        });
    }
    guardarPedido() {
        const { talla, producto, despachado, subtotal, instrucciones, stickers, unidades, } = this.miFormulario.value;
        const { _id } = this.pedido;
        const pedidoActEnvio = {
            _id,
            talla,
            despachado,
            subtotal,
            instrucciones,
            producto,
            stickers,
            unidades,
        };
        this.pedidosService.actualizarPedido(pedidoActEnvio).subscribe((resp) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire(`Pedido Actualizado!`, ' ', 'success');
        });
    }
    borrar(pedido) {
        console.log('borrado!');
    }
    regresar() {
        this._location.back();
    }
}
PedidoComponent.ɵfac = function PedidoComponent_Factory(t) { return new (t || PedidoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pedidos_service__WEBPACK_IMPORTED_MODULE_4__["PedidosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_productos_services_productos_service__WEBPACK_IMPORTED_MODULE_6__["ProductosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"])); };
PedidoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidoComponent, selectors: [["app-pedido"]], decls: 45, vars: 11, consts: [[1, "row", "m-0", "p-0"], [1, "col"], [3, "formGroup", "ngSubmit"], [1, "mb-2", "p-0"], ["fxFlex", "100"], ["matInput", "", "type", "text", "formControlName", "talla", "required", "", 3, "value"], ["matInput", "", "type", "number", "formControlName", "subtotal", "required", "", 3, "value"], ["matInput", "", "type", "number", "formControlName", "unidades", "required", "", 3, "value"], ["formControlName", "despachado", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "container"], [1, "row", "justify-content-between"], [1, "col-4"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "col-4", "mt-2", "mb-2"], ["mat-raised-button", "", "color", "accent", 3, "click"], [3, "producto"], [3, "value"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function PedidoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PedidoComponent_Template_form_ngSubmit_4_listener() { return ctx.guardarPedido(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Talla:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Subtotal del pedido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Unidades del pedido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Estado de Pedido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PedidoComponent_mat_option_25_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PedidoComponent_mat_icon_30_Template, 2, 0, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PedidoComponent_mat_icon_31_Template, 2, 0, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PedidoComponent_button_34_Template, 4, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoComponent_Template_button_click_36_listener() { return ctx.regresar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Regresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Informacion del Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-producto-info", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pedido ID: ", ctx.pedido._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.miFormulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.pedido.talla);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.pedido.subtotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.pedido.unidades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estadoPedido);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.pedido._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pedido._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.pedido._id ? "Crear" : "Actualizar", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pedido._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("producto", ctx.producto);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _productos_components_producto_info_producto_info_component__WEBPACK_IMPORTED_MODULE_14__["ProductoInfoComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pedido',
                templateUrl: './pedido.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _services_pedidos_service__WEBPACK_IMPORTED_MODULE_4__["PedidosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_6__["ProductosService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }]; }, null); })();


/***/ }),

/***/ "P2GU":
/*!***************************************************!*\
  !*** ./src/app/pedidos/pedidos-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PedidosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosRoutingModule", function() { return PedidosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/listado/listado.component */ "0cch");
/* harmony import */ var _pages_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/agregar/agregar.component */ "HFE/");
/* harmony import */ var _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/buscar/buscar.component */ "TpMX");
/* harmony import */ var _pages_pedido_pedido_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pedido/pedido.component */ "Oiwu");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "Jasj");









const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        children: [
            { path: 'listado', component: _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_2__["ListadoComponent"] },
            { path: 'agregar', component: _pages_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_3__["AgregarComponent"] },
            { path: 'editar/:id', component: _pages_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_3__["AgregarComponent"] },
            { path: 'buscar', component: _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__["BuscarComponent"] },
            { path: ':id', component: _pages_pedido_pedido_component__WEBPACK_IMPORTED_MODULE_5__["PedidoComponent"] },
            { path: '**', redirectTo: 'listado' },
        ],
    },
];
class PedidosRoutingModule {
}
PedidosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PedidosRoutingModule });
PedidosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PedidosRoutingModule_Factory(t) { return new (t || PedidosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PedidosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "P2oc":
/*!***********************************************!*\
  !*** ./src/app/pipes/disponible-item.pipe.ts ***!
  \***********************************************/
/*! exports provided: DisponibleItemPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisponibleItemPipe", function() { return DisponibleItemPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DisponibleItemPipe {
    transform(producto) {
        if (producto.disponible) {
            return 'Disponible';
        }
        else {
            return 'No hay unidades';
        }
    }
}
DisponibleItemPipe.ɵfac = function DisponibleItemPipe_Factory(t) { return new (t || DisponibleItemPipe)(); };
DisponibleItemPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "disponibleItem", type: DisponibleItemPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisponibleItemPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'disponibleItem'
            }]
    }], null, null); })();


/***/ }),

/***/ "PC/O":
/*!*******************************************!*\
  !*** ./src/app/auth/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "N/25");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.validarToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((estaAutenticado) => {
            if (!estaAutenticado) {
                this.router.navigateByUrl('/store/tienda');
            }
        }));
    }
    canLoad(route, segments) {
        return this.authService.validarToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((estaAutenticado) => {
            if (!estaAutenticado) {
                this.router.navigateByUrl('/store/tienda');
            }
        }));
        //   if (this.authService.auth.token) {
        //     return true
        //   }
        //  console.log('Bloqueado por el Auth guard');
        // return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prime-ng/prime-ng.module */ "5Ovr");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "HoiU");
/* harmony import */ var _footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footerpublic/footerpublic.component */ "tns5");
/* harmony import */ var _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-screen/loading-screen.component */ "6BtO");
/* harmony import */ var _whatsappbtn_whatsappbtn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./whatsappbtn/whatsappbtn.component */ "20HZ");









class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_2__["PrimeNgModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_5__["FooterpublicComponent"], _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_6__["LoadingScreenComponent"], _whatsappbtn_whatsappbtn_component__WEBPACK_IMPORTED_MODULE_7__["WhatsappbtnComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_2__["PrimeNgModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]], exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
        _footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_5__["FooterpublicComponent"], _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_6__["LoadingScreenComponent"],
        _whatsappbtn_whatsappbtn_component__WEBPACK_IMPORTED_MODULE_7__["WhatsappbtnComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_5__["FooterpublicComponent"], _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_6__["LoadingScreenComponent"], _whatsappbtn_whatsappbtn_component__WEBPACK_IMPORTED_MODULE_7__["WhatsappbtnComponent"]],
                exports: [
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                    _footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_5__["FooterpublicComponent"], _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_6__["LoadingScreenComponent"],
                    _whatsappbtn_whatsappbtn_component__WEBPACK_IMPORTED_MODULE_7__["WhatsappbtnComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_2__["PrimeNgModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QJXv":
/*!***************************************************************************!*\
  !*** ./src/app/pedidos/components/tabla-ventas/tabla-ventas.component.ts ***!
  \***************************************************************************/
/*! exports provided: TablaVentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaVentasComponent", function() { return TablaVentasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ventas.service */ "G4Ok");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_completa_venta_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/completa-venta.pipe */ "Uyhv");






function TablaVentasComponent_caption_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Lista de Ventas ", ctx_r0.filtro, " ");
} }
function TablaVentasComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lista de Ventas Totales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/pedidos/editar", a1]; };
function TablaVentasComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "completadaVenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Editar Pedido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const venta_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](venta_r4._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](venta_r4.usuario.correo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, venta_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 9, venta_r4.fecha, "dd/MMMM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](venta_r4.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, venta_r4._id));
} }
class TablaVentasComponent {
    constructor(ventasService) {
        this.ventasService = ventasService;
        this.ventas = [];
    }
    ngOnInit() {
        if (this.filtro === 'Incompletas') {
            this.ventasService.getVentasSinCompletar().subscribe(({ ventas }) => {
                this.ventas = ventas;
            });
        }
        else if (this.filtro === 'Completas') {
            this.ventasService.getVentasCompletadas().subscribe(({ ventas }) => {
                this.ventas = ventas;
            });
        }
        else {
            this.ventasService.getVentas().subscribe(({ ventas }) => {
                this.ventas = ventas;
                // console.log(this.ventas);
            });
        }
    }
}
TablaVentasComponent.ɵfac = function TablaVentasComponent_Factory(t) { return new (t || TablaVentasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_1__["VentasService"])); };
TablaVentasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TablaVentasComponent, selectors: [["app-tabla-ventas"]], inputs: { filtro: "filtro" }, decls: 23, vars: 3, consts: [[1, "table-responsive"], [1, "table", "table-dark", "table-striped", "table-hover", "table-bordered", "border-white", "caption-top", "animate__animated", "animate__fadeIn", "animate__delay-1s"], [4, "ngIf", "ngIfElse"], ["sinFiltro", ""], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "container"], [1, "row", "m-0", "p-0"], [1, "col-auto"], ["color", "secondary", 1, "btn", "btn-primary", 3, "routerLink"]], template: function TablaVentasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TablaVentasComponent_caption_2_Template, 2, 1, "caption", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TablaVentasComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Id Venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Completada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fecha-Creacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TablaVentasComponent_tr_22_Template, 21, 14, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filtro)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ventas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_pipes_completa_venta_pipe__WEBPACK_IMPORTED_MODULE_4__["CompletadaVentaPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsYS12ZW50YXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TablaVentasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tabla-ventas',
                templateUrl: './tabla-ventas.component.html',
                styleUrls: ['./tabla-ventas.component.css'],
            }]
    }], function () { return [{ type: _services_ventas_service__WEBPACK_IMPORTED_MODULE_1__["VentasService"] }]; }, { filtro: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RbsL":
/*!************************************************************************!*\
  !*** ./src/app/home-page/pages/landing-page/landing-page.component.ts ***!
  \************************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../productos/services/productos.service */ "epog");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "VjTH");
/* harmony import */ var _components_moon_moon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/moon/moon.component */ "+7Hz");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/carousel/carousel.component */ "dX5d");
/* harmony import */ var _shared_footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/footerpublic/footerpublic.component */ "tns5");







class LandingPageComponent {
    constructor(productosService) {
        this.productosService = productosService;
        this.productos = [];
    }
    ngOnInit() {
        this.productosService.getProductos().subscribe((resp) => {
            this.productos = resp.productos;
            // console.log("productos de lading",this.productos);
        });
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"])); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 16, vars: 2, consts: [[1, "container-fluid", "p-0"], [1, "container-fluid", "background", "animate__animated", "animate__fadeIn", "animate__delay-1s"], [1, "container-fluid", "p-0", "m-0"], [1, "row"], [1, "container-fluid", "p-0", "m-0", "d-block"], [1, "row", "align-items-center"], [1, "col-12", "col-sm-3", "col-md-3", "col-lg-3", "container-fluid", "d-flex", "justify-content-center", "align-items-center"], [1, "col-12", "col-sm-9", "col-md-9", "col-lg-9", "p-0", "m-0", "container-fluid", "align-items-center"], [1, "row", "justify-content-center", "p-0", "m-0"], [1, "col-3", "animate__animated", "animate__flipInX", "animate__delay-2s"], ["src", "../../../../assets/img/UIBlitz/logoblitz.png", "alt", "", 1, "img-logo", "d-none", "d-md-block"], [3, "productosAll", "termino"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-moon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-carousel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footerpublic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productosAll", ctx.productos)("termino", "");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _components_moon_moon_component__WEBPACK_IMPORTED_MODULE_3__["MoonComponent"], _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _shared_footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_5__["FooterpublicComponent"]], styles: [".background[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-image: url(\"https://res.cloudinary.com/dxxz2xazt/image/upload/v1632188380/TiendaApp/Recursos/Cielosinluna_o5crch.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.img-logo[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 100%;\n  max-height: 12.25rem;\n  border-radius: 300px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7RUFFQSxpSUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQURGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBRkY7O0FBTUM7RUFDRSxlQUFBO0VBQ0QsU0FBQTtFQUdDLE9BQUE7RUFDRCxRQUFBO0FBTEYiLCJmaWxlIjoibGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuXG4gIGhlaWdodDogMTAwdmg7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvVUlCbGl0ei9DaWVsb3Npbmx1bmEucG5nXCIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9keHh6MnhhenQvaW1hZ2UvdXBsb2FkL3YxNjMyMTg4MzgwL1RpZW5kYUFwcC9SZWN1cnNvcy9DaWVsb3Npbmx1bmFfbzVjcmNoLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG59XG5cbi5pbWctbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTIuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xufVxuXG5cbiAuZm9vdGVye1xuICAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG5cblxuICAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.scss'],
            }]
    }], function () { return [{ type: _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"] }]; }, null); })();


/***/ }),

/***/ "SA0X":
/*!*********************************************************************************!*\
  !*** ./src/app/productos/components/cargar-archivo/cargar-archivo.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CargarArchivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarArchivoComponent", function() { return CargarArchivoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/productos.service */ "epog");




class CargarArchivoComponent {
    constructor(productosService) {
        this.productosService = productosService;
    }
    ngOnInit() { }
    myUploader(id, event) {
        // console.log(event);
        let fileList = event.files;
        let archivo = fileList[0];
        // console.log(archivo);
        if (fileList.length > 1) {
            for (let i = 0; i < fileList.length; i++) {
                const element = fileList[i];
                this.productosService
                    .cargarImagenesProducto(id, element)
                    .subscribe((resp) => {
                    // console.log('correcto', resp);
                });
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(`Imagenes de Productos subidas!`, `Total de archivos subidos: ${fileList.length}`, 'success');
        }
        else {
            this.productosService.cargarImgProducto(id, archivo).subscribe((resp) => {
                // console.log('Archivo Subido', resp);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Imagen de Producto subida', '', 'success');
            });
        }
        // console.log('Archivo Subido', event);
    }
}
CargarArchivoComponent.ɵfac = function CargarArchivoComponent_Factory(t) { return new (t || CargarArchivoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"])); };
CargarArchivoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CargarArchivoComponent, selectors: [["app-cargar-archivo"]], inputs: { producto: "producto" }, decls: 0, vars: 0, template: function CargarArchivoComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJnYXItYXJjaGl2by5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CargarArchivoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cargar-archivo',
                templateUrl: './cargar-archivo.component.html',
                styleUrls: ['./cargar-archivo.component.css'],
            }]
    }], function () { return [{ type: _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"] }]; }, { producto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(primengConfig) {
        this.primengConfig = primengConfig;
        this.title = 'BlitzStore';
    }
    ngOnInit() {
        // Configurando el efecto ripple de primeNg -global botones bonitos!
        this.primengConfig.ripple = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeNGConfig"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeNGConfig"] }]; }, null); })();


/***/ }),

/***/ "TpMX":
/*!**********************************************************!*\
  !*** ./src/app/pedidos/pages/buscar/buscar.component.ts ***!
  \**********************************************************/
/*! exports provided: BuscarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarComponent", function() { return BuscarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/workingprogress/workingprogress.component */ "BnjK");



class BuscarComponent {
    constructor() { }
    ngOnInit() {
    }
}
BuscarComponent.ɵfac = function BuscarComponent_Factory(t) { return new (t || BuscarComponent)(); };
BuscarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuscarComponent, selectors: [["app-buscar"]], decls: 3, vars: 0, template: function BuscarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "buscar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-workingprogress");
    } }, directives: [_components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_1__["WorkingprogressComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuscarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buscar',
                templateUrl: './buscar.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Uyhv":
/*!**********************************************!*\
  !*** ./src/app/pipes/completa-venta.pipe.ts ***!
  \**********************************************/
/*! exports provided: CompletadaVentaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletadaVentaPipe", function() { return CompletadaVentaPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CompletadaVentaPipe {
    transform(venta) {
        if (venta.completada) {
            return 'Completada';
        }
        else {
            return 'Sin Completar';
        }
    }
}
CompletadaVentaPipe.ɵfac = function CompletadaVentaPipe_Factory(t) { return new (t || CompletadaVentaPipe)(); };
CompletadaVentaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "completadaVenta", type: CompletadaVentaPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompletadaVentaPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'completadaVenta'
            }]
    }], null, null); })();


/***/ }),

/***/ "VjTH":
/*!*****************************************************************!*\
  !*** ./src/app/home-page/components/navbar/navbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 9, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-transparent", "justify-content-around", "align-content-center"], ["routerLink", "/store/servicios", 1, "nav-link", "d-none", "d-sm-block", "p1Servicios", "shake"], ["routerLink", "/store/tienda", 1, "nav-link", "d-none", "d-sm-block", "p2Tienda", "shake"], ["routerLink", "/store/servicios", 1, "nav-link", "d-flex", "d-block", "d-sm-none", "p1ServiciosSmall", "shake"], ["routerLink", "/store/tienda", 1, "nav-link", "d-flex", "d-block", "d-sm-none", "p2TiendaSmall", "shake"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tienda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tienda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.img-navbar[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100px;\n  height: 100px;\n\n  background-size: cover;\n}\n\n.shake[_ngcontent-%COMP%]:hover {\n  animation: headShake;\n  animation-duration: 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7O0VBRWIsc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltZy1uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG5cbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuXG4uc2hha2U6aG92ZXIge1xuICBhbmltYXRpb246IGhlYWRTaGFrZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YP/F":
/*!*************************************************************!*\
  !*** ./src/app/home-page/pages/ignition/start.component.ts ***!
  \*************************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_thebomb1_thebomb1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/thebomb1/thebomb1.component */ "/mk7");
/* harmony import */ var _shared_footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/footerpublic/footerpublic.component */ "tns5");




class StartComponent {
    constructor() { }
    ngOnInit() {
    }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(); };
StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 2, vars: 0, template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-thebomb1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footerpublic");
    } }, directives: [_components_thebomb1_thebomb1_component__WEBPACK_IMPORTED_MODULE_1__["Thebomb1Component"], _shared_footerpublic_footerpublic_component__WEBPACK_IMPORTED_MODULE_2__["FooterpublicComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start',
                templateUrl: './start.component.html',
                styleUrls: ['./start.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prime-ng/prime-ng.module */ "5Ovr");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _home_page_home_page_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-page/home-page.module */ "64/j");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./productos/services/productos.service */ "epog");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/es-CO */ "AQDP");
/* harmony import */ var _angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");













// Cambiar el locale de la app/lenguaje



Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_13___default.a);
// Cambiar el locale de la app/lenguaje
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_11__["ProductosService"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'es-CO' }], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _home_page_home_page_module__WEBPACK_IMPORTED_MODULE_9__["HomePageModule"],
            _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_6__["PrimeNgModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _home_page_home_page_module__WEBPACK_IMPORTED_MODULE_9__["HomePageModule"],
        _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_6__["PrimeNgModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _home_page_home_page_module__WEBPACK_IMPORTED_MODULE_9__["HomePageModule"],
                    _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_6__["PrimeNgModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                ],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_11__["ProductosService"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'es-CO' }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a5gm":
/*!*********************************************************************************!*\
  !*** ./src/app/home-page/components/tabs-productos/tabs-productos.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TabsProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsProductosComponent", function() { return TabsProductosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../productos/services/productos.service */ "epog");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carousel/carousel.component */ "dX5d");






function TabsProductosComponent_mat_tab_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const categoria_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", categoria_r1.nombre, " ");
} }
function TabsProductosComponent_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsProductosComponent_mat_tab_2_ng_template_1_Template, 1, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("termino", categoria_r1.nombre);
} }
class TabsProductosComponent {
    constructor(productosService) {
        this.productosService = productosService;
        this.termino = '';
        this.categorias = [];
    }
    ngOnInit() {
        // this.productosService
        // .getProductosPorCategoria(this.termino)
        // .subscribe((producto) => {
        //   this.productosCategorias = producto.results;
        //   // console.log(this.termino);
        //   // console.log(this.productosCategorias);
        // });
        const categoriasResp = this.productosService
            .getCategorias()
            .subscribe((categorias) => {
            this.categorias = categorias;
            // console.log(this.categorias)
        });
    }
}
TabsProductosComponent.ɵfac = function TabsProductosComponent_Factory(t) { return new (t || TabsProductosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"])); };
TabsProductosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsProductosComponent, selectors: [["app-tabs-productos"]], inputs: { termino: "termino" }, decls: 3, vars: 1, consts: [[1, "container-fluid", "p-0", "m-0", "d-none", "d-sm-none", "d-md-block"], ["mat-align-tabs", "center"], [4, "ngFor", "ngForOf"], ["mat-tab-label", ""], [3, "termino"]], template: function TabsProductosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabsProductosComponent_mat_tab_2_Template, 3, 1, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorias);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabLabel"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLXByb2R1Y3Rvcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsProductosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tabs-productos',
                templateUrl: './tabs-productos.component.html',
                styleUrls: ['./tabs-productos.component.css']
            }]
    }], function () { return [{ type: _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"] }]; }, { termino: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "baVJ":
/*!**************************************!*\
  !*** ./src/app/pipes/genero.pipe.ts ***!
  \**************************************/
/*! exports provided: generoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generoPipe", function() { return generoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class generoPipe {
    transform(genero) {
        if (genero === 'F') {
            return 'Femenino';
        }
        else {
            return 'Masculino';
        }
    }
}
generoPipe.ɵfac = function generoPipe_Factory(t) { return new (t || generoPipe)(); };
generoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "generoProducto", type: generoPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](generoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'generoProducto'
            }]
    }], null, null); })();


/***/ }),

/***/ "cl+k":
/*!*************************************************!*\
  !*** ./src/app/pipes/despachado-pedido.pipe.ts ***!
  \*************************************************/
/*! exports provided: DespachadoPedidoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DespachadoPedidoPipe", function() { return DespachadoPedidoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DespachadoPedidoPipe {
    transform(pedido) {
        if (pedido.despachado) {
            return 'Despachado';
        }
        else {
            return ' Sin Despachar';
        }
    }
}
DespachadoPedidoPipe.ɵfac = function DespachadoPedidoPipe_Factory(t) { return new (t || DespachadoPedidoPipe)(); };
DespachadoPedidoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "despachadoPedido", type: DespachadoPedidoPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DespachadoPedidoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'despachadoPedido'
            }]
    }], null, null); })();


/***/ }),

/***/ "dX5d":
/*!*********************************************************************!*\
  !*** ./src/app/home-page/components/carousel/carousel.component.ts ***!
  \*********************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../productos/services/productos.service */ "epog");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/carousel */ "LwO5");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tag */ "hYoW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/imagen.pipe */ "0CBe");
/* harmony import */ var _pipes_disponible_item_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/disponible-item.pipe */ "P2oc");










const _c0 = function (a1) { return ["/store", a1]; };
function CarouselComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p-tag", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "disponibleItem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ver Producto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, producto_r1), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", producto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](producto_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", producto_r1.precio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, producto_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, producto_r1._id));
} }
class CarouselComponent {
    constructor(productosService) {
        this.productosService = productosService;
        this.productos = [];
        this.responsiveOptions = [];
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3,
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2,
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }
    ngOnInit() {
        this.cargarProductos();
    }
    ngOnChanges(changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.cargarProductos();
    }
    cargarProductos() {
        if (this.productosAll) {
            this.productos = this.productosAll;
        }
        if (this.termino !== '') {
            this.cargarProductosPorCategoria();
        }
        else {
            return;
        }
    }
    cargarProductosPorCategoria() {
        this.productosService
            .getProductosPorCategoria(this.termino)
            .subscribe((producto) => {
            this.productos = producto.results;
            // console.log(this.termino);
            // console.log(this.productosCategorias);
        });
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], inputs: { productosAll: "productosAll", productosPorCategoria: "productosPorCategoria", termino: "termino" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 7, consts: [[1, "container-fluid", "animate__animated", "animate__fadeIn", "animate__delay-1s", "col-12", "border-0", "p-0"], ["showIndicators", "true", 3, "value", "numVisible", "numScroll", "page", "circular", "autoplayInterval", "responsiveOptions"], ["pTemplate", "item", "style", "padding: 0px;"], [1, "product-item", "animate__animated", "animate__fadeIn", "animate__delay-1s", "p-0"], [1, "product-item-content"], [1, "p-mb-3"], [1, "product-image", 3, "src", "alt"], [1, "p-mb-1"], [1, "p-mt-0", "p-mb-3"], ["severity", "success", "icon", "pi pi-check", 3, "value", "rounded"], [1, "car-buttons", "p-mt-10"], ["mat-button", "", "color", "primary", 3, "routerLink"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ng_template_2_Template, 16, 13, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.productos)("numVisible", 3)("numScroll", 1)("page", 1)("circular", true)("autoplayInterval", 100000)("responsiveOptions", ctx.responsiveOptions);
    } }, directives: [primeng_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], primeng_tag__WEBPACK_IMPORTED_MODULE_4__["Tag"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [_pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_7__["ImagenPipe"], _pipes_disponible_item_pipe__WEBPACK_IMPORTED_MODULE_8__["DisponibleItemPipe"]], styles: [".product-item[_ngcontent-%COMP%]   .product-item-content[_ngcontent-%COMP%] {\n  border: 1px solid var(--surface-d);\n  border-radius: 3px;\n  margin: 0.3rem;\n  text-align: center;\n  padding: 2rem 0;\n}\n.product-item[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  width: 50%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBTjtBQUdFO0VBQ0ksVUFBQTtFQUNBLHdFQUFBO0FBRE47QUFJQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBRUEsc0JBQUE7QUFERiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWl0ZW0ge1xuICAucHJvZHVjdC1pdGVtLWNvbnRlbnQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1kKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIG1hcmdpbjogLjNyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAycmVtIDA7XG4gIH1cblxuICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpXG4gIH1cbn1cbip7XG4gIG1hcmdpbjowO1xuICBwYWRkaW5nOiAwO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.scss'],
            }]
    }], function () { return [{ type: _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"] }]; }, { productosAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], productosPorCategoria: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], termino: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "epog":
/*!*********************************************************!*\
  !*** ./src/app/productos/services/productos.service.ts ***!
  \*********************************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class ProductosService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    get producto() {
        return Object.assign({}, this._producto);
    }
    get categoria() {
        return Object.assign({}, this._categoria);
    }
    getProductos() {
        return this.http.get(`${this.baseUrl}/productos?limite=20`);
    }
    getProductoPorId(id) {
        return this.http.get(`${this.baseUrl}/productos/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((resp) => {
            resp.producto;
        }));
    }
    getProductosPortermino(termino) {
        return this.http.get(`${this.baseUrl}/buscar/productos/${termino}`);
    }
    getProductosPorCategoria(termino) {
        return this.http.get(`${this.baseUrl}/buscar/productosCategorias/${termino}`);
    }
    getCategorias() {
        return this.http
            .get(`${this.baseUrl}/categorias`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((resp) => resp.categorias));
    }
    agregarProducto(producto) {
        const url = `${this.baseUrl}/productos`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.post(url, producto, { headers });
    }
    actualizarProducto(producto) {
        const url = `${this.baseUrl}/productos/${producto._id}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.put(url, producto, { headers });
    }
    cargarImgProducto(id, archivo) {
        // {{url}}/api/uploads/productos/608919df0664f516905707c8
        let formData = new FormData();
        formData.append('archivo', archivo);
        const url = `${this.baseUrl}/uploads/productos/${id}`;
        console.log('respuesta de servicio archivo', archivo);
        return this.http.put(url, formData);
    }
    cargarImagenesProducto(id, archivo) {
        let formData = new FormData();
        formData.append('archivo', archivo);
        const url = `${this.baseUrl}/uploads/productos/${id}/imgs`;
        console.log('respuesta de servicio archivo', archivo);
        return this.http.put(url, formData);
    }
    limpiarImagenesProducto(id) {
        const url = `${this.baseUrl}/uploads/productos/${id}/imgs`;
        return this.http.delete(url);
    }
    borrarProducto(id) {
        const url = `${this.baseUrl}/productos/${id}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.delete(url, { headers });
    }
}
ProductosService.ɵfac = function ProductosService_Factory(t) { return new (t || ProductosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ProductosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductosService, factory: ProductosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "g1bI":
/*!********************************************************!*\
  !*** ./src/app/home-page/pages/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/loading-screen/loading-screen.component */ "6BtO");






function HomeComponent_app_loading_screen_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-screen");
} }
function HomeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(router) {
        this.router = router;
        this.loading = false;
        this.router.events.subscribe((event) => {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]: {
                    this.loading = true;
                    break;
                }
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]: {
                    this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["divcargado", ""], [1, "container-fluid", "p-0", "m-0"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_app_loading_screen_0_Template, 1, 0, "app-loading-screen", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_3__["LoadingScreenComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%]{\n  background-color: #ffffff;\n}\n\n\n*[_ngcontent-%COMP%]{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5cbip7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "hBXT":
/*!********************************************************!*\
  !*** ./src/app/productos/pages/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/services/auth.service */ "N/25");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");









class HomeComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    get usuario() {
        return this.authService.usuario;
    }
    ngOnInit() {
    }
    logOut() {
        this.authService.logout();
        this.router.navigateByUrl('/home/landingPage');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 55, vars: 1, consts: [[1, "animate__animated", "animate__fadeInLeft", "animate__delay-1s"], [2, "height", "100vh"], ["mode", "push"], ["sidenav", ""], ["color", "primary"], [1, "spacer"], ["mat-icon-button", "", 3, "click"], ["routerLink", "../store/tienda", "mat-list-item", "", 3, "click"], ["mat-list-icon", "", "color", "primary"], ["routerLink", "./listado", "mat-list-item", "", 3, "click"], ["routerLink", "./agregar", "mat-list-item", "", 3, "click"], ["routerLink", "./buscar", "mat-list-item", "", 3, "click"], ["routerLink", "../stickers", "mat-list-item", "", 3, "click"], ["routerLink", "../pedidos", "mat-list-item", "", 3, "click"], ["mat-button", "", 3, "click"], [1, "container-fluid"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "HomePage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Listado de Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Agregar Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Buscar Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "fireplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Administrar Stickers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "receipt_long");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Administrar Pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_49_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Cerrar Sesion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hola ", ctx.usuario.nombre, " !");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListIconCssMatStyler"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%]{\n      margin: 10px ;\n\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styles: [
                    `
    .container{
      margin: 10px ;

    }
    `
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "+0xr");


// Material Modules




















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _imagen_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagen.pipe */ "0CBe");
/* harmony import */ var _disponible_item_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disponible-item.pipe */ "P2oc");
/* harmony import */ var _completa_venta_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./completa-venta.pipe */ "Uyhv");
/* harmony import */ var _despachado_pedido_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./despachado-pedido.pipe */ "cl+k");
/* harmony import */ var _genero_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genero.pipe */ "baVJ");








class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_imagen_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagenPipe"],
        _disponible_item_pipe__WEBPACK_IMPORTED_MODULE_3__["DisponibleItemPipe"],
        _completa_venta_pipe__WEBPACK_IMPORTED_MODULE_4__["CompletadaVentaPipe"],
        _despachado_pedido_pipe__WEBPACK_IMPORTED_MODULE_5__["DespachadoPedidoPipe"],
        _genero_pipe__WEBPACK_IMPORTED_MODULE_6__["generoPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_imagen_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagenPipe"],
        _disponible_item_pipe__WEBPACK_IMPORTED_MODULE_3__["DisponibleItemPipe"],
        _completa_venta_pipe__WEBPACK_IMPORTED_MODULE_4__["CompletadaVentaPipe"],
        _despachado_pedido_pipe__WEBPACK_IMPORTED_MODULE_5__["DespachadoPedidoPipe"],
        _genero_pipe__WEBPACK_IMPORTED_MODULE_6__["generoPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _imagen_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagenPipe"],
                    _disponible_item_pipe__WEBPACK_IMPORTED_MODULE_3__["DisponibleItemPipe"],
                    _completa_venta_pipe__WEBPACK_IMPORTED_MODULE_4__["CompletadaVentaPipe"],
                    _despachado_pedido_pipe__WEBPACK_IMPORTED_MODULE_5__["DespachadoPedidoPipe"],
                    _genero_pipe__WEBPACK_IMPORTED_MODULE_6__["generoPipe"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _imagen_pipe__WEBPACK_IMPORTED_MODULE_2__["ImagenPipe"],
                    _disponible_item_pipe__WEBPACK_IMPORTED_MODULE_3__["DisponibleItemPipe"],
                    _completa_venta_pipe__WEBPACK_IMPORTED_MODULE_4__["CompletadaVentaPipe"],
                    _despachado_pedido_pipe__WEBPACK_IMPORTED_MODULE_5__["DespachadoPedidoPipe"],
                    _genero_pipe__WEBPACK_IMPORTED_MODULE_6__["generoPipe"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "lRpP":
/*!*******************************************!*\
  !*** ./src/app/pedidos/pedidos.module.ts ***!
  \*******************************************/
/*! exports provided: PedidosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosModule", function() { return PedidosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../prime-ng/prime-ng.module */ "5Ovr");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");
/* harmony import */ var _pages_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/agregar/agregar.component */ "HFE/");
/* harmony import */ var _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/buscar/buscar.component */ "TpMX");
/* harmony import */ var _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/listado/listado.component */ "0cch");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.component */ "Jasj");
/* harmony import */ var _pages_pedido_pedido_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/pedido/pedido.component */ "Oiwu");
/* harmony import */ var _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pedidos-routing.module */ "P2GU");
/* harmony import */ var _components_tabla_ventas_tabla_ventas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tabla-ventas/tabla-ventas.component */ "QJXv");
/* harmony import */ var _components_tabla_pedidos_tabla_pedidos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tabla-pedidos/tabla-pedidos.component */ "z8QN");
/* harmony import */ var _components_confirmar_confirmar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/confirmar/confirmar.component */ "M61o");
/* harmony import */ var _productos_productos_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../productos/productos.module */ "LYHX");
/* harmony import */ var _components_tablaangmaterial_ventas_tablaangmaterial_ventas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/tablaangmaterial-ventas/tablaangmaterial-ventas.component */ "wPYj");
/* harmony import */ var _components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/workingprogress/workingprogress.component */ "BnjK");























class PedidosModule {
}
PedidosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PedidosModule });
PedidosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PedidosModule_Factory(t) { return new (t || PedidosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_6__["PrimeNgModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_14__["PedidosRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _productos_productos_module__WEBPACK_IMPORTED_MODULE_18__["ProductosModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PedidosModule, { declarations: [_pages_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_9__["AgregarComponent"],
        _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_10__["BuscarComponent"],
        _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_11__["ListadoComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _pages_pedido_pedido_component__WEBPACK_IMPORTED_MODULE_13__["PedidoComponent"],
        _components_tabla_ventas_tabla_ventas_component__WEBPACK_IMPORTED_MODULE_15__["TablaVentasComponent"],
        _components_tabla_pedidos_tabla_pedidos_component__WEBPACK_IMPORTED_MODULE_16__["TablaPedidosComponent"],
        _components_confirmar_confirmar_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmarComponent"],
        _components_tablaangmaterial_ventas_tablaangmaterial_ventas_component__WEBPACK_IMPORTED_MODULE_19__["TablaangmaterialVentasComponent"],
        _components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_20__["WorkingprogressComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_6__["PrimeNgModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_14__["PedidosRoutingModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _productos_productos_module__WEBPACK_IMPORTED_MODULE_18__["ProductosModule"]], exports: [_components_tabla_ventas_tabla_ventas_component__WEBPACK_IMPORTED_MODULE_15__["TablaVentasComponent"], _components_tabla_pedidos_tabla_pedidos_component__WEBPACK_IMPORTED_MODULE_16__["TablaPedidosComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_9__["AgregarComponent"],
                    _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_10__["BuscarComponent"],
                    _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_11__["ListadoComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _pages_pedido_pedido_component__WEBPACK_IMPORTED_MODULE_13__["PedidoComponent"],
                    _components_tabla_ventas_tabla_ventas_component__WEBPACK_IMPORTED_MODULE_15__["TablaVentasComponent"],
                    _components_tabla_pedidos_tabla_pedidos_component__WEBPACK_IMPORTED_MODULE_16__["TablaPedidosComponent"],
                    _components_confirmar_confirmar_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmarComponent"],
                    _components_tablaangmaterial_ventas_tablaangmaterial_ventas_component__WEBPACK_IMPORTED_MODULE_19__["TablaangmaterialVentasComponent"],
                    _components_workingprogress_workingprogress_component__WEBPACK_IMPORTED_MODULE_20__["WorkingprogressComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _prime_ng_prime_ng_module__WEBPACK_IMPORTED_MODULE_6__["PrimeNgModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_14__["PedidosRoutingModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _productos_productos_module__WEBPACK_IMPORTED_MODULE_18__["ProductosModule"]
                ],
                exports: [_components_tabla_ventas_tabla_ventas_component__WEBPACK_IMPORTED_MODULE_15__["TablaVentasComponent"], _components_tabla_pedidos_tabla_pedidos_component__WEBPACK_IMPORTED_MODULE_16__["TablaPedidosComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "m1PF":
/*!*******************************************************!*\
  !*** ./src/app/stickers/services/stickers.service.ts ***!
  \*******************************************************/
/*! exports provided: StickersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickersService", function() { return StickersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class StickersService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    get sticker() {
        return Object.assign({}, this._sticker);
    }
    getStickers() {
        return this.http.get(`${this.baseUrl}/stickers?limite=20`);
    }
    getStickerPorId(id) {
        return this.http.get(`${this.baseUrl}/stickers/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((resp) => {
            resp.sticker;
        }));
    }
    getStickersPortermino(termino) {
        return this.http.get(`${this.baseUrl}/buscar/stickers/${termino}`);
    }
    agregarSticker(sticker) {
        const url = `${this.baseUrl}/stickers`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.post(url, sticker, { headers });
    }
    actualizarSticker(sticker) {
        const url = `${this.baseUrl}/stickers/${sticker._id}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.put(url, sticker, { headers });
    }
    cargarImgSticker(id, archivo) {
        // {{url}}/api/uploads/productos/608919df0664f516905707c8
        let formData = new FormData();
        formData.append('archivo', archivo);
        const url = `${this.baseUrl}/uploads/stickers/${id}`;
        console.log('respuesta de servicio archivo', archivo);
        return this.http.put(url, formData);
    }
    cargarImagenesSticker(id, archivo) {
        let formData = new FormData();
        formData.append('archivo', archivo);
        const url = `${this.baseUrl}/uploads/stickers/${id}/imgs`;
        console.log('respuesta de servicio archivo', archivo);
        return this.http.put(url, formData);
    }
    limpiarImagenesSticker(id) {
        const url = `${this.baseUrl}/uploads/stickers/${id}/imgs`;
        return this.http.delete(url);
    }
    borrarSticker(id) {
        const url = `${this.baseUrl}/stickers/${id}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.delete(url, { headers });
    }
}
StickersService.ɵfac = function StickersService_Factory(t) { return new (t || StickersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
StickersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StickersService, factory: StickersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StickersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "odhV":
/*!***************************************************************************************!*\
  !*** ./src/app/productos/components/galleria-producto/galleria-producto.component.ts ***!
  \***************************************************************************************/
/*! exports provided: GalleriaProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaProductoComponent", function() { return GalleriaProductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../productos/services/productos.service */ "epog");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/galleria */ "2art");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-image-zoom */ "1zy2");






function GalleriaProductoComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaProductoComponent_ng_template_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.imageClick(ctx_r5.activeIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GalleriaProductoComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GalleriaProductoComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-ngx-image-zoom", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("thumbImage", item_r8)("fullImage", item_r8)("magnification", 1)("enableScrollZoom", true)("enableLens", true)("lensWidth", 200)("lensHeight", 200)("circularLens", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GalleriaProductoComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { "max-width": "660px" }; };
const _c1 = function () { return { "max-width": "850px" }; };
class GalleriaProductoComponent {
    constructor(productosService) {
        this.productosService = productosService;
        this.images = [];
        this.activeIndex = 0;
        this.fullscreen = false;
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5,
            },
            {
                breakpoint: '960px',
                numVisible: 4,
            },
            {
                breakpoint: '768px',
                numVisible: 3,
            },
            {
                breakpoint: '560px',
                numVisible: 1,
            },
        ];
    }
    ngOnInit() {
        this.cargarProductoPorId();
    }
    cargarProductoPorId() {
        const id = this.productoGalleria._id;
        this.productosService.getProductoPorId(id).subscribe(({ producto }) => {
            // console.log(producto.imgs);
            this.images = producto.imgs;
            // console.log(this.images);
        });
    }
    imageClick(index) {
        this.activeIndex = index;
        this.displayCustom = true;
    }
}
GalleriaProductoComponent.ɵfac = function GalleriaProductoComponent_Factory(t) { return new (t || GalleriaProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"])); };
GalleriaProductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleriaProductoComponent, selectors: [["app-galleria-producto"]], inputs: { productoGalleria: "productoGalleria" }, decls: 6, vars: 18, consts: [[3, "value", "responsiveOptions", "containerStyle", "circular", "numVisible"], ["pTemplate", "item"], ["pTemplate", "thumbnail"], [3, "value", "visible", "activeIndex", "responsiveOptions", "containerStyle", "numVisible", "circular", "fullScreen", "showItemNavigators", "showThumbnails", "baseZIndex", "visibleChange", "activeIndexChange"], [1, "d-block"], [2, "width", "100%", "display", "block", 3, "src", "click"], [1, "p-grid", "p-nogutter", "p-justify-center"], [1, "img-mini", 3, "src"], [1, "d-none", "d-sm-block"], [3, "thumbImage", "fullImage", "magnification", "enableScrollZoom", "enableLens", "lensWidth", "lensHeight", "circularLens"], [1, "d-block", "d-sm-none"], [2, "width", "100%", "display", "block", 3, "src"], [2, "display", "block", 3, "src"]], template: function GalleriaProductoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleria", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaProductoComponent_ng_template_1_Template, 2, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaProductoComponent_ng_template_2_Template, 2, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-galleria", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function GalleriaProductoComponent_Template_p_galleria_visibleChange_3_listener($event) { return ctx.displayCustom = $event; })("activeIndexChange", function GalleriaProductoComponent_Template_p_galleria_activeIndexChange_3_listener($event) { return ctx.activeIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GalleriaProductoComponent_ng_template_4_Template, 4, 9, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleriaProductoComponent_ng_template_5_Template, 2, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.images)("responsiveOptions", ctx.responsiveOptions)("containerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0))("circular", true)("numVisible", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.images)("visible", ctx.displayCustom)("activeIndex", ctx.activeIndex)("responsiveOptions", ctx.responsiveOptions)("containerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1))("numVisible", 55)("circular", true)("fullScreen", true)("showItemNavigators", true)("showThumbnails", false)("baseZIndex", 100000000000000);
    } }, directives: [primeng_galleria__WEBPACK_IMPORTED_MODULE_2__["Galleria"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], ngx_image_zoom__WEBPACK_IMPORTED_MODULE_4__["NgxImageZoomComponent"]], styles: [".img-mini[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcmlhLXByb2R1Y3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7QUFDZiIsImZpbGUiOiJnYWxsZXJpYS1wcm9kdWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1taW5pIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaProductoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-galleria-producto',
                templateUrl: './galleria-producto.component.html',
                styleUrls: ['./galleria-producto.component.css'],
            }]
    }], function () { return [{ type: _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"] }]; }, { productoGalleria: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "pvvI":
/*!****************************************************************!*\
  !*** ./src/app/productos/pages/producto/producto.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/productos.service */ "epog");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _components_galleria_producto_galleria_producto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/galleria-producto/galleria-producto.component */ "odhV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _pipes_disponible_item_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../pipes/disponible-item.pipe */ "P2oc");














function ProductoComponent_mat_grid_list_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductoComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-galleria-producto", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Categoria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "Strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Coste:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "Strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Descripcion:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "Strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Disponibilidad:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "disponibleItem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductoComponent_ng_template_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.regresar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Regresar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productoGalleria", ctx_r2.producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", ctx_r2.producto.categoria.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.producto.precio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.producto.descripcion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 6, ctx_r2.producto), "");
} }
class ProductoComponent {
    constructor(activatedRoute, productosService, router) {
        this.activatedRoute = activatedRoute;
        this.productosService = productosService;
        this.router = router;
    }
    ngOnInit() {
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(({ id }) => this.productosService.getProductoPorId(id)))
            .subscribe(({ producto }) => {
            this.producto = producto;
            // console.log(` producto component llego`, producto);
            // this.productos = productos;
        });
    }
    // this.productosService.getProductoPorId(producto._id)
    //     .subscribe(producto  =>this.productoSeleccionado = producto)
    regresar() {
        this.router.navigate(['/productos/listado']);
    }
}
ProductoComponent.ɵfac = function ProductoComponent_Factory(t) { return new (t || ProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductoComponent, selectors: [["app-producto"]], decls: 3, vars: 2, consts: [["cols", "1", 4, "ngIf", "ngIfElse"], ["divProducto", ""], ["cols", "1"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutGap", "30px"], ["fxFlex", "50"], [3, "productoGalleria"], ["mat-button", "", "color", "warn", 3, "click"]], template: function ProductoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductoComponent_mat_grid_list_0_Template, 3, 0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductoComponent_ng_template_1_Template, 37, 8, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.producto)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _components_galleria_producto_galleria_producto_component__WEBPACK_IMPORTED_MODULE_9__["GalleriaProductoComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], pipes: [_pipes_disponible_item_pipe__WEBPACK_IMPORTED_MODULE_12__["DisponibleItemPipe"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InByb2R1Y3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cblxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-producto',
                templateUrl: './producto.component.html',
                styleUrls: ['./producto.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "q8Hj":
/*!***************************************************************!*\
  !*** ./src/app/productos/components/chips/chips.component.ts ***!
  \***************************************************************/
/*! exports provided: ChipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsComponent", function() { return ChipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/chips */ "RGqm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class ChipsComponent {
    constructor() {
        //chips component
        this.etiquetas = [];
    }
    ngOnInit() {
    }
}
ChipsComponent.ɵfac = function ChipsComponent_Factory(t) { return new (t || ChipsComponent)(); };
ChipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChipsComponent, selectors: [["app-chips"]], decls: 1, vars: 1, consts: [[3, "ngModel", "ngModelChange"]], template: function ChipsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-chips", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChipsComponent_Template_p_chips_ngModelChange_0_listener($event) { return ctx.etiquetas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.etiquetas);
    } }, directives: [primeng_chips__WEBPACK_IMPORTED_MODULE_1__["Chips"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGlwcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChipsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chips',
                templateUrl: './chips.component.html',
                styleUrls: ['./chips.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rodV":
/*!*******************************************************!*\
  !*** ./src/app/productos/productos-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ProductosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosRoutingModule", function() { return ProductosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/listado/listado.component */ "LARa");
/* harmony import */ var _pages_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/agregar/agregar.component */ "KF5Q");
/* harmony import */ var _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/buscar/buscar.component */ "u/dK");
/* harmony import */ var _pages_producto_producto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/producto/producto.component */ "pvvI");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "hBXT");









const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        children: [
            { path: 'listado', component: _pages_listado_listado_component__WEBPACK_IMPORTED_MODULE_2__["ListadoComponent"] },
            { path: 'agregar', component: _pages_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_3__["AgregarComponent"] },
            { path: 'editar/:id', component: _pages_agregar_agregar_component__WEBPACK_IMPORTED_MODULE_3__["AgregarComponent"] },
            { path: 'buscar', component: _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__["BuscarComponent"] },
            { path: ':id', component: _pages_producto_producto_component__WEBPACK_IMPORTED_MODULE_5__["ProductoComponent"] },
            { path: '**', redirectTo: 'listado' },
        ],
    },
];
class ProductosRoutingModule {
}
ProductosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductosRoutingModule });
ProductosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductosRoutingModule_Factory(t) { return new (t || ProductosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "tns5":
/*!***************************************************************!*\
  !*** ./src/app/shared/footerpublic/footerpublic.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterpublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterpublicComponent", function() { return FooterpublicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterpublicComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterpublicComponent.ɵfac = function FooterpublicComponent_Factory(t) { return new (t || FooterpublicComponent)(); };
FooterpublicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterpublicComponent, selectors: [["app-footerpublic"]], decls: 13, vars: 0, consts: [[1, "footer", "container-fluid", "animate__animated", "animate__fadeIn", "animate__delay-1s", "p-0"], [1, "row", "d-flex", "m-0", "justify-content-center", "bg-gray"], [1, "col-12", "col-lg-4", "footer-redes"], [1, "col-12", "d-flex", "justify-content-center"], ["href", ""], [1, "fab", "fa-instagram", "fa-3x"], [1, "fab", "fa-facebook-f", "fa-3x"], [1, "fab", "fa-tiktok", "fa-3x"], [1, "col-12", "align-self-center", "d-flex", "justify-content-center", "footer-textos"], [1, "footer-textos"]], template: function FooterpublicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "DERECHOS RESERVADOS PERO CONTENIDO LIBRE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-redes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px;\n  color: gray;\n  text-align: center;\n  text-decoration: none;\n\n  letter-spacing: 0;\n}\n\n.footer-textos[_ngcontent-%COMP%]  {\n  color: rgb(109, 109, 109);\n  padding-top: 10px;\n  font-family: ocra-bt;\n}\n\n.bg-gray[_ngcontent-%COMP%] {\n  background-color: rgba(169, 169, 169, 0.3);\n\n\n\n}\n\n.footer[_ngcontent-%COMP%]{\n   \n\nz-index: 1;\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3RlcnB1YmxpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjs7RUFFckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBSUE7RUFDRSwwQ0FBMEM7Ozs7QUFJNUM7O0FBRUU7R0FDQztjQUNXOztBQUVkLFVBQVU7R0FDUDthQUNVO0FBQ2IiLCJmaWxlIjoiZm9vdGVycHVibGljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXJlZGVzIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmZvb3Rlci10ZXh0b3MgIHtcbiAgY29sb3I6IHJnYigxMDksIDEwOSwgMTA5KTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBvY3JhLWJ0O1xufVxuXG5cblxuLmJnLWdyYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2OSwgMTY5LCAxNjksIDAuMyk7XG5cblxuXG59XG5cbiAgLmZvb3RlcntcbiAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwOyAqL1xuXG56LWluZGV4OiAxO1xuICAgLyogbGVmdDogMDtcbiAgcmlnaHQ6IDA7ICovXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterpublicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footerpublic',
                templateUrl: './footerpublic.component.html',
                styleUrls: ['./footerpublic.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "u/dK":
/*!************************************************************!*\
  !*** ./src/app/productos/pages/buscar/buscar.component.ts ***!
  \************************************************************/
/*! exports provided: BuscarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarComponent", function() { return BuscarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/productos.service */ "epog");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _components_producto_tarjeta_producto_tarjeta_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/producto-tarjeta/producto-tarjeta.component */ "2BsO");













function BuscarComponent_input_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuscarComponent_input_18_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.termino = $event; })("input", function BuscarComponent_input_18_Template_input_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.buscando(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.termino)("matAutocomplete", _r3);
} }
function BuscarComponent_input_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuscarComponent_input_19_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.termino = $event; })("input", function BuscarComponent_input_19_Template_input_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.buscando(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.termino)("matAutocomplete", _r3);
} }
function BuscarComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", producto_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", producto_r14.nombre, " ");
} }
function BuscarComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" No se encontro nada con el termino ", ctx_r5.termino, " ");
} }
function BuscarComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-producto-tarjeta", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("producto", ctx_r6.productoSeleccionado);
} }
function BuscarComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-producto-tarjeta", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productosCat", producto_r16);
} }
function BuscarComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BuscarComponent_div_29_div_1_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.productos);
} }
class BuscarComponent {
    constructor(productosService) {
        this.productosService = productosService;
        this.termino = '';
        this.productos = [];
        this.tipoBusqueda = '';
        this.filtros = [
            {
                name: 'Seleccione opcion',
                cod: '',
            },
            {
                name: 'Categoria',
                cod: 'Categoria',
            },
        ];
    }
    ngOnInit() { }
    opcionSeleccionada(event) {
        if (!event.option.value) {
            this.productoSeleccionado = undefined;
            this.productos = [];
            console.log('No hay valor');
            return;
        }
        const producto = event.option.value;
        this.termino = producto.nombre;
        if (this.tipoBusqueda === 'Categoria') {
            this.productosService
                .getProductosPorCategoria(this.termino.trim())
                .subscribe(({ results }) => {
                this.productos = results;
            });
        }
        else {
            this.productosService
                .getProductosPortermino(this.termino.trim())
                .subscribe(({ results }) => {
                this.productos = results;
            });
        }
    }
    buscando() {
        this.productos = [];
        if (!this.termino) {
            this.productos = [];
            return;
        }
        else {
            if (this.tipoBusqueda === 'Categoria') {
                this.productosService
                    .getProductosPorCategoria(this.termino.trim())
                    .subscribe(({ results }) => {
                    this.productos = results;
                });
            }
            else {
                this.productosService
                    .getProductosPortermino(this.termino.trim())
                    .subscribe(({ results }) => {
                    this.productos = results;
                });
            }
        }
    }
}
BuscarComponent.ɵfac = function BuscarComponent_Factory(t) { return new (t || BuscarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"])); };
BuscarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuscarComponent, selectors: [["app-buscar"]], decls: 30, vars: 13, consts: [["fxLayout", "column"], ["filtrosdiv", ""], ["id", "example-radio-group-label"], ["optionLabel", "name", "optionValue", "cod", 3, "options", "ngModel", "showTransitionOptions", "hideTransitionOptions", "ngModelChange"], ["type", "text", "placeholder", "Escribe el producto", "aria-label", "Producto", "matInput", "", 3, "ngModel", "matAutocomplete", "ngModelChange", "input", 4, "ngIf"], ["type", "text", "placeholder", "Escribe la categoria", "aria-label", "Categoria", "matInput", "", 3, "ngModel", "matAutocomplete", "ngModelChange", "input", 4, "ngIf"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "", 4, "ngIf"], ["fxLayout", "row", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "20px", 4, "ngIf"], ["type", "text", "placeholder", "Escribe el producto", "aria-label", "Producto", "matInput", "", 3, "ngModel", "matAutocomplete", "ngModelChange", "input"], ["type", "text", "placeholder", "Escribe la categoria", "aria-label", "Categoria", "matInput", "", 3, "ngModel", "matAutocomplete", "ngModelChange", "input"], [3, "value"], ["value", ""], ["fxLayout", "row"], [3, "producto"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "20px"], ["fxflex", "20", "fxFlex.lg", "15", "fxFlex.sm", "30", 4, "ngFor", "ngForOf"], ["fxflex", "20", "fxFlex.lg", "15", "fxFlex.sm", "30"], [3, "productosCat"]], template: function BuscarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Buscador de Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Selecciona forma de busqueda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-dropdown", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuscarComponent_Template_p_dropdown_ngModelChange_11_listener($event) { return ctx.tipoBusqueda = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BuscarComponent_input_18_Template, 1, 2, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BuscarComponent_input_19_Template, 1, 2, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-autocomplete", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function BuscarComponent_Template_mat_autocomplete_optionSelected_20_listener($event) { return ctx.opcionSeleccionada($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BuscarComponent_mat_option_22_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BuscarComponent_mat_option_23_Template, 2, 1, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BuscarComponent_div_28_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, BuscarComponent_div_29_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.filtros)("ngModel", ctx.tipoBusqueda)("showTransitionOptions", "0ms")("hideTransitionOptions", "0ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tipoBusqueda === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tipoBusqueda === "Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productos.length === 0 && ctx.termino.trim().length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, ctx.productoSeleccionado));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productoSeleccionado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.productoSeleccionado);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _components_producto_tarjeta_producto_tarjeta_component__WEBPACK_IMPORTED_MODULE_11__["ProductoTarjetaComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuscarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buscar',
                templateUrl: './buscar.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"] }]; }, null); })();


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
/* harmony import */ var _shared_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/error-page/error-page.component */ "8puP");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/guards/auth.guard */ "PC/O");
/* harmony import */ var _auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/guards/admin.guard */ "DeIa");







const routes = [
    {
        path: 'store',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./home-page/home-page.module */ "64/j")).then((m) => m.HomePageModule),
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then((m) => m.AuthModule),
    },
    {
        path: 'productos',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./productos/productos.module */ "LYHX")).then((m) => m.ProductosModule),
        canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_4__["AdminGuard"]],
        canLoad: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'stickers',
        loadChildren: () => __webpack_require__.e(/*! import() | stickers-stickers-module */ "stickers-stickers-module").then(__webpack_require__.bind(null, /*! ./stickers/stickers.module */ "5aY2")).then((m) => m.StickersModule),
        canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_4__["AdminGuard"]],
        canLoad: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'checkout',
        loadChildren: () => __webpack_require__.e(/*! import() | checkout-checkout-module */ "checkout-checkout-module").then(__webpack_require__.bind(null, /*! ./checkout/checkout.module */ "8y03")).then((m) => m.CheckoutModule),
        canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canLoad: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'pedidos',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pedidos/pedidos.module */ "lRpP")).then((m) => m.PedidosModule),
        canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_4__["AdminGuard"]],
        canLoad: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: '404',
        component: _shared_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_2__["ErrorPageComponent"],
    },
    {
        path: '**',
        // component: ErrorPageComponent,
        redirectTo: 'store',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wIMV":
/*!***************************************************************************************!*\
  !*** ./src/app/home-page/components/categorias-slider/categorias-slider.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CategoriasSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasSliderComponent", function() { return CategoriasSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../productos/services/productos.service */ "epog");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/carousel */ "LwO5");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _productos_components_galleria_productos_galleria_productos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../productos/components/galleria-productos/galleria-productos.component */ "9/6Q");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");








function CategoriasSliderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-galleria-productos", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("termino", ctx_r0.termino);
} }
function CategoriasSliderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-galleria-productos", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("termino", ctx_r1.termino);
} }
function CategoriasSliderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-galleria-productos", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("termino", ctx_r2.termino);
} }
function CategoriasSliderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriasSliderComponent_ng_template_5_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const categoria_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.emitirCategoria(categoria_r4.nombre); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", categoria_r4.nombre, " ");
} }
class CategoriasSliderComponent {
    constructor(productosService) {
        this.productosService = productosService;
        // @Input() termino:string ='' ;
        // @Output() categoriaSeleccionada: EventEmitter<string> = new EventEmitter<string>();
        // productosCategorias: Result[] = [];
        this.categorias = [];
        this.responsiveOptions = [];
        this.termino = '';
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3,
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2,
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }
    ngOnInit() {
        this.termino = 'JEANS';
        const categoriasResp = this.productosService
            .getCategorias()
            .subscribe((categorias) => {
            this.categorias = categorias;
            // console.log(this.categorias);
        });
    }
    emitirCategoria(categoria) {
        // console.log(categoria);
        // this.categoriaSeleccionada.emit(categoria);
        this.termino = categoria;
    }
}
CategoriasSliderComponent.ɵfac = function CategoriasSliderComponent_Factory(t) { return new (t || CategoriasSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"])); };
CategoriasSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriasSliderComponent, selectors: [["app-categorias-slider"]], decls: 6, vars: 9, consts: [[1, "container-fluid", "animate__animated", "animate__fadeIn", "animate__delay-1s", "col-12", "d-block", "d-sm-none", "p-b-3"], [4, "ngIf"], ["showIndicators", "true", 3, "value", "numVisible", "numScroll", "page", "circular", "responsiveOptions"], ["pTemplate", "item"], [3, "termino"], [1, "product-item"], [1, "product-item-content"], [1, "col"], ["mat-list-item", "", 2, "text-decoration", "none", "cursor", "pointer", "color", "gray", 3, "click"]], template: function CategoriasSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoriasSliderComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoriasSliderComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoriasSliderComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CategoriasSliderComponent_ng_template_5_Template, 5, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.termino === "JEANS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.termino === "CAMISETAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.termino === "CROPTOPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.categorias)("numVisible", 1)("numScroll", 1)("page", 1)("circular", true)("responsiveOptions", ctx.responsiveOptions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], primeng_carousel__WEBPACK_IMPORTED_MODULE_3__["Carousel"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], _productos_components_galleria_productos_galleria_productos_component__WEBPACK_IMPORTED_MODULE_5__["GalleriaProductosComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"]], styles: [".product-item[_ngcontent-%COMP%]   .product-item-content[_ngcontent-%COMP%] {\n  margin: 0.3rem;\n  text-align: center;\n  padding: 2rem 0;\n}\n.product-item[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  width: 50%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhdGVnb3JpYXMtc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBR0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZOO0FBS0U7RUFDSSxVQUFBO0VBQ0Esd0VBQUE7QUFITiIsImZpbGUiOiJjYXRlZ29yaWFzLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWl0ZW0ge1xuICAucHJvZHVjdC1pdGVtLWNvbnRlbnQge1xuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1kKTtcbiAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIG1hcmdpbjogLjNyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAycmVtIDA7XG4gIH1cblxuICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpXG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriasSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categorias-slider',
                templateUrl: './categorias-slider.component.html',
                styleUrls: ['./categorias-slider.component.scss'],
            }]
    }], function () { return [{ type: _productos_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"] }]; }, null); })();


/***/ }),

/***/ "wPYj":
/*!*************************************************************************************************!*\
  !*** ./src/app/pedidos/components/tablaangmaterial-ventas/tablaangmaterial-ventas.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TablaangmaterialVentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaangmaterialVentasComponent", function() { return TablaangmaterialVentasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ventas.service */ "G4Ok");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function TablaangmaterialVentasComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TablaangmaterialVentasComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const venta_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](venta_r12._id);
} }
function TablaangmaterialVentasComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TablaangmaterialVentasComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const venta_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](venta_r13.usuario.correo);
} }
function TablaangmaterialVentasComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Completada");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TablaangmaterialVentasComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const venta_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](venta_r14.completada);
} }
function TablaangmaterialVentasComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fecha Creacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TablaangmaterialVentasComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const venta_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, venta_r15.fecha));
} }
function TablaangmaterialVentasComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TablaangmaterialVentasComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const venta_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, venta_r16.total));
} }
function TablaangmaterialVentasComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
function TablaangmaterialVentasComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
class TablaangmaterialVentasComponent {
    constructor(ventasService, _liveAnnouncer) {
        this.ventasService = ventasService;
        this._liveAnnouncer = _liveAnnouncer;
        this.ventas = [];
        // Tabla angular material
        this.displayedColumns = [
            'posicion',
            'cliente',
            'completada',
            'fechaCreacion',
            'total',
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.ventasService.getVentas().subscribe(({ ventas }) => {
            this.ventas = ventas;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ventas);
            console.log(this.ventas);
            console.log(this.dataSource);
        });
    }
    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState) {
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        }
        else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
}
TablaangmaterialVentasComponent.ɵfac = function TablaangmaterialVentasComponent_Factory(t) { return new (t || TablaangmaterialVentasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["LiveAnnouncer"])); };
TablaangmaterialVentasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TablaangmaterialVentasComponent, selectors: [["app-tablaangmaterial-ventas"]], viewQuery: function TablaangmaterialVentasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 18, vars: 3, consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "posicion"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by name", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cliente"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "completada"], ["matColumnDef", "fechaCreacion"], ["matColumnDef", "total"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by name"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TablaangmaterialVentasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TablaangmaterialVentasComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TablaangmaterialVentasComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TablaangmaterialVentasComponent_th_5_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TablaangmaterialVentasComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TablaangmaterialVentasComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TablaangmaterialVentasComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TablaangmaterialVentasComponent_th_11_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TablaangmaterialVentasComponent_td_12_Template, 3, 3, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TablaangmaterialVentasComponent_th_14_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TablaangmaterialVentasComponent_td_15_Template, 3, 3, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TablaangmaterialVentasComponent_tr_16_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TablaangmaterialVentasComponent_tr_17_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 100%;\n  }\n\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxhYW5nbWF0ZXJpYWwtdmVudGFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaIiwiZmlsZSI6InRhYmxhYW5nbWF0ZXJpYWwtdmVudGFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIHRkLCB0aCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TablaangmaterialVentasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tablaangmaterial-ventas',
                templateUrl: './tablaangmaterial-ventas.component.html',
                styleUrls: ['./tablaangmaterial-ventas.component.css']
            }]
    }], function () { return [{ type: _services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["LiveAnnouncer"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "xQQl":
/*!***********************************************************************************!*\
  !*** ./src/app/home-page/components/workingprogress/workingprogress.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WorkingprogressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingprogressComponent", function() { return WorkingprogressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class WorkingprogressComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkingprogressComponent.ɵfac = function WorkingprogressComponent_Factory(t) { return new (t || WorkingprogressComponent)(); };
WorkingprogressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkingprogressComponent, selectors: [["app-workingprogress"]], decls: 10, vars: 0, consts: [[1, "container-fluid", "p-0", "m-0"], [1, "row", "p-0", "m-0", "background", "animate__animated", "animate__fadeIn", "animate__delay-1s"], [1, "col", "col-sm-6", "col-md-6", "col-lg-6", "animate__animated", "animate__fadeIn", "justify-content-center"], ["bombadiv", ""], [1, "row", "container-fluid", "align-content-center"], [1, "row", "p-0", "m-0", "container-fluid"], ["routerLink", "/store/landingPage"], ["id", "", "src", "../../../../assets/img/UIBlitz/estamostrabajando.png", "alt", "", 1, "img"]], template: function WorkingprogressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Estamos Trabajando en proximos servicios,pronto disponibles!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".img[_ngcontent-%COMP%]{\n  display: flex;\n  width: 100%;\n  max-height: 31.25rem;\n  border-radius: 300px;\n\n}\n\n.background[_ngcontent-%COMP%]{\n  display: flex;\n  background-color: black;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\nh1[_ngcontent-%COMP%]{\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtpbmdwcm9ncmVzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsb0JBQW9COztBQUV0QjtBQUNBLFlBQVk7QUFDWjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ3b3JraW5ncHJvZ3Jlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzMS4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMzAwcHg7XG5cbn1cbi8qICNGQUZBRkEgKi9cbi5iYWNrZ3JvdW5ke1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgxe1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkingprogressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-workingprogress',
                templateUrl: './workingprogress.component.html',
                styleUrls: ['./workingprogress.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "z8QN":
/*!*****************************************************************************!*\
  !*** ./src/app/pedidos/components/tabla-pedidos/tabla-pedidos.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TablaPedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaPedidosComponent", function() { return TablaPedidosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_pedidos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pedidos.service */ "zIZD");
/* harmony import */ var _services_ventas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ventas.service */ "G4Ok");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_despachado_pedido_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/despachado-pedido.pipe */ "cl+k");









const _c0 = function (a1) { return ["/pedidos", a1]; };
function TablaPedidosComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "despachadoPedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TablaPedidosComponent_tr_21_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const pedido_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.eliminarPedido(pedido_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pedido_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pedido_r1.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", pedido_r1.producto.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", pedido_r1.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pedido_r1.unidades);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pedido_r1.talla);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pedido_r1.subtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, pedido_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, pedido_r1._id));
} }
class TablaPedidosComponent {
    constructor(pedidosService, ventasService) {
        this.pedidosService = pedidosService;
        this.ventasService = ventasService;
        this.onIdPedidoDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pedidos = [];
        this.pedido = {
            _id: '',
            unidades: 0,
            stickers: [],
            subtotal: 0,
            instrucciones: [],
            estado: true,
            despachado: false,
            talla: '',
        };
    }
    ngOnInit() {
        if (this.pedidosInput) {
            this.pedidos = this.pedidosInput;
        }
        else if (this.idVenta) {
            this.obtenerPedidosPorIdVenta(this.idVenta);
        }
        else if (this.Usuario) {
            this.obtenerPedidosUsuario(this.Usuario);
        }
        else {
            this.obtenerPedidosAll();
        }
    }
    obtenerPedidosUsuario(pedidoUsuario) {
        this.pedidosService
            .getPedidosPorUsuarioSinDespachar(pedidoUsuario)
            .subscribe((pedidos) => {
            this.pedidos = pedidos;
            console.log(this.pedidos);
        });
    }
    obtenerPedidosPorIdVenta(idVenta) {
        this.ventasService.getVentaPorId(idVenta).subscribe(({ venta }) => {
            // console.log(venta, 'respuesta de getventaporid');
            for (let i = 0; i < venta.pedidos.length; i++) {
                const element = venta.pedidos[i];
                // Agregando el pedido encontrado a pedidos
                this.pedidosService.getPedidoPorId(element).subscribe(({ pedido }) => {
                    this.pedidos.push(pedido);
                });
            }
        });
    }
    obtenerPedidosAll() {
        this.pedidosService.getPedidos().subscribe(({ pedidos }) => {
            this.pedidos = pedidos;
            console.log(this.pedidos);
        });
    }
    llenarPedidosCarrito(pedidosCarrito) {
        for (let i = 0; i < pedidosCarrito.length; i++) {
            const idPedido = pedidosCarrito[i];
            this.pedidosService.getPedidoPorId(idPedido).subscribe(({ pedido }) => {
                this.pedidos.push(pedido);
            });
        }
        console.log(this.pedidos, 'Respuesta de pedidos encontrados y metidos OwO');
    }
    eliminarPedido(idPedido) {
        // console.log(idPedido, ' pedido a eliminar!');
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Esta Seguro?',
            text: `Esto eliminara completamente el pedido ${idPedido} de la venta!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, Borralo B) !'
        }).then((result) => {
            if (result.isConfirmed) {
                this.onIdPedidoDelete.emit(idPedido);
                // Swal.fire(
                //   'Eliminado!',
                //   'El pedido ha sido eliminado',
                //   'success'
                // )
            }
        });
    }
}
TablaPedidosComponent.ɵfac = function TablaPedidosComponent_Factory(t) { return new (t || TablaPedidosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pedidos_service__WEBPACK_IMPORTED_MODULE_2__["PedidosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"])); };
TablaPedidosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TablaPedidosComponent, selectors: [["app-tabla-pedidos"]], inputs: { pedidosInput: "pedidosInput", Usuario: "Usuario", pedidosCarrito: "pedidosCarrito", idVenta: "idVenta" }, outputs: { onIdPedidoDelete: "onIdPedidoDelete" }, decls: 22, vars: 1, consts: [[1, "table-responsive"], [1, "table", "table-dark", "table-striped", "table-hover", "animate__animated", "animate__fadeIn", "animate__delay-1s"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["width", "100", 1, "p-shadow-4", 3, "src", "alt"], [1, "container-fluid"], [1, "row", "d-flex", "justify-content-between", "m-0", "p-0"], [1, "col-6", "m-0", "p-0"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function TablaPedidosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Unidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Talla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Despachado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TablaPedidosComponent_tr_21_Template, 25, 13, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pedidos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [_pipes_despachado_pedido_pipe__WEBPACK_IMPORTED_MODULE_7__["DespachadoPedidoPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsYS1wZWRpZG9zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TablaPedidosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tabla-pedidos',
                templateUrl: './tabla-pedidos.component.html',
                styleUrls: ['./tabla-pedidos.component.css'],
            }]
    }], function () { return [{ type: _services_pedidos_service__WEBPACK_IMPORTED_MODULE_2__["PedidosService"] }, { type: _services_ventas_service__WEBPACK_IMPORTED_MODULE_3__["VentasService"] }]; }, { pedidosInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], Usuario: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pedidosCarrito: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], idVenta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onIdPedidoDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zIZD":
/*!*****************************************************!*\
  !*** ./src/app/pedidos/services/pedidos.service.ts ***!
  \*****************************************************/
/*! exports provided: PedidosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosService", function() { return PedidosService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");





class PedidosService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    getPedidos() {
        return this.http.get(`${this.baseUrl}/pedidos?limite=20`);
    }
    getPedidosSinDespachar() {
        return this.http.get(`${this.baseUrl}/pedidos/sinDespachar`);
    }
    agregarPedido(pedido) {
        const url = `${this.baseUrl}/pedidos`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.post(url, pedido, { headers });
    }
    getPedidoPorId(id) {
        return this.http.get(`${this.baseUrl}/pedidos/${id}`);
    }
    getPedidosPorUsuario(correo) {
        return this.http.get(`${this.baseUrl}/buscar/pedidosUsuarios/${correo}`);
    }
    getPedidosPorUsuarioSinDespachar(correo) {
        return this.http.get(`${this.baseUrl}/buscar/pedidosUsuariosSinDespacho/${correo}`);
    }
    actualizarPedido(pedido) {
        const url = `${this.baseUrl}/pedidos/${pedido._id}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.put(url, pedido, { headers });
    }
    borrarPedido(id) {
        const url = `${this.baseUrl}/pedidos/${id}`;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('x-token', localStorage.getItem('x-token') || '');
        return this.http.delete(url, { headers });
    }
}
PedidosService.ɵfac = function PedidosService_Factory(t) { return new (t || PedidosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PedidosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PedidosService, factory: PedidosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PedidosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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