import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Output() notifyOnDateChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  onDateInput(action: string, event: any) {
    //console.log('on date input ', event.target.value)
    const { value } = event.target
  }

  onDateChange(action: string, event: any) {
    //console.log('on date change ',  event.target.value)
    const { value } = event.target
    this.notifyOnDateChange.emit(value);
  }

}
