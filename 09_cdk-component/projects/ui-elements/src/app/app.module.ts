import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { UiControlsModule, CopyButtonComponent } from 'ui-controls';

@NgModule({
  imports: [
    BrowserModule,
    UiControlsModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  /**
   * Create the custom element for the CopyButtonComponent class.
   * The `ngDoBootstrap` method is used to hook in the manual bootstrap process of the Angular application.
   * We use the `createCustomElement` method from the `@angular/elements` npm package to create a custom element, passing the class of the component and the injector.
   * Finally, we use the `define` method of the customElements object to declare the custom element, passing the HTML selector that we want to use and the custom element as parameters.
   */
  ngDoBootstrap() {
    const el = createCustomElement(CopyButtonComponent, { injector: this.injector });
    customElements.define('copy-button', el);
  }
}