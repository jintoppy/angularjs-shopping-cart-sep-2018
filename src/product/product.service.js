(function(){
    angular.module('myapp.product')
        .service('ProductService', function($http){

            this.getProducts = function(){
                return $http
                        .get('http://5b986b41197ce5001429ed65.mockapi.io/api/products')
                        .then(function(res){
                            return res.data;
                        });
            };

            this.getProductById = function(productId){
                return $http
                        .get('http://5b986b41197ce5001429ed65.mockapi.io/api/products/'+productId)
                        .then(function(res){
                            return res.data;
                        });
            };

        });

})(angular);