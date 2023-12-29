import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

(window as Record<string, any>)['CESIUM_BASE_URL'] = '/assets/cesium/';

const firebaseConfig = {
  apiKey: 'AIzaSyBIJe-YfnvUTexNQwjbLhsfHkaS239TeSs',
  authDomain: 'phototag-8f01d.firebaseapp.com',
  projectId: 'phototag-8f01d',
  storageBucket: 'phototag-8f01d.appspot.com',
  messagingSenderId: '961601248064',
  appId: '1:961601248064:web:67d41deea0a2916ebc78a5',
};

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig))
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage())),
  ],
});
