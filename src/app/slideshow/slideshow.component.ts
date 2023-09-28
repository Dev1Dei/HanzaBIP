import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Subscription } from 'rxjs';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit {

  reportIframeSrc: string = "";
  routeSubscription?: Subscription;
  duration: number = 5;
  selectedReports: number[] = [];

  constructor(private route: ActivatedRoute, private reportService: ReportService) { }

  private loadIframeSrc(id: number): void {
    this.reportService.getReports().subscribe(reports => {
      const report = reports.find(r => r.id === id);
      if (report) {
        this.reportIframeSrc = report.iframe;
      }
    });
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      if (id) {
        this.loadIframeSrc(+id);
      }
    });
    this.route.queryParams.subscribe((params) => {
      this.duration = +params['duration'] || 5; // Default duration of 5 seconds
      this.selectedReports = (params['reports'] || '').split(',').map(Number);
    });
  }
}
