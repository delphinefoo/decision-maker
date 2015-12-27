var Decisions = Backbone.Collection.extend({
  model: DecisionModel,

  addDecision: function(elements, options) {
    return this.add(elements, options);
  }
});