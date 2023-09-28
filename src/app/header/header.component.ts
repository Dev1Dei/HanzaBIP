import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  reports: any[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.loadReports();
  }

  private loadReports(): void {
    this.reportService.getReports().subscribe((reports: any[]) => {
      this.reports = reports;
    });
  }
}

