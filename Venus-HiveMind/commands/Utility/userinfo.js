const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Show user info')
    .addUserOption(option =>
      option.setName('user')
      .setDescription('User')
      .setRequired(false)),

  async execute(interaction) {
    const user = interaction.options.getUser('user') || interaction.user;

    const embed = new EmbedBuilder()
      .setTitle('User Info')
      .addFields(
        { name: 'Username', value: user.tag },
        { name: 'ID', value: user.id }
      );

    await interaction.reply({ embeds: [embed] });
  }
};
