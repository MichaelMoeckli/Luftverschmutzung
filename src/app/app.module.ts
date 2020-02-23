import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AirqualityComponent } from './airquality/airquality.component';
import { ParticulateMatterComponent } from './airquality/particulate-matter/particulate-matter.component';
import { OzonComponent } from './airquality/ozon/ozon.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import { NitrogenComponent } from './airquality/nitrogen/nitrogen.component';
import { AirTemperatureComponent } from './airquality/air-temperature/air-temperature.component';
import { GrenzwerteComponent } from './airquality/grenzwerte/grenzwerte.component';



@NgModule({
  declarations: [
    AppComponent,
    AirqualityComponent,
    ParticulateMatterComponent,
    OzonComponent,
    NitrogenComponent,
    AirTemperatureComponent,
    GrenzwerteComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({
      appId: 'luftverschmutzung'
  }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
