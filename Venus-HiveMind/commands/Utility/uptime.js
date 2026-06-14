const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Show bot uptime'),

  async execute(interaction) {
    const uptime = Math.floor(process.uptime());

    await interaction.reply(`⏱️ Uptime: ${uptime}s`);
  }
};
