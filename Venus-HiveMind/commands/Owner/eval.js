const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('eval')
    .setDescription('Owner only eval')
    .addStringOption(option =>
      option
        .setName('code')
        .setDescription('Code')
        .setRequired(true)
    ),

  async execute(interaction) {

    if (
      interaction.user.id !== process.env.OWNER_ID
    ) {
      return interaction.reply({
        content: '❌ Owner only.',
        ephemeral: true
      });
    }

    const code =
      interaction.options.getString('code');

    try {
      const result = eval(code);

      await interaction.reply(
        `✅ ${String(result)}`
      );
    } catch (err) {
      await interaction.reply(
        `❌ ${err.message}`
      );
    }
  }
};
