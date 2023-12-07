import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationBadgeComponent } from './certification-badge.component';

describe('CertificationBadgeComponent', () => {
  let component: CertificationBadgeComponent;
  let fixture: ComponentFixture<CertificationBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificationBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
