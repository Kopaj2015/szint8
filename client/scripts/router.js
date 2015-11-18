/**
 * Router configuration.
 * Application layout definition.
 */
Router.configure({
  layoutTemplate: 'layout'
});

/**
 * Authentication beforeAction.
 * Prevents access to the user details page if user is not logged in.
 */
Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    this.redirect('events');
  } else {
    this.next();
  }
}, {
  only: ['userDetails']
});



Router.route('/rangList', {
  name:     'rangList',
  template: 'rangList'
});

Router.route('/events', {
  name:     'events',
  template: 'events'
});

/**
 * Router definition for the chat room page.
 * Subscribes to the required publications.
 */
Router.route('/', function(){
  this.redirect('events');
});
