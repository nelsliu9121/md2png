import angular from 'angular';
import framework from '../framework';
import routing from './main.routes';

import {ConvertService} from './Convert.service';

export class MainController {
  constructor(Convert) {
    this.Convert = Convert;
  }

  submit() {
    this.Convert.png(null, {code: this.code}, res => {
      this.result = res;
      console.log(res);
    });
  }
}
MainController.$inject = ['Convert'];

export default angular.module('md2pngApp.main', [framework])
  .config(routing)
  .component('main', {
    template: require('./main.pug'),
    controller: MainController,
    controllerAs: '$ctrl'
  })
  .factory('Convert', ConvertService)
  .name;
