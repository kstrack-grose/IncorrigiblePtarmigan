/* create view for all guests in backbone*/

// I'm a bit fuzzy on if this will actually work --Kiri
var GuestListView = Backbone.View.extend({
  // must be initialized with numOfDiningTables, which must direclty correspond to the IDs of table
  initialize: function() {
    // array of dining table views
    this.diningTables = [];
    // create each dining table view
    for (var i = 0; i < this.numOfDiningTables; i++) {
      this.diningTables.push(new DiningTblView({'id': i}));
    };

    this.render();
  },

  render: function() {
    this.$el.append(this.diningTables);
  }
});