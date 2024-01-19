import { Injectable } from '@angular/core';
import{ v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 8500
  }];

  addCharacter(character: Character): void {

    const newCharacter = {...character, id: uuid()}

    this.characters.push(newCharacter);
    // console.log('Main Page Component');
    // console.log(character);
  }

  /*onDeleteCharacter(index: number): void {
    this.characters.splice(index,1);
  }*/
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
