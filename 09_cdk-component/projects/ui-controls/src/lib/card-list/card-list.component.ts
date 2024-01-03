import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Card } from '../card';

@Component({
  selector: 'lib-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() cards: Card[] = [];
  @Output() cardChange = new EventEmitter<Card[]>();

  /**
   * Emit the re-ordered list to the consumer of the component.
   * We use `DragDropModule.moveItemInArray()` to change the order of the cards property.
   * We pass the `event` parameter to the `moveItemInArray` method containing the `previous` and `current` index of the moved card.
   * We also use `cardChange.emit()` to propagate the change back to the Angular application.
   */
  sortCards(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    this.cardChange.emit(this.cards);
  }
}
