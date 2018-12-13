const utils = require("../utils");

module.exports = bot => async (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  const query = match[1]; // the captured "whatever"

  try {
    const response = await utils.getGif(query);
    utils.sendGif(bot, msg, response);
  } catch (error) {
    if (error.response && error.response.status >= 400) {
      bot.sendMessage(msg.chat.id, error.response.status);
    }
    console.error(error.response);
  }
};
