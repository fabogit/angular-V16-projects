import { Injectable } from '@angular/core';
import { PoiEntity } from '@packt/poi';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  /**
   * Get all saved traffic statistics from the local storage of the browser
   */
  getStatistics(pois: PoiEntity[]): number[] {
    return pois.map(poi => {
      const stat = localStorage.getItem('tour-' + poi.id) ?? 0;
      return +stat;
    });
  }

}
