import { FormControl } from '@angular/forms';
import { ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Action, StoreService } from '../services/store.service';
import { AppState } from 'src/types';
import { formatDateAsString } from 'src/utils';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Output() notifyOnDateChange: EventEmitter<Date> = new EventEmitter<Date>();

  date: FormControl = new FormControl(new Date());

  constructor(public store: StoreService<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new Action('SET',
      {
        selectedDate: formatDateAsString(new Date())
      }
    ))
  }

  onDateInput(action: string, event: any) {
    const { value } = event.target
  }

  onDateChange(action: string, event: any) {
    const { value } = event.target
    this.notifyOnDateChange.emit(value);
  }

}
