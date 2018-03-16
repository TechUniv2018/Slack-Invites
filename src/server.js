const { RTMClient, WebClient } = require('@slack/client');
const keys = require('./constants/keys');

const token = keys;

// The client is initialized and then started to get an active connection to the platform
const rtm = new RTMClient(token);
rtm.start();

// Need a web client to find a channel where the app can post a message
const web = new WebClient(token);

// Load the current channels list asynchrously
web.channels.list()
  .then((res) => {
    // Take any channel for which the bot is a member
    const conversationId = res.channels.find(c => c.is_member);
    web.chat.postMessage({
      channel: 'C9R9F2RFZ',
      text: 'Hello there',
    }).then((res) => {
      // `res` contains information about the posted message
      console.log('Message sent: ', res.ts);
    })
      .catch(() => {
        console.log('hi');
        console.error;
      });
  }).catch(console.log);

//     if (channel) {
//       // We now have a channel ID to post a message in!
//       // use the `sendMessage()` method to send a simple string to a channel using the channel ID
//       rtm.sendMessage('Hello, world!', channel.id)
//         // Returns a promise that resolves when the message is sent
//         .then(msg => console.log(`Message sent to channel ${channel.name} with ts:${msg.ts}`))
//         .catch(console.error);
//     } else {
//       console.log('This bot does not belong to any channel, invite it to at least one and try again');
//     }
//   });
rtm.on('message', (event) => {
  // For structure of `event`, see https://api.slack.com/events/message
  console.log(event);
  const message = event;
  // Skip messages that are from a bot or my own user ID
  if ((message.subtype && message.subtype === 'message') ||
         (!message.subtype && message.user === rtm.activeUserId)) {
    web.chat.postMessage({ text: 'Hi I am slack Bot.', channel: 'C9R9F2RFZ' }).then(msg => console.log(`Message sent to channel D9PN1DAQG with ts:${msg.ts}`))
      .catch(console.error);
  }
});

//   // Log the message
//   console.log(`(channel:${message.channel}) ${message.user} says: ${message.text}`);
// });

