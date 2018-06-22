define('blog/router', ['exports', 'blog/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('article'
    // ,function(){
    //   this.route('',{ path: '/:articleId' });
    // }
    );
    this.route('home');
    this.route('create-article');
    this.route('edit-article');
  });

  exports.default = Router;
});