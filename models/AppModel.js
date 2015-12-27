var AppModel = Backbone.Model.extend({
  initialize: function(params) {
    this.collection = new Decisions();
  }
});