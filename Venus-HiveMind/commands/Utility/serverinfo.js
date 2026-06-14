const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Show server info'),

  async execute(interaction) {
    const guild = interaction.guild;

    const embed = new EmbedBuilder()
      .setTitle(guild.name)
      .addFields(
        { name: 'Members', value: `${guild.memberCount}` },
        { name: 'Server ID', value: guild.id }
      );

    await interaction.reply({ embeds: [embed] });
  }
};
