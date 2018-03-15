const Bot = require('slackbots');
const key = require('./constants/keys');
// create a bot
const settings = {
  token: key,
  name: 'Invitations',
};
const bot = new Bot(settings);

bot.on('start', () => {
  bot.postMessageToChannel('general', 'Hello channel!');
  bot.postMessageToUser('srivastavaparth2016', 'hello peeps!');
  bot.postMessageToUser('arpitajain0811', 'hello peeps!');
  bot.postMessageToUser('ramprasadagarwal313', 'hello peeps!');
  bot.postMessageToUser('surabhigupta2442', 'hello peeps!');
});
