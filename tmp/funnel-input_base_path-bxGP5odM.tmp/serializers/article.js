import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  primaryKey: 'articleId',

//   serialize(snapshot, options){
//   let json=   this._super(...arguments);
// console.log(json);
//     console.log(snapshot);
//     console.log(options);
//
//   },
//   normalizeResponse(store, primaryModelClass, payload, id, requestType) {
// console.log(payload)
// console.log(JSON.stringify(payload))
// console.log(id);
// console.log(requestType);
// console.log(primaryModelClass);
// payload = {data:payload};
//
// console.log(JSON.stringify(payload));
//     // payload.data.attributes.amount = payload.data.attributes.cost.amount;
//     // payload.data.attributes.currency = payload.data.attributes.cost.currency;
//     //
//   //   delete payload.data.links;
//
//     return this._super(store, primaryModelClass, payload, id, requestType);
//   },

});
