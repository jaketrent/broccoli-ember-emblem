var path = require('path')
var Filter = require('broccoli-filter')
var compiler = require('ember-template-compiler')
var emblem = require('emblem')

module.exports = TemplateCompiler

TemplateCompiler.prototype = Object.create(Filter.prototype)
TemplateCompiler.prototype.constructor = TemplateCompiler

function TemplateCompiler (inputTree, options) {
  if (!(this instanceof TemplateCompiler)) {
    return new TemplateCompiler(inputTree, options)
  }
  this.inputTree = inputTree
  this.stripPathFromName = options.stripPathFromName
}

TemplateCompiler.prototype.extensions = ['embl', 'emblem']
TemplateCompiler.prototype.targetExtension = 'js'

TemplateCompiler.prototype.processString = function (string, relativePath) {
  var templateName = relativePath.substring(0, relativePath.lastIndexOf('\.'))

  if (this.stripPathFromName) {
    templateName = templateName.substring(this.stripPathFromName.length)
  }

  var compiled = emblem.precompile(compiler.EmberHandlebars, string)
  return 'Ember.TEMPLATES[\'' + templateName + '\'] = Ember.Handlebars.template(' + compiled + ')\n'
}
