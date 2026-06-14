const {
  SlashCommandBuilder,
  PermissionFlagsBits
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("Delete messages")
    .addIntegerOption(option =>
      option
        .setName("amount")
        .setDescription("Amount")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(
      PermissionFlagsBits.ManageMessages
    ),

  async execute(interaction) {

    const amount =
      interaction.options.getInteger("amount");

    await interaction.channel.bulkDelete(
      amount,
      true
    );

    await interaction.reply({
      content: `🗑 Deleted ${amount} messages`,
      ephemeral: true
    });
  }
};