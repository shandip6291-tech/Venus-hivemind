const {
  ActionRowBuilder,
  StringSelectMenuBuilder
} = require("discord.js");

module.exports = async interaction => {

  if (
    interaction.customId ===
    "open_ticket"
  ) {

    const menu =
      new StringSelectMenuBuilder()
        .setCustomId(
          "ticket_category"
        )
        .setPlaceholder(
          "Select Ticket Category"
        )
        .addOptions([
          {
            label:
              "Technical Support",
            value:
              "technical",
            emoji: "🔧"
          },
          {
            label:
              "Bot Support",
            value:
              "bot",
            emoji: "🤖"
          },
          {
            label:
              "Billing Support",
            value:
              "billing",
            emoji: "💳"
          },
          {
            label:
              "Website Support",
            value:
              "website",
            emoji: "🌐"
          },
          {
            label:
              "Other",
            value:
              "other",
            emoji: "❓"
          }
        ]);

    const row =
      new ActionRowBuilder()
        .addComponents(menu);

    return interaction.reply({
      content:
        "Select your ticket category:",
      components: [row],
      ephemeral: true
    });

  }

  if (
    interaction.customId ===
    "ticket_close"
  ) {

    await interaction.reply(
      "🔒 Ticket closing in 5 seconds..."
    );

    setTimeout(() => {
      interaction.channel.delete();
    }, 5000);

    return;
  }

  if (
    interaction.customId ===
    "ticket_claim"
  ) {

    await interaction.reply(
      `👤 Ticket claimed by ${interaction.user}`
    );

    return;
  }

};