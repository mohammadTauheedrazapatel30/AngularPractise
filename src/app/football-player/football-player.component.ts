import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../dto/player';


@Component({
  selector: 'app-football-player',
  templateUrl: './football-player.component.html',
  styleUrls: ['./football-player.component.css']
})
export class FootballPlayerComponent implements OnInit {

  constructor() { }

  @Input() playerList : Array<Player> = [{name:"Ronaldo", Country:"Portugal"},{name:"Neymar",Country: "Brazil"},{name:"Messi",Country:"Argentina"}];

  @Output() dataofplayers = new EventEmitter<string>()

  ngOnInit(): void {
  }

}
