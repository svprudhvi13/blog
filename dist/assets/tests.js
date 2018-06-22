'use strict';

define('blog/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/article.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/article.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/edit-article.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/edit-article.js should pass ESLint\n\n2:8 - \'ArticleAdapter\' is defined but never used. (no-unused-vars)\n3:16 - \'DS\' is not defined. (no-undef)\n8:8 - \'id\' is assigned a value but never used. (no-unused-vars)\n10:15 - \'RSVP\' is not defined. (no-undef)\n11:6 - \'$\' is not defined. (no-undef)\n17:8 - \'run\' is not defined. (no-undef)\n20:8 - \'run\' is not defined. (no-undef)');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/footer-blog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/footer-blog.js should pass ESLint\n\n');
  });

  QUnit.test('components/full-article.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/full-article.js should pass ESLint\n\n');
  });

  QUnit.test('components/header-blog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-blog.js should pass ESLint\n\n');
  });

  QUnit.test('components/menu-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/menu-list.js should pass ESLint\n\n6:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/sub-menu-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sub-menu-list.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/article.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/article.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/create-article.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/create-article.js should pass ESLint\n\n10:9 - Unexpected console statement. (no-console)\n11:9 - Unexpected console statement. (no-console)\n14:7 - Unexpected console statement. (no-console)\n16:7 - Unexpected console statement. (no-console)\n18:7 - Unexpected console statement. (no-console)\n23:7 - Unexpected console statement. (no-console)\n26:13 - \'p\' is assigned a value but never used. (no-unused-vars)\n27:9 - Unexpected console statement. (no-console)\n30:25 - \'error\' is defined but never used. (no-unused-vars)\n32:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/edit-article.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/edit-article.js should pass ESLint\n\n10:9 - Unexpected console statement. (no-console)\n11:9 - Unexpected console statement. (no-console)\n14:7 - Unexpected console statement. (no-console)\n16:7 - Unexpected console statement. (no-console)\n18:7 - Unexpected console statement. (no-console)\n24:7 - Unexpected console statement. (no-console)\n26:7 - Unexpected console statement. (no-console)\n29:7 - Unexpected console statement. (no-console)\n31:13 - \'p\' is assigned a value but never used. (no-unused-vars)\n32:9 - Unexpected console statement. (no-console)\n35:25 - \'error\' is defined but never used. (no-unused-vars)\n37:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('models/article.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/article.js should pass ESLint\n\n');
  });

  QUnit.test('models/block.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/block.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/article.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/article.js should pass ESLint\n\n5:3 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/create-article.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/create-article.js should pass ESLint\n\n9:5 - Unexpected console statement. (no-console)\n10:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/edit-article.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/edit-article.js should pass ESLint\n\n5:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/home.js should pass ESLint\n\n3:8 - \'EmberObject\' is defined but never used. (no-unused-vars)\n20:1 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/article.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/article.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/block.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/block.js should pass ESLint\n\n');
  });
});
define('blog/tests/integration/components/footer-blog-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | footer-blog', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VLakKBSy",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"footer-blog\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3Y7LIrE0",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"footer-blog\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('blog/tests/integration/components/full-article-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | full-article', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "+D8TooBF",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"full-article\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "QtMhY/jz",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"full-article\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('blog/tests/integration/components/header-blog-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | header-blog', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "aDJjbFA6",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"header-blog\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "xw5v4fNQ",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"header-blog\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('blog/tests/integration/components/menu-list-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | menu-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "kSvoUGb4",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"menu-list\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/USLFFwY",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"menu-list\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('blog/tests/integration/components/sub-menu-list-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | sub-menu-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "fx+6Ucxc",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"sub-menu-list\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ZV6OwyqW",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"sub-menu-list\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('blog/tests/test-helper', ['blog/app', 'blog/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('blog/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/footer-blog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/footer-blog-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/full-article-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/full-article-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/header-blog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/header-blog-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/menu-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/menu-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/sub-menu-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sub-menu-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/article-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/article-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/edit-article-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/edit-article-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/article-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/article-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-article-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-article-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-article-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-article-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/article-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/article-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/block-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/block-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/article-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/article-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/create-article-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-article-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-article-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-article-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/article-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/article-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/block-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/block-test.js should pass ESLint\n\n');
  });
});
define('blog/tests/unit/adapters/article-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | article', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:article');
      assert.ok(adapter);
    });
  });
});
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
define('blog/tests/unit/controllers/article-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | article', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:article');
      assert.ok(controller);
    });
  });
});
define('blog/tests/unit/controllers/create-article-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | create-article', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:create-article');
      assert.ok(controller);
    });
  });
});
define('blog/tests/unit/controllers/edit-article-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-article', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:edit-article');
      assert.ok(controller);
    });
  });
});
define('blog/tests/unit/models/article-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | article', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('article', {}));
      assert.ok(model);
    });
  });
});
define('blog/tests/unit/models/block-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | block', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('block', {}));
      assert.ok(model);
    });
  });
});
define('blog/tests/unit/routes/article-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | article', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:article');
      assert.ok(route);
    });
  });
});
define('blog/tests/unit/routes/create-article-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | create-article', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:create-article');
      assert.ok(route);
    });
  });
});
define('blog/tests/unit/routes/edit-article-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-article', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:edit-article');
      assert.ok(route);
    });
  });
});
define('blog/tests/unit/routes/home-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home');
      assert.ok(route);
    });
  });
});
define('blog/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('blog/tests/unit/serializers/article-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | article', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('article');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = Ember.run(() => store.createRecord('article', {}));

      let serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
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
define('blog/config/environment', [], function() {
  var prefix = 'blog';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('blog/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
