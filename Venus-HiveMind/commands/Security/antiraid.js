const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('antiraid')
    .setDescription('Show Anti Raid status'),

  async execute(interaction) {
    await interaction.reply('🛡️ Anti Raid System Active');
  }
};
