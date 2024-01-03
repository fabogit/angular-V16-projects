import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as PoiActions from './poi.actions';
import * as PoiFeature from './poi.reducer';
import { PoiService } from '../poi.service';

@Injectable()
export class PoiEffects {
  private actions$ = inject(Actions);
  private poiService = inject(PoiService);

  // An NgRx effect is responsible for listening to all actions dispatched in the store.
  // When a PoiActions.initPoi action is dispatched, the init$ property is triggered and calls the getAll method of the poiService variable.
  // The init$ property knows which action to listen for by the parameters in the ofType operator.
  // If the data is fetched successfully, the effect will dispatch a new action in the store, PoiActions.loadPoiSuccess, with POI data as the payload.
  // If there is a failure when getting the data, it will dispatch a PoiActions.loadPoiFailure action in the store.
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.initPoi),
      switchMap(() => this.poiService.getAll()),
      switchMap(pois => of(PoiActions.loadPoiSuccess({ poi: pois }))),
      catchError((error) => {
        console.error('Error', error);
        return of(PoiActions.loadPoiFailure({ error }));
      })
    )
  );

  visit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.visitPoi),
      switchMap(action => {
        const stat = localStorage.getItem('tour-' + action.poiId);
        const total = stat ? Number(stat) + 1 : 1;
        localStorage.setItem('tour-' + action.poiId, total.toString());
        return of(PoiActions.visitPoiSuccess())
      }),
      catchError((error) => {
        console.error('Error', error);
        return of(PoiActions.visitPoiFailure({ error }));
      })
    )
  );

}
