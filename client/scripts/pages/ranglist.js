/**
 * Created by csata on 2015. 11. 17..
 */
Meteor.subscribe("getRangList");

Template.rangList.helpers({
    /**
     * Get ranglist from MongoDB
     * @returns {Mongo.Cursor} Mongo Cursor of the events.
     */
    getRangList: function() {
        console.log(Meteor.users.find({}));
        var users = Meteor.users.find({}, { sort: {createdAt: -1}});
        var events = Events.find({ date: { $lt: new Date() } });
        var bets = Bets.find({ userId: Meteor.users._id });
        return Meteor.users.find({}, { sort: {createdAt: -1}});
    }
});

