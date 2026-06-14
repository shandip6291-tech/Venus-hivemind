const ticketButtons = require("./tickets/ticketButtons");
const ticketDropdowns = require("./tickets/ticketDropdowns");
const ticketModals = require("./tickets/ticketModals");

module.exports = {
  name: "interactionCreate",

  async execute(interaction) {

    if (interaction.isButton()) {
      return ticketButtons(interaction);
    }

    if (interaction.isStringSelectMenu()) {
      return ticketDropdowns(interaction);
    }

    if (interaction.isModalSubmit()) {
      return ticketModals(interaction);
    }

    if (!interaction.isChatInputCommand()) return;

    const command =
      interaction.client.commands.get(
        interaction.commandName
      );

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
    }
  }
};
