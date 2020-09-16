import { Component, OnInit } from '@angular/core';
import { Overview, PropertiesEntity } from 'src/app/interfaces/overview.interface';
import { JaapService } from 'src/app/services/jaap.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jaapData: Overview;

  constructor(private jaapService: JaapService) { }

  async ngOnInit(): Promise<void> {
    this.jaapData = await this.jaapService.getOverview(1000).toPromise();

    const newPropertyArray: PropertiesEntity[] = [];

    for (const property of this.jaapData.properties) {
      if (Math.max(property.floor_area, Number(property.lotsize)) < 70) {
        continue;
      }

      property.thumb =  property.thumb.replace('tiny', 'small');

      newPropertyArray.push(property);
    }
    this.jaapData.properties = newPropertyArray;
  }

}
