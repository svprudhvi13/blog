import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | edit article', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:edit-article');
    assert.ok(adapter);
  });
});
