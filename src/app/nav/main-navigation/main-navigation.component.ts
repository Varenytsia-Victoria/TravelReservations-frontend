import { Component } from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
})
export class MainNavigationComponent {
  tabs = [
    { id: 'hotels', label: 'Hotels' },
    { id: 'flights', label: 'Flights' },
    { id: 'trips', label: 'Trips' },
    { id: 'car-rental', label: 'Car Hire' },
  ];

  activeTab = this.tabs[0];

  selectTab(tab: { id: string; label: string; }) {
    this.activeTab = tab;
  }
}
