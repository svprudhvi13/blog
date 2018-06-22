define('blog/tests/unit/serializers/block-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | block', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('block');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = Ember.run(() => store.createRecord('block', {}));

      let serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});