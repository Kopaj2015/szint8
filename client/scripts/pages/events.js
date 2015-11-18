/**
 * Created by csata on 2015. 11. 17..
 */
Meteor.subscribe("getEvents");

Template.events.helpers({
    /**
     * Get the events from the database.
     * @returns {Mongo.Cursor} Mongo Cursor of the events.
     */
    getEvents:function() {
        return Events.find({});
    }

});
/**
 *
 */
Template.events.events({

    "click .toggle-checked": function(event) {
        event.preventDefault();
        Meteor.call('addBet', event.target.id, Meteor.user()._id, event.target.value);
    }
});