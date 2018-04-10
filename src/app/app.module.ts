import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather-widget/component/weather.component';

@NgModule({
  declarations: [ AppComponent, WeatherComponent ],
  imports: [ BrowserModule, JsonpModule ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
