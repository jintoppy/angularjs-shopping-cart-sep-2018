(function(){
    angular.module('myapp.product')
        .component('productDetails', {
            templateUrl: 'src/product/components/product-details/product-details.component.html',
            bindings: {
                product: '<'
            },
            controller: function(CartService){
                this.addToCart = function(){
                    CartService.addToCart(this.product);
                };
            }
        })
})(angular)