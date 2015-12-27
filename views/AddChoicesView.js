var AddChoicesView = Backbone.View.extend({

  initialize: function() {
    this.model.on('showChoices', function() {
      this.render();
    }, this);
    this.model.set('choiceCount', 3);
  },

  template: _.template(
    '<h1><%= name %></h1>\
    <h3>Add options to decide from</h3>\
    <form>\
      <ul>\
        <li>Option #1: <input id="choice1" type="text"></li>\
        <li>Option #2: <input id="choice2" type="text"></li>\
        <li>Option #3: <input id="choice3" type="text"></li>\
      </ul>\
      <button id="remove-choice">-</button><button id="add-choice">+</button><br/>\
      <input id="submit-choices" type="submit" value="submit">\
    </form>'
  ),

  events: {
    'click #add-choice': 'addChoiceField',
    'click #remove-choice': 'removeChoiceField',
    'submit': 'addChoices'
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    $('body').empty();
    $('body').append(this.$el);
  },

  addChoiceField: function(event) {
    event.preventDefault();
    this.model.set('choiceCount', this.model.get('choiceCount') + 1);
    var html = '<li>Choice #' + this.model.get('choiceCount') + ': <input id="choice' + this.model.get('choiceCount') + '" type="text"></li>';
    $('ul').append(html);
  },

  removeChoiceField: function(event) {
    event.preventDefault();
    //remove last crit entry field
    $('li').last().remove();
    this.model.set('choiceCount', this.model.get('choiceCount') - 1);
  },

  addChoices: function(event) {
    event.preventDefault();
    var options = new Options();
    var addCriteriaView = new AddCriteriaView({model: this.model});
    //for each criteria in count,
    for (var i = 1; i <= this.model.get('choiceCount'); i++) {
      //create option models
      var choiceId = '#choice' + i;
      var newOption = new OptionModel({name: $(choiceId).val(), order: i });
      //add options to the collection
      options.addOption(newOption);
    }
    //nest options collection in this decision model as an attribute
    this.model.set('optionsList', options);
    this.model.showCriteria();
  }
});