const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('summarize')
    .setDescription('Summarize text')
    .addStringOption(option =>
      option.setName('text')
      .setDescription('Text')
      .setRequired(true)
    ),

  async execute(interaction) {
    const text = interaction.options.getString('text');

    await interaction.reply(
      `📝 Summary Feature\nReceived ${text.length} characters.`
    );
  }
};
