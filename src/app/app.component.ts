import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = 'Jameson';

  onNameChanged(newName) {
    this.rootName = newName;
  }
}

// @feature is a decorator
// allows you to attach logic to classes, methods, properties
// decorator describes construct the follows immediately after it
