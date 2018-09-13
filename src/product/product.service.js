(function(){
    angular.module('myapp.product')
        .service('ProductService', function($http){
            const productUrl = 'http://5b986b41197ce5001429ed65.mockapi.io/api/products';
            this.getProducts = function(){
                return $http
                        .get(productUrl)
                        .then(function(res){
                            return res.data;
                        });
            };

            this.getProductById = function(productId){
                return $http
                        .get(productUrl + '/productId')
                        .then(function(res){
                            return res.data;
                        });
            };

            this.addProduct = function(product){
                return $http.post(productUrl, product);
            };

        });

})(angular);