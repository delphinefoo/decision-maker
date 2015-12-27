var Options = Backbone.Collection.extend({
  model: OptionModel,

  addOption: function(elements, options) {
    return this.add(elements, options);
  }
});