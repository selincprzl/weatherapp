import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponentComponent } from './weather-component/weather-component.component';
import { UVComponentComponent } from './uvcomponent/uvcomponent.component';
import { ForecastComponentComponent } from './forecast-component/forecast-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponentComponent,
    UVComponentComponent,
    ForecastComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
