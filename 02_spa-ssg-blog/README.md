# MyBlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

## Generate scully routes

Run `ng build` and `npx scully --project my-blog`, then `npx scully serve --project my-blog` to start two web servers: one that contains the static prerendered version of our website built using Scully and another that is the Angular live version of our application:
```
  ✔ Starting servers for project "my-blog"
  ✔ Started Scully static server on "http://localhost:1668/"
  ✔ Started Angular distribution server on "http://localhost:1864/"
```

## To show articles

Publish the desired `.md` file in `/mdfiles` setting `published: true` and removing `slugs`.

Then regenerate routes `npx scully --project my-blog` and serve `npx scully serve --project my-blog`

...or generate a new post `ng generate @scullyio/init:post --name="Angular and Scully"` (target folder: `mdfiles`) then set `published: true` and regenerate routes
