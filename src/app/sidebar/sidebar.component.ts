import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isOpen = true;
  isDashboardOpen = false;
  isControlBoardOpen = false;

  constructor(private router: Router) { }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  navigateToAnalytics() {
    this.router.navigate(['/analytics']);
  }

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }
}
