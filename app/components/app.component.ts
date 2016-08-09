import {Component} from "@angular/core";
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {HTTP_PROVIDERS} from "@angular/http";

import {CharactersComponent} from "./characters.component";
import {Slide} from './slide.component';
import {Carousel} from './carousel.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app.component.html',
    styleUrls:['app/components/app.component.css'],
    directives: [CharactersComponent, Slide,Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers:[HTTP_PROVIDERS]
})

export class AppComponent {
    //non carousel code
    changed(changedCharacter: any) {
       if (changedCharacter) {
          console.log(`Event emitter said you selected ${changedCharacter.name}`);
       }
   }

   //carousel related code

    //The time to show the next photo
    // private NextPhotoInterval:number = 5000;
    //Looping or not
    private noLoopSlides:boolean = true;
    //Photos
    private slides:Array<any> = [];

    constructor() {
        this.addNewSlide();
    }

    private addNewSlide() {
        this.slides.push(
            {image:'http://www.homedepot.com/services/static/services/images/hero-images/main-hero-financing.jpg',text:'Home Depot 1'},
            {image:'http://www.homedepot.com/services/static/services/images/hero-images/main-hero-selected-pro.jpg',text:'Home Depot 2'},
            {image:'http://www.homedepot.com/services/static/services/images/hero-images/main-hero-financing.jpg',text:'Home Depot 3'},
            {image:'http://www.homedepot.com/services/static/services/images/hero-images/main-hero-insured.jpg',text:'Home Depot 4'},
            {image:'http://www.homedepot.com/services/static/services/images/hero-images/main-hero-guarantee.jpg',text:'Home Depot 5'}
        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }
}
