import { Component } from '@angular/core';

@Component ({
  selector: 'app-user',
  template: `
  <input type="text" (input)="onUserInput($event)" [value]="name">
    <p>Hello {{ name }}!<p>
    <p>I'm the user component</p>
    `
})
export class UserComponent {
  name = 'James';

  onUserInput(event) {
    this.name = event.target.value;
  }
}


// event binding
// property binding
// e.g. <input type="text" (input)="onUserInput($event)" [value]="name">
// two way binding
// <input type="text" [(ngModel)]="name">
// directives are instructions placed inside templates

