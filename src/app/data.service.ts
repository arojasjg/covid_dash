import { AppState, DEFAULT_APP_STATE } from './../types';
import { Injectable } from '@angular/core';

const objectAssignDeep = require(`object-assign-deep`);

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private appState: AppState = DEFAULT_APP_STATE;

  constructor() { }

  getAppState(): AppState {
    return Object.assign({}, this.appState);
  }

  setAppState(args: AppState): void {

    const setState = ({ ...args }) => {
      const state = objectAssignDeep({}, this.appState, args);
      console.log('APP STATE -> ', state)
      return state;
    }

    this.appState = setState(args);
  }
}
