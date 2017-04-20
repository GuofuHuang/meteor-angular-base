import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

import { Parties } from '../../../both/collections/parties.collection';

const nonEmptyString = Match.Where((str) => {
  check(str, String);
  return str.length > 0;
});

Meteor.methods({

  findUser(id) {
    return Meteor.users.findOne({_id: id});
  },
  adminUpdateUser(updatedInfo) {
    return Meteor.users.update(
      {_id: updatedInfo.id}, {
        $set: {
          "profile.firstName": updatedInfo.firstName,
          "profile.lastName": updatedInfo.lastName,
          "username": updatedInfo.username,
          "emails.0.address": updatedInfo.email
        }
      })
  }
});