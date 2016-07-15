/**
 * Created by manojdobbala on 7/11/16.
 */

import { Component } from '@angular/core';
import { Character } from './character';
import { CharacterComponent } from './character.component';

@Component({
   selector: 'character-list',
   templateUrl: 'app/components/character-list.component.html',
   directives : [CharacterComponent]
})

export class CharacterListComponent {
    selectedCharacter: Character;
    characters = [
        new Character(1, 'Han Solo'),
        new Character(2, 'Luke Skywalker'),
        new Character(3, 'BB-8'),
        new Character(4, 'Rey'),
        new Character(5, 'Manoj')
    ];

    select(character: Character){
        this.selectedCharacter = character;
    }
}