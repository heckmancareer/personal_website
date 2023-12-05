import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { TooltipModule } from 'primeng/tooltip';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioMainPageComponent} from './pages/portfolio-main-page/portfolio-main-page.component';

@NgModule({
  declarations: [ PortfolioMainPageComponent ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ButtonModule,
    StyleClassModule,
    TooltipModule,
  ]
})
export class PortfolioModule { }
