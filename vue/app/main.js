var $ = require('../zepto.min.js');

// var ts = require('../TouchSlide.source.js');
var Vue = require('vue')
Vue.use(require('vue-resource'));

var Router = require('director').Router

var appOptions = require('./app.vue');
var app = new Vue(appOptions).$mount('#app');
var router = new Router();


router.on('/', function() {
    app.view = 'home';
    matetitle = 'asd';
});

router.on('/:page', function (page) {
    app.view = page+'-view'
});
router.on('/news/:id', function(id) {
    app.view = 'detail-news-view';
    app.postId = id;
    // console.log(app.postId);
});
router.on('/product/:id', function(id) {
    app.view = 'detail-product-view';
    app.productId = id;
    // console.log(app.postId);
});
router.on('/jobs/:id', function(id) {
    app.view = 'detail-jobs-view';
    app.productId = id;
    // console.log(app.postId);
});
router.on('/about/:id', function(id) {
    app.view = 'detail-about-view';
    app.aboutId = id;
    // console.log(app.postId);
});
router.init('/');
