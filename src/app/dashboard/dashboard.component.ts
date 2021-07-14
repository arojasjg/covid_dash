import { AppState, DEFAULT_APP_STATE } from './../../types';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SimpleChanges } from '@angular/core';
import { formatDateAsString } from 'src/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dataService: DataService) { }

  appState!: AppState;

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: `<p>asdasd</p>`, cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  ngOnInit(): void {

  }

  getAppState(): AppState {
    return this.dataService.getAppState();
  }

  onDateChange(date: Date) {
    this.dataService.setAppState({
      selectedDate: formatDateAsString(date)
    })
  }

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
