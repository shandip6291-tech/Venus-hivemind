const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ask')
    .setDescription('Ask the AI a question')
    .addStringOption(option =>
      option.setName('question')
      .setDescription('Your question')
      .setRequired(true)
    ),

  async execute(interaction) {
    const question = interaction.options.getString('question');

    await interaction.reply(
      `🤖 AI Module\nQuestion: ${question}\n\nAI integration coming soon.`
    );
  }
};
