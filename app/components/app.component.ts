import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { CharactersComponent } from './characters.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app.component.html',
    styleUrls:['app/components/app.component.css'],
    directives: [CharactersComponent],
    providers:[HTTP_PROVIDERS]
})

export class AppComponent {
   changed(changedCharacter: any) {
       if (changedCharacter) {
          console.log(`Event emitter said you selected ${changedCharacter.name}`);
       }
   }
}
