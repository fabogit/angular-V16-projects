import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

interface IssueForm {
  title: FormControl<string>;
  description: FormControl<string>;
  priority: FormControl<string>;
  type: FormControl<string>;
}

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css'],
})
export class IssueReportComponent implements OnInit {
  constructor(private issueService: IssuesService) { }

  issueForm = new FormGroup<IssueForm>({
    title: new FormControl('', { nonNullable: true, validators: Validators.required }),
    description: new FormControl('', { nonNullable: true }),
    priority: new FormControl('', { nonNullable: true, validators: Validators.required }),
    type: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });
  suggestions: Issue[] = [];
  @Output() formClose = new EventEmitter();

  ngOnInit(): void {
    // The controls property of a FormGroup object contains all form controls as a key-value pair.
    // The key is the name of the control, and the value is the actual form control object.
    // We can get notified about changes in the value of a form control by accessing its name, in this case, title
    // Each control exposes a valueChanges observable that we can subscribe to and get a continuous stream of values.
    //  The valueChanges observable emits new values as soon as the user starts typing in the title control of the form.
    //  When that happens, we set the result of the getSuggestions method in the suggestions component property
    this.issueForm.controls.title.valueChanges
      .subscribe(title => {
        this.suggestions = this.issueService.getSuggestions(title);
      });
  }

  addIssue() {
    // The user may only sometimes touch form controls to see the validation message.
    // So, we need to consider that upon form submission and act accordingly.
    // To overcome this case, we will mark all form controls as touched when the form is submitted
    // Marking controls as touched makes validation messages appear automatically
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }
    this.issueService.createIssue(this.issueForm.getRawValue() as Issue);
    this.formClose.emit();
  }
}
