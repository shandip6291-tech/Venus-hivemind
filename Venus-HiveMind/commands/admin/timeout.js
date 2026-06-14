const {
  SlashCommandBuilder,
  PermissionFlagsBits
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Timeout a member")
    .addUserOption(option =>
      option
        .setName("user")
        .setDescription("User")
        .setRequired(true)
    )
    .addIntegerOption(option =>
      option
        .setName("minutes")
        .setDescription("Minutes")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(
      PermissionFlagsBits.ModerateMembers
    ),

  async execute(interaction) {
    const member =
      interaction.options.getMember("user");

    const minutes =
      interaction.options.getInteger("minutes");

    await member.timeout(
      minutes * 60 * 1000
    );

    await interaction.reply(
      `⏳ ${member.user.tag} timed out for ${minutes} minutes`
    );
  }
};
