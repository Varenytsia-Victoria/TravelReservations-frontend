import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent {

  isOpen=false

  openDropdown() {
    this.isOpen =!this.isOpen;
  }
}
