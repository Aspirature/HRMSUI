import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyleavesComponent } from './applyleaves.component';

describe('ApplyleavesComponent', () => {
  let component: ApplyleavesComponent;
  let fixture: ComponentFixture<ApplyleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
