/**
 * Created by csata on 2015. 11. 17..
 */
/**
 * Publish the 8 latest messages.
 * @return {Mongo.Cursor} Sorted and limited collection objects.
 */
Meteor.publish('getEvents', function () {
    return Events.find({}, { sort: {createdAt: -1}});
});

Meteor.methods({
    /**
     * Save a event to the backend database.
     */
    addEvent: function(name, homePoints, guestPoints, xPoints) {
        if(Meteor.user()) {
            Events.insert({
                homePoints: homePoints,
                guestPoints : guestPoints,
                xPoints : xPoints,
                createdAt: new Date()
            });
        }
    }
});
