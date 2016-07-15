/**
 * Created by manojdobbala on 7/11/16.
 */
import { Component, Input } from '@angular/core';

import { Character } from '../service/character.service';



@Component({
    selector: 'story-character',
    template: '<h3 *ngIf="character" id="character">You selected {{character.name}}</h3>',
})
export class CharacterComponent {
    @Input() character: Character;
}