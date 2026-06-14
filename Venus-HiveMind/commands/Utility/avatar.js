const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Get avatar')
    .addUserOption(option =>
      option.setName('user')
      .setDescription('User')
      .setRequired(false)),

  async execute(interaction) {
    const user = interaction.options.getUser('user') || interaction.user;

    await interaction.reply(user.displayAvatarURL({ size: 4096 }));
  }
};
