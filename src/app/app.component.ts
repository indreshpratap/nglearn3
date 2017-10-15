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
  containerId = "home-container";
  // cls = "green";
  clsArr = ['green'];
  flag = false;
  clsObj = { "error-border": true, "green success": false };

  message = "";

  showWarning = false;
  //Event binding

  showHome = false;
  testds = "fdsf";

  colors = ['Red', 'Green', 'Blue'];

  colors1;

  state = 0;

  constructor() {
    this.colors1 = [...this.colors];
  }
  toggleHome() {
    this.showHome = !this.showHome;
  }
  doLogin(event, msg) {
    console.log("Event Triggerred! ", event);
    // this.message = "You have logged-In successfully:)";
    this.message = msg;
  }

  testEventObject(event) {
    console.log(event);
    this.message = "I m receiving an event";
  }

  clickWithCtrl(event) {
    if (event.ctrlKey) {
      this.message = "Event triggered when you pressed CTRL and then click :: " + event.type;
    }
  }

  showInfo() {
    this.showWarning = false;
  }

  showWarn() {
    this.showWarning = true;
  }

  removeColor(indx) {

    this.colors.splice(indx, 1);
    this.colors1.splice(indx, 1);
  }

  changeState(currentState) {
    this.state = currentState;

    switch (currentState) {
      case 1: console.log("one"); break;
      case 2: console.log("two"); break;
      case 3: console.log("three"); break;
      default: console.log("default");
    }
  }
}
