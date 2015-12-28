var DecisionView = Backbone.View.extend({
  initialize: function() {
    this.model.on('showDecisionTable', function() {
      this.render();
    }, this);
  },

  tagName: 'table',
  //this.$el should be the basic table with headers
  template: _.template('<caption class="heading"><%= name %></caption>\
                          <thead>\
                            <tr><th>OPTIONS</th><th colspan="<%= criteriaCount %>">CRITERIA</th></tr>\
                          </thead>\
                          <thead>\
                            <tr>\
                              <th></th>\
                              <% _.forEach(this.model.get("criteria"), function(c) {%>'
                              + '<th><%= c %></th>'
                              + '<% })%>\
                            </tr>\
                          </thead>'),

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    //render option rows
    this.model.get('optionsList').each(function(option) {
      var row = new RowView({ model: option });
      var rowEl = row.render();
      //add empty forms to each row
      for (var i = 1; i <= this.model.get('criteriaCount'); i++) {
        var html = '<td><input type="text"></td>';
        rowEl.append(html);
      }
      this.$el.append(rowEl);
    }, this);

    $('body').empty();
    $('body').append(this.$el);
  }
});