import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

describe('DashBoardComponent', () => {
let component: DashboardComponent;
let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have loadState of 'loading'`, () => {
    expect(component.loadState).toEqual('loading');
  });
});
