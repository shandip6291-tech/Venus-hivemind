const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('whitelist')
    .setDescription('Whitelist status'),

  async execute(interaction) {
    await interaction.reply('✅ Whitelist Module Ready');
  }
};
