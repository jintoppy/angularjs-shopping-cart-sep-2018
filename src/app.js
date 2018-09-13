(function(){
    const myapp = angular.module('myapp', [
        'myapp.cart',
        'myapp.product',
        'ui.router'
    ]);

    myapp.config(function($stateProvider){
        $stateProvider.state({
            name: 'products',
            url: '/products',
            component: 'productList'
        });

        $stateProvider.state({
            name: 'productDetails',
            url: '/product/{productId}',
            component: 'productDetails',
            resolve: {
                product: function(ProductService, $transition$){
                    const params = $transition$.params();
                    const productId = params.productId;
                    return ProductService.getProductById(productId);
                }
            }
        });

        $stateProvider.state({
            name: 'addProduct',
            url: '/add-product',
            component: 'addProduct'
        });

        $stateProvider.state({
            name: 'cart',
            url: '/cart',
            component: 'cart'
        });
    });


})(angular);