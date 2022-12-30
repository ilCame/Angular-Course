(function() {
    
    var app = angular.module('customersApp', ['ngRoute']);

    app.config(function ($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'customerController',
                templateUrl: 'app/views/customer.hml'
            })
            .when('/order/:customerId', {
                controller: 'ordersController',
                templateUrl: 'app/views/orders.hml'
            })
        otherwise( { redirectTo: '/'});
    });

}());