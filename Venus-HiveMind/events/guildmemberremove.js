const {
  EmbedBuilder
} = require("discord.js");

module.exports = {
  name: "guildMemberRemove",

  async execute(member) {

    const channel =
      member.guild.channels.cache.find(
        c => c.name === "goodbye"
      );

    if (!channel) return;

    const embed =
      new EmbedBuilder()
        .setTitle(
          "👋 Member Left"
        )
        .setDescription(
          `${member.user.tag} left the server.`
        )
        .addFields(
          {
            name: "Members Remaining",
            value:
              `${member.guild.memberCount}`
          }
        )
        .setThumbnail(
          member.user.displayAvatarURL()
        );

    channel.send({
      embeds: [embed]
    });

  }
};
