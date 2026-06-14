const row1 =
  new ActionRowBuilder()
    .addComponents(

      new ButtonBuilder()
        .setCustomId("ticket_close")
        .setLabel("Close")
        .setEmoji("🔒")
        .setStyle(ButtonStyle.Danger),

      new ButtonBuilder()
        .setCustomId("ticket_claim")
        .setLabel("Claim")
        .setEmoji("👤")
        .setStyle(ButtonStyle.Primary),

      new ButtonBuilder()
        .setCustomId("ticket_transcript")
        .setLabel("Transcript")
        .setEmoji("📄")
        .setStyle(ButtonStyle.Secondary)

    );

const row2 =
  new ActionRowBuilder()
    .addComponents(

      new ButtonBuilder()
        .setCustomId("ticket_adduser")
        .setLabel("Add User")
        .setEmoji("➕")
        .setStyle(ButtonStyle.Success),

      new ButtonBuilder()
        .setCustomId("ticket_removeuser")
        .setLabel("Remove User")
        .setEmoji("➖")
        .setStyle(ButtonStyle.Danger),

      new ButtonBuilder()
        .setCustomId("ticket_info")
        .setLabel("Info")
        .setEmoji("📊")
        .setStyle(ButtonStyle.Secondary)

    );

await channel.send({
  embeds: [embed],
  components: [row1, row2]
});