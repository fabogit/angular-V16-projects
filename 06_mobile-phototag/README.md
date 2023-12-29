# MOBILE PHOTOTAG

### ANGULAR v17

### IONIC v7

### CAPACITOR v5

## Run local dev

`ionic serve`

## Build application

`ionic build`

## Open the application in the development environment of your chosen platform

`ionic cap open <os>` where `<os> == android | ios`

#### If error config android studio path adding `export CAPACITOR_ANDROID_STUDIO_PATH="/opt/android-studio/bin/studio.sh"` in `.zshrc`

Whenever you want to rebuild the application, you must run the `ionic cap copy` command to copy the application bundle from the `www` folder into the native mobile project.

To allow store on firebase:

- Create a new firebase project (disable Google Analytics) called `phototagh` at https://console.firebase.google.com .

- Click the third option with the code icon to add Firebase to a web application. Enter `phototag` as name for your application in the App nickname field and click on the Register app button

- Copy the `firebaseConfig` object and click the Continue to console button.

```
const firebaseConfig = {
  apiKey: "<Your API key>",
  authDomain: "<Your project auth domain>",
  projectId: "<Your project ID>",
  storageBucket: "<Your storage bucket>",
  messagingSenderId: "<Your messaging sender ID>",
  appId: "<Your application ID>"
};
```

- Back in the dashboard console, select the `Cloud Firestore` option to enable Cloud Firestore in your application.

- Click on the `Create database` button to create a new Cloud Firestore database.

- Choose a location for your database according to your regional settings.

- Select the operation mode of your database. Choose `Start in Test mode` for development purposes and click the Next button.

## Integrating the AngularFire library

`npm install -g firebase-tools`

`firebase login`

`ng add @angular/fire` and enable only the `Firestore` option and press Enter, when asked select the `phototag` project and app that we created earlier and press Enter

```
ng add @angular/fire

ℹ Using package manager: npm
✔ Found compatible package version: @angular/fire@17.0.0.
✔ Package information loaded.

The package @angular/fire@17.0.0 will be installed and executed.
Would you like to proceed? Yes
✔ Packages successfully installed.
UPDATE package.json (2203 bytes)
✔ Packages installed successfully.
? What features would you like to setup? Firestore
Using firebase-tools version 13.0.2
? Which Firebase account would you like to use? your.firebase.account@gmail.com
✔ Preparing the list of your Firebase projects
? Please select a project: phototag
✔ Preparing the list of your Firebase WEB apps
? Please select an app: phototag
✔ Downloading configuration data of your Firebase WEB app
UPDATE .gitignore (834 bytes)
UPDATE src/main.ts (1204 bytes)
```

- in `main.ts` replace <firebaseConfig> `importProvidersFrom(provideFirebaseApp(() => initializeApp(<firebaseConfig>)))` with the Firebase configuration object that you copied in the previously
