import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  minutes: number;
  seconds: number;
  intervalId: any;
  isPaused: boolean = false;
  isRunning: boolean = false;

  currentGame: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.currentGame = items[0];
      this.minutes = this.currentGame.minutes;
      this.seconds = this.currentGame.seconds;
    });
  }

  startOrResumeCountdown(): void {
    if (!this.isRunning) {
      this.intervalId = setInterval(() => {
        if (!this.isPaused) {
          if (this.seconds === 0) {
            if (this.minutes === 0) {
              clearInterval(this.intervalId);
              this.isRunning = false;
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
      this.isRunning = true;
    } else {
      this.isPaused = false; // Resume the countdown by setting isPaused to false
    }
  }

  pauseCountdown(): void {
    this.isPaused = true;
  }

  resetCountdown(): void {
    this.minutes = 2;
    this.seconds = 0;
    clearInterval(this.intervalId);
    this.isPaused = false;
    this.isRunning = false;
    this.itemService.editMins(this.minutes);
    this.itemService.editSeconds(this.seconds);
  }

  setThirtySeconds(): void {
    this.minutes = 0;
    this.seconds = 30;
    this.itemService.editMins(this.minutes);
    this.itemService.editSeconds(this.seconds);
  }

  addFiveSeconds(): void {
    const totalSeconds = this.minutes * 60 + this.seconds; // Convert minutes to seconds and add current seconds
    let newTotalSeconds = totalSeconds + 5; // Add 5 seconds
  
    if (newTotalSeconds < 0) {
      newTotalSeconds = 0; // Ensure the new total seconds is not negative
    }
  
    if (this.isRunning) {
      clearInterval(this.intervalId);
    }
  
    // Calculate new minutes and seconds
    this.minutes = Math.floor(newTotalSeconds / 60);
    this.seconds = newTotalSeconds % 60;
  
    this.itemService.editMins(this.minutes);
    this.itemService.editSeconds(this.seconds);
  
    if (this.isRunning) {
      this.intervalId = setInterval(() => {
        if (!this.isPaused) {
          if (this.seconds === 0) {
            if (this.minutes === 0) {
              clearInterval(this.intervalId);
              this.isRunning = false;
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
  }
  
  subtractFiveSeconds(): void {
    const totalSeconds = this.minutes * 60 + this.seconds; // Convert minutes to seconds and add current seconds
    let newTotalSeconds = totalSeconds - 5; // Subtract 5 seconds
  
    if (newTotalSeconds < 0) {
      newTotalSeconds = 0; // Ensure the new total seconds is not negative
    }
  
    if (this.isRunning) {
      clearInterval(this.intervalId);
    }
  
    // Calculate new minutes and seconds
    this.minutes = Math.floor(newTotalSeconds / 60);
    this.seconds = newTotalSeconds % 60;
  
    this.itemService.editMins(this.minutes);
    this.itemService.editSeconds(this.seconds);
  
    if (this.isRunning) {
      this.intervalId = setInterval(() => {
        if (!this.isPaused) {
          if (this.seconds === 0) {
            if (this.minutes === 0) {
              clearInterval(this.intervalId);
              this.isRunning = false;
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
  }
}