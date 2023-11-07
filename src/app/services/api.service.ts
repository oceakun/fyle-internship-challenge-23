import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string): Observable<any> {
    return this.httpClient.get(
      `https://api.github.com/users/${githubUsername}`
    );
  }

  getRepos(githubUsername: string, page: number): Observable<any[]> {
    console.log('page', page);
    return this.httpClient
      .get<any[]>(`https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=10`)
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching repositories:', error);
          return throwError(()=> new Error(
            'Something went wrong while fetching repositories. Please try again later.')
          );
        })
      );
  }
}