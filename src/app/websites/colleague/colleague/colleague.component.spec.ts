import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueComponent } from './colleague.component';

describe('ColleagueComponent', () => {
  let component: ColleagueComponent;
  let fixture: ComponentFixture<ColleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColleagueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
