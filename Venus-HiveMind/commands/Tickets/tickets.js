const {
SlashCommandBuilder,
PermissionFlagsBits,
ChannelType
} = require("discord.js");

module.exports = {
data: new SlashCommandBuilder()
.setName("ticket")
.setDescription("Create a support ticket"),

async execute(interaction) {

const channel =
await interaction.guild.channels.create({
name: `ticket-${interaction.user.username}`,
type: ChannelType.GuildText,
permissionOverwrites: [
{
id: interaction.guild.id,
deny: [PermissionFlagsBits.ViewChannel]
},
{
id: interaction.user.id,
allow: [
PermissionFlagsBits.ViewChannel,
PermissionFlagsBits.SendMessages
]
}
]
});

await interaction.reply({
content: `🎫 Ticket created: ${channel}`,
ephemeral: true
});

}
};
