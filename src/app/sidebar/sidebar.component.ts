import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  reports: any[] = [];
  isOpen = true;
  isDashboardOpen = false;
  isControlBoardOpen = false;

  constructor(private router: Router, private reportService: ReportService) { }

  ngOnInit(): void {
    this.loadReports(); // Load reports on component initialization
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  navigateToAnalytics() {
    this.router.navigate(['/analytics']);
  }

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

  private loadReports(): void {
    // Subscribe to the ReportService to load the reports
    this.reportService.getReports().subscribe((reports: any[]) => {
      this.reports = reports;
    });
  }
}
