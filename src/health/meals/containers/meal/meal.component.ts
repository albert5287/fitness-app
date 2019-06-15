import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meal, MealsService } from 'src/health/shared/services/meals/meals.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'meal',
    styleUrls: ['meal.component.scss'],
    template: `
        <div class="meal">
            <div class="meal__title">
                <h1>
                    <img src="assets/images/food.svg" />
                    <span *ngIf="meal$ | async as meal; else title;">
                        {{ meal.name ? 'Edit' : 'Create'}} meal
                    </span>
                    <ng-template #title>
                        Loading...
                    </ng-template>
                </h1>
            </div>
            <div>
                <meal-form
                (create)="addMeal($event)">
                </meal-form>
            </div>
        </div>
    `
})
export class MealComponent implements OnInit, OnDestroy {

    meal$: Observable<Meal>;
    subscription: Subscription;

    constructor(
        private mealService: MealsService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    async addMeal(event : Meal){
        await this.mealService.addMeal(event);
        this.backToMeals();
    }

    backToMeals() {
        this.router.navigate(['meals']);
    }

    ngOnInit(){
        this.subscription = this.mealService.meals$.subscribe();
        this.meal$ = this.route.params
            .pipe(
                switchMap(param => this.mealService.getMeal(param.id))
            );
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}