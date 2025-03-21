import { Routes } from '@angular/router';
import { ComicViewComponent } from './components/comic-view/comic-view.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';

export const routes: Routes = [
    {path:'comic', component: ComicViewComponent},
    {path: 'detail', component: DetailViewComponent},
    {path: '', redirectTo: 'comic', pathMatch: 'full'}
];
