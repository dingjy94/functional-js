function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.filter(message => message.message.length < 50)
                 .map(msg => msg.message);
}

module.exports = getShortMessages
