import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioMainPageComponent } from './pages/portfolio-main-page/portfolio-main-page.component';

const routes: Routes = [
    {
        path: '',
        component: PortfolioMainPageComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
