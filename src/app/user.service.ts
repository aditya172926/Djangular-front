import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('access_token') });
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  // generateAuthHeader() {
  //   this.authHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('access_token') });
  // }

  registerNewUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register/', userData, {headers: this.httpHeaders});
  }

  loginUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/', userData);
  }

  logoutUser(userId): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/logout/', userId, {headers:this.authHeaders, responseType: 'text' as 'json'});
  }

  getUsers(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/users/' + id + '/', {headers: this.authHeaders});
  }
  getMovies(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/movies/', {headers: this.authHeaders});
  }
  postMovies(md): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/movies/', md, {headers: this.authHeaders});
  }

}
