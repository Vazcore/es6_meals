import {ProductsController} from './products.controller';

class ProductsComponent {
    constructor() {
        this.templateUrl = '/src/products/products.html';
        this.controller = ProductsController;
        this.controllerAs = 'prods';        
    }
}

export {ProductsComponent};