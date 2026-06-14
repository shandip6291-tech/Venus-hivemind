module.exports = {
  name: "ready",
  once: true,

  async execute(client) {
    console.log(
      `✅ ${client.user.tag} is online!`
    );

    client.user.setPresence({
      activities: [
        {
          name: "Venus HiveMind",
          type: 3
        }
      ],
      status: "online"
    });
  }
};
