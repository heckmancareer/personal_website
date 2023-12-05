import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsFrameComponent } from './skills-frame.component';

describe('SkillsFrameComponent', () => {
  let component: SkillsFrameComponent;
  let fixture: ComponentFixture<SkillsFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillsFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
