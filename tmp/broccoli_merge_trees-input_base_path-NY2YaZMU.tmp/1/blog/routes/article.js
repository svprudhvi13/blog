define('blog/routes/article', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model(params) {
      console.log(params);
      return this.get('store').findRecord('article', params.articleId);
    },
    actions: {
      show(articleId) {
        this.transitionTo("/article?articleId=" + articleId);
      },
      // user link-to
      createNewArticle() {
        this.transitionTo("create-article");
      }
    }
  });
});