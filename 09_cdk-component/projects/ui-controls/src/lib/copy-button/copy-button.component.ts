import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-copy-button',
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.css']
})
export class CopyButtonComponent {
  @Input() data = '';
  @Output() copied = new EventEmitter<void>();

  /**
   * Trigger a `copied` output event
   */
  onCopy() {
    this.copied.next();
  }
}
