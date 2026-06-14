require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { REST, Routes } = require("discord.js");

const commands = [];

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

    if (command.data) {
      commands.push(command.data.toJSON());
    }
  }
}

loadCommands("./commands");

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );

    console.log("Slash commands deployed.");
  } catch (error) {
    console.error(error);
  }
})();