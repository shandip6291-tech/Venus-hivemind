const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('imagine')
    .setDescription('Generate image prompt')
    .addStringOption(option =>
      option.setName('prompt')
      .setDescription('Prompt')
      .setRequired(true)
    ),

  async execute(interaction) {
    const prompt = interaction.options.getString('prompt');

    await interaction.reply(
      `🎨 Imagine Prompt:\n${prompt}`
    );
  }
};
