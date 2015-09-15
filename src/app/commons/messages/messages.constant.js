(function () {
    'use strict';
    angular
        .module('commons.messages')
        .constant('AppMsgs',{
        // Actions ----------------------------------------------
        start: "started",
        finish: "finished",
        added: "added",
        restored: "restored",
        removed: "removed",
        // Tasks ------------------------------------------------
        data_received: "Data received",
        data_into_scope: "Pushing data into scope"
    })

}());