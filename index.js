const axios = require("axios");
const Discord = require("discord.js");
const { Deepgram } = require("@deepgram/sdk");
require("dotenv").config();

const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);

// create the bot client object using the Discord Class and pass the bot intents
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
  ],
});

// login the bot to the server and bring it online
client.on("ready", () => {
  console.log(`Hello my name is ${client.user.tag}!`);
});

client.login(process.env.CLIENT_TOKEN);

//create the Bot commands to be used

client.on("messageCreate", async (msg) => {
  if (msg.content === "!help") {
    const embed1 = new Discord.MessageEmbed()
      .setTitle("Command List")
      .setDescription(
        "**!help** - shows the command list \n\n" +
          "**!transcribe** - will begin the transcription of the call \n\n" +
          "**!endcall** - will stop the transcription for the call \n\n"
      );

    msg.channel.send({ embeds: [embed1] });
  }
});
