import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

import { GithubService } from '../github.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  repos$: Observable<Repository[]> | undefined;
  constructor(private githubService: GithubService) { }
  ngOnInit(): void {
    // We use the pipe RxJS operator to combine the observable returned from the getRepos method with the map operator to filter out fork repositories and get only sources.
    // Filtering is accomplished using the standard filter method for arrays.
    this.repos$ = this.githubService.getRepos().pipe(
      map(repos => repos.filter(repo => !repo.fork))
    );
  }
}