import { Component, Input } from '@angular/core';
import { EmployerInfo } from '../../models/portfolio-component-models';

@Component({
  selector: 'portfolio-employer-history-frame',
  templateUrl: './employer-history-frame.component.html',
  styleUrl: './employer-history-frame.component.sass'
})
export class EmployerHistoryFrameComponent {
  @Input() relativeImagePath: string = '../../../../assets/emblems/'
  @Input() jobInfo!: EmployerInfo
}
