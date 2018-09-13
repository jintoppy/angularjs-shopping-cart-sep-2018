(function(){
    angular.module('myapp')
        .constant('AppConstant', {
            PRODUCT_URL: 'http://5b986b41197ce5001429ed65.mockapi.io/api/products',
            CART_URL: 'http://5b986b41197ce5001429ed65.mockapi.io/api/cart'
        });
})(angular);
