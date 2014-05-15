$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
}

var Users = Backbone.Collection.extend({
  url: '/api/users'
});

var User = Backbone.Model.extend({
  urlRoot: '/api/users'
});

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

var EditUserView = Backbone.View.extend({
  el: '.page',
  render: function(){
    var template = _.template($('#edit-user-template').html(), {});
    this.$el.html(template);
  },
  events: {
    'submit .edit-user-form': 'saveUser',
  },
  saveUser: function(ev) {
    var userDetails = $(ev.currentTarget).serializeObject();
    var user = new User();
    user.save(userDetails, {
      success: function(user){
        router.navigate('', {trigger: true});
      }
    });
    return false;
  }
});

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'new': 'editUser'
  }
});

var userView = new UserView();
var editUserView = new EditUserView();

var router = new Router();

router.on('route:home', function() {
  userView.render();
});
router.on('route:editUser', function() {
  editUserView.render();  
})

Backbone.history.start();