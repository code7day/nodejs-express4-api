var Users = Backbone.Collection.extend({
  url: '/api/users'
})

var UserView = Backbone.View.extend({
  el: '.page',
  render: function() {
    var that = this;
    var users = new Users();
    users.fetch({
      success: function(users) {
        var template = _.template($('#user-list-template').html(), {users: users.models});
        that.$el.html(template);
      }
    });
  }
});

var Router = Backbone.Router.extend({
  routes: {
    '': 'home'
  }
});

var userView = new UserView();

var router = new Router();
router.on('route:home', function() {
  userView.render();
});

Backbone.history.start();