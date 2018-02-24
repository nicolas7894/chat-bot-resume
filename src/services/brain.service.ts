import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
}

@Injectable()
export class BrainService {
  private BrainBackendUrl = environment.api_url; // adresse de l'api 
  constructor(private http: HttpClient) { }

 


PostAnswer (question:String): Observable<any> {
	const body = {user: question};
	const url = `${this.BrainBackendUrl}conversations/`;
  return this.http.post<any>(url,body,httpOptions).pipe(
  	  map(response => response),
      tap(_=> this.log(`Answer send`)),
      catchError(this.handleError<any>('Answer',{robot:"Something went wrong with the chat",classification:""}))
    );
}

PostDataEmail (data:any): Observable<any> {
  const body = {email: data.email,
                message: data.message};
  const url = `${this.BrainBackendUrl}sendMail`;
  return this.http.post<any>(url,body,httpOptions).pipe(
      map(response => response),
      tap(_=> this.log(`Message send`)),
      catchError(this.handleError<any>('Answer',{reponse:"message no send "}))
    );
}

/*  Recupeere toute lhistorique de lq conversation  */
GetConversation (): Observable<any> {

	const url = `${this.BrainBackendUrl}conversations/by_user/`;
  return this.http.get<any>(url,httpOptions).pipe(
  	  map(response => response),
      tap(_=> this.log(`Show Conservation history `)),
      catchError(this.handleError<any>('Conversation',[]))
    );
}





private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    this.log(`${operation} failed: ${error.message}`);
   return of(result as T);
  
  };
}

 private log(message: string) {
    console.log(message);
  }



}


