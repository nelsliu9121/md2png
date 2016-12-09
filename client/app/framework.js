import angular from 'angular';

import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import 'angular-material';
// import ngMessages from 'angular-messages';

import 'angular-material/angular-material.css';

const framework = 'md2pngApp.framework';
angular.module(framework, [
  ngAnimate,
  ngCookies,
  ngResource,
  ngSanitize,
  uiRouter,
  'ngMaterial'
]);

export default framework;
