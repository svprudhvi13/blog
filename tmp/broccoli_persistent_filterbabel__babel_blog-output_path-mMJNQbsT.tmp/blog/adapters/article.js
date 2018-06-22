define("blog/adapters/article", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    host: "http://localhost:8080",
    pathForType() {
      return "articles";
    }

  } //  updateRecord(store, type, snapshot) {
  //   let data = this.serialize(snapshot, { includeId: true });
  //   let id = snapshot.id;
  //
  //   return new RSVP.Promise(function(resolve, reject) {
  //     $.ajax({
  //       type: 'PUT',
  //       url: '"http://localhost:8080/article/edit',
  //       dataType: 'json',
  //       data: data
  //     }).then(function(data) {
  //       run(null, resolve, data);
  //     }, function(jqXHR) {
  //       jqXHR.then = null; // tame jQuery's ill mannered promises
  //       run(null, reject, jqXHR);
  //     });
  //   });
  // }
  );
});