const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reload')
    .setDescription('Reload bot'),

  async execute(interaction) {

    if (
      interaction.user.id !== process.env.OWNER_ID
    ) {
      return interaction.reply({
        content: '❌ Owner only.',
        ephemeral: true
      });
    }

    await interaction.reply(
      '♻️ Reload requested.'
    );
  }
};
