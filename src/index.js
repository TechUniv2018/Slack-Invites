const NorrisBot = require('./bot');
const key = require('./constants/keys');

const token = key;
const name = 'invitation';

const norrisbot = new NorrisBot({
  token,
  name,
});

norrisbot.run();
