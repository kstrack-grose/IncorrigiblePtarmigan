/* create view for a single guest in backbone */

var GuestView = Backbone.View.extend({
  className: 'guest',

  // table row
  tagname: 'tr',

  //template with two data fields within a table row
  template: _.template('<td> <%= guestName %> </td> <td> <%= diningTableId %> </td>'),

  events: {
    'click': 'clickAction'
  },

  initialize: function() {
    // on any change, render the entry view again
    this.listenTo(this.model, 'change', this.render);
    // also, just render to begin wtih
    this.render();
  },

  render: function() {
    // creat the html
    var html = this.template({
      guestName = this.model.get('guestName'),
      diningTableId = this.model.get('diningTableId')
    });
    // and attach it to the table row!
    this.$el.html(html);
  },

  clickAction: function() {
    /* swap or edit or w/e */
  }

});