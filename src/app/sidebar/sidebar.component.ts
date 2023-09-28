import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from '../report.service';
import { FormsModule } from '@angular/forms';

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
  isSlideshowOpen = false;
  slideshowDuration: number = 5; // Initialize as a number

  constructor(private router: Router, private reportService: ReportService) { }


  ngOnInit(): void {
    this.loadReports(); // Load reports on component initialization
  }

  selectedReports: number[] = []; // Array to store selected report IDs

  // Function to toggle report selection
  toggleReportSelection(reportId: number) {
    const index = this.selectedReports.indexOf(reportId);
    if (index === -1) {
      this.selectedReports.push(reportId); // Add to the selection
    } else {
      this.selectedReports.splice(index, 1); // Remove from the selection
    }
  }

  // Function to check if a report is selected
  isReportSelected(reportId: number): boolean {
    return this.selectedReports.includes(reportId);
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  toggleSlideshow() {
    this.isSlideshowOpen = !this.isSlideshowOpen; // To toggle the visibility of the slideshow submenu
  }

  navigateToAnalytics() {
    this.router.navigate(['/analytics']);
  }

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

  currentIframeId = 1;
  slideshowInterval: any;

  startSlideshow() {
    if (this.selectedReports.length > 0) {
      this.router.navigate(['/slideshow'], {
        queryParams: {
          duration: this.slideshowDuration,
          reports: this.selectedReports.join(','),
        },
      });
    }
  }

  // Function to stop the slideshow
  stopSlideshow() {
    clearInterval(this.slideshowInterval);
  }

  private loadReports(): void {
    // Subscribe to the ReportService to load the reports
    this.reportService.getReports().subscribe((reports: any[]) => {
      this.reports = reports;
    });
  }
}
