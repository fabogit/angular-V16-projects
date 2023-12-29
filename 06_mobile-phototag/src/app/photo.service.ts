import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import {
  Storage,
  ref,
  uploadString,
  getDownloadURL,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private firestore: Firestore, private storage: Storage) { }

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
   * Then calls `savePhoto` to save a photo in Firebase.
   */
  async takePhoto() {
    const { latitude, longitude } = await this.getLocation();
    const cameraPhoto = await Camera.getPhoto({
      // The resultType property indicates that the photo will be in a data URL format to save it to Firebase easily.
      resultType: CameraResultType.DataUrl,
      // The source property indicates that we will use the camera device to get the photo.
      source: CameraSource.Camera,
      // The quality property defines the quality of the actual photo.
      quality: 100,
    });
    if (cameraPhoto.dataUrl) {
      await this.savePhoto(cameraPhoto.dataUrl, latitude, longitude);
    }
  }

  /**
   * Save a photo in Firebase.
   * First, we create a random `name` for our photo and use the `uploadString` method to upload it to Firebase storage.
   * As soon as uploading has been completed, we get a downloadable URL using the `getDownloadURL` method, which can be used to access that photo.
   * Finally, we use the `addDoc` method to add a new photo in the `photocollection` property of the Firestore database.
   */
  private async savePhoto(
    dataUrl: string,
    latitude: number,
    longitude: number
  ) {
    const name = new Date().getUTCMilliseconds().toString();
    const storageRef = ref(this.storage, name);
    await uploadString(storageRef, dataUrl, 'data_url');
    const photoUrl = await getDownloadURL(storageRef);
    const photoCollection = collection(this.firestore, 'photos');
    await addDoc(photoCollection, {
      url: photoUrl,
      lat: latitude,
      lng: longitude,
    });
  }
}
