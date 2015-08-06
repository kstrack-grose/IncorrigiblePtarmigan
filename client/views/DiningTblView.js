/* dining table views will be populated by guest views */

var DiningTblView = Backbone.View.extend({
  //instanticate it with a collection and an ID (num)

  // it will be a table of guests as table rows
  tagName: 'table',

  class: 'diningTbl',

  initialize: function() {
    // on any updates, re-render
    this.listenTo(this.collection, 'update', this.render);
    // render initally
    this.render();
  }, 

  render: function() {
    // empty out any existing entries
    this.$el.empty();

    // add headers
    this.$el.append('<tr><th>Guest Name</th><th>Table ID</th></tr>');

    //create an array of entries, each mapped to from a model
    this.entries = this.collection.models.map(function(guest) {
      // only include guests who are at this particular table
      if (guest.get('diningTableId') === this.id) {
        return new GuestView({
          model: guest
        });
      }
    });

    // obtain all the html
    var $els = this.entries.map(function(guest) {
      return entry.$el;
    });

    // finally, append them all
    this.$el.append($els);

    // and return. just in case.
    return this;
  }

});


/*

    this.$el.empty();

    this.entries = this.collection.models.map(function(model) {
      return new EntryView({
        model: model
      });
    });

    var $els = this.entries.map(function(entry) {
      return entry.$el;
    });

    this.$el.append($els);

    return this;
*/