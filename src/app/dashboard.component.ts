import { Component } from '@angular/core';

@Component ({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  loadState = 'loading';

  switchState() {
    this.loadState = 'finished';
  }
}

// <input type="click" (input)="onClickButton($event)"
/* `
<input type="click" [(ngModel)]="loadState">
  <p>My loading state is: {{ loadState }}!<p>
  <button type="button">Click me!<button>
  `
*/
