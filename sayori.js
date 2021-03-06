var Discord = require('discord.js');
var auth = require('./auth.json')

var bot = new Discord.Client();

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.user.username, bot.user.id);
});

let prefix = "SAYORI"

bot.on('message', function(msg){
if (msg.content.toUpperCase().startsWith(prefix)) {
    let args = msg.content.split(" ")
    let command = args.shift()
    let words = args.join(" ")
    console.log(command)
    console.log(words)
    if (command.toUpperCase() == "SAYORI"){
    if (words == "") {
        msg.channel.send("I'm Here")
        return 0;
    }
    else if(words.toLocaleUpperCase().includes("HANGOUT")){
        msg.channel.send("I don't want to")
        return 0
    }
    else if(words.toUpperCase().includes("HANG")) {
        msg.channel.send("But.. But..")
        return 0;
    }
    else if(words.toUpperCase().includes("DIE")) {
        msg.channel.send('Ok')
        msg.channel.send({files: ['https://i.ytimg.com/vi/ZMwjP5rkwB4/maxresdefault.jpg']})
        return 0;
    }
    }

}    
})

bot.login(auth.token)