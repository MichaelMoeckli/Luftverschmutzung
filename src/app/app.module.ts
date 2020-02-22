import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AirqualityComponent } from './airquality/airquality.component';
import { ParticulateMatterComponent } from './airquality/particulate-matter/particulate-matter.component';
import { OzonComponent } from './airquality/ozon/ozon.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AirqualityComponent,
    ParticulateMatterComponent,
    OzonComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
