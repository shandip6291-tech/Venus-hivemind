const {
  ActionRowBuilder,
  StringSelectMenuBuilder
} = require("discord.js");

module.exports = async interaction => {

  if (
    interaction.customId !==
    "open_ticket"
  ) return;

  const menu =
    new StringSelectMenuBuilder()
      .setCustomId("ticket_category")
      .setPlaceholder(
        "Select Ticket Category"
      )
      .addOptions([
        {
          label: "Technical Support",
          value: "technical",
          emoji: "🔧"
        },
        {
          label: "Bot Support",
          value: "bot",
          emoji: "🤖"
        },
        {
          label: "Billing Support",
          value: "billing",
          emoji: "💳"
        },
        {
          label: "Website Support",
          value: "website",
          emoji: "🌐"
        },
        {
          label: "Other",
          value: "other",
          emoji: "❓"
        }
      ]);

  const row =
    new ActionRowBuilder()
      .addComponents(menu);

  await interaction.reply({
    content:
      "Select your ticket category:",
    components: [row],
    ephemeral: true
  });

};
