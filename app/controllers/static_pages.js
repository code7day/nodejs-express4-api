module.exports = {
  index: function(req, res) {
    res.render('static_pages/index');
  },
  userIndex: function(req, res) {
    res.render('users/index')
  }
};