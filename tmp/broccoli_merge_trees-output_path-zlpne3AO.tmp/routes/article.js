import Route from '@ember/routing/route';

export default Route.extend({
model(params){
  console.log(params);
  return this.get('store').findRecord('article',params.articleId);
},
actions:{
  show(articleId){
    this.transitionTo("/article?articleId="+articleId);
  },
  // user link-to
  createNewArticle(){
    this.transitionTo("create-article");
  }
}
});