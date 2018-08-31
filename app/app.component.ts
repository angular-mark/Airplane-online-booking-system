import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
     <h3>Airline Passengers</h3> 
    </div>
  `
})

export class AppComponent {
  title: string = ''
  constructor() {
    this.title = ''
  }

  handleBlur($event) : void {
   console.log($event.target.value )
  }
}
