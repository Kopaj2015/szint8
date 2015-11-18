/**
 * Publish the events.
 * @return {Mongo.Cursor} Sorted and limited collection objects.
 */
Meteor.publish('getEvents', function () {
    return Events.find({}, { sort: {createdAt: -1}});
});


Meteor.methods({
    /**
     *
     * @param bet is the value of the vote 1, 2, 3 means 1 X 2 system
     * @param userID is the ID of the user who votes
     * @param eventID is the id of the event, what has been voted
     */
    addBet: function(bet, userID, eventID) {
        if(Meteor.user()) {
            Bets.insert({
                userId:  userID,
                eventID: eventID,
                createdAt: new Date(),
                checked: true
            });
        }
    }
});