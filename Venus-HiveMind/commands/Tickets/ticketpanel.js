const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

module.exports = {

  data: new SlashCommandBuilder()
    .setName("ticketpanel")
    .setDescription("Send ticket panel"),

  async execute(interaction) {

    const embed =
      new EmbedBuilder()
        .setTitle("🎫 Venus Support Center")
        .setDescription(
          "Click the button below to create a support ticket."
        );

    const row =
      new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId("open_ticket")
            .setLabel("Open Ticket")
            .setEmoji("🎫")
            .setStyle(ButtonStyle.Primary)
        );

    await interaction.reply({
      embeds: [embed],
      components: [row]
    });

  }
};
