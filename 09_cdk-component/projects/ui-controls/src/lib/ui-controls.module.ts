import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiControlsComponent } from './ui-controls.component';
import { CardListComponent } from './card-list/card-list.component';



@NgModule({
  declarations: [
    UiControlsComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiControlsComponent,
    CardListComponent
  ]
})
export class UiControlsModule { }
