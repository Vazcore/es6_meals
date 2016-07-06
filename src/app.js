import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import {MealsComponent} from './meals/meals.component';
import {ProductComponent} from './product/product.component';
import {ProductsComponent} from './products/products.component';
import {ProductsService} from './products/products.service';
import {UtilsService} from './common/utils.service';
import underscore from 'underscore';

require('./css/style.css');

window._ = underscore;

const app = angular.module('appMeals', 
    [
        'ngResource',
        'ui.router'
    ]
)
.component('product', new ProductComponent())
.component('products', new ProductsComponent())
.component('meals', new MealsComponent())
.service('ProductsService', ProductsService)
.service('UtilsService', UtilsService)
.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('travel-extras', {
        url: '/',
        template: '<products></products>'
    });
});