import Route from '@ember/routing/route';
export default Route.extend({

  model(){
  //    return this.get('store').findRecord('article',1);
var m = this.get('store').createRecord('article');
  var blocks = m.get('blocks');
  if(blocks==undefined){
    console.log(m);
    console.log("Model's blocks array is null.")
    blocks=[];
    var firstBlock = {blockTitle:"",blockContent:""};
    blocks.pushObject(firstBlock);
    m.set('blocks',blocks);
  }
  return m;
  }
});
