define('blog/controllers/article', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    articleId: null,
    queryParams: ['articleId']
  });
});