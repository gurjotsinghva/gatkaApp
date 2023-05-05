import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  minutes: number = 2;
  seconds: number = 0;
  intervalId: any;
  isPaused: boolean = false;

  currentGame: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.currentGame= items[0];
      console.log(items);
    })
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
            clearInterval(this.intervalId);
            return;
          } else {
            this.minutes--;
            this.seconds = 59;
          }
        } else {
          this.seconds--;
        }
      }
      this.itemService.editMins(this.minutes);
      this.itemService.editSeconds(this.seconds);
    }, 1000);
  }

  pauseCountdown(): void {
    this.isPaused = true;
  }

  resumeCountdown(): void {
    this.isPaused = false;
  }

  resetCountdown(): void {
    this.minutes = 2;
    this.seconds = 0;
    clearInterval(this.intervalId);
    this.isPaused = false;
    this.itemService.editMins(this.minutes);
    this.itemService.editSeconds(this.seconds);
  }

  setThirtySeconds(): void {
    this.minutes = 0;
    this.seconds = 30;
    this.itemService.editMins(this.minutes);
      this.itemService.editSeconds(this.seconds);
  }
}
