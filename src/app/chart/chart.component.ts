import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
powerBiEmbedUrl: string = '<iframe title="KPIPlasma" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=e19fb361-7e44-4b7a-a17d-8ff53acdb959&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57" frameborder="0" allowFullScreen="true"></iframe>'
}
