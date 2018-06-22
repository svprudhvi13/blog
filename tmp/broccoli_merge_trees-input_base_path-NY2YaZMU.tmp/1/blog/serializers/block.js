define('blog/serializers/block', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPISerializer.extend({
        primaryKey: 'blockId'
    });
});