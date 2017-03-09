import _ from 'lodash';

function removePaidMeetups(meetups) {
  const freeMeetups = _.filter(meetups, (meetup) => {
    return !(meetup.fee && meetup.fee.required === 1)
      && !_.includes(meetup.description, '$');
  });
  return freeMeetups;
}

function removeStingyMeetups(meetups) {
  const eatups = [];
  meetups.forEach((meetup) => {
    const food = _.includes(meetup.description, 'food');
    const pizza = _.includes(meetup.description, 'pizza');
    const snacks = _.includes(meetup.description, 'snacks');
    const drinks = _.includes(meetup.description, 'drinks');
    meetup.foodProvided = { food, pizza, snacks, drinks };
    if (food || pizza || snacks || drinks) {
      eatups.push(meetup);
    }
  });
  return eatups;
}

export default function getEatups(meetups) {
  const freeMeetups = removePaidMeetups(meetups);
  const eatups = removeStingyMeetups(freeMeetups);
  return eatups;
}
