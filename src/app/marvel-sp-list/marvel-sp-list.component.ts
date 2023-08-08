import { Component, OnInit } from '@angular/core';
import { Heroes } from '../dto/heroes';

@Component({
  selector: 'app-marvel-sp-list',
  templateUrl: './marvel-sp-list.component.html',
  styleUrls: ['./marvel-sp-list.component.css']
})
export class MarvelSpListComponent implements OnInit {

  constructor() { }

  // property
  superHeroList : Array<Heroes> = [{name:"Captian America",strength:"good",weapons:"Vibranium Shield"}, {name:"Iron Man",weapons:"Armour Suits & Tech",strength:"Excellent"},{name:"Thor",weapons:"Hammer & Storm Breaker", strength:"Excellent"}];

  addHero(name : string) {
      let hero = new Heroes();
      hero.name = name;
      hero.strength = "";
      hero.weapons = "";
  }

  ngOnInit(): void {
  }

}
