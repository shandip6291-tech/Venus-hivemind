const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('automod')
    .setDescription('Show AutoMod status'),

  async execute(interaction) {
    await interaction.reply('🤖 AutoMod Running');
  }
};
