define('blog/models/block', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    blockId: _emberData.default.attr('number'),
    blockTitle: _emberData.default.attr('string'),
    blockContent: _emberData.default.attr('string')
    //article: DS.belongsTo('article')
  });
});