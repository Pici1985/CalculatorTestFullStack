import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  headers : any = new HttpHeaders().set( 'Content-Type','application/json')
                             .set('Accept','application/json')
                             .set('Access-Control-Allow-Origin','*')
                             .set('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');   

  urlAdd = 'https://localhost:7035/add';
  urlSubtract = 'https://localhost:7035/subtract';

  data : any;
 
  addAmounts(start: any, amount: any): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.data = {
        start: start,
        amount: amount
      };
  
      this.http.post<any>(this.urlAdd, this.data, this.headers).subscribe({
        next: score => {
          const numberScore = Number(score);
          resolve(numberScore);
        },
        error: err => {
          reject(err);
        }
      });
    });
  }
  
  subtractAmounts(start: any, amount: any): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.data = {
        start: start,
        amount: amount
      };
  
      this.http.post<any>(this.urlSubtract, this.data, this.headers).subscribe({
        next: score => {
          const numberScore = Number(score);
          resolve(numberScore);
        },
        error: err => {
          reject(err);
        }
      });
    });
  }
}
  
