/**
 * Created by Domnic on 14-7-7.
 */
angular.module('app.services',[])
    .factory('Deeps',function($http,$q,Config){


        return({
            pageDetail: function(id){
                var deferred = $q.defer();
                $http({
                    method:"jsonp",
                    url: Config.apiUrl + "api/get_page/",
                    params: {id:id,callback:'JSON_CALLBACK'}
                }).success(function(result){
                    deferred.resolve(result);

                }).error(function(result){

                });
                return deferred.promise;
            },
            jobsList: function(count,page,jobs){
                var deferred = $q.defer();

                    $http({
                        method: "jsonp",
                        url: Config.apiUrl + "api/get_posts",
                        params: {count:count,page:page,post_type:'jobs',callback:'JSON_CALLBACK'}
                    }).success(function(result){
                        deferred.resolve(result);
                    }).error(function(result){
                    });
                    return deferred.promise;


            },
            jobsDetail: function(id){
                var deferred = $q.defer();
                $http({
                        method: "jsonp",
                        url: Config.apiUrl + "api/get_post",
                        params: {id:id,post_type:'jobs',callback:'JSON_CALLBACK'}
                    }
                ).success(function(result){

                        deferred.resolve(result);
                    }).error(function(result){

                    });
                return deferred.promise;
            },
            newsList: function(count,page,slug){
                var deferred = $q.defer();
                if(slug){
                    $http({
                        method: "jsonp",
                        url: Config.apiUrl + "api/get_category_posts",
                        params: {count:count,page:page,slug:slug,callback:'JSON_CALLBACK'}
                    }).success(function(result){
                        deferred.resolve(result);
                    }).error(function(result){
                    });
                    return deferred.promise;
                }else{
                    $http({
                        method: "jsonp",
                        url: Config.apiUrl + "api/get_category_posts",
                        params: {count:count,page:page,id:1,callback:'JSON_CALLBACK'}
                    }).success(function(result){
                        deferred.resolve(result);
                    }).error(function(result){
                    });
                    return deferred.promise;
                }



            },
            newsDetail: function(id){
                var deferred = $q.defer();
                $http({
                        method: "jsonp",
                        url: Config.apiUrl + "api/get_post",
                        params: {id:id,callback:'JSON_CALLBACK'}
                    }
                ).success(function(result){

                        deferred.resolve(result);
                    }).error(function(result){

                    });
                return deferred.promise;
            },

            productList: function(count,page,slug){
                var deferred = $q.defer();
                if(slug){
                    $http({
                        method: "jsonp",
                        url: Config.apiUrl + "api/korkmaz/get_taxonomy_posts",
                        params: {taxonomy:'location',slug:slug,count:count,page:page,callback:'JSON_CALLBACK'}
                    }).success(function(result){
                        deferred.resolve(result);
                    }).error(function(result){
                    });
                    return deferred.promise;
                }else{
                    $http({
                        method: "jsonp",
                        url: Config.apiUrl + "api/get_posts",
                        params: {count:count,page:page,post_type:'product',callback:'JSON_CALLBACK'}
                    }).success(function(result){
                        deferred.resolve(result);
                    }).error(function(result){
                    });
                    return deferred.promise;
                }



            },
            productDetails: function(id){
                var deferred = $q.defer();
                $http({
                        method: "jsonp",
                        url: Config.apiUrl + "api/get_post",
                        params: {id:id,post_type:'product',callback:'JSON_CALLBACK'}
                    }
                ).success(function(result){

                        deferred.resolve(result);
                    }).error(function(result){

                    });
                return deferred.promise;
            }
        });
    })