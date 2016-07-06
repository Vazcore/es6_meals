import {MealsController} from '../meals/meals.controller';

class MealsComponent {
    constructor() {
        this.templateUrl = '/src/meals/meals.html';
        this.controller = MealsController;
        this.controllerAs = 'mealsC';       
    }
}

export {MealsComponent};