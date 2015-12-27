var AppView = Backbone.View.extend({
  initialize: function() {
    this.decisions = new Decisions();
    this.nameFormView = new AddDecisionView({collection: this.decisions});
  },

  render: function() {
    return this.$el.html(this.nameFormView.render());
  },


});