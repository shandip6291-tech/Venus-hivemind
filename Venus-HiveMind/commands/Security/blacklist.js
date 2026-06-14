const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('blacklist')
    .setDescription('Blacklist status'),

  async execute(interaction) {
    await interaction.reply('⛔ Blacklist Module Ready');
  }
};
