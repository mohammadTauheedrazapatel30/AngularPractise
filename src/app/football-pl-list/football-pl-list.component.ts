import { Component, OnInit } from '@angular/core';
import { Player } from '../dto/player';

@Component({
  selector: 'app-football-pl-list',
  templateUrl: './football-pl-list.component.html',
  styleUrls: ['./football-pl-list.component.css']
})
export class FootballPlListComponent implements OnInit {

  constructor() { }
  
  // Property
  footballplayerList : Array<Player> = [{name:"Ronaldo", Country:"Portugal"},{name:"Neymar",Country: "Brazil"},{name:"Messi",Country:"Argentina"}];
  
  addPlayer(name : string){
    let player = new Player();
    player.name = name
    player.Country = "Portugal"
    this.footballplayerList.push(player);
  }

  ngOnInit(): void {
  }

}
