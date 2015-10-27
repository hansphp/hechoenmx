'use strict';

import template from 'common/user.menu/user.menu';
import controller from 'common/user.menu/user.menu.controller';

export default (UserService) => {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};