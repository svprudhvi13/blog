define('blog/models/article', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    articleId: _emberData.default.attr('number'),
    articleName: _emberData.default.attr('string'),
    blocks: _emberData.default.attr()
  });
});