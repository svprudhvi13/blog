import DS from 'ember-data';

export default DS.Model.extend({
  blockId:DS.attr('number'),
  blockTitle:DS.attr('string'),
  blockContent:DS.attr('string'),
//article: DS.belongsTo('article')
});
