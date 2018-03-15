const Bot = require('slackbots');
const key = require('./constants/keys');

// create a bot
const settings = {
  token: key,
  name: 'Invitations',
};
const bot = new Bot(settings);

const allUsers = [];
const loadBotUser = () => bot.getUsers()
  .then(result => result.members.filter(eachUser =>
    eachUser.is_bot === false && eachUser.id !== 'USLACKBOT'))
  .then(users => users.forEach((user) => {
    // console.log(user.name);
    allUsers[user.id] = user.name;
  }));
bot.on('start', () => {
  loadBotUser().then(() => { });

  // bot.postMessageToChannel('general', 'Hello channel!');
  // bot.postMessageToUser('srivastavaparth2016', 'hello peeps!');
  // bot.postMessageToUser('arpitajain0811', 'hello peeps!');
  // bot.postMessageToUser('ramprasadagarwal313', 'hello peeps!');
  // bot.postMessageToUser('surabhigupta2442', 'hello peeps!');
  // console.log('inside onStart');
  // firstRunCheck();
});

bot.on('message', (msg) => {
  if (msg.type === 'message') {
    if (msg.text.indexOf('invitation') >= 0) {
      const message = msg.text;
      const recipients = new Set(message.split(/[<>]+/)
        .filter(e => e[0] === '@'));
      for (const id of recipients) {
        bot.postMessageToUser(allUsers[id.slice(1)], 'You are invited');
      }
      // bot.postMessageToChannel('general', msg.text);
    }
  }

  // loadBotUser().then(console.log);

  // bot.postMessageToUser('srivastavaparth2016', 'hello peeps!');
  // bot.postMessageToUser('arpitajain0811', 'hello peeps!');
  // bot.postMessageToUser('ramprasadagarwal313', 'hello peeps!');
  // bot.postMessageToUser('surabhigupta2442', 'hello peeps!');
  // console.log('inside onStart');
  // firstRunCheck();
});

// console.log('<test>aksjdhkjas<test2><test3>'.split(/[<>]+/).filter(e => e));
