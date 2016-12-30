'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file
 * Created by hanan on 16/10/15.
 */
var Hello = function Hello(r) {
  return require(['views/hello'], r);
};
var Home = function Home(r) {
  return require(['views/home'], r);
};
var List = function List(r) {
  return require(['views/list'], r);
};

var Login = function Login(r) {
  return require(['views/ucenter/login'], r);
};
var User = function User(r) {
  return require(['views/ucenter/index'], r);
};
var UserHome = function UserHome(r) {
  return require(['views/ucenter/userHome'], r);
};
var Setting = function Setting(r) {
  return require(['views/ucenter/setting'], r);
};

var NotFound = function NotFound(r) {
  return require(['views/notfound'], r);
};

// 根目录
var rootPath = '';

// 页面路由
var routes = [{ path: '', redirect: { name: 'home' } }, { path: '/', component: Home, name: 'home' }, { path: '/hello', component: Hello, name: 'hello', meta: { requiresAuth: true } }, { path: '/list', component: List, name: 'list' }, { path: '/login', component: Login, name: 'login' }, { path: '/ucenter', component: User, name: 'user', meta: { requiresAuth: true },
  children: [{ path: 'setting', component: Setting, name: 'setting' }, { path: '', component: UserHome, name: 'userhome' }]
}].map(function (route) {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
routes.push({ path: '*', component: NotFound, name: 'notfound' });

exports.default = routes;
//# sourceMappingURL=index.js.map