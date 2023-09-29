import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Subscription } from 'rxjs';
import { ReportService } from '../report.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  selectedReports: number[] = [];
  slideshowDuration: number = 5;
  reports: any[] = [];
  activeReport: any;

  constructor(private route: ActivatedRoute, private reportService: ReportService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.slideshowDuration = params['duration'];
      this.selectedReports = params['reports'].split(',').map(Number);
      this.loadReports();
    });
  }

  private loadReports(): void {
    this.reportService.getReports().subscribe((allReports: any[]) => {
      // Filter the reports based on selectedReports
      this.reports = allReports.filter(report => this.selectedReports.includes(report.id));
      // Start the slideshow
      this.startSlideshow();
    });
  }

  private startSlideshow(): void {
    let index = 0;
    // Show the first report initially
    if(this.reports.length > 0) this.activeReport = this.reports[0];
    const slideshowTimer = timer(this.slideshowDuration * 1000, this.slideshowDuration * 1000);
    slideshowTimer.subscribe(() => {
      // Change the active report at every interval
      index = (index + 1) % this.reports.length;
      this.activeReport = this.reports[index];
    });
  }

  private slideshowSubscription?: Subscription;

  stopSlideshow(): void {
    this.slideshowSubscription?.unsubscribe();
    this.router.navigate(['/dashboard/1'])
  }
}