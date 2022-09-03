const { Client, MessageEmbed , Intents, MessageButton, MessageActionRow, ButtonInteraction, MessageAttachment } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS] });

client.on("ready", () => {

    console.log("Bot ON, loged by " + client.user.username);

    client.user.setActivity({
        name: "TRK Shop",
        type: "WATCHING"
    })
});
  
client.on("messageCreate", async ( message ) => {

    const prefix = "!";
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(!message.content.startsWith("!")) return;

    if(command === "say"){
      if(message.member.roles.cache.some(r => r.id === "989128819719950355")){
        const embed = new MessageEmbed()
        .setDescription(args.join(' '))
        .setColor("#0e0101")
        .setFooter({ text: "Sistema de Comunicados | TRK Shop"})
        message.channel.send({ embeds: [embed]})
      }
    }
});

client.login("");