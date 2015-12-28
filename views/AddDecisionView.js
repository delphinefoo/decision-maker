var AddDecisionView = Backbone.View.extend({

  events: {
    'submit': 'addNewDecision'
    //on submit:
    // - create a new model with name attribute as value in form
    // - hide this form and show criteria entry form
  },

  initialize: function() {

  },

  render: function() {
    var html = '<h1>Enter the title of a Decision To Make</h1>\
                <form>\
                  <input id="decisionName" type="text" placeholder="What decision do you need to make?">\
                  <input type="submit" value="Go">\
                </form>';
    this.$el.append(html);
    return this.$el;
  },

  addNewDecision: function(event) {
    event.preventDefault();
    var elementDecision = new DecisionModel({ name: $('#decisionName').val() });
    var addChoicesView = new AddChoicesView({ model: elementDecision });
    this.collection.addDecision(elementDecision);
    // $('#decisionName').val('');
    elementDecision.showChoices();
  }
});

