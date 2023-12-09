import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { TooltipModule } from 'primeng/tooltip';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';
import { RippleModule } from 'primeng/ripple';
import { Divider, DividerModule } from 'primeng/divider';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioMainPageComponent} from './pages/portfolio-main-page/portfolio-main-page.component';
import { SkillsFrameComponent } from './components/skills-frame/skills-frame.component';
import { EmployerHistoryFrameComponent } from './components/employer-history-frame/employer-history-frame.component';
import { CertificationBadgeComponent } from './components/certification-badge/certification-badge.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [ 
    PortfolioMainPageComponent, 
    SkillsFrameComponent, 
    EmployerHistoryFrameComponent, 
    CertificationBadgeComponent,
    ProjectCardComponent 
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ButtonModule,
    StyleClassModule,
    TooltipModule,
    FieldsetModule,
    NgOptimizedImage,
    CardModule,
    DialogModule,
    ChipModule,
    RippleModule,
    DividerModule
  ]
})
export class PortfolioModule { }
