(function(){
    angular.module('myapp.product')
        .directive('productNameValidator', function(){
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function(scope, el, attrs, ngModelCtrl){
                    ngModelCtrl.$validators.productName = function(val){
                        if(val && val.indexOf('Product') > -1){
                            return false;
                        }
                        return true;
                    };
                }
            };
        });
})(angular)