import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroes } from '../dto/heroes';

@Component({
  selector: 'app-marvel-superheroes',
  templateUrl: './marvel-superheroes.component.html',
  styleUrls: ['./marvel-superheroes.component.css']
})
export class MarvelSuperheroesComponent implements OnInit {

  constructor() { }

  @Input() marvelList : Array<Heroes> = [{name:"Captain America", weapons:"Vibranium Shield", strength: "Best"}, {name:"Iron Man",weapons:"Armour Suits & Tech",strength:"Excellent"},{name:"Thor",weapons:"Hammer & Storm Breaker", strength:"Excellent"}];
  
  @Output() ListofMarvel = new EventEmitter<string>();

  ngOnInit(): void {
  }

}
