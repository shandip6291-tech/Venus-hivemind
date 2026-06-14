require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  Collection
} = require("discord.js");

const fs = require("fs");
const path = require("path");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();

function loadCommands(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {

    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      loadCommands(fullPath);
      continue;
    }

    if (!file.endsWith(".js")) continue;

    const command = require(fullPath);

    if (command.data && command.execute) {
      client.commands.set(
        command.data.name,
        command
      );
    }
  }
}

loadCommands("./commands");

client.once("ready", () => {
  console.log(
    `✅ ${client.user.tag} Online`
  );
});

client.on(
  "interactionCreate",
  async interaction => {

    if (
      !interaction.isChatInputCommand()
    ) return;

    const command =
      client.commands.get(
        interaction.commandName
      );

    if (!command) return;

    try {
      await command.execute(
        interaction
      );
    } catch (error) {

      console.error(error);

      if (
        interaction.replied ||
        interaction.deferred
      ) {
        await interaction.followUp({
          content:
            "❌ Command Error",
          ephemeral: true
        });
      } else {
        await interaction.reply({
          content:
            "❌ Command Error",
          ephemeral: true
        });
      }
    }
  }
);

client.login(process.env.TOKEN);
