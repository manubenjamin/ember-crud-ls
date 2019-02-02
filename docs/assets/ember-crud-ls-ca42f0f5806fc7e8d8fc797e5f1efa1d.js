"use strict"
define("ember-crud-ls/adapters/application",["exports","ember-local-storage/adapters/local"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-crud-ls/app",["exports","ember-crud-ls/resolver","ember-load-initializers","ember-crud-ls/config/environment"],function(e,t,r,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,r.default)(l,a.default.modulePrefix)
var i=l
e.default=i}),define("ember-crud-ls/components/book-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({})
e.default=t}),define("ember-crud-ls/helpers/app-version",["exports","ember-crud-ls/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r){function a(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=t.default.APP.version,i=a.versionOnly||a.hideSha,o=a.shaOnly||a.hideVersion,n=null
return i&&(a.showExtended&&(n=l.match(r.versionExtendedRegExp)),n||(n=l.match(r.versionRegExp))),o&&(n=l.match(r.shaRegExp)),n?n[0]:l}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a,e.default=void 0
var l=Ember.Helper.helper(a)
e.default=l}),define("ember-crud-ls/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("ember-crud-ls/helpers/route-action",["exports","ember-route-action-helper/helpers/route-action"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-crud-ls/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("ember-crud-ls/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-crud-ls/config/environment"],function(e,t,r){var a,l
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(a=r.default.APP.name,l=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(a,l)}
e.default=i}),define("ember-crud-ls/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r}),define("ember-crud-ls/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("ember-crud-ls/initializers/export-application-global",["exports","ember-crud-ls/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var a,l=t.default.exportApplicationGlobal
a="string"==typeof l?l:Ember.String.classify(t.default.modulePrefix),r[a]||(r[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var a={name:"export-application-global",initialize:r}
e.default=a}),define("ember-crud-ls/initializers/local-storage-adapter",["exports","ember-local-storage/initializers/local-storage-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("ember-crud-ls/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("ember-crud-ls/models/book",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default.Model.extend({name:t.default.attr("string"),author:t.default.attr("string"),coverImage:t.default.attr("string"),price:t.default.attr("boolean"),ratings:t.default.attr("boolean")})
e.default=r}),define("ember-crud-ls/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("ember-crud-ls/router",["exports","ember-crud-ls/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
r.map(function(){this.route("books")})
var a=r
e.default=a}),define("ember-crud-ls/routes/books",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return this.store.findAll("book")},actions:{createNewBook:function(e){this.store.createRecord("book",{name:e,author:"Chetan Bhagat",coverImage:"imageurl",price:400,ratings:4.8}).save()}}})
e.default=t}),define("ember-crud-ls/serializers/application",["exports","ember-local-storage/serializers/serializer"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-crud-ls/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-crud-ls/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"fwAUxdO6",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"ember-crud-ls/templates/application.hbs"}})
e.default=t}),define("ember-crud-ls/templates/books",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"I3YFdKfG",block:'{"symbols":[],"statements":[[1,[27,"book-list",null,[["title","books"],["Books",[22,0,["model"]]]]],false],[0,"\\n"],[1,[27,"input",null,[["value","enter"],[[22,0,["name"]],[27,"route-action",["createNewBook"],[["value"],["target.value"]]]]]],false]],"hasEval":false}',meta:{moduleName:"ember-crud-ls/templates/books.hbs"}})
e.default=t}),define("ember-crud-ls/templates/components/book-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"WvmGuyiz",block:'{"symbols":["book"],"statements":[[7,"h2"],[9],[1,[22,0,["title"]],false],[10],[0,"\\n\\n"],[7,"ul"],[9],[0,"\\n"],[4,"each",[[22,0,["books"]]],null,{"statements":[[0,"    "],[7,"li"],[9],[1,[22,1,["name"]],false],[10],[0,"\\n"]],"parameters":[1]},null],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-crud-ls/templates/components/book-list.hbs"}})
e.default=t}),define("ember-crud-ls/config/environment",[],function(){try{var e="ember-crud-ls/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(unescape(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(a){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("ember-crud-ls/app").default.create({name:"ember-crud-ls",version:"0.0.0+91fa0438"})
