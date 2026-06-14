const {
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder
} = require("discord.js");

module.exports = async interaction => {

  if (
    interaction.customId !==
    "ticket_category"
  ) return;

  const category =
    interaction.values[0];

  const modal =
    new ModalBuilder()
      .setCustomId(
        `ticket_modal_${category}`
      )
      .setTitle("Create Ticket");

  const subject =
    new TextInputBuilder()
      .setCustomId("subject")
      .setLabel("Subject")
      .setStyle(
        TextInputStyle.Short
      )
      .setRequired(true);

  const description =
    new TextInputBuilder()
      .setCustomId(
        "description"
      )
      .setLabel(
        "Describe your issue"
      )
      .setStyle(
        TextInputStyle.Paragraph
      )
      .setRequired(true);

  modal.addComponents(
    new ActionRowBuilder()
      .addComponents(subject),
    new ActionRowBuilder()
      .addComponents(description)
  );

  await interaction.showModal(
    modal
  );

};
