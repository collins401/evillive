/**
 * Created by bytecats on 2014-7-15.
 */
angular.module('app',['ngRoute','ngAnimate','app.controllers'])
    .value('Config', {
        //API URL
        apiUrl: 'http://wp.bytecats.com/'

    })
    .config(function($routeProvider){
        $routeProvider
            //首页
            .when('/',{
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .when('/edu',{
                templateUrl: 'views/edu.html'

            })
            .when('/work',{
                templateUrl: 'views/work.html'

            })
            .when('/demo',{
                templateUrl: 'views/demo.html'

            })


        });
