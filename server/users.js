/**
 * Created by csata on 2015. 11. 17..
 */


/**
 * Publish users _id, username and profile information.
 * @return {Mongo.Cursor} Field reduced user objects.
 */
Meteor.publish('userIds', function () {
    return Meteor.users.find({}, {fields: {_id: 1, username: 1, profile: 1}});
});

Meteor.methods({


});