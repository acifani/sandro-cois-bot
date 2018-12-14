const removeQuote = (str, db) => {
  const keys = db.keys();
  for (let k in keys) {
    let quote = db.get(keys[k]);
    if (quote === str) {
      db.remove(keys[k]);
      return true;
    }
  }
  return false;
};

export default (bot, db) => msg => {
  let removed;
  if (msg.reply_to_message.text && msg.reply_to_message.text.length !== 0) {
    removed = removeQuote(msg.reply_to_message.text, db);
  }

  removed
    ? bot.sendMessage(msg.chat.id, "Quote removed!")
    : bot.sendMessage(msg.chat.id, "Couldn't remove quote!");
};