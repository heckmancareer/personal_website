import { Component, Input } from '@angular/core';
import { SkillEmblem } from '../../models/portfolio-component-models';

@Component({
  selector: 'portfolio-skills-frame',
  templateUrl: './skills-frame.component.html',
  styleUrl: './skills-frame.component.sass'
})
export class SkillsFrameComponent {
  @Input() relativeImagePath: string = '../../../../assets/emblems/'
  @Input() headerText: string = ''
  @Input() displayedSkills: SkillEmblem[] = []
}
