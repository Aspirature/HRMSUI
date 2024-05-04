import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeentrypageComponent } from './timeentrypage.component';

describe('TimeentrypageComponent', () => {
  let component: TimeentrypageComponent;
  let fixture: ComponentFixture<TimeentrypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeentrypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeentrypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
