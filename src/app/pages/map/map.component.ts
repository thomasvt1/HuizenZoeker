import { AfterViewInit, Component, OnInit } from '@angular/core';
import { JaapService } from 'src/app/services/jaap.service';

import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import SourceVector from 'ol/source/Vector';
import LayerVector from 'ol/layer/Vector';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { Style, Icon } from 'ol/style';
import View from 'ol/View';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  bigMap: Map;

  constructor(private jaapService: JaapService) { }

  async ngOnInit(): Promise<void> {
    const jaapData = await this.jaapService.getOverview().toPromise();

    console.log(jaapData);

    const geoLocation = fromLonLat([5.165098, 52.231111]);

    this.bigMap = new Map({
      target: 'bigMap',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: geoLocation,
        maxZoom: 22,
        zoom: 15
      })
    });
  }


  async ngAfterViewInit(): Promise<void> {
    

  }

}
