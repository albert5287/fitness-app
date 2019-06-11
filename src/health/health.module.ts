import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealsComponent } from './meals/containers/meals/meals.component';

export const ROUTES: Routes = [
    //{ path: 'meals', loadChildren: './meals/meals.module#MealsModule } //this is the route for lazy loading the component
    { path: 'meals', component: MealsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
})
export class HealthModule {}