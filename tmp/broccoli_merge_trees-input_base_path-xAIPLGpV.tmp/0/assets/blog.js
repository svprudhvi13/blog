"use strict";



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
define('blog/adapters/edit-article', ['exports', 'blog/adapters/article'], function (exports, _article) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = DS.ArticleAdapter.extend({
    host: "http://localhost:8080",

    updateRecord(store, type, snapshot) {
      let data = this.serialize(snapshot, { includeId: true });
      let id = snapshot.id;

      return new RSVP.Promise(function (resolve, reject) {
        $.ajax({
          type: 'PUT',
          url: '"http://localhost:8080/article/edit',
          dataType: 'json',
          data: data
        }).then(function (data) {
          run(null, resolve, data);
        }, function (jqXHR) {
          jqXHR.then = null; // tame jQuery's ill mannered promises
          run(null, reject, jqXHR);
        });
      });
    }
  });
});
define('blog/app', ['exports', 'blog/resolver', 'ember-load-initializers', 'blog/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('blog/components/footer-blog', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('blog/components/full-article', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('blog/components/header-blog', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('blog/components/menu-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      showBlock(blocks) {
        console.log(blocks);
      }
    }
  });
});
define('blog/components/sub-menu-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('blog/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('blog/controllers/article', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    articleId: null,
    queryParams: ['articleId']
  });
});
define('blog/controllers/create-article', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    articleId: null,
    queryParams: ['articleId'],
    actions: {
      createNewBlock(model) {
        var blocks = model.get('blocks');
        if (blocks == undefined) {
          console.log(model);
          console.log("Model's blocks array is null.");
          blocks = [];
        }
        console.log(blocks);
        var block = { blockTitle: "", blockContent: "" };
        console.log(block);
        blocks.pushObject(block);
        console.log(blocks);
        model.set('blocks', blocks);
      },
      saveArticle(model) {
        var k = this;
        console.log(model);

        model.save().then(function (resp) {
          var p = this;
          console.log("saved");
          k.transitionTo("/article?articleId=" + resp.articleId);
          // handle a server response if you want
        }).catch(function (error) {
          // handle an error, maybe by setting an error message like this
          console.log("failed");
        });
      }
    }
  });
});
define('blog/controllers/edit-article', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    articleId: null,
    queryParams: ['articleId'],
    actions: {
      createNewBlock(model) {
        var blocks = model.get('blocks');
        if (blocks == undefined) {
          console.log(model);
          console.log("Model's blocks array is null.");
          blocks = [];
        }
        console.log(blocks);
        var block = { blockTitle: "", blockContent: "" };
        console.log(block);
        blocks.pushObject(block);
        console.log(blocks);
        model.set('blocks', blocks);
      },
      saveArticle(model) {
        var k = this.get('router');
        var router = model.get('router');
        console.log(router);

        console.log(model);
        let store = this.get('store');

        console.log(store);
        model.save().then(function (resp) {
          var p = this;
          console.log("saved");
          k.transitionTo("/article?articleId=" + resp.articleId);
          // handle a server response if you want
        }).catch(function (error) {
          // handle an error, maybe by setting an error message like this
          console.log("failed");
        });
        this.set('model', model);

        // model.save().then(function(resp){
        //   var p = this;
        //   console.log("saved")
        //   k.transitionTo("/article?articleId="+resp.articleId);
        //   // handle a server response if you want
        // }).catch(function(error){
        //   // handle an error, maybe by setting an error message like this
        //   console.log("failed");
        // })

      }
    }
  });
});
define('blog/helpers/app-version', ['exports', 'blog/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('blog/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('blog/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('blog/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'blog/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('blog/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('blog/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('blog/initializers/export-application-global', ['exports', 'blog/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("blog/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('blog/models/article', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    articleId: _emberData.default.attr('number'),
    articleName: _emberData.default.attr('string'),
    blocks: _emberData.default.attr()
  });
});
define('blog/models/block', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    blockId: _emberData.default.attr('number'),
    blockTitle: _emberData.default.attr('string'),
    blockContent: _emberData.default.attr('string')
    //article: DS.belongsTo('article')
  });
});
define('blog/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('blog/router', ['exports', 'blog/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('article'
    // ,function(){
    //   this.route('',{ path: '/:articleId' });
    // }
    );
    this.route('home');
    this.route('create-article');
    this.route('edit-article');
  });

  exports.default = Router;
});
define('blog/routes/article', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model(params) {
      console.log(params);
      return this.get('store').findRecord('article', params.articleId);
    },
    actions: {
      show(articleId) {
        this.transitionTo("/article?articleId=" + articleId);
      },
      // user link-to
      createNewArticle() {
        this.transitionTo("create-article");
      }
    }
  });
});
define('blog/routes/create-article', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    model() {
      //    return this.get('store').findRecord('article',1);
      var m = this.get('store').createRecord('article');
      var blocks = m.get('blocks');
      if (blocks == undefined) {
        console.log(m);
        console.log("Model's blocks array is null.");
        blocks = [];
        var firstBlock = { blockTitle: "", blockContent: "" };
        blocks.pushObject(firstBlock);
        m.set('blocks', blocks);
      }
      return m;
    }
  });
});
define('blog/routes/edit-article', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model(params) {
      console.log(params);
      return this.get('store').findRecord('article', params.articleId);
    }
  });
});
define('blog/routes/home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    model() {
      //
      //     Ember.$.getJSON("http://localhost:8080/articles?page=0&size=10").then((data)=>{
      //
      //       this.set('articleData', data.content);
      // console.log(JSON.stringify(this.get('articleData')));
      // return this.get('articleData');
      //});
      //let articles =  this.get('store').findAll('article');
      let qArticles = this.get('store').findAll('article'); /*.then(function(data){
                                                            console.log("Fetch all records success.");
                                                            console.log(JSON.stringify(data));
                                                            return data;
                                                            });*/
      console.log(qArticles);
      return qArticles;
    }
  });
});
define('blog/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel() {

      this.replaceWith('home');
    }
  });
});
define('blog/serializers/article', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONSerializer.extend({

    primaryKey: 'articleId'

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
});
define('blog/serializers/block', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPISerializer.extend({
        primaryKey: 'blockId'
    });
});
define('blog/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("blog/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZMeFevHj", "block": "{\"symbols\":[],\"statements\":[[2,\" {{welcome-page}} \"],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n  \"],[4,\"link-to\",[\"home\"],null,{\"statements\":[[0,\"Home\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"link-to\",[\"create-article\"],null,{\"statements\":[[0,\"  \"],[6,\"button\"],[10,\"class\",\"btn btn-info\"],[8],[0,\"\\n    Create Article\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "blog/templates/application.hbs" } });
});
define("blog/templates/article", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FyZbdc5u", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[26,\"full-article\",null,[[\"article\"],[[22,[\"model\"]]]]],false],[0,\"\\n\"],[6,\"button\"],[10,\"class\",\"btn btn-info\"],[3,\"action\",[[21,0,[]],\"createNewArticle\"]],[8],[0,\"Create Article\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "blog/templates/article.hbs" } });
});
define("blog/templates/components/footer-blog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PpBOC/1s", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[8],[0,\"\\n  \"],[2,\" <span><img src=\\\"assets/BlockedMessage.png\\\"/></span> \"],[0,\"\\n  \"],[6,\"span\"],[8],[0,\"Home\"],[9],[0,\"\\n  \"],[6,\"span\"],[8],[1,[26,\"input\",[[26,\"-input-type\",[[22,[\"text\"]]],null]],[[\"type\"],[[22,[\"text\"]]]]],false],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "blog/templates/components/footer-blog.hbs" } });
});
define("blog/templates/components/full-article", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "I0br7FVh", "block": "{\"symbols\":[\"b\"],\"statements\":[[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n\"],[6,\"h1\"],[10,\"class\",\"col-4 col-md-4 text-left h1\"],[8],[1,[22,[\"article\",\"articleName\"]],false],[9],[0,\"\\n\"],[4,\"link-to\",[\"edit-article\",[26,\"query-params\",null,[[\"articleId\"],[[22,[\"article\",\"articleId\"]]]]]],null,{\"statements\":[[0,\"Edit Article \"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"h6\"],[10,\"class\",\"col-4 col-md-4 text-right h6\"],[8],[0,\" \\\"add author name here\\\"\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"article\",\"blocks\"]]],null,{\"statements\":[[6,\"p\"],[10,\"class\",\"col-md-12\"],[8],[1,[21,1,[\"blockTitle\"]],false],[9],[0,\"\\n\"],[6,\"p\"],[10,\"class\",\"col-md-12\"],[8],[1,[21,1,[\"blockContent\"]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "blog/templates/components/full-article.hbs" } });
});
define("blog/templates/components/header-blog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "X99xzEOt", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[8],[0,\"\\n  \"],[6,\"span\"],[8],[0,\"Logo Text\"],[9],[0,\"\\n  \"],[6,\"span\"],[8],[0,\"Home\"],[9],[0,\"\\n  \"],[6,\"span\"],[8],[1,[26,\"input\",[[26,\"-input-type\",[[22,[\"text\"]]],null]],[[\"type\"],[[22,[\"text\"]]]]],false],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\\n\\n\"],[1,[20,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "blog/templates/components/header-blog.hbs" } });
});
define("blog/templates/components/menu-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kO7of8cJ", "block": "{\"symbols\":[\"article\"],\"statements\":[[0,\"\\n\"],[4,\"each\",[[22,[\"articles\"]]],null,{\"statements\":[[6,\"article\"],[10,\"class\",\"listing\"],[8],[0,\"\\n  \"],[6,\"br\"],[8],[9],[0,\"\\n\"],[4,\"link-to\",[\"article\",[26,\"query-params\",null,[[\"articleId\"],[[21,1,[\"articleId\"]]]]]],null,{\"statements\":[[1,[21,1,[\"articleName\"]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[2,\" \\n{{#each article.blocks as |b|}}\\n{{b.blockContent}}\\n{{/each}} \"],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[1,[20,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "blog/templates/components/menu-list.hbs" } });
});
define("blog/templates/components/sub-menu-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ex8BwIAa", "block": "{\"symbols\":[\"block\"],\"statements\":[[0,\"\\n\"],[4,\"link-to\",null,null,{\"statements\":[[1,[22,[\"article\",\"articleName\"]],false]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"each\",[[22,[\"article\",\"blocks\"]]],null,{\"statements\":[[1,[21,1,[\"blockTitle\"]],false],[0,\"\\n\"],[1,[21,1,[\"blockContent\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "blog/templates/components/sub-menu-list.hbs" } });
});
define("blog/templates/create-article", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "w5yiRfbw", "block": "{\"symbols\":[\"b\",\"error\"],\"statements\":[[0,\"\\n\"],[6,\"h2\"],[8],[0,\"Write a new story\"],[9],[0,\"\\n\"],[6,\"button\"],[3,\"action\",[[21,0,[]],\"createNewBlock\",[22,[\"model\"]]]],[8],[0,\"Add New block \"],[9],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"adapterError\",\"errors\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"error\"],[8],[1,[21,2,[\"detail\"]],false],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[1,[26,\"input\",null,[[\"type\",\"id\",\"value\",\"placeholder\"],[\"text\",\"articleName\",[22,[\"model\",\"articleName\"]],\"What needs to be done?\"]]],false],[0,\"\\n\\n\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\\n\"],[4,\"each\",[[22,[\"model\",\"blocks\"]]],null,{\"statements\":[[1,[26,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"blockTitle\",[21,1,[\"blockTitle\"]],\"Block Title\"]]],false],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[1,[26,\"textarea\",null,[[\"class\",\"value\",\"placeholder\"],[\"blockContent\",[21,1,[\"blockContent\"]],\"Block Content\"]]],false],[0,\"\\n  \"],[6,\"br\"],[8],[9],[0,\"\\n  \"],[6,\"br\"],[8],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[6,\"button\"],[3,\"action\",[[21,0,[]],\"saveArticle\",[22,[\"model\"]]]],[8],[0,\"Save Article\"],[9],[0,\"\\n\\n\"],[1,[20,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "blog/templates/create-article.hbs" } });
});
define("blog/templates/edit-article", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jNxmrWgc", "block": "{\"symbols\":[\"b\",\"error\"],\"statements\":[[0,\"\\n\"],[6,\"h2\"],[8],[0,\"Edit the story\"],[9],[0,\"\\n\"],[6,\"button\"],[3,\"action\",[[21,0,[]],\"createNewBlock\",[22,[\"model\"]]]],[8],[0,\"Add New block \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"adapterError\",\"errors\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",\"error\"],[8],[1,[21,2,[\"detail\"]],false],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[1,[26,\"input\",null,[[\"type\",\"id\",\"value\",\"placeholder\"],[\"text\",\"articleName\",[22,[\"model\",\"articleName\"]],\"What needs to be done?\"]]],false],[0,\"\\n\\n\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\\n\"],[4,\"each\",[[22,[\"model\",\"blocks\"]]],null,{\"statements\":[[1,[26,\"input\",null,[[\"type\",\"class\",\"value\",\"placeholder\"],[\"text\",\"blockTitle\",[21,1,[\"blockTitle\"]],\"Block Title\"]]],false],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[1,[26,\"textarea\",null,[[\"class\",\"value\",\"placeholder\"],[\"blockContent\",[21,1,[\"blockContent\"]],\"Block Content\"]]],false],[0,\"\\n  \"],[6,\"br\"],[8],[9],[0,\"\\n  \"],[6,\"br\"],[8],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[6,\"button\"],[3,\"action\",[[21,0,[]],\"saveArticle\",[22,[\"model\"]]]],[8],[0,\"Save Article\"],[9],[0,\"\\n\"],[1,[20,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "blog/templates/edit-article.hbs" } });
});
define("blog/templates/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WYFq61vR", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"header-blog\"],false],[0,\"\\n\\n\"],[1,[26,\"menu-list\",null,[[\"articles\"],[[22,[\"model\"]]]]],false],[0,\"\\n\\n\"],[1,[20,\"footer-blog\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "blog/templates/home.hbs" } });
});
define("blog/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "a7oRhD7F", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "blog/templates/index.hbs" } });
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

if (!runningTests) {
  require("blog/app")["default"].create({"name":"blog","version":"0.0.0"});
}
//# sourceMappingURL=blog.map
