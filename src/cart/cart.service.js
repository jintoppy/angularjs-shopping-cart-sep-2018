(function(){
    angular.module('myapp.cart')
        .service('CartService', function($http, $rootScope, AppConstant){
            this.getCart = function(){
                return $http
                        .get(AppConstant.CART_URL)
                        .then(function(res){
                            return res.data
                        });
            };

            this.addToCart = function(product){
                return $http
                        .post(AppConstant.CART_URL, {
                            productId: product.id,
                            quantity: 1
                        })
                        .then(function(){
                            $rootScope.$emit('onAddToCart');
                        })
            };

        });

})(angular);