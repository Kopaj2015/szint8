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
 * Router definition for the events page.
 */
Router.route('/', function(){
  this.redirect('events');
});
