(function(){
    angular.module('myapp.product')
        .component('productList', {
            templateUrl: 'src/product/components/product-list/product-list.component.html',
            controller: function(ProductService, AppConstant){
                var promise = ProductService.getProducts();

                promise.then(function(products){
                    this.products = products;
                }.bind(this));

                console.log(AppConstant);
            }
        })
})(angular)
