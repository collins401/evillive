/**
 * Created by bytecats on 2014-7-15.
 */
angular.module('app',['ngRoute','app.controllers','app.services'])
    .value('Config', {
        //API URL
        apiUrl: 'http://wp.bytecats.com/'

    })
    .config(function($routeProvider){
        $routeProvider
            //首页
            .when('/',{
                templateUrl: 'template/home.html',
                controller: 'homeCtrl'
            })
            .when('/about',{
                templateUrl : 'template/about.html',
                controller : 'aboutCtrl'
            })
            .when('/about/:id',{
                templateUrl : 'template/pageDetail.html',
                controller : 'pageDetailCtrl'
            })
            .when('/page',{
                templateUrl : 'template/page.html',
                controller : 'pageCtrl'
            })

            .when('/jobs',{
                templateUrl : 'template/jobs.html',
                controller : 'jobsCtrl'
            })
            .when('/jobs/page/:page',{
                templateUrl : 'template/jobs.html',
                controller : 'jobsCtrl'
            })
            .when('/jobs/:id.html',{
                templateUrl : 'template/jobsDetail.html',
                controller : 'jobsDetailCtrl'
            })
            .when('/news',{
                templateUrl : 'template/news.html',
                controller : 'newsCtrl'
            })
            .when('/news/:slug',{
                templateUrl : 'template/news.html',
                controller : 'newsCtrl'
            })
            .when('/news/page/:page',{
                templateUrl : 'template/news.html',
                controller : 'newsCtrl'
            })
            .when('/news/detail/:id.html',{
                templateUrl : 'template/newsDetail.html',
                controller : 'newsDetailCtrl'
            })
            .when('/product',{
                templateUrl : 'template/productList.html',
                controller : 'productListCtrl'
            })
            .when('/product/:slug',{
                templateUrl : 'template/productList.html',
                controller : 'productListCtrl'
            })
            .when('/product/:slug/page/:page',{
                templateUrl : 'template/productList.html',
                controller : 'productListCtrl'
            })
            .when('/product/detail/:id.html',{
                templateUrl : 'template/productDetail.html',
                controller : 'productDetailCtrl'
            })
            // .when('/sidebar',{
            //    templateUrl : 'template/sidebar.html',
            //    controller : 'sidebarCtrl'
            //})

        });
