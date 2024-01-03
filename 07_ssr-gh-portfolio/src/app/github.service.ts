import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  readonly username = 't3dotgg';
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  /**
   * Get the details of our profile from the GitHub API
   */
  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${this.username}`);
  }
}
