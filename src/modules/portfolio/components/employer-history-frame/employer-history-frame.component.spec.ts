import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerHistoryFrameComponent } from './employer-history-frame.component';

describe('EmployerHistoryFrameComponent', () => {
  let component: EmployerHistoryFrameComponent;
  let fixture: ComponentFixture<EmployerHistoryFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerHistoryFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployerHistoryFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
