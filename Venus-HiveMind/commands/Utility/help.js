const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Show commands'),

  async execute(interaction) {
    await interaction.reply(`
Admin:
/ban
/kick
/lock
/purge
/timeout
/untimeout

Utility:
/ping
/avatar
/userinfo
/serverinfo
/help
/uptime
`);
  }
};
