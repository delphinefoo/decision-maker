var DecisionView = Backbone.View.extend({
  initialize: function() {
    this.model.on('showDecisionTable', function() {
      this.render();
    }, this);
  },

  template: _.template('<td><%= name %></td><td><%= firstcrit %></td><td><%= secondcrit %></td><td><%= thirdcrit %></td>'),

  tagName: 'tr',

  render: function() {
  }
});