import { Component } from '@angular/core';

import { Card } from 'ui-controls';
import { assassins } from './assassins';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-components';
  cards: Card[] = assassins;

  /**
   * Log the new card list
   */
  onCardChange(cards: Card[]) {
    console.log(cards);
  }

  /**
   * Displaying an information message when data is copied to the clipboard
   */
  log() {
    alert(`${this.title} copied to clipboard`);
  }
}
