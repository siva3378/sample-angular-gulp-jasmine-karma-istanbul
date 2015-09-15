(function () {
    'use strict';

    var main = angular.module('app.main');

    var config = {
        appTitle: 'TODO App',
        copyRightText: 'Copy Right Text will be here',
    };
    var views = [
        // {
        //     name: "Customers",
        //     base: "#/customers"
        // },
        // {
        //     name: "Orders",
        //     base: "#/orders"
        // }
    ]
    main.value('config', config);
    main.value('views', views);
})();
