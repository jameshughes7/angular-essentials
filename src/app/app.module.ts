import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
