(function(){
    angular.module('myapp.cart')
        .component('miniCart', {
            templateUrl: 'src/cart/components/mini-cart/mini-cart.component.html',
            controller: function(CartService, $rootScope){
                this.cartCount = 0;

                const self = this;

                function getUpdatedCartCount(){
                    CartService.getCart().then(function(cart){
                        self.cartCount = cart.length;
                    });
                }

                $rootScope.$on('onAddToCart', getUpdatedCartCount);

                getUpdatedCartCount();

            }
        })
})(angular)