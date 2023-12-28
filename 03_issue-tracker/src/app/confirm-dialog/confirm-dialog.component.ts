import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent {
  @Input() issueNo: number | null = null;
  @Output() confirm = new EventEmitter<boolean>();

  agree() {
    this.confirm.emit(true);
    // issueNo controls whether the dialog modal is open, set to null to close
    this.issueNo = null;
  }

  disagree() {
    this.confirm.emit(false);
    // issueNo controls whether the dialog modal is open, set to null to close
    this.issueNo = null;
  }
}
