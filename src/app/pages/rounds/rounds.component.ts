import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {
  name1 = 'Ajaypal Singh';
  akhara1 = "California Gatka Dal";
  score1 = 0;
  pers1 = 0;
  tech1 = 0; 

  name2 = 'Jobanpreet Singh';
  akhara2 = 'SBAS Carteret NJ';
  score2 = 0;
  pers2 = 0;
  tech2 = 0;

  time = 120;

  constructor() { }

  ngOnInit(): void {
  }

  add(time: number){

  }

  firstScoreOne(){
    this.score1 += 1;
  }
  firstScoreTwo(){
    this.score1 += 2;
  }
  firstScoreThree(){
    this.score1 += 3;
  }

  firstScoreMinusOne(){
    this.score1 -= 1;
  }
  firstScoreMinusTwo(){
    this.score1 -= 2;
  }
  firstScoreMiusThree(){
    this.score1 -= 3;
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
  }
  secScoreTwo(){
    this.score2 += 2;
  }
  secScoreThree(){
    this.score2 += 3;
  }

  secScoreMinusOne(){
    this.score2 -= 1;
  }
  secScoreMinusTwo(){
    this.score2 -= 2;
  }
  secScoreMiusThree(){
    this.score2 -= 3;
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
