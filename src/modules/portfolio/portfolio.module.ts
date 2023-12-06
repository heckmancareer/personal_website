import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { TooltipModule } from 'primeng/tooltip';
import { FieldsetModule } from 'primeng/fieldset';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioMainPageComponent} from './pages/portfolio-main-page/portfolio-main-page.component';
import { SkillsFrameComponent } from './components/skills-frame/skills-frame.component';

@NgModule({
  declarations: [ PortfolioMainPageComponent, SkillsFrameComponent ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ButtonModule,
    StyleClassModule,
    TooltipModule,
    FieldsetModule,
    NgOptimizedImage
  ]
})
export class PortfolioModule { }
