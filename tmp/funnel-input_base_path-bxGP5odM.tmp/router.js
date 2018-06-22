import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('article'
  // ,function(){
  //   this.route('',{ path: '/:articleId' });
  // }
);
  this.route('home');
  this.route('create-article');
  this.route('edit-article');
});

export default Router;
