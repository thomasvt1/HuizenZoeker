import { AfterViewInit, Component, OnInit } from '@angular/core';
import { JaapService } from 'src/app/services/jaap.service';

import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import SourceVector from 'ol/source/Vector';
import LayerVector from 'ol/layer/Vector';
import Feature from 'ol/Feature';
import { Geometry, Point } from 'ol/geom';
import { Style, Icon } from 'ol/style';
import View from 'ol/View';
import Select from 'ol/interaction/Select';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  bigMap: Map;

  constructor(private jaapService: JaapService) { }

  async ngOnInit(): Promise<void> {
  }


  async ngAfterViewInit(): Promise<void> {
    const jaapData = await this.jaapService.getOverview(1000).toPromise();

    console.log(jaapData);

    const geoLocation = fromLonLat([4.48114, 51.886865]);

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
        zoom: 12
      })
    });


    for (const property of jaapData.properties) {
      if (Math.max(property.floor_area, Number(property.lotsize)) < 70) {
        continue;
      }

      const pointIconStyle = new Style({
        image: new Icon(({
          anchor: [0.5, 1],
          src: `https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?text=${property.price}&size=40&hoffset=0&voffset=-1&background=${this.getPriceColor(property.price)}`
        }))
      });

      const features = [
        new Feature({
          geometry: new Point(fromLonLat([property.longitude, property.latitude]))
        })
      ];

      const newPointLayer = new LayerVector({
        source: new SourceVector({ features })
      });

      newPointLayer.setStyle(pointIconStyle);
      this.bigMap.addLayer(newPointLayer);
    }
  }

  getPriceColor(price: number): string {
    const colors = ['388E3C', 'ef5350', 'd32f2f'];

    if (price < 750) {
      return colors[0];
    }
    else if (price < 850) {
      return colors[1];
    }
    else {
      return colors[2];
    }
  }

}
