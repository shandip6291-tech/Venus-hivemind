const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('shutdown')
    .setDescription('Shutdown bot'),

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
      '🛑 Bot shutting down.'
    );

    process.exit(0);
  }
};
