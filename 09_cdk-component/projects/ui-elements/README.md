Building an Angular element differs from a standard build of an Angular application. When we build an Angular application, the Angular CLI generates different JavaScript bundles that contain the application source code, the Angular framework, and any third-party libraries. In an Angular element scenario, we only want to generate one bundle file containing our component. For this purpose, we will use the ngx-build-plus library, which can generate a single bundle, among other things. Let’s see how to install it and use it in our application, as follows:

- Install the ngx-build-plus package `ng add ngx-build-plus --project=ui-elements`

- Build the application `ng build ui-elements --single-bundle` the command will build the ui-elements application and produce a single bundle for all application code.


- Copy the `dist\ui-elements` folder to another location of your choice on your hard disk and open the `index.html` file, using your editor.

- Remove the `<base>` tag from the `<head>` element and add the Bulma CSS minified file using a content delivery network (CDN), as follows:

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">`

- Replace the `<app-root>` selector with the following HTML snippet in the `<body>` element:

```
<div class="container is-fluid">
  <h1 class="title">My Angular Element</h1>
  <copy-button></copy-button>
</div>
```

In the preceding snippet, we added a `<div>` element styled with Bulma CSS classes and the selector of the Angular element that we defined in AppModule.

- Insert the following JavaScript code after the `<div>` element:

```
<script>
  const el = document.getElementsByTagName('copy-button')[0];
  el.setAttribute('data', 'Some data');
  el.addEventListener('copied', () => alert('Copied to clipboard'));
</script>
```

In the preceding script, we communicate with the component that is hidden behind the Angular element using vanilla JavaScript. First, we query the global document object to get a reference to the Angular element. Then, we set the data input property using the setAttribute method of the element. Finally, we listen for the copied output event by attaching an event listener using the addEventListener method.

- Use a web server to serve the ui-elements folder and open the `index.html` file using your browser.

We have managed to use an Angular component from our UI component library as a native HTML element in a web application that has nothing to do with Angular! The custom element looks and behaves the same as its Angular counterpart. The only difference is how we set up and configure the custom element in our web application using plain JavaScript.