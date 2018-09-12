(function(){
    angular.module('myapp.cart')
        .service('CartService', function($http){

            this.getCart = function(){
                return $http
                        .get('http://5b986b41197ce5001429ed65.mockapi.io/api/cart')
                        .then(function(res){
                            return res.data
                        });
            };

        });

})(angular);