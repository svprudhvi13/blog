define("blog/templates/components/menu-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kO7of8cJ", "block": "{\"symbols\":[\"article\"],\"statements\":[[0,\"\\n\"],[4,\"each\",[[22,[\"articles\"]]],null,{\"statements\":[[6,\"article\"],[10,\"class\",\"listing\"],[8],[0,\"\\n  \"],[6,\"br\"],[8],[9],[0,\"\\n\"],[4,\"link-to\",[\"article\",[26,\"query-params\",null,[[\"articleId\"],[[21,1,[\"articleId\"]]]]]],null,{\"statements\":[[1,[21,1,[\"articleName\"]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[2,\" \\n{{#each article.blocks as |b|}}\\n{{b.blockContent}}\\n{{/each}} \"],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[1,[20,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "blog/templates/components/menu-list.hbs" } });
});