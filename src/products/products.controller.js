class ProductsController {
    constructor($scope, ProductsService, $q, UtilsService) {
        this.scope = $scope;
        this.q = $q;
        this.UtilsService = UtilsService;
        this.productOpened = true;
        this.ProductsService = ProductsService;
        // meal tab opened by default
        this.productIndexActive = 2;
        this.scope.products = [];
        this.init();
    }    
    openProduct(product) {
        this.productIndexActive = product.id;        
        this.productOpened = true;        
    }
    init() { 
        this.q.all([this.ProductsService.getProducts(), this.ProductsService.getPaxInfo()])
        .then(results => {
            this.scope.products = results[0];
            this.t_products = this.parseProducts(results[0]);
            this.scope.paxInfo = this.UtilsService.parseResponse(results[1]);            
        });
    }
    
    parseProducts(prods) {
        let products = [];
        for (var i = 0; i < prods.length; i++)
        {
            let row = prods[i].toJSON();
            for (var i in row)
            {
                products.push(row[i]);
            }
        }
        return products;
    }    
}

export {ProductsController};
