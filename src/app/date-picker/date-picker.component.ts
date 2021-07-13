import { FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Output() notifyOnDateChange: EventEmitter<Date> = new EventEmitter<Date>();

  date: FormControl = new FormControl(new Date());

  constructor() { }

  ngOnInit(): void {

  }

  onDateInput(action: string, event: any) {
    const { value } = event.target
  }

  onDateChange(action: string, event: any) {
    const { value } = event.target
    this.notifyOnDateChange.emit(value);
  }

}
