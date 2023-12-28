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

  /**
   * Method that will return all issues having `completed=false`
   */
  getPendingIssues(): Issue[] {
    return this.issues.filter((issue) => !issue.completed);
  }

  createIssue(issue: Issue) {
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  /**
   * Creates a clone of the issue we want to resolve and sets its completed property to the current date.
   * It then finds the initial issue in the issues array and replaces it with the cloned instance
   */
  completeIssue(issue: Issue) {
    const selectedIssue: Issue = {
      ...issue,
      completed: new Date(),
    };
    const index = this.issues.findIndex((i) => i === issue);
    this.issues[index] = selectedIssue;
  }
}
