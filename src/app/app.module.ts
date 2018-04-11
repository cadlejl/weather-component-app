import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather-widget/component/weather.component';
import { SpeedUnitPipe } from './weather-widget/pipe/speed-unit.pipe';
import { TempUnitPipe } from './weather-widget/pipe/temp-unit.pipe';

@NgModule({
  declarations: [ AppComponent, WeatherComponent, SpeedUnitPipe, TempUnitPipe ],
  imports: [ BrowserModule, JsonpModule ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
