// import { RRule, RRuleSet, rrulestr } from 'rrule'
const { RRule, RRuleSet, rrulestr } = require('rrule')

// var moment = require('moment'); // require
var moment = require('moment-timezone');

// Create a rule:
const rule = new RRule({
  freq: RRule.MINUTELY,
  interval: 30,
  byweekday: [RRule.MO],
  dtstart: new Date('2020-08-03'),
  until: new Date('2020-08-20'),
  // count: 20,
  byhour: [8,9,10,11]
})


// console.log(rule.all().map(date =>
//   DateTime.fromJSDate(date)
//     .toUTC()
//     .setZone('local', { keepLocalTime: true })
//     .toJSDate()
//   )
// )
 
// Get all occurrence dates (Date instances):
// console.log(rule.all()) 

let dates = rule.all()

// moment().tz("America/Denver").format()

// iterate over the dates list from above
for(let i = 0; i < dates.length; i++) {
  // pass the date at index i into moment
   let date = moment.tz(dates[i], 'UTC').format('ddd YYYY-MM-DD - hh:mm:ss a');
  // let date = moment(dates[i]).format('ddd YYYY-MM-DD - h:mm:ss a (z)');
  console.log("", date);

}

