(function(){
    angular.module('myapp.cart')
        .service('CartService', function($http, $rootScope){
            const cartUrl = 'http://5b986b41197ce5001429ed65.mockapi.io/api/cart';
            this.getCart = function(){
                return $http
                        .get(cartUrl)
                        .then(function(res){
                            return res.data
                        });
            };

            this.addToCart = function(product){
                return $http
                        .post(cartUrl, {
                            productId: product.id,
                            quantity: 1
                        })
                        .then(function(){
                            $rootScope.$emit('onAddToCart');
                        })
            };

        });

})(angular);