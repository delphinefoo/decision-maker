var RowView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= name %><td>'),

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this.$el;
  }


});