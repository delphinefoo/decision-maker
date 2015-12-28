var DecisionView = Backbone.View.extend({
  initialize: function() {
    this.model.on('showDecisionTable', function() {
      this.render();
    }, this);
  },

  events: {
    'click button': 'calculateScore'
  },

  tagName: 'table',
  //this.$el should be the basic table with headers
  template: _.template('<caption class="heading"><%= name %></caption>\
                          <thead>\
                            <tr><th>OPTIONS</th><th colspan="<%= criteriaCount %>">CRITERIA</th><th>TOTAL SCORE</th></tr>\
                          </thead>\
                          <thead>\
                            <tr>\
                              <th></th>\
                              <% _.forEach(this.model.get("criteria"), function(c) {%>'
                              + '<th><%= c %></th>'
                              + '<% })%>\
                              <th><button>calculate</button></th>\
                            </tr>\
                          </thead>'),

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    //render option rows
    this.model.get('optionsList').each(function(option) {
      var name = option.get('name');
      name = name.replace(/\s/g, '');
      console.log(name);
      var row = new RowView({ model: option, id: name });
      var rowEl = row.render();
      //add empty forms to each row
      for (var i = 1; i <= this.model.get('criteriaCount'); i++) {
        var html = '<td><input type="text" class="'+ name +'"></td>';
        rowEl.append(html);
      }
      this.$el.append(rowEl);
    }, this);

    $('.container').empty();
    $('.container').append(this.$el);
  },

  calculateScore: function() {
    this.model.get('optionsList').each(function(option) {
      //remove white spaces from name
      var scoreClass = '.' + option.get('name').replace(/\s/g, '');
      var total = 0;
      $(scoreClass).each(function(score) {
        total += parseInt($(scoreClass).val());
      });
      total /= this.model.get('optionsList').length;
      $('#' + option.get('name')).append('<td>'+total+'</td>');
    }, this);
  }
});