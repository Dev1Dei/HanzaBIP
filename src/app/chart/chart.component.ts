import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../report.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  reportIframeSrc: string = "";
  routeSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private reportService: ReportService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      if (id) {
        this.loadIframeSrc(+id);
      }
    });
  }

  private loadIframeSrc(id: number): void {
    this.reportService.getReports().subscribe(reports => {
      const report = reports.find(r => r.id === id);
      if (report) {
        this.reportIframeSrc = report.iframe;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}


