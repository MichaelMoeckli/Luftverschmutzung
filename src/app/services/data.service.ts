import { Injectable } from '@angular/core';
import { timer, pipe, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public status: Observable<any>

  constructor(private http: HttpClient) { 
    this.status = timer(0, 1000)
    .pipe(
      switchMap(_ => {
        return this.http.get('http://localhost:3000/api/airquality')
      })
    );
  }
}
