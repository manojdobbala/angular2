"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require('@angular/common');
var http_1 = require("@angular/http");
var characters_component_1 = require("./characters.component");
var slide_component_1 = require('./slide.component');
var carousel_component_1 = require('./carousel.component');
var AppComponent = (function () {
    function AppComponent() {
        //carousel related code
        //The time to show the next photo
        // private NextPhotoInterval:number = 5000;
        //Looping or not
        this.noLoopSlides = true;
        //Photos
        this.slides = [];
        this.addNewSlide();
    }
    //non carousel code
    AppComponent.prototype.changed = function (changedCharacter) {
        if (changedCharacter) {
            console.log("Event emitter said you selected " + changedCharacter.name);
        }
    };
    AppComponent.prototype.addNewSlide = function () {
        this.slides.push({ image: 'http://www.homedepot.com/services/static/services/images/hero-images/main-hero-financing.jpg', text: 'Home Depot 1' }, { image: 'http://www.homedepot.com/services/static/services/images/hero-images/main-hero-selected-pro.jpg', text: 'Home Depot 2' }, { image: 'http://www.homedepot.com/services/static/services/images/hero-images/main-hero-financing.jpg', text: 'Home Depot 3' }, { image: 'http://www.homedepot.com/services/static/services/images/hero-images/main-hero-insured.jpg', text: 'Home Depot 4' }, { image: 'http://www.homedepot.com/services/static/services/images/hero-images/main-hero-guarantee.jpg', text: 'Home Depot 5' });
    };
    AppComponent.prototype.removeLastSlide = function () {
        this.slides.pop();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/components/app.component.html',
            styleUrls: ['app/components/app.component.css'],
            directives: [characters_component_1.CharactersComponent, slide_component_1.Slide, carousel_component_1.Carousel, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map