
class MealsController {
    constructor($scope, ProductsService, UtilsService) {
        this.scope = $scope;
        this.scope.activePassangerId = 1;
        this.activeMeals = [];
        this.UtilsService = UtilsService;
        this.ProductsService = ProductsService;        
        this.initMeals();
    }
    initMeals() {        
        this.ProductsService.getMeals().then(meals => {
            let p_data = this.UtilsService.parseResponse(meals)[0].meals;
            this.scope.meals = p_data.mealsOnSegments[0].passengerMealList;

            this.scope.$watch('activePassangerId', (val) => {
                this.activeMeals = this.scope.meals[val - 1].mealList;
                console.log(this.activeMeals);            
            });

        });
    }    
}

export {MealsController};