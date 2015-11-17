/**
 * Created by csata on 2015. 11. 17..
 */
Meteor.subscribe("getRangList");

Template.rangList.helpers({
    getRangList: function() {
        return Ranglist.find({}, { sort: {createdAt: -1}});
    }
});

