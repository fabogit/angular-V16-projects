import { Component, OnInit } from '@angular/core';

import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  constructor(private issueService: IssuesService) { }

  issues: Issue[] = [];
  showReportIssue = false;
  selectedIssue: Issue | null = null;
  editIssue: Issue | null = null;

  ngOnInit(): void {
    this.getIssues();
  }

  /**
   * Call `issueService.getPendingIssues()` to return all issues that
   * have not been completed and update the `issues` list
   */
  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  /**
   * Set the `showReportIssue` to `false` so that the report issue
   * form is no longer visible and the table of pending `issues` is displayed instead.
   * It will also fetch `issues` again to refresh the data in the table
   */
  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }

  /**
   * Calls the `completeIssue` method of the `issueService` property only when the
   * `confirmed` parameter is `true`. In this case, it also calls the `getIssues` method
   * to refresh the table data. The `selectedIssue` property holds the `Issue` object
   * that we want to resolve, and it is reset whenever the `onConfirm` method is called
   */
  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issueService.completeIssue(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }

  onCloseEdit() {
    this.editIssue = null;
    this.getIssues();
  }
}
