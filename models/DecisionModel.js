var DecisionModel = Backbone.Model.extend({
  initialize: function() {

  },

  showChoices: function() {
    this.trigger('showChoices', this);
  },

  showCriteria: function() {
    this.trigger('showCriteria', this);
  },

  showDecisionTable: function() {
    this.trigger('showDecisionTable', this);
  }

});