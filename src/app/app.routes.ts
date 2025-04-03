import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { IndexComponent } from './pages/index/index.component';
import { AutosComponent } from './pages/autos/autos.component';


export const routes: Routes = [
    { path: '' , component: IndexComponent },
    { path: 'index', component: IndexComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'autos', component: AutosComponent },
];
