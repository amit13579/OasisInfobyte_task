import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private baseurl:string=`http://localhost:2411`;
  

  constructor(private http:HttpClient) { }

  createAccount(data: any) : Observable<any> 
  {
    // debugger
    return this.http.post(`${this.baseurl}/newuser`,data);
  }

  getCardDetails(cardNumber : string, pin : string) :  Observable<any>  {

    const url =`${this.baseurl}/user/${cardNumber}/${pin}`;  
    return this.http.get<any>(url,this.httpOptions).pipe(
      retry(1),catchError(this.handleError)
    );

  }
  changePin(cardNumber : string, pin : string, newPin : string) : Observable<any> {
    const url = `${this.baseurl}/changepin/${cardNumber}/${pin}/${newPin}`;
    return this.http.put<any>(url,this.httpOptions).pipe(
      retry(1),catchError(this.handleError)
    );
  }

  withdraw(cardNumber : number, pin : number, amount : number) : Observable<any>{
    debugger
    const url = `${this.baseurl}/withdraw`;
    let params = new HttpParams()
    .set('cardNumber', cardNumber)
    .set('pin', pin)
    .set('amount', amount);
    // http://localhost:2411/withdraw?cardNumber=28153&pin=1234&amount=1000.00
    // http://localhost:2411/withdraw?cardNumber=10358&pin=4321&amount=100
    // alert(url,{params:params})
    const fullUrl = `${url}?${params.toString()}`;
    console.log('Full URL with parameters:', fullUrl);
    return this.http.post<any>(fullUrl,null);
    
  }

  deposite(cardNumber : string, pin : string, amount : string) : Observable<any>{
    const url = `${this.baseurl}/deposite`;
    let params = new HttpParams()
    .set('cardNumber', cardNumber)
    .set('pin', pin)
    .set('amount', amount);
debugger
    const fullUrl = `${url}?${params.toString()}`;
console.log(fullUrl)
    return this.http.post<any>(fullUrl,null);
    
  }
  checkBalance(cardNumber: string, pin: string): Observable<number> {
    const url = `${this.baseurl}/checkbalance?cardNumber=${cardNumber}&Pin=${pin}`;
    return this.http.get<number>(url);
  }


  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
   

}
