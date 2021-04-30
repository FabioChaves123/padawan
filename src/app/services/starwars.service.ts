import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  private urlApi = 'https://swapi.dev/api/';


  constructor(private http: HttpClient) { 
    this.getPlanets();

  }

  private async getPlanets(){
    this.http.get(this.urlApi + 'planets').pipe(retry(2)).subscribe((resposta) => {
      console.log(resposta);
    })

  }

}
