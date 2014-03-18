# broccoli-ember-emblem

A filter for Broccoli that compiles Emblem templates and attaches them to Ember.TEMPLATES.

## Installation

```bash
npm install --save-dev broccoli-ember-emblem
```

## Usage

```js
var emblem = require('broccoli-ember-emblem');
tree = emblem(tree, options);
```

## Output Example

```js
Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) { /**/ })
// ...for each `.embl` or `.emblem` file in your tree
```

### Options

#### stripPathFromName

Depending on where you destDir is for your tree, you may want to ignore some part of that path.  For example, if you have an `application.emblem` file that you put in a `tmpl/` directory previous to this filter, you may want to ignore that directory with this option:

```js
emblem(tree, {
  stripPathFromName: 'tmpl/'
})
```

Then the `emblem` filter output will produce the correct template naming, such as:

```js
Ember.TEMPLATES['application'] = /* compiled emblem function */
```
