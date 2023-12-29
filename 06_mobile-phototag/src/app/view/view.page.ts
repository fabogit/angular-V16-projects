import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Viewer } from 'cesium';

import { CesiumService } from '../cesium.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ViewPage implements OnInit, AfterViewInit {
  @ViewChild('mapContainer') content: ElementRef | undefined;

  constructor(private cesiumService: CesiumService) { }

  ngOnInit() {
    console.log(this);
  }

  // We create a new Viewer object inside the ngAfterViewInit method of the component.
  // The ngAfterViewInit method is called when the view of the component has finished loading,
  // and it is defined in the AfterViewInit interface.
  // The constructor of the Viewer class accepts as a parameter the native HTML element on which we want to create the viewer.
  // In our case, we want to attach it to the map container element that we created.
  // Thus, we use the @ViewChild decorator to reference that element by passing the template reference variable name as a parameter.
  ngAfterViewInit() {
    this.cesiumService.register(new Viewer(this.content?.nativeElement));
    this.cesiumService.addPhotos();
  }
}
