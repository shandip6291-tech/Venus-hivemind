const {
  ChannelType,
  PermissionFlagsBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

module.exports = async interaction => {

  if (
    !interaction.customId.startsWith(
      "ticket_modal_"
    )
  ) return;

  const category =
    interaction.customId.replace(
      "ticket_modal_",
      ""
    );

  const subject =
    interaction.fields.getTextInputValue(
      "subject"
    );

  const description =
    interaction.fields.getTextInputValue(
      "description"
    );

  const channel =
    await interaction.guild.channels.create({
      name:
        `ticket-${interaction.user.username}`,
      type:
        ChannelType.GuildText,

      permissionOverwrites: [
        {
          id:
            interaction.guild.id,
          deny: [
            PermissionFlagsBits.ViewChannel
          ]
        },
        {
          id:
            interaction.user.id,
          allow: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.SendMessages
          ]
        }
      ]
    });

  const embed =
    new EmbedBuilder()
      .setTitle(
        "🎫 Ticket Created"
      )
      .addFields(
        {
          name:
            "Category",
          value:
            category
        },
        {
          name:
            "Subject",
          value:
            subject
        },
        {
          name:
            "Description",
          value:
            description
        }
      );

  const row =
    new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId(
            "ticket_close"
          )
          .setLabel(
            "Close"
          )
          .setEmoji("🔒")
          .setStyle(
            ButtonStyle.Danger
          ),

        new ButtonBuilder()
          .setCustomId(
            "ticket_claim"
          )
          .setLabel(
            "Claim"
          )
          .setEmoji("👤")
          .setStyle(
            ButtonStyle.Primary
          )
      );

  await channel.send({
    embeds: [embed],
    components: [row]
  });

  await interaction.reply({
    content:
      `✅ Ticket Created: ${channel}`,
    ephemeral: true
  });

};
