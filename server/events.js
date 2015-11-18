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
    addBet: function(bet) {
        if(Meteor.user()) {
            Bets.insert({
                userId:  Meteor.user()._id,
                eventID: bet.eventID,
                createdAt: new Date()
            });
        }
    }
});