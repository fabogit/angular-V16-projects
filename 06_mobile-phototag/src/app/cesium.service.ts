import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Cartesian3, Color, PinBuilder, Viewer } from 'cesium';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CesiumService {
  private viewer: Viewer | undefined;

  constructor(private firestore: Firestore) { }

  /**
   * Method usded to set the `viewer` property
   */
  register(viewer: Viewer) {
    this.viewer = viewer;
  }

  /**
   * We call the `getDocs` method to get the data of the `photos` collection from Cloud Firestore
   */
  private async getPhotos() {
    const photoCollection = collection(this.firestore, 'photos');
    return await getDocs(photoCollection);
  }

  /**
   * Add all the photos to the `viewer`.
   * The location of each photo on the viewer will be displayed as a pin.
   * Thus, we need to initialize a `PinBuilder` object first.
   * The preceding method calls the `getPhotos` method to get all photos from Cloud Firestore.
   * For each `photo`, it creates an `entity` object that contains the position, which is the location of the photo in degrees, and a `billboard` property that displays a pin of 48 pixels in size.
   * It also defines a `description` property that will show the actual image of the photo when we click on the pin.
   * Each `entity` object is added to the `entities` collection of the `viewer` using its `add` method.
   */
  async addPhotos() {
    const pinBuilder = new PinBuilder();
    const photos = await this.getPhotos();
    photos.forEach(photo => {
      const entity = {
        position: Cartesian3.fromDegrees(photo.get('lng'), photo.get('lat')),
        billboard: {
          image: pinBuilder.fromColor(Color.fromCssColorString('#de6b45'), 48).toDataURL()
        },
        description: `<img width="100%" style="margin:auto; display: block;" src="${photo.get('url')}" />`
      };
      this.viewer?.entities.add(entity);
    });
  }

}
