(function(){
    angular.module('myapp.product')
        .service('ProductService', function($http, AppConstant){
            this.getProducts = function(){
                return $http
                        .get(AppConstant.PRODUCT_URL)
                        .then(function(res){
                            return res.data;
                        });
            };

            this.getProductById = function(productId){
                return $http
                        .get(AppConstant.PRODUCT_URL + '/productId')
                        .then(function(res){
                            return res.data;
                        });
            };

            this.addProduct = function(product){
                return $http.post(AppConstant.PRODUCT_URL, product);
            };

        });

})(angular);