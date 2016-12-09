'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('md2pngApp.util', [])
  .factory('Util', UtilService)
  .name;
