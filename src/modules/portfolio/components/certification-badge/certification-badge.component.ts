import { Component, Input, Inject } from '@angular/core';
import { CertificationInfo } from '../../models/portfolio-component-models';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'portfolio-certification-badge',
  templateUrl: './certification-badge.component.html',
  styleUrl: './certification-badge.component.sass'
})
export class CertificationBadgeComponent {
  @Input() cert!: CertificationInfo
  dialogVisible: boolean = false

  constructor(@Inject(DOCUMENT) private document: Document){}

  showDialog(): void {
    this.dialogVisible = true
  }

  redirect(url: string): void {
    this.document.defaultView?.open(url, '_blank')
  }
}
