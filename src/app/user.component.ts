import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'app-user',
  template: `
  <input type="text" (input)="onUserInput($event)" [value]="name">
    <!--<input type="text" [(ngModel)]="name"> -->
    <p>Hello {{ name }}!<p>
    `
})
export class UserComponent {
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}


// event binding
// property binding
// e.g. <input type="text" (input)="onUserInput($event)" [value]="name">
// directives are instructions placed inside templates

// @Input decorator
// used to make name property
// into a bindable/settable property

