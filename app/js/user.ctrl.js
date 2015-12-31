(function(){
    var app = angular.module('app', ['ui.bootstrap']);
    
    app.controller('UserController', function(){
       this.programmer = user; 
    });
    
    var user = {
        fname: 'Yvonne',
        lname: 'Uwah',
    }
})();