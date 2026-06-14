const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('antinuke')
    .setDescription('Show Anti Nuke status'),

  async execute(interaction) {
    await interaction.reply('🚫 Anti Nuke Protection Enabled');
  }
};
