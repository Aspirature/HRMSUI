import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateregComponent } from './candidatereg.component';

describe('CandidateregComponent', () => {
  let component: CandidateregComponent;
  let fixture: ComponentFixture<CandidateregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
