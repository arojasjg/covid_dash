import { formatDateAsString } from './../utils';
import { DataService } from './data.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid-dash';

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {

  }
}
