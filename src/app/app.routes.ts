import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
export const routes: Routes = [
    {path: '', component:AppComponent},
    {path: 'Active', component:AppComponent},
    {path: 'Completed', component:AppComponent}
];
