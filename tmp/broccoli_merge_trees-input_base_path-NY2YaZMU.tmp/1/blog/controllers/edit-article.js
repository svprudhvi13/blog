define('blog/controllers/edit-article', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    articleId: null,
    queryParams: ['articleId'],
    actions: {
      createNewBlock(model) {
        var blocks = model.get('blocks');
        if (blocks == undefined) {
          console.log(model);
          console.log("Model's blocks array is null.");
          blocks = [];
        }
        console.log(blocks);
        var block = { blockTitle: "", blockContent: "" };
        console.log(block);
        blocks.pushObject(block);
        console.log(blocks);
        model.set('blocks', blocks);
      },
      saveArticle(model) {
        var k = this.get('router');
        var router = model.get('router');
        console.log(router);

        console.log(model);
        let store = this.get('store');

        console.log(store);
        model.save().then(function (resp) {
          var p = this;
          console.log("saved");
          k.transitionTo("/article?articleId=" + resp.articleId);
          // handle a server response if you want
        }).catch(function (error) {
          // handle an error, maybe by setting an error message like this
          console.log("failed");
        });
        this.set('model', model);

        // model.save().then(function(resp){
        //   var p = this;
        //   console.log("saved")
        //   k.transitionTo("/article?articleId="+resp.articleId);
        //   // handle a server response if you want
        // }).catch(function(error){
        //   // handle an error, maybe by setting an error message like this
        //   console.log("failed");
        // })

      }
    }
  });
});