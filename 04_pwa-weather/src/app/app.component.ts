import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  constructor(private updates: SwUpdate, private snackbar: MatSnackBar) { }

  ngOnInit() {
    // The SwUpdate service contains a versionUpdates observable property that we use to get notified when a new version is available.
    // Typically, we tend to subscribe to observables, but in this case, we don’t.
    // Instead, we subscribe to the pipe method, an RxJS operator for composing multiple operators
    this.updates.versionUpdates
      .pipe(
        // We filter out any emitted values from the versionUpdates observable other than the one that indicates when the version is ready to be installed
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        // This is called when a new version of our application is available.
        // It uses the open method of the snackbar property to show a snack bar with an action button and subscribes to its afterDismissed observable.
        // The afterDismissed observable emits when the snack bar is closed either by clicking the action button or programmatically using its API methods
        switchMap(() =>
          this.snackbar
            .open('A new version is available!', 'Update now')
            .afterDismissed()
        ),
        // This is called when the snack bar is dismissed using the action button
        filter((result) => result.dismissedByAction),
        // This calls the activateUpdate method of the updates property to apply the new version of the application.
        // Once the application has been updated, it reloads the browser window for the changes to take effect.
        map(() => this.updates.activateUpdate().then(() => location.reload()))
      )
      .subscribe();
  }
}
