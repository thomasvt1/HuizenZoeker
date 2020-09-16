import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Overview } from '../interfaces/overview.interface';

@Injectable({
  providedIn: 'root'
})
export class JaapService {

  constructor(private http: HttpClient) { }


  getOverview(maxPrice: number): Observable<Overview> {
    return this.http.get<Overview>(`http://apiv6.jaap.nl/api/json/?request=overview&field=id&field=street_nr&field=houseType&field=thumb&field=thumb2&field=thumb3&field=floor_area&field=lotsize&field=rooms&field=year_built&field=city&field=zip&field=price&field=price_type&field=listing_status&field=spot&field=state&field=openhouse&field=photocount&field=longitude&field=latitude&loc=zuid%2Bholland%2Fgroot-rijnmond%2Frotterdam&listingmode=rent&filter=roomcount%3A2%2B&min=0&max=${maxPrice}&radius=5&deviceId=e035802c-7e33-4bcf-adc9-cbffbba12cb6&limit=100&offset=0`)
      .pipe(map(response => {
        return response;
      }));
  }

  getCluster() {
    return this.http.get<any>("http://apiv6.jaap.nl/api/json/?request=clusters&field=id&field=street_nr&field=houseType&field=thumb&field=thumb2&field=thumb3&field=floor_area&field=lotsize&field=rooms&field=year_built&field=city&field=zip&field=price&field=price_type&field=latitude&field=longitude&field=listing_status&field=spot&field=state&field=openhouse&loc=zuid%2Bholland%2Fgroot-rijnmond%2Frotterdam&mminLat=51.677198577474435&mminLng=4.221232635900378&mmaxLat=52.19419732118427&mmaxLng=4.7687719110399485&radius=5&listingmode=rent&filter=roomcount%3A2%2B&min=0&max=1000")
      .pipe(map(response => {
        return response;
      }));
  }
}
