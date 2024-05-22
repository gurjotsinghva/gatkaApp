import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  name1 = '';
  akhara1 = '';
  score1 = 0;
  pers1 = 0;
  tech1 = 0; 

  name2 = '';
  akhara2 = '';
  score2 = 0;
  pers2 = 0;
  tech2 = 0;

  block1 = 0;
  block2 = 0;

  bracket = '';

  minutes = 0;
  seconds = 0;
  
  currentGame: Item;
  
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.currentGame= items[0];
      this.bracket = this.currentGame.bracket;
      this.name1 = this.currentGame.name1;
      this.akhara1 = this.currentGame.akhara1;
      this.score1 = this.currentGame.score1;
      this.name2 = this.currentGame.name2;
      this.akhara2 = this.currentGame.akhara2;
      this.score2 = this.currentGame.score2;
      this.minutes = this.currentGame.minutes;
      this.seconds = this.currentGame.seconds;
      this.block1 = this.currentGame.blocks1;
      this.block2 = this.currentGame.blocks2;
    })
  }
}
