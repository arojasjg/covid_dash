import { Observable, pipe, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, scan, shareReplay } from 'rxjs/operators';
import omit from 'lodash/omit'
import { get, isEqual } from 'lodash';
import "reflect-metadata";

const win = window as any;
let _state = new Observable<any>();

@Injectable({
  providedIn: 'root'
})
export class StoreService<T> {

  state!: Observable<T>;
  actions: Subject<Action> = new Subject();

  constructor() {
    this.state = this.actions.pipe(
      reducer(),
      shareReplay(1)
    )

    _state = this.state
    win.devTools = win.__REDUX_DEVTOOLS_EXTENSION__.connect()
  }

  dispatch(action: Action) {
    this.actions.next(action);
  }

  select(prop: string) {
    return this.state.pipe(
      select(prop)
    )
  }

}

export const RxSelect = <T>(selectFn: (state: T) => any) =>{
  return (target, key) => {
    target[key] = new Observable(subscriber => {
      _state
        .pipe(map(selectFn))
        .subscribe(res => subscriber.next(res))
    })
  }
}

export const select = (prop: string) => {
  return pipe(
    map(state => get(state, prop, null)),
    distinctUntilChanged(isEqual)
  )
}

export const reducer = () => {
  return scan<any>((accumState: object | null | undefined, action: Action) => {

    let next;
    switch (action.type) {
      case 'SET':
        next = action.payload;
        break;
      case 'UPDATE':
        next = { ...accumState, ...action.payload };
        break;
      case 'DELETE':
        next = omit(accumState, action.payload)
        break;
      default:
        next = accumState;
        break;
    }

    win.devTools.send(action.type, next);

    return next;
  }, {});
}

export class Action {
  constructor(public type: string, public payload?: any) {

  }
}
