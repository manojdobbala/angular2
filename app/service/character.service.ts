/**
 * Created by manojdobbala on 7/11/16.
 */
import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

export interface Character {
    id: number;
    name: string;
}

@Injectable()
export class CharacterService {
    constructor(private _http: Http) { }

    getCharacters(storyId: number) {
        return this._http.get('app/api/characters.json')
            .map((response: Response) => response.json().data);
    }
}
