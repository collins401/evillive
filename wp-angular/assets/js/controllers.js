/**
 * Created by bytecats on 2014-7-15.
 */
angular.module('app.controllers',[])
    .run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on("$routeChangeSuccess", function(event, currentRoute) {
            $rootScope.title = currentRoute.pageTitle;
            $rootScope.info = currentRoute.info;
        });
    }])

    //首页
    .controller('homeCtrl',function($rootScope,$scope,appLoading,Deeps,$routeParams){
        appLoading.loading();
        appLoading.ready();
        $rootScope.pageTitle = "专注wordpress企业建站";
        $rootScope.isActive = 'isHome';
        $scope.moveActive = 'active1';
        $scope.tabs = function(pid){

            $scope.moveActive = 'active'+pid;
        };
        $scope.banners =[
            {'img':'assets/images/banner1.jpg','url':'javascript:;'},
            {'img':'assets/images/banner2.jpg','url':'javascript:;'},
            {'img':'assets/images/banner3.jpg','url':'javascript:;'}
        ];
        $scope.pages =[
            {'id':'76','name':'体育赛事','pic':'company.svg'},
            {'id':'78','name':'品牌推广','pic':'culture.svg'},
            {'id':'80','name':'庆典活动','pic':'phone.svg'},
            {'id':'74','name':'影视制作','pic':'menu.svg'}
        ];
        $scope.page =1;
        $scope.count = 4;
        Deeps.newsList($scope.count,$scope.page).then(function(result){

            $scope.posts = result.posts;
        });

    })
    .controller('aboutCtrl',function($scope,$rootScope,appLoading){
        appLoading.loading();
        $rootScope.pageTitle = '关于我们';
        $rootScope.isActive = 'isAbout';
        $scope.pages =[
            {'id':'13','name':'企业简介','pic':'company.svg'},
            {'id':'15','name':'企业文化','pic':'culture.svg'},
            {'id':'17','name':'联系我们','pic':'phone.svg'}
        ];
        appLoading.ready();

    })
    .controller('pageDetailCtrl',function($scope,appLoading,Deeps,$rootScope,$routeParams){
        appLoading.loading();
        Deeps.pageDetail($routeParams.id).then(function(result){
            $scope.item = result.page;

            $rootScope.pageTitle = result.page.title;
            appLoading.ready();
        });


    })
    //人才招聘
    .controller('jobsCtrl',function($scope,$rootScope,appLoading,Deeps,$routeParams,$timeout){
        appLoading.loading();
        $rootScope.isActive = 'isJobs';
        $scope.page =1;
        $scope.count = 10;
        $rootScope.pageTitle = '人才招聘';
        /**
         *  Get posts from a specific category by passing in the slug
         */
        Deeps.jobsList($scope.count,$routeParams.page).then(function(result){
            $scope.posts = result.posts;
            $scope.pages = result.pages;
            appLoading.ready();
        });
        $scope.loadMore = function() {
            if($scope.page < $scope.pages){
                $scope.page++;
                $scope.nextPage = true;
                Deeps.jobsList($scope.count,$scope.page).then(function(result){
                    angular.forEach(result.posts, function (item) {
                        $timeout(function(){
                            $scope.posts.push(item);
                            $scope.nextPage = false;
                        },1500);

                    })
                });

            }
        }


    })
    .controller('jobsDetailCtrl',function($scope,$rootScope,Deeps,appLoading,$routeParams){
        appLoading.loading();
        $rootScope.isActive = 'isJobs';
        Deeps.jobsDetail($routeParams.id).then(function(result){
            $scope.item = result.post;
            $rootScope.pageTitle = result.post.title;
            appLoading.ready();

        });

    })
    //新闻资讯
    .controller('newsCtrl',function($scope,appLoading,Deeps,$routeParams,$rootScope,$timeout){
        appLoading.loading();
        $rootScope.isActive = 'isNews';
        $rootScope.pageTitle = '新闻资讯';
        $scope.page =1;
        $scope.count = 10;
        /**
         *  Get posts from a specific category by passing in the slug
         */
        Deeps.newsList($scope.count,$routeParams.page,$routeParams.slug).then(function(result){
            $scope.posts = result.posts;
            $scope.pages = result.pages;
            appLoading.ready();
        });
        $scope.loadMore = function() {
            if($scope.page < $scope.pages){
                $scope.page++;
                $scope.nextPage = true;
                Deeps.newsList($scope.count,$scope.page,$routeParams.slug).then(function(result){
                    angular.forEach(result.posts, function (item) {
                        $timeout(function(){
                            $scope.posts.push(item);
                            $scope.nextPage = false;
                        },1500);

                    })
                });

            }
        }

    })
    .controller('newsDetailCtrl',function($scope,Deeps,appLoading,$rootScope,$routeParams){
        appLoading.loading();
        $rootScope.isActive = 'isNews';
        Deeps.newsDetail($routeParams.id).then(function(result){
            $scope.item = result.post;
            $rootScope.pageTitle = result.post.title;
            appLoading.ready();

        });
    })
    //产品展示

    .controller('productListCtrl',function($scope,appLoading,Deeps,$rootScope,$routeParams,$timeout){
        appLoading.loading();
        $rootScope.isActive = 'isProduct';

        $scope.page =1;
        $scope.count = 6;
        $rootScope.pageTitle = '产品展示';
        /**
         *  Get posts from a specific category by passing in the slug
         */
        Deeps.productList($scope.count,$scope.page,$routeParams.slug).then(function(result){
            $scope.posts = result.posts;
            $scope.pages = result.pages;
            appLoading.ready();
        });
        $scope.loadMore = function() {
            if($scope.page < $scope.pages){
                $scope.page++;
                $scope.nextPage = true;
                Deeps.productList($scope.count,$scope.page,$routeParams.slug).then(function(result){
                    angular.forEach(result.posts, function (item) {
                        $timeout(function(){
                            $scope.posts.push(item);
                            $scope.nextPage = false;
                        },1500);

                    })
                });

            }
        }

    })
    .controller('productDetailCtrl',function($scope,Deeps,appLoading,$rootScope,$routeParams){
        appLoading.loading();
        $rootScope.isActive = 'isProduct';
        Deeps.productDetails($routeParams.id).then(function(result){
            $scope.item = result.post;
            $rootScope.pageTitle = result.post.title;
            appLoading.ready();

        });
    })
    //html过滤
    .filter("html", ["$sce",function(a) {
        return function(b) {
            return a.trustAsHtml(b)
        }
    }])
    //加载更多...
    .directive("directiveWhenScrolleds", function($window) {
        return {
            link: function(scope, elm, attr)
            {
                var raw = elm[0];
                angular.element($window).bind('scroll', function () {
                    if (this.pageYOffset > 20) {
                        scope.$apply(attr.directiveWhenScrolleds);
                    }
                });
            }

        }
    })
    //loading 效果
    .factory('appLoading', function($rootScope) {
        var timer;
        return {
            loading : function() {
                clearTimeout(timer);
                $rootScope.status = 'loading';
                if(!$rootScope.$$phase) $rootScope.$apply();
            },
            ready : function(delay) {
                function ready() {
                    $rootScope.status = 'ready';
                    if(!$rootScope.$$phase) $rootScope.$apply();
                }
                clearTimeout(timer);
                delay = delay == null ? 100 : false;
                if(delay) {
                    timer = setTimeout(ready, delay);
                }
                else {
                    ready();
                }
            }
        };
    })
  