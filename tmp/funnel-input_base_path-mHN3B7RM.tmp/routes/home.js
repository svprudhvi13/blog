import Route from '@ember/routing/route';

import EmberObject from '@ember/object';
export default Route.extend({

  model(){
//
//     Ember.$.getJSON("http://localhost:8080/articles?page=0&size=10").then((data)=>{
//
//       this.set('articleData', data.content);
// console.log(JSON.stringify(this.get('articleData')));
// return this.get('articleData');
//});
//let articles =  this.get('store').findAll('article');
let qArticles = this.get('store').findAll('article')/*.then(function(data){
  console.log("Fetch all records success.");
  console.log(JSON.stringify(data));
  return data;
});*/
console.log(qArticles);
return qArticles;


  }
});
