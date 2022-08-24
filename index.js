const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
const moment = require('moment') 








bot.on("ready", async() => {
    console.log(`${bot.user.username}#5604 Elindult és naprakész:)!`)

    let státuszok = [
        "0 Játékos elérhető",
        "0 Játékos elérhető",
        
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        bot.user.setActivity(status, {type: "PLAYING"})
    }, 3000)
})


bot.on('guildMemberAdd', async newMember => {

    let role = "1011965093824704512"
    
      if(newMember.bot)return;
      newMember.roles.add(role)
       })

bot.on("guildMemberAdd", (member) => {
    let welcomembed = new Discord.MessageEmbed()
        .setAuthor(` 👑 | ${member.user.tag} - csatlakozott! `, member.user.avatarURL())
        .setDescription(` Te lettél a(z) **${member.guild.memberCount}.** tag a szerveren. `)
        .setThumbnail(member.user.displayAvatarURL())
        .setColor("00a9ff")
        .setFooter("Sodium")
        .setTimestamp();
    member.guild.channels.cache.get("1011968123504689182").send(welcomembed)

        .catch((err) => console.log(err));
});






bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;

    
if(message.content.startsWith(`${prefix}userinfo`) ) {
    const dateFormat = ' YYYY Do MMMM, HH:mm:ss';
    let user = message.mentions.members.first()?.user ??message.author
    const embed = new Discord.MessageEmbed()
      .setTitle(`Infók: ${user.username}`)
      .setColor('RANDOM')
      .setDescription('')
      .addField('Neve:', user.username) 
      .addField('Csatlakozott a szerverre:', moment(user.joinedAt).format(dateFormat))
      .addField('Profilt létrehozta ekkor:', moment(user.createdAt).format(dateFormat))
      .setThumbnail(user.displayAvatarURL())
      .setFooter(user.username)
      .setTimestamp()
    message.channel.send(embed)
  
} 

  
 









    


   

   

    /////////////////////////////////
    //// LOGIKAI OPERÁTOROK TIPP ////
    //////////////////////////////////////////////////////////
    //                                                      //
    //   || vagy , PL: if(X=1 || X=3)                       //
    //                                                      //
    //   && és , PL: if(X=5 && Y=3)                         //
    //                                                      //
    //   = sima egyenlő jel , PL: if(5=5)                   //
    //   ==  egyenlő jel , PL: if(X==5)                     //
    //   >= nagyobb vagy egyenő , PL: if(X >= 3)            //
    //   <= kisebb vagy egyenlő , PL: if(X <= 3)            //
    //   ! tagadás , PL if(X != 2)                          //
    //                                                      //
    //////////////////////////////////////////////////////////

    if(cmd === `${prefix}kick`){
        let kick_user = message.mentions.members.first();
        if(args[0] && kick_user){

            if(args[1]){

                let KickEmbed = new Discord.MessageEmbed()
                .setTitle("KICK")
                .setColor("RED")
                .setDescription(`**Kickelte:** ${message.author.tag}\n**Kickelve lett:** ${kick_user.user.tag}\n**Kick indoka:** ${args.slice(1).join(" ")}`)

            message.channel.send(KickEmbed);

                kick_user.kick(args.slice(1).join(" "));

            } else {
            let parancsEmbed = new Discord.MessageEmbed()
            .setTitle("Parancs használata:")
            .addField(`\`${prefix}kick <@név> [indok]\``, "˘˘˘")
            .setColor("BLUE")
            .setDescription("HIBA: Kérlek adj meg egy indokot!!")

            message.channel.send(parancsEmbed);
            }

        } else {
            let parancsEmbed = new Discord.MessageEmbed()
            .setTitle("Parancs használata:")
            .addField(`\`${prefix}kick <@név> [indok]\``, "˘˘˘")
            .setColor("BLUE")
            .setDescription("HIBA: Kérlek említs meg egy embert!")

            message.channel.send(parancsEmbed);

        }
    }

    if(cmd === `${prefix}ban`){
        let ban_user = message.mentions.members.first();
        if(args[0] && ban_user){

            if(args[1]){

                let BanEmbed = new Discord.MessageEmbed()
                .setTitle("BAN")
                .setColor("RED")
                .setDescription(`**Banolta:** ${message.author.tag}\n**Banolva lett:** ${kick_user.user.tag}\n**Ban indoka:** ${args.slice(1).join(" ")}`)

            message.channel.send(KickEmbed);

                ban_user.ban(args.slice(1).join(" "));

            } else {
            let parancsEmbed = new Discord.MessageEmbed()
            .setTitle("Parancs használata:")
            .addField(`\`${prefix}ban <@név> [indok]\``, "˘˘˘")
            .setColor("BLUE")
            .setDescription("HIBA: Kérlek adj meg egy indokot!!")

            message.channel.send(parancsEmbed);
            }

        } else {
            let parancsEmbed = new Discord.MessageEmbed()
            .setTitle("Parancs használata:")
            .addField(`\`${prefix}ban <@név> [indok]\``, "˘˘˘")
            .setColor("BLUE")
            .setDescription("HIBA: Kérlek említs meg egy embert!")

            message.channel.send(parancsEmbed);

        }
    }

})



bot.on("message", async message => {
    let MessageArray = message.content.split(" ");
    let cmd = MessageArray[0];
    let args = MessageArray.slice(1);
    let prefix = botconfig.prefix;
if(cmd === prefix + "suggest"){   
    message.delete()
    let otlet = message.content.slice(prefix.length + 7)
    if (!otlet) return message.channel.send(`**Használat: /suggest (javaslat)**`);
    const otletCsatorna = bot.channels.cache.get("1011966776508170250");
    const otletEmbed = new Discord.MessageEmbed()
        .addField('**Játékos**', (message.author.username))
        .addField('Javaslat', otlet)
        .setThumbnail("https://cdn.discordapp.com/attachments/949331545297125460/965867341936197632/Nevtelen.png")
        .setFooter(message.author.username)
        .setColor("DD9323")
        .setFooter('Új javaslat')
        .setTimestamp()
        
    otletCsatorna.send(otletEmbed).then(sentEmbed => {
        sentEmbed.react("✅")
        sentEmbed.react("❌")
        
    })
}

})







bot.login(tokenfile.token)
