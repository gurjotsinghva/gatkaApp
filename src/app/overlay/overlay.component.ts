import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  currentGame: Item;
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.currentGame= items[0];
      console.log(items);
    })
  }

}
