var DecisionView = Backbone.View.extend({
  initialize: function() {
    this.model.on('showDecisionTable', function() {
      this.render();
    }, this);
  },
  //this.$el should be the basic table with headers
  template: _.template('<table>\
                          <caption><%= name %></caption>\
                          <thead>\
                            <tr><th>OPTIONS</th><th colspan="<%= criteriaCount %>">CRITERIA</th></tr>\
                          </thead>\
                          <thead>\
                            <tr>\
                              <th></th<>\
                              <% _.forEach(this.model.get("criteria"), function(c) {%>'
                              + '<th><%= c %></th>'
                              + '<% })%>\
                            </tr>\
                          </thead>\
                        </table>'),

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    var headerRow = '<tr id="criteria"><th></th></tr>'
    _.forEach(this.model.get('criteria'), function(c) {
      $(headerRow).append('<th>'+c+'</th>');
    });
    this.$el.append(headerRow);
    $('body').empty();
    $('body').append(this.$el);
  }
});