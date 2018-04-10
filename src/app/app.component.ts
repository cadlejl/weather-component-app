import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="col-4">
        <weather-widget></weather-widget>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding-top: 2.5rem;
    }
  `]
  /* Default setup not used in course
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
})
export class AppComponent {
  /* Default
  title = 'app';*/
}
