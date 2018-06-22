define('blog/tests/unit/adapters/edit-article-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | edit article', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:edit-article');
      assert.ok(adapter);
    });
  });
});