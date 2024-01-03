# GhPortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## SSR using Angular Universal

Run `npm run dev:ssr` for a SSR dev server. Navigate to `http://localhost:4200/`.

To generate a prerendered version of the application run `npm run prerender`

This will generate inside `dist/gh-portfolio/browser/` `index.html` and `index.original.html`.

Open the `index.original.html` file and locate the <app-root> HTML element.

This is the main component of our Angular application, where Angular will render the content of our application in the browser.

Open the `index.html` file now and look again at the <app-root> element.

The main component is not empty this time.

Angular Universal has made all HTTP requests to the GitHub API and prefetched the content of our application during runtime.

All component templates and styles have been prerendered in the main HTML file, meaning we can view our application on a browser even without JavaScript enabled!

Execute the following command to start the prerendered version of our GitHub portfolio application:

`npm run serve:ssr`

To test disable JavaScript from the settings of your browser and navigate to http://localhost:4000.

Our GitHub portfolio application remains fully operational without having JavaScript enabled.

The main page of the application is also rendered instantly without having the user wait for the application to load.

We use `TransferHttpCacheModule`, to cache server responses from the GitHub API, so the browser will use the cache instead of initiating a new request.

`TransferHttpCacheModule` solves the problem by installing an HTTP interceptor in the Angular application that ignores HTTP requests that have been handled by the server initially.

`TransferHttpCacheModule` intercept all HTTP requests and store them in the TransferState store of our application.

`TransferState` is a key-value store that can be transferred from the server to the browser.

The browser version of the application can later read the HTTP responses directly from the store without making an extra call.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
