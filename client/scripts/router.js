/**
 * Router configuration.
 * Application layout definition.
 */
Router.configure({
  layoutTemplate: 'layout'
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
