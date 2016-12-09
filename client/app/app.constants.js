'use strict';

import angular from 'angular';

export default angular.module('md2pngApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
