module.exports = {
  name: "messageCreate",

  async execute(message) {

    if (!message.guild) return;
    if (message.author.bot) return;

    // Anti Invite Links
    const inviteRegex =
      /(discord\.gg|discord\.com\/invite)/i;

    if (inviteRegex.test(message.content)) {

      if (
        !message.member.permissions.has(
          "Administrator"
        )
      ) {

        await message.delete().catch(() => {});

        return message.channel.send(
          `🚫 ${message.author}, invite links are not allowed.`
        );
      }
    }

    // Anti Mass Mention
    if (
      message.mentions.users.size >= 5
    ) {

      await message.delete().catch(() => {});

      return message.channel.send(
        `⚠️ ${message.author}, mass mentions are not allowed.`
      );
    }

    // Simple Keyword Response
    if (
      message.content.toLowerCase() === "ping"
    ) {

      return message.reply(
        "🏓 Pong!"
      );
    }

    // Console Logs
    console.log(
      `[${message.guild.name}] ${message.author.tag}: ${message.content}`
    );

  }
};
