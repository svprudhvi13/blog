QUnit.module('ESLint | tests');

QUnit.test('test-helper.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'test-helper.js should pass ESLint\n\n');
});

QUnit.test('unit/routes/article-test.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'unit/routes/article-test.js should pass ESLint\n\n');
});

QUnit.test('unit/routes/home-test.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
});

