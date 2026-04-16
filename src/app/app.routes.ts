import { Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortadaComponent } from './pages/portada/portada.component';

export const routes: Routes = [
    {
        path: '',
        component: PortadaComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    }
];
