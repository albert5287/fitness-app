import { Injectable } from '@angular/core';
import { Store } from 'store';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from 'src/auth/shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Meal{
    name: string,
    ingredients: string[],
    timestamp: number,
    $key: string,
    $exist: () => boolean
}

@Injectable()
export class MealsService {

    meals$: Observable<Meal[]> = (this.db.list(`meals/${this.uid}`)
    .valueChanges() as Observable<Meal[]>) //the as is used because valueChanges() loses type information https://github.com/angular/angularfire2/issues/1299
    .pipe(
        tap(next => this.store.set('meals', next))
    );

    constructor(
        private store: Store,
        private db: AngularFireDatabase,
        private authService: AuthService
    ) {}

    get uid(){
        return this.authService.user.uid;
    }
}