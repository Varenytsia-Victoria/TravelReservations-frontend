import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent {

  isOpen=false

  toggleDropdown(){
    this.isOpen= !this.isOpen;
  }
}
