import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable,throwError} from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { AllModel,CountryStat,GlobalStats } from '../models/all.model';


const httpOptions = {
  headers : new HttpHeaders({
    'content-type': 'application/json',
    'x-rapidapi-host':'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key':'233f7047a8mshc37b053fffe4efep146313jsn3e9c7020c9c6'
  })
}

@Injectable({
  providedIn: 'root'
})

export class AllService {

  private apiURL = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php?date=11072021';

  constructor(private http: HttpClient) {  
  }

  getAll() : Observable<CountryStat[]>{
    return this.http.get<AllModel>(this.apiURL,httpOptions).pipe(
      map((response : AllModel) => response.countries_stat),
      catchError(this.handleError)
    );
  }

  sumStats(stats: CountryStat[]): GlobalStats {

    // arr.reduce((a, b) => ({x: a.x + b.x}));

    let gStats= stats.reduce((prev: CountryStat, current: CountryStat) => {
      return {
        totalCases: prev.cases || 0  + parseFloat(current.cases.replace(/,/g, '')),
        deathCases: prev.deaths || 0 + parseFloat(current.deaths.replace(/,/g, ''))
      } as any;
    },{cases:0,deaths:0} as any) as any; 
        
    return gStats;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error.error.message)

    } else {
      console.log(error.status)
    }
    return throwError(
      console.log('Something is wrong!'));
  };

}
