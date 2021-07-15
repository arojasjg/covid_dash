import { Observable, of, Subject } from 'rxjs';
import { Action, RxSelect, StoreService } from './../services/store.service';
import { AppState } from './../../types';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { formatDateAsString } from 'src/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  constructor(
    public store: StoreService<AppState>,
    private cd: ChangeDetectorRef
  ) {

  }

  @RxSelect<AppState>(state => state.selectedDate) public selectedDate$!: Observable<AppState>;

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: `Four`, cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  ngOnInit(): void {

  }

  onDateChange(date: Date) {
    this.store.dispatch(new Action('SET', { selectedDate: formatDateAsString(date) }))
  }

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
