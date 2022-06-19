import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  akhara: string;
  age: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Gurjot Singh', akhara: 'DC Gatka Dal', age: 24},
  {name: 'Jobanpreet Singh', akhara: 'SBASJ Carteret', age: 24},
  {name: 'Ajaypal Singh', akhara: 'California Gatka Dal', age: 26},
  {name: 'Hardit Singh', akhara: 'DC Gatka Dal/Indiana', age: 13},
  {name: 'Hari Singh', akhara: 'Buffalo Gatka Dal', age: 7},
]; 

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'akhara', 'age'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
