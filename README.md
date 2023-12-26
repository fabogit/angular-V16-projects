# angular-V16-projects

10 Angular Projects,

- 1, Creating Your First Web Application in Angular, explores the main features of the Angular framework and teaches you about the basic building blocks that comprise a typical Angular application. You will investigate the different tools and IDE extensions that are available in the Angular ecosystem to enhance the developer’s workflow and experience.

- 2, Building an SPA Application with Scully and Angular Router, looks at how an Angular application is based on the Single-Page Application (SPA) architecture, where typically we have multiple pages that are served by different URLs or routes. On the other hand, Jamstack is a hot technology that is emerging and allows you to build fast, static websites and serve them directly from a CDN. In this chapter, we will use the Angular Router to implement routing functionality in an Angular application. We will also use Scully, the best static site generator for Angular, to create a personal blog that embraces the Jamstack architecture.

- 3, Building an Issue Tracking System Using Reactive Forms, is where we build an issue tracking management system and use Angular reactive forms to add new issues to the system. We will design our forms using Clarity Components from VMware, and we will incorporate built-in and custom validations. We will also react to value changes in the forms and take actions accordingly.

- 4, Building a PWA Weather Application Using Angular Service Worker, covers how the user experience of a web application is not the same for all users, especially in places with poor network coverage and connectivity. When we build a web application, we should take into account all sorts of network types. In this chapter, we will create an application that uses the OpenWeather API to display the weather of a specified region. We will learn how to deploy the application to Firebase Hosting. We will also explore PWA techniques using the Angular service worker to provide a seamless user experience when offline.

- 5, Building a WYSIWYG Editor for the Desktop Using Electron, a cross-platform JavaScript framework for building desktop applications using web technologies. When combined with Angular, it can yield really performant apps. In this chapter, we will create a WYSIWYG editor that can run on the desktop. We will build an Angular application and integrate it with ngx-wig, a popular WYSIWYG Angular library, and we will use Electron to package it as a desktop application. Data is persisted locally in the filesystem using a Node.js API.

- 6, Building a Mobile Photo Geotagging Application Using Capacitor and 3D Maps, covers Capacitor, a service provided by the Ionic framework that turns any web application, such as one created with Angular, into a native one. Its main advantage is that we can build a native mobile application and a web app using the same code base. Cesium is a popular JavaScript framework for building 3D maps. In this chapter, we will use Capacitor to build a geotagging mobile application for our photos. We will use various Ionic plugins to take a photo in a specified location and persist it to Cloud Firestore. We will then display a list of all photos taken inside the Cesium 3D viewer.

- 7, Building an SSR Application for a GitHub Portfolio Using Angular, dives into Search Engine Optimization (SEO), a critical aspect for any website nowadays. Who doesn’t want their website to look good when sharing it via social media? The real challenge for client web applications is to optimize it, which can be accomplished by rendering content on the server. In this chapter, we will learn how to create a GitHub portfolio application using the GitHub API. We will then render it on the server and learn how to transfer the state to the browser. We will also see how to set the page title and additional metadata dynamically.

- 8, Building an Enterprise Portal Using Nx Monorepo Tools and NgRx, covers monorepo architecture, which is a popular technique for when working with multiple applications under a single repository, giving speed and flexibility to the development process. In this chapter, we will use Nx monorepo development tools to create two portals: one for the end user, in which they will be able to select a Point of Interest (POI) and visit it on a map, and another for admins to check on visit statistics for a given POI. Application state is managed using NgRx.

- 9, Building a Component UI Library Using Angular CLI and Angular CDK, addresses how enterprise organizations usually need custom UI libraries that can be used across different web applications. The Angular CDK provides a broad range of functionalities for creating accessible and high-performing UI components. In this chapter, we will create two different components using the Angular CDK and the Bulma CSS framework. We will also package them as a single Angular library and learn how to publish them on npm, so that they can be re-used in different apps. We will also investigate how we can use each component as an Angular element.

- 10, Customizing Angular CLI Commands Using Schematics, covers how organizations usually follow different guidelines when it comes to creating Angular entities such as components or services. Angular schematics can assist them by extending Angular CLI commands and providing custom automation. In this chapter, we will learn how to use the Angular schematics API to build our own set of commands for generating components and services. We will build a schematic for creating an Angular component that contains the Tailwind CSS framework. We will also build an Angular service that uses the built-in HTTP client by default.


### To generate ng v16 using angular-cli:

remove any ver cli

`npm uninstall -g @angular/cli`

clear chace

`npm cache clean --force`

install angular-cli v16

`npm i -g @angular/cli@16`

verify

`ng v`

```
Angular CLI: 16.2.11

Node: 18.18.0

Package Manager: npm 9.8.1
```