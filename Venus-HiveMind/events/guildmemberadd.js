const {
  EmbedBuilder
} = require("discord.js");

module.exports = {
  name: "guildMemberAdd",

  async execute(member) {

    const channel =
      member.guild.channels.cache.find(
        c => c.name === "welcome"
      );

    if (!channel) return;

    const embed =
      new EmbedBuilder()
        .setTitle(
          "🎉 Member Joined"
        )
        .setDescription(
          `Welcome ${member} to **${member.guild.name}**`
        )
        .addFields(
          {
            name: "User",
            value:
              member.user.tag
          },
          {
            name: "Member Count",
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
