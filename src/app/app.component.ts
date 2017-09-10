import { Component } from '@angular/core';

@Component({
  selector: 'app-root',// tag name
  templateUrl: './app.component.html', // a url to a html file for this component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first app!';
  description = 'This is my first angular component';
  websitename = "www.test.com";
}
