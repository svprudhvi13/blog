QUnit.module('ESLint | app');

QUnit.test('adapters/article.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'adapters/article.js should pass ESLint\n\n');
});

QUnit.test('adapters/edit-article.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'adapters/edit-article.js should pass ESLint\n\n2:8 - \'ArticleAdapter\' is defined but never used. (no-unused-vars)\n3:16 - \'DS\' is not defined. (no-undef)\n8:8 - \'id\' is assigned a value but never used. (no-unused-vars)\n10:15 - \'RSVP\' is not defined. (no-undef)\n11:6 - \'$\' is not defined. (no-undef)\n17:8 - \'run\' is not defined. (no-undef)\n20:8 - \'run\' is not defined. (no-undef)');
});

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('components/footer-blog.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/footer-blog.js should pass ESLint\n\n');
});

QUnit.test('components/full-article.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/full-article.js should pass ESLint\n\n');
});

QUnit.test('components/header-blog.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/header-blog.js should pass ESLint\n\n');
});

QUnit.test('components/menu-list.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/menu-list.js should pass ESLint\n\n6:7 - Unexpected console statement. (no-console)');
});

QUnit.test('components/sub-menu-list.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'components/sub-menu-list.js should pass ESLint\n\n');
});

QUnit.test('controllers/article.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/article.js should pass ESLint\n\n');
});

QUnit.test('controllers/create-article.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/create-article.js should pass ESLint\n\n10:9 - Unexpected console statement. (no-console)\n11:9 - Unexpected console statement. (no-console)\n14:7 - Unexpected console statement. (no-console)\n16:7 - Unexpected console statement. (no-console)\n18:7 - Unexpected console statement. (no-console)\n23:7 - Unexpected console statement. (no-console)\n26:13 - \'p\' is assigned a value but never used. (no-unused-vars)\n27:9 - Unexpected console statement. (no-console)\n30:25 - \'error\' is defined but never used. (no-unused-vars)\n32:9 - Unexpected console statement. (no-console)');
});

QUnit.test('controllers/edit-article.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/edit-article.js should pass ESLint\n\n10:9 - Unexpected console statement. (no-console)\n11:9 - Unexpected console statement. (no-console)\n14:7 - Unexpected console statement. (no-console)\n16:7 - Unexpected console statement. (no-console)\n18:7 - Unexpected console statement. (no-console)\n24:7 - Unexpected console statement. (no-console)\n26:7 - Unexpected console statement. (no-console)\n29:7 - Unexpected console statement. (no-console)\n31:13 - \'p\' is assigned a value but never used. (no-unused-vars)\n32:9 - Unexpected console statement. (no-console)\n35:25 - \'error\' is defined but never used. (no-unused-vars)\n37:9 - Unexpected console statement. (no-console)');
});

QUnit.test('models/article.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/article.js should pass ESLint\n\n');
});

QUnit.test('models/block.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/block.js should pass ESLint\n\n');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'router.js should pass ESLint\n\n');
});

QUnit.test('routes/article.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/article.js should pass ESLint\n\n5:3 - Unexpected console statement. (no-console)');
});

QUnit.test('routes/create-article.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/create-article.js should pass ESLint\n\n9:5 - Unexpected console statement. (no-console)\n10:5 - Unexpected console statement. (no-console)');
});

QUnit.test('routes/edit-article.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/edit-article.js should pass ESLint\n\n5:5 - Unexpected console statement. (no-console)');
});

QUnit.test('routes/home.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/home.js should pass ESLint\n\n3:8 - \'EmberObject\' is defined but never used. (no-unused-vars)\n20:1 - Unexpected console statement. (no-console)');
});

QUnit.test('routes/index.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/index.js should pass ESLint\n\n');
});

QUnit.test('serializers/article.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'serializers/article.js should pass ESLint\n\n');
});

QUnit.test('serializers/block.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'serializers/block.js should pass ESLint\n\n');
});

