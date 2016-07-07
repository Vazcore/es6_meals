
class MealsController {
    constructor($scope, ProductsService, UtilsService) {
        this.scope = $scope;
        this.scope.activePassangerId = 1;
        this.activeMeals = [];
        this.UtilsService = UtilsService;
        this.ProductsService = ProductsService;        
        this.config = this.UtilsService.getConfig();
        this.dataObj = {meals: []};
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
    changePassanger(passanger) {
        this.scope.activePassangerId = passanger.passengerId;
    }
    getImg(src, width, height) {
        return this.UtilsService.getRsrImage(src, width, height);
    }
    addMeal(meal) {
        
    }
}

export {MealsController};