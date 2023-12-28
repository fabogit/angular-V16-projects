import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Issue } from '../issue';
import { IssuesService } from '../issues.service';
import { IssueForm } from '../issue-form';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css'],
})
export class IssueDetailComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private issueService: IssuesService
  ) { }

  @Input() issue: Issue | undefined;
  @Output() formClose = new EventEmitter();
  issueForm: FormGroup<IssueForm> | undefined;

  ngOnInit(): void {
    if (this.issue) {
      this.issueForm = this.builder.group<IssueForm>({
        title: new FormControl(this.issue.title, { nonNullable: true, validators: Validators.required, }),
        description: new FormControl(this.issue.description, { nonNullable: true, }),
        priority: new FormControl(this.issue.priority, { nonNullable: true, validators: Validators.required, }),
      });
    }
  }

  save() {
    if (this.issue) {
      this.issueService.updateIssue(
        this.issue.issueNo,
        this.issueForm?.getRawValue() as Issue
      );
      this.formClose.emit();
    }
  }
}
