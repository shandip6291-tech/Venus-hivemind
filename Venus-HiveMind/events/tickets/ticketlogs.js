const {
  EmbedBuilder
} = require("discord.js");

module.exports = async (
  guild,
  action,
  user,
  channel
) => {

  const logChannel =
    guild.channels.cache.find(
      c => c.name === "ticket-logs"
    );

  if (!logChannel) return;

  const embed =
    new EmbedBuilder()
      .setTitle("🎫 Ticket Log")
      .addFields(
        {
          name: "Action",
          value: action
        },
        {
          name: "User",
          value: `${user}`
        },
        {
          name: "Channel",
          value: `${channel}`
        }
      )
      .setTimestamp();

  await logChannel.send({
    embeds: [embed]
  });

};
