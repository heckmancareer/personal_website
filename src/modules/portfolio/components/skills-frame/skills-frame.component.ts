import { Component, Input } from '@angular/core';
import { SkillEmblem } from '../../models/portfolio-component-models';

@Component({
  selector: 'portfolio-skills-frame',
  templateUrl: './skills-frame.component.html',
  styleUrl: './skills-frame.component.sass'
})
export class SkillsFrameComponent {
  relativeImagePath: string = '../../../../assets/'
  @Input() headerText: string = ''
  @Input() displayedSkills: SkillEmblem[] = []
}
