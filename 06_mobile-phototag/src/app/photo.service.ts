import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() { }

  /**
   * Read the current position from the GPS device.
   * `Geolocation.getCurrentPosition()` contains a `coords` property with various location-based data such as the latitude and the longitude.
   */
  private async getLocation() {
    const location = await Geolocation.getCurrentPosition();
    return location.coords;
  }

  /**
   * Calls the `getLocation` method and opens the camera of the device to take a photo.
   * We use the `Camera.getPhoto()` method and pass a configuration object to define the properties for each photo.
  */
  async takePhoto() {
    await this.getLocation();
    await Camera.getPhoto({
      // The resultType property indicates that the photo will be in a data URL format to save it to Firebase easily.
      resultType: CameraResultType.DataUrl,
      // The source property indicates that we will use the camera device to get the photo.
      source: CameraSource.Camera,
      // The quality property defines the quality of the actual photo.
      quality: 100,
    });
  }
}
