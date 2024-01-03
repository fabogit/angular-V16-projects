import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './user';
import { Repository } from './repository';
import { Organization } from './organization';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  // any github profile, in this case its Theo :D
  readonly username = 't3dotgg';
  private apiUrl = 'https://api.github.com';
  private userUrl = `https://api.github.com/users/${this.username}`;

  constructor(private http: HttpClient) { }

  /**
   * Get the details of `username` profile from the GitHub API
   */
  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  /**
   * Fetch repositories of the current GitHub user `username`
   */
  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.userUrl}/repos`);
  }

  /**
   * Get organizations of the current GitHub user `username`
   */
  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(`${this.userUrl}/orgs`);
  }
}
