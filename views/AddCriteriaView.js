var AddCriteriaView = Backbone.View.extend({
  template: _.template(
    '<h1><%= name %></h1>\
    <h3>Add criteria to grade by</h3>\
    <form>\
      <ul>\
        <li>Criterion #1: <input id="crit1" type="text"></li>\
        <li>Criterion #2: <input id="crit2" type="text"></li>\
        <li>Criterion #3: <input id="crit3" type="text"></li>\
      </ul>\
      <button id="remove-crit">-</button>\<button id="add-crit">+</button>\
      <input id="submit-crit" type="submit" value="submit">\
    </form>'
  ),

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    $('.container').empty();
    $('.container').append(this.$el);
  },

  initialize: function() {
    this.model.on('showCriteria', function() {
      this.render();
    }, this);
    this.model.set('criteriaCount', 3);
  },

  events: {
    'click #add-crit': 'addCriteriaField',
    'click #remove-crit': 'removeCriteriaField',
    'submit': 'addCriteria'
  },

  addCriteriaField: function(event) {
    event.preventDefault();
    this.model.set('criteriaCount', this.model.get('criteriaCount') + 1);
    var html = '<li>Criterion #' + this.model.get('criteriaCount') + ': <input id="crit' + this.model.get('criteriaCount') + '" type="text"><li>';
    $('ul').append(html);
  },

  removeCriteriaField: function(event) {
    event.preventDefault();
    //remove last crit entry field
    $('li').last().remove();
    this.model.set('criteriaCount', this.model.get('criteriaCount') - 1);
  },

  addCriteria: function(event) {
    event.preventDefault();
    this.model.set('criteria', []);
    var decisionView = new DecisionView({model: this.model});
    //for each criteria in count,
    for (var i = 1; i <= this.model.get('criteriaCount'); i++) {
      //create criteria attributes
      // var critId = 'criteria' + i;
      this.model.get('criteria').push($('#crit' + i).val());
    }
    console.log(this.model);
    this.model.showDecisionTable();
  }


});