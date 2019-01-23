import { Component } from '@angular/core';

@Component ({
  selector: 'app-dashboard',
  template: `
    <p>My loading state is: {{ loadState }}!<p>
    <p>I'm the dashboard component</p>
    `
})
export class DashboardComponent {
  loadState = 'loading';
}
