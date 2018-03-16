// const { WebClient } = require('@slack/client');
const Bot = require('slackbots');
const key = require('./constants/keys');

// create a bot
const settings = {
  token: key,
  name: 'Invitations',
};
const bot = new Bot(settings);

const allUsers = [];
const loadBotUser = () => {
  const promise = new Promise((resolve) => {
    bot.getUsers()
      .then(result => result.members.filter(eachUser =>
        eachUser.is_bot === false && eachUser.id !== 'USLACKBOT'))
      .then(users => users.forEach((user) => {
        allUsers[user.id] = user.name;
      })).then(() => {
        resolve(allUsers);
      });
  });
  return promise;
};

bot.on('start', () => {
  // console.log('here');
  loadBotUser().then(() => {
    // console.log('started', res);
  });
});

bot.on('message', (msg) => {
  console.log('msg', msg, msg.channel);
  if (msg.type === 'message') {
    if (msg.text.indexOf('invitation') >= 0) {
      const message = msg.text;
      const recipients = new Set(message.split(/[<>]+/)
        .filter(e => e[0] === '@'));
      for (const id of recipients) {
        bot.postMessageToUser(allUsers[id.slice(1)], 'hi man whatsup?');
      }
    }
  }
});

// An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
// const token = key;

// const web = new WebClient(token);

// // This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
// const conversationId = 'D9PN1DAQG';

// // See: https://api.slack.com/methods/chat.postMessage
// web.chat.postMessage({
//   channel: conversationId,
//   text: 'Hello there',
//   attachments: [
//     {
//       text: 'Choose a game to play',
//       fallback: 'You are unable to choose a game',
//       callback_id: 'wopr_game',
//       color: '#3AA3E3',
//       attachment_type: 'default',
//     },
//   ],
// })
//   .then((res) => {
//     // `res` contains information about the posted message
//     console.log('Message sent: ', res.ts);
//   })
//   .catch(console.error);
