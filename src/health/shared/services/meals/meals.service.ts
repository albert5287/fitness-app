import { Injectable } from '@angular/core';
import { Store } from 'store';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from 'src/auth/shared/services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';


export interface Meal{
    name: string,
    ingredients: string[],
    timestamp: number,
    $key: string,
    $exist: () => boolean
}

@Injectable()
export class MealsService {

    meals$: Observable<Meal[]> = this.db.list(`meals/${this.uid}`)
    .snapshotChanges()
    .pipe(
        map(changes => changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))),
        tap(next => this.store.set('meals', next))
    ) as Observable<Meal[]>;

    constructor(
        private store: Store,
        private db: AngularFireDatabase,
        private authService: AuthService
    ) {}

    get uid(){
        return this.authService.user.uid;
    }

    getMeal(key: String){
        if(!key) return of({});
        return this.store.select<Meal[]>('meals')
            .pipe(
                filter(Boolean),
                map(meals => meals.find((meal: Meal) => meal.$key === key))
            );
    }

    addMeal(meal: Meal){
        return this.db.list(`meals/${this.uid}`).push(meal);
    }

    removeMeal(key: string){
        return this.db.list(`meals/${this.uid}`).remove(key);
    }
}