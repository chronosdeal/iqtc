module.exports = function(app) {
    var methods = require('../controllers/appController');
  
    // todoList Routes
    app.route('/users')
      .get(methods.list_all_users)
      .post(methods.create_a_user);
     
     app.route('/users/:userId')
      .get(methods.read_a_user)
      .put(methods.update_a_user)
      .delete(methods.delete_a_user);
};