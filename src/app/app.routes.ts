import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/portfolio',
        pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: '/portfolio',
    },
    {
        path: 'portfolio',
        loadChildren: () => import('../modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
    }
];
