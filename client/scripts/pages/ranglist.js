/**
 * Subscribe to getRangList
 */
Meteor.subscribe("getRangList");

Template.rangList.helpers({
    /**
     * Get ranglist from MongoDB
     * @returns {Mongo.Cursor} Mongo Cursor of the events.
     */
    getRangList: function() {
        return Ranglist.find({}, { sort: {createdAt: -1}});
    }
});