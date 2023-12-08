import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from './main-page-data';

@Component({
  selector: 'app-portfolio-main-page',
  templateUrl: './portfolio-main-page.component.html',
  styleUrl: './portfolio-main-page.component.sass'
})
export class PortfolioMainPageComponent {
  data: any = PORTFOLIO_DATA
  relativeImagePath: string = '../../../../assets/'
}
