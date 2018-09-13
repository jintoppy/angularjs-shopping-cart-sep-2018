(function(){
    angular.module('myapp.product')
        .component('addProduct', {
            templateUrl: 'src/product/components/add-product/add-product.component.html',
            controller: function(ProductService){
                this.newProduct = {};
                this.addProduct = function(form){
                    console.log(form);
                    ProductService.addProduct(this.newProduct);
                };

                this.clearForm = function(form){
                    form.$reset();
                };
            }
        })
})(angular)