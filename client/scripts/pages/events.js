/**
 * Created by csata on 2015. 11. 17..
 */
Template.events.events({
    /**
     * Listen to submit events on the form.
     * If fired, save a message to the database.
     * @param event The event object.
     */
    'submit form': function(event) {
        event.preventDefault();
        Meteor.call('addMessage', event.target.message.value);
        event.target.message.value = '';
    },
    /**
     * Listen to keypress events on the textarea.
     * When the 'enter' key is pressed, save the message to the database.
     * @param event The event object.
     */
    'keypress textarea': function(event) {
        if(event.keyCode == 13) {
            event.preventDefault();
            Meteor.call('addEvent', event.target.value);
            event.target.value = '';
        }
    }
});

Template.events.helpers({
    /**
     * Get the events from the database.
     * @returns {Mongo.Cursor} Mongo Cursor of the events.
     */
    getEvent: function() {
        return Events.find({}, { sort: {createdAt: -1}});
    }

});
