import { Injectable } from '@angular/core';

import { issues } from '../assets/mock-issues';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  constructor() { }

  // Empty or use mock data
  // private issues: Issue[] = [];
  private issues = issues;

  getPendingIssues(): Issue[] {
    return this.issues.filter((issue) => !issue.completed);
  }
}
