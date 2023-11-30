import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMainPageComponent } from './portfolio-main-page.component';

describe('PortfolioMainPageComponent', () => {
  let component: PortfolioMainPageComponent;
  let fixture: ComponentFixture<PortfolioMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
