define('blog/components/menu-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      showBlock(blocks) {
        console.log(blocks);
      }
    }
  });
});