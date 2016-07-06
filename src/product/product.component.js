
class ProductComponent {
    constructor() {
        this.templateUrl = '/src/product/product.html';
        this.bindings = {"type": "<", "products": "<"};
        this.controller = function ($scope) {
            
        };
        this.controllerAs = 'prod';        
    }
    init() {
        console.log(this.type);
    }
}

export {ProductComponent};