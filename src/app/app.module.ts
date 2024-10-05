import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { MainComponent } from './main/main.component';
import { HotelComponent } from './main/hotel/hotel.component';
import { TripComponent } from './main/trip/trip.component';
import { FlightComponent } from './main/flight/flight.component';
import { CarHiveComponent } from './main/car-hive/car-hive.component';
import { SortComponent } from './main/sort/sort.component';
import { NavComponent } from './nav/home-navigation/nav.component';
import { HotelCardComponent } from './main/hotel/hotel-card/hotel-card.component';
import { TripCardComponent } from './main/trip/trip-card/trip-card.component';
import { CarCardComponent } from './main/car-hive/car-card/car-card.component';
import { FlightCardComponent } from './main/flight/flight-card/flight-card.component';
import { MainNavigationComponent } from './nav/main-navigation/main-navigation.component';
import { HotelFormComponent } from './nav/main-navigation/tabs/hotel-form/hotel-form.component';
import { FlightFormComponent } from './nav/main-navigation/tabs/flight-form/flight-form.component';
import { TripsFormComponent } from './nav/main-navigation/tabs/trips-form/trips-form.component';
import { CarRentalFormComponent } from './nav/main-navigation/tabs/car-rental-form/car-rental-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    MainComponent,
    HotelComponent,
    TripComponent,
    FlightComponent,
    CarHiveComponent,
    SortComponent,
    NavComponent,
    HotelCardComponent,
    TripCardComponent,
    CarCardComponent,
    FlightCardComponent,
    MainNavigationComponent,
    HotelFormComponent,
    FlightFormComponent,
    TripsFormComponent,
    CarRentalFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
