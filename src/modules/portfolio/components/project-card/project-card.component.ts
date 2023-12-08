import { Component, Input, Inject } from '@angular/core';
import { ProjectInfo } from '../../models/portfolio-component-models';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'portfolio-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.sass'
})
export class ProjectCardComponent {
  @Input() relativeImagePath: string = '../../../../assets/project-images/'
  @Input() relativeSkillImagePath: string = '../../../../assets/emblems/'
  @Input() project!: ProjectInfo

  constructor(@Inject(DOCUMENT) private document: Document){}

  redirect(url: string): void {
    this.document.defaultView?.open(url, '_blank')
  }
}
