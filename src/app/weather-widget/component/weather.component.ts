import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Weather } from '../model/weather';
import { WEATHER_COLORS } from '../constants/constants'; 

declare var Skycons: any; // No TypaScript definition file for Skycons

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls: [ 'weather.component.css' ],
    providers: [ WeatherService ]
})
export class WeatherComponent implements OnInit {
    pos: Position;
    weatherData = new Weather(null, null, null, null, null)
    currentSpeedUnit = "kph";
    currentTempUnit = "fahrenheit";
    tempUnitSymbol = "F";
    currentCity = "";
    currentState = "";
    icons = new Skycons();
    dataReceived = false;

    constructor(private service: WeatherService) { }

    ngOnInit() {
        this.getCurrentLocation();
    }
    getCurrentLocation() {
        this.service.getCurrentLocation()
            .subscribe(position => {
                this.pos = position;
                this.getCurrentWeather();
                this.getLocationName();
            },
            err => console.error(err));
    }

    getCurrentWeather() {
        this.service.getCurrentWeather(
            this.pos.coords.latitude,
            this.pos.coords.longitude
        )
            .subscribe(weather => {
                this.weatherData.temp = weather["currently"]["temperature"],
                this.weatherData.summary = weather["currently"]["summary"],
                this.weatherData.wind = weather["currently"]["windSpeed"],
                this.weatherData.humidity = weather["currently"]["humidity"],
                this.weatherData.icon = weather ["currently"]["icon"]
                console.log("Weather: ", this.weatherData); //TODO: REMOVE
                this.setIcon();
                this.dataReceived = true;
            },
            err => console.error(err));
    }

    getLocationName() {
        this.service.getLocationName(this.pos.coords.latitude, this.pos.coords.longitude)
            .subscribe(location => {
                console.log(location); // REMOVE
                this.currentCity = location["results"][1]['address_components'][1]["long_name"];
                this.currentState = location["results"][1]['address_components'][3]["short_name"];
                console.log("Name: ", this.currentCity + ", ", this.currentState); // TODO: REMOVE
            });
    }

    // toggleUnits() {
    //     this.toggleTempUnits();
    //     this.toggleSpeedUnits();
    // }

    toggleTempUnits() {
        if(this.currentTempUnit == "fahrenheit") {
            this.currentTempUnit = "celsius";
            this.tempUnitSymbol = "C";
        } else {
            this.currentTempUnit = "fahrenheit";
            this.tempUnitSymbol = "F";
        }
    }

    toggleSpeedUnits() {
        if(this.currentSpeedUnit == "kph") {
            this.currentSpeedUnit = "mph";
        } else {
            this.currentSpeedUnit = "kph";
        }
    }

    setIcon() {
        this.icons.add("icon", this.weatherData.icon);
        this.icons.play();
    }

    setStyles(): Object {
        if(this.weatherData.icon) {
            this.icons.color = WEATHER_COLORS[this.weatherData.icon]["color"];
            return WEATHER_COLORS[this.weatherData.icon];
        } else {
            this.icons.color = WEATHER_COLORS["default"]["color"];
            return WEATHER_COLORS["default"];
        }
    }
 }