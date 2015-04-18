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
    .controller('homeCtrl',function($scope,appLoading){


    })
    .controller('navCtrl', function ($rootScope,$scope,$location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();


        };
        $rootScope.totalCount = 0;

    })

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
  