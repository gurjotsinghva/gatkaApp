import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {
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

  bracket = '';

  currentGame: Item;

  constructor(private itemService: ItemService) {
  }

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
    })
  }

  bracketSubmit(form: NgForm){
    this.bracket = form.value.bracketUpd;
    this.itemService.editBracket(this.bracket);
  }

  p1Update(form: NgForm){
    this.name1 = form.value.name1Upd;
    this.akhara1 = form.value.akhara1Upd;
    this.itemService.editp1(this.name1, this.akhara1);
  }

  p2Update(form: NgForm){
    this.name2 = form.value.name2Upd;
    this.akhara2 = form.value.akhara2Upd;
    this.itemService.editp2(this.name2, this.akhara2);
  }

  firstScoreOne(){
    this.score1 += 1;
    this.itemService.edits1(this.score1);
  }
  firstScoreTwo(){
    this.score1 += 2;
    this.itemService.edits1(this.score1);
  }
  firstScoreThree(){
    this.score1 += 3;
    this.itemService.edits1(this.score1);
  }

  firstScoreMinusOne(){
    this.score1 -= 1;
    this.itemService.edits1(this.score1);
  }
  firstScoreMinusTwo(){
    this.score1 -= 2;
    this.itemService.edits1(this.score1);
  }
  firstScoreMiusThree(){
    this.score1 -= 3;
    this.itemService.edits1(this.score1);
  }

  personalOneUp(){
    this.pers1 += 1;
  }
  personalOneDown(){
    this.pers1 -= 1;
  }

  techOneUp(){
    this.tech1 += 1;
  }
  techOneDown(){
    this.tech1 -= 1;
  }


  secScoreOne(){
    this.score2 += 1;
    this.itemService.edits2(this.score2);
  }
  secScoreTwo(){
    this.score2 += 2;
    this.itemService.edits2(this.score2);
  }
  secScoreThree(){
    this.score2 += 3;
    this.itemService.edits2(this.score2);
  }

  secScoreMinusOne(){
    this.score2 -= 1;
    this.itemService.edits2(this.score2);
  }
  secScoreMinusTwo(){
    this.score2 -= 2;
    this.itemService.edits2(this.score2);
  }
  secScoreMiusThree(){
    this.score2 -= 3;
    this.itemService.edits2(this.score2);
  }

  personalTwoUp(){
    this.pers2 += 1;
  }
  personalTwoDown(){
    this.pers2 -= 1;
  }

  techTwoUp(){
    this.tech2 += 1;
  }
  techTwoDown(){
    this.tech2 -= 1;
  }
}
