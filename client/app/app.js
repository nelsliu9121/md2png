import angular from 'angular';

import {routeConfig} from './app.config';

import framework from './framework';

import main from './main/main.component';

import {header} from './layout/header.component';

import './app.scss';

angular
  .module('md2pngApp', [
    framework,
    main
  ])
  .config(routeConfig)
  .component('header', header);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['md2pngApp'], {strictDi: true});
});
