import DS from 'ember-data';

export default DS.Model.extend({
articleId:DS.attr('number'),
articleName: DS.attr('string'),
blocks:DS.attr()
});
