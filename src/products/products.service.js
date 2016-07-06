class ProductsService {
    constructor($resource, $http) {
        this.products = $resource('/products/:id');
        this.http = $http;
    }
    getProducts() {
        return this.products.query().$promise;
    }
    getMeals() {
        return this.http.get('/meals');
    }
    getPaxInfo() {
        return this.http.get('/paxInfo');
    }    
}

export {ProductsService};