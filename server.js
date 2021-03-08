const { resolve } = require('path');
const express = require('express');
const { Client, EvaluatedPermissions,RichEmbed } = require('discord.js');
const passport = require('passport');
const session = require('express-session');
const Discord = require('discord.js');    
const MemoryStore = require('memorystore')(session);
const Strategy = require('passport-discord').Strategy;
const url = require('url');
const embed = new Discord.RichEmbed()
const Bypasser = require('node-bypasser');
const helmet = require('helmet');
const moment = require('moment');
const client = new Discord.Client({fetchAllMembers: true});
const Enmap = require('enmap');
const DBL = require("dblapi.js");
const dbl = new DBL('', client,);
const db = new Enmap({ name: 'Akon'})
const sa = require('superagent')
const invites = {};
const talkedRecently = new Set();
const wait = require('util').promisify(setTimeout);
const fs = require('fs');
const webhookClient = new Discord.WebhookClient('731903828538032148', 'WacmtoHqdE6OcrzFgqxAVUcqyDZj_muTU9X6x1jFJFA8k_bVUujs0k6lRb9cGIShGgDM');

const gaber_actions0x1_عدد_محاولات_التهكير = {};
const website = 'akonbot.xyz';

client.login("NzI1NDgyNDEzODExMDQwMzE4.Xv4njQ.twSJyKQOq4WjVb_qHzjdNf-ALYo");


const developers = ["725082317265305680","697487539837337671"];
const admin = "#a";







client.on('ready', () => {
  wait(1000);
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});


client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame(`${website}` + " | #help")
  client.user.setStatus("online")
});

dbl.on('posted', () => {
  console.log('Server count posted!');
})
dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})


const app = express();
app.set('view engine', 'ejs');
app.use(express.static(resolve(__dirname, 'public')));
app.set('views', __dirname);

app.get('/support', (req, res) => {
	res.redirect('https://discord.gg/yx5M8bp');
});
app.get('/vote', (req, res) => {
	res.redirect('https://top.gg/bot/643903136372752404/vote');
});

 



passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser((obj, done) => {
	done(null, obj);
});




passport.use(new Strategy({
	clientID: '725482413811040318',
	clientSecret: 'G5Qngylnzrkv_iT_5y7NjRxhljcvVwb1',
	callbackURL: 'https://development-dashboard-akon.glitch.me/auth',
	scope: ['identify', 'guilds', 'guilds.join']
},
(accessToken, refreshToken, profile, done) => {
	process.nextTick(() => done(null, profile));
}));
app.use(session({
	store: new MemoryStore({
	checkPeriod: 186400000
	}),
	secret: 'clientsessiosgabersecret123123123',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());
app.locals.domain = 'development-dashboard-akon.glitch.me';
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 1000000
}));

function checkAuth(req, res, next) {
if (req.isAuthenticated()) return next();
	req.session.backURL = req.url;
	res.redirect('/login');
}
app.get('/login', (req, res, next) => {
	if (req.session.backURL) {
		req.session.backURL = 'https://development-dashboard-akon.glitch.me/auth';
	} else if (req.headers.referer) {
		const parsed = url.parse(req.headers.referer);
		if (parsed.hostname === app.locals.domain) {
			req.session.backURL = parsed.path;
		}
	} else {
		req.session.backURL = '/dashboard';
	}
	next();
},
passport.authenticate('discord'));
app.get('/auth', passport.authenticate('discord', {
	failureRedirect: '/autherror'
}), (req, res) => {
	if (req.session.backURL) {
		const refurl = req.session.backURL;
		req.session.backURL = null;
		res.redirect(refurl);
	} else {
	res.redirect('/dashboard');
client.channels.get("725425153898446855").send(`\n \`الأسم\` : <@${client.users.get(req.user.id).id}> \`الايدي\` : ${client.users.get(req.user.id).id} \n قام بتسجيل الدخول بحساب الديسكورد \m `)
	}
});




app.get('/autherror', (req, res) => {
  const user = req.isAuthenticated() ? req.user : null;
  let title;
  let description;
  if (!user) {
    title = 'فشل تسجيل الدخول';
    description = 'أو ان الصفحة غير موجودة';
  }
  if (user) {
    title = 'خطأ | الصفحة غير موجودة';
    description = 'الرجاء التواصل معنا للإستفسار عنه';
  }
  
  res.render('views/pages/autherror.ejs', {
    title, user, description
  })
});


app.get('/dashboard', checkAuth, (req, res) => {
	const user = req.isAuthenticated() ? req.user : null;
	const botStats = [{
		botty: client,
		perms: EvaluatedPermissions,
		user: req.isAuthenticated() ? req.user : null
	}];
	res.render('views/pages/dashboard', {
		bot: botStats, user
	});
});
app.get('/guilds/:guildID', checkAuth, (req, res) => {
	res.redirect(`/guilds/${req.params.guildID}/manage`);
});



let actionantibots = [
"kick",
"ban",
"remove_permissions"
]
app.get('/guilds/:guildID/manage', checkAuth, (req, res) => {
	const guild = client.guilds.get(req.params.guildID);
  let VerifiedServer = guild.members.size;
  if (VerifiedServer << '200') { VerifiedServer = '10%' }
  else if (VerifiedServer == '200' || VerifiedServer >> '200') { VerifiedServer = '20%' }
  else if (VerifiedServer == '300' || VerifiedServer >> '300') { VerifiedServer = '30%' }
  else if (VerifiedServer == '400' || VerifiedServer >> '400') { VerifiedServer = '40%' }
  else if (VerifiedServer == '500' || VerifiedServer >> '500') { VerifiedServer = '50%' }
  else if (VerifiedServer == '600' || VerifiedServer >> '600') { VerifiedServer = '60%' }
  else if (VerifiedServer == '700' || VerifiedServer >> '700') { VerifiedServer = '70%' }
  else if (VerifiedServer == '800' || VerifiedServer >> '800') { VerifiedServer = '80%' }
  else if (VerifiedServer == '1000' || VerifiedServer >> '1000') { VerifiedServer = '100%' }
  let OnlineCount = guild.members.filter(m => m.presence.status === 'online').size;
  let DndCount = guild.members.filter(m => m.presence.status === 'dnd').size;
  let IdleCount = guild.members.filter(m => m.presence.status === 'idle').size;
  let TotalCount = OnlineCount + DndCount + IdleCount;
  
	if (!guild) return res.status(404);
	const isManaged = guild && Boolean(guild.member(req.user.id)) ? guild.member(req.user.id).permissions.has('MANAGE_GUILD') : false;
	if (!isManaged && !req.session.isAdmin) return res.redirect('/');
	const groles = app.get(`https://discordapp.com/api/v6/guilds/${req.params.guildID}/roles`);
	const user = req.isAuthenticated() ? req.user : null;
	const botStats = [{
     bot: client,
		perms: EvaluatedPermissions,
		moment,
		guildroles: groles
	}];
if (db.get(guild.id) === undefined) {
db.ensure(guild.id,{
prefix: "#a",
mod:[],
languge:"eng",
plus:"no",
wlcstatus:"off",
wlcdmstatus:"off",
wlcmsg:null,
wlcdmmsg:null,
wlcchannel:null,
autorlestatus:"off",
autorole:null,
autoroles:[],
picchannelstatus:"off",
picrchannel:null,
colorstitle:null,
colorsbackground:"",
colorsShape:"",
antilinksstatus:"off",
antilinkschannels:[],
logstatus: "off",
logchannel: null,
vconlinstatus:"off",
vconlinename:"",
vconlinechannel:null,
antibotsstatus:"off",
antibotsabots:[]  ,
antibotsaction:"kick",
prostatus:"off",
proausers:[],
prolimitskick: 2,
prolimitsban:2,
prolimitschannelc:3,
prolimitschanneld:1,
prolimitsrolec:3,
prolimitsroled:1,
cmdmutelimit:0,
cmdbanlimit:0,
cmdkicklimit:0,
proaction:"remove_roles",
prochannel:null,
muterole:null,
djroles:[],
adminrole:null,
modrole:null,
modlogstatus:"off",
modlog:null,
rm: []
})
}
	res.render('views/guild/manage.ejs', {
actions:actionantibots,
guild,
		user,
		db:db,
    TotalCount,
    VerifiedServer,
   bot: botStats
	});
});

app.post('/guilds/:guildID/manage', checkAuth, (req, res) => {
	const guild = client.guilds.get(req.params.guildID);
	if (!guild) return res.status(404);
	const isManaged = guild && Boolean(guild.member(req.user.id)) ? guild.member(req.user.id).permissions.has('MANAGE_GUILD') : false;
	if (!isManaged && !req.session.isAdmin) return res.status(404);
if (db.get(guild.id) === undefined) {
db.ensure(guild.id,{
prefix: "#a",
mod:[],
languge:"eng",
plus:"no",
wlcstatus:"off",
wlcdmstatus:"off",
wlcmsg:null,
wlcdmmsg:null,
wlcchannel:null,
autorlestatus:"off",
autorole:null,
picchannelstatus:"off",
picrchannel:null,
colorstitle:null,
colorsbackground:"",
colorsShape:"",
antilinksstatus:"off",
antilinkschannels:[],
logstatus: "off",
logchannel: null,
vconlinstatus:"off",
vconlinename:"Voice Online [00]",
vconlinechannel:null,
antibotsstatus:"off",
antibotsabots:[],
antibotsaction:"kick",
prostatus:"off",
proausers:[],
prolimitskick: 2,
prolimitsban:2,
prolimitschannelc:3,
prolimitschanneld:1,
prolimitsrolec:3,
prolimitsroled:1,
cmdmutelimit:0,
cmdbanlimit:0,
cmdkicklimit:0,
proaction:"remove_roles",
prochannel:null,
muterole:null,
djroles:[],
adminrole:null,
modrole:null,
modlogstatus:"off",
modlog:null,
rm: []
})
}
let data = req.body;
/* if(data.hasOwnProperty("serverName")) {
  guild.setName(data.serverName)
}
 if(data.hasOwnProperty("serverIcon")) {
  guild.setIcon(data.serverIcon)
 }*/
 if(data.hasOwnProperty("serverPrefix")) {
 db.set(guild.id,data.serverPrefix,"prefix")
 }
 if(data.hasOwnProperty("serverLanguge")) {
 db.set(guild.id,data.serverLanguge,"languge")
 }
if(req.body['wlcStatus'] == "on") {
 db.set(guild.id,data.wlcStatus,"wlcstatus")
 }else{
 db.set(guild.id,"off","wlcstatus")
 }  
 if(data.hasOwnProperty("wlcChannel")) {
 db.set(guild.id,data.wlcChannel,"wlcchannel")
 }
 if(data.hasOwnProperty("WelcomeMessage")) {
 db.set(guild.id,data.WelcomeMessage,"wlcmsg")
 }
if(req.body['autoRoleStatus'] == "on") {
 db.set(guild.id,data.autoRoleStatus,"autorlestatus")
 }else{
 db.set(guild.id,"off","autorlestatus")
 }  
if(data.hasOwnProperty("autoRole")) {
 db.set(guild.id,data.autoRole,"autorole")
 }
if(req.body['antibotsstatus'] == "on") {
 db.set(guild.id,data.antibotsstatus,"antibotsstatus")
 }else{
 db.set(guild.id,"off","antibotsstatus")
 }
if(data.hasOwnProperty("Allowbot")) {
 db.push(guild.id,data.Allowbot,"antibotsabots")
 }
if(data.hasOwnProperty("antibotaction")) {
 db.set(guild.id,data.antibotaction,"antibotsaction")
 }
if(req.body['VcOnlinstatus'] == "on") {
 db.set(guild.id,data.VcOnlinstatus,"vconlinstatus")
 }else{
 db.set(guild.id,"off","vconlinstatus")
 }
 if(data.hasOwnProperty("VconlineChannel")) {
 db.set(guild.id,data.VconlineChannel,"vconlinechannel")
 }
 if(data.hasOwnProperty("VcOnlineName")) {
 db.set(guild.id,data.VcOnlineName,"vconlinename")
 }
if(req.body['Prostatus'] == "on") {
 db.set(guild.id,data.VcOnlinstatus,"prostatus")
 }else{
 db.set(guild.id,"off","prostatus")
 }
 if(data.hasOwnProperty("kicklimit")) {
 db.set(guild.id,data.kicklimit,"prolimitskick")
 }
 if(data.hasOwnProperty("banlimit")) {
 db.set(guild.id,data.banlimit,"prolimitsban")
 }
 if(data.hasOwnProperty("channelcreatelimit")) {
 db.set(guild.id,data.channelcreatelimit,"prolimitschannelc")
 }
 if(data.hasOwnProperty("channeldeletelimit")) {
 db.set(guild.id,data.channeldeletelimit,"prolimitschanneld")
 }
 if(data.hasOwnProperty("rolecreatelimit")) {
 db.set(guild.id,data.rolecreatelimit,"prolimitsrolec")
 }
 if(data.hasOwnProperty("logsChannel")) {
 db.set(guild.id,data.wlcChannel,"logschannel")
 }
 if(data.hasOwnProperty("roledeletelimit")) {
 db.set(guild.id,data.roledeletelimit,"prolimitsroled")
 }
res.redirect(`/guilds/${req.params.guildID}/manage`); 
});





app.get('/guilds/:guildID/show', checkAuth, (req, res) => {
	const guild = client.guilds.get(req.params.guildID);
	if (!guild) return res.status(404);
	const isManaged = guild && Boolean(guild.member(req.user.id)) ? guild.member(req.user.id).permissions.has('MANAGE_GUILD') : false;
	if (!isManaged && !req.session.isAdmin) res.redirect('/');
	const groles = app.get(`https://discordapp.com/api/v6/guilds/${req.params.guildID}/roles`);
	const user = req.isAuthenticated() ? req.user : null;
	const botStats = [{
		bot: client,
		perms: EvaluatedPermissions,
		moment,
		guildroles: groles
	}];
	res.render('views/guild/show.ejs', {
		guild,
		user,
		bot: botStats
	});
});


app.get('/api/', (req, res) => {
	res.render('views/pages/autherror');
});

app.get('/logout', (req, res) => {
	req.session.destroy(() => {
		req.logout();
		res.redirect('/');
	});
});

app.get('/', (req, res) => {
	const guildCount = client.guilds.size;
  const ping = client.ping
	const usersCount = client.users.size;
	const bot = client;
	const user = req.isAuthenticated() ? req.user : null;
	const useradmin = req.session.isAdmin;
	res.render('views/pages/index', {
		guildCount, ping , usersCount, bot, user, useradmin
	});
});

app.get('/premium', (req, res) => {
	const user = req.isAuthenticated() ? req.user : null;
  const premium_Month = '$3';
  const premium_Year = '$36';
  res.render('views/pages/premium', {
    user, premium_Month, premium_Year
  })
})



app.get('/sitemap', (req, res) => {
  res.render('views/pages/sitemap', {
  })
})




app.get('/status', (req, res) => {
const guildCount = client.guilds.size;
  const ping = client.ping
  const duration = client.uptime
	const botStatus = client.user.presence.status;
	const usersCount = client.users.size;
	const bot = client;
	const user = req.isAuthenticated() ? req.user : null;
	const useradmin = req.session.isAdmin;
	res.render('views/pages/status', {
		guildCount, botStatus, ping , usersCount, bot, user, useradmin, uptime: duration,
	});
});


app.get('/about', (req, res) => {
	const user = req.isAuthenticated() ? req.user : null;
	const akdevs = client.guilds.get('725425153898446852').roles.get('725865672512372807').members
	const akteam = client.guilds.get('725425153898446852').roles.get('725866029523140710').members
	res.render('views/pages/about', {
		user, akdevs, akteam
	});
});
app.get('/status', (req, res) => {

	res.render('views/pages/status', {
	});
});
app.get('/commands', (req, res) => {
  const user = req.isAuthenticated() ? req.user : null;
	res.render('views/pages/commands', {
    user
	});
});

app.get('/features', (req, res) => {
	const user = req.isAuthenticated() ? req.user : null;
	res.render('views/pages/features', {
		client, user
	});
});

app.get('/invite', (req, res) => {
	res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
});
app.listen(3000);

app.get('*', (req, res) => {
	if (res.status(404)) {
		const bot = client;
		const user = req.isAuthenticated() ? req.user : null;
		res.render('views/pages/index.ejs', {
			bot, user
		});
	}
});

async function proantibots (botid,userid,guildid) 
{
let guild = await client.guilds.get(guildid);
let user = await guild.members.get(userid);
let bot = await guild.members.get(botid);
let status = db.get(guild.id,"antibotsstatus");
if (status === "off") return;
let action = db.get(guild.id,"antibotsaction");
if(!action){
bot.kick("AntiBots Protection");
}else
if(action == "ban")
{
bot.ban("AntiBots Protection");
}
else
if(action == "kick")
{
bot.kick("AntiBots Protection");
}
else
if(action == "remove_permissions"){
guild.members.get(bot.id).roles.forEach( r => {
 r.edit({
permissions : []}
);
}
)
}
guild.owner.send(`تم أتخاذ الاجراءات الحماية الخاصه بأضافة البوتات ضد\n ${bot.user.tag} \n تم اضافتة بواسطة <@${user.user.id}> `); 
if (db.has(guild.id,"prochannel"))
{
let channel = guild.channels.get(db.get(guild.id,"prochannel"));
if (!channel) return;
channel.send(`Bot Has Joind Server\n Botname ${bot.user.tag} \n By <@${user.user.id}> `);
}
};
client.on("message", async message => {
if (db.get(message.guild.id) === undefined) {
db.ensure(message.guild.id,{
prefix: "#a",
mod:[],
languge:"eng",
plus:"no",
wlcstatus:"off",
wlcdmstatus:"off",
wlcmsg:null,
wlcdmmsg:null,
wlcchannel:null,
autorlestatus:"off",
autorole:null,
picchannelstatus:"off",
picrchannel:null,
colorstitle:null,
colorsbackground:"",
colorsShape:"",
antilinksstatus:"off",
antilinkschannels:[],
logstatus: "off",
logchannel: null,
vconlinstatus:"off",
vconlinename:"Voice Online [00]",
vconlinechannel:null,
antibotsstatus:"off",
antibotsabots:[],
antibotsaction:"kick",
prostatus:"off",
proausers:[],
prolimitskick: 2,
prolimitsban:2,
prolimitschannelc:3,
prolimitschanneld:1,
prolimitsrolec:3,
prolimitsroled:1,
cmdmutelimit:0,
cmdbanlimit:0,
cmdkicklimit:0,
proaction:"remove_roles",
prochannel:null,
muterole:null,
djroles:[],
adminrole:null,
modrole:null,
modlogstatus:"off",
modlog:null,
rm: []
})
}
const prefix = db.get(message.guild.id,"prefix")
//------------------- أوامر عامة


if(message.author.bot) return;

    if (message.content.startsWith(prefix +"ping")) {
     message.channel.send("pong").then(me => {
 me.edit(`Pong! (${Math.round(client.ping)})ms`)
})
      
}



if (message.content === (prefix + "help")) {
message.react("✔")

        if(message.channel.type === 'dm') return;
if(message.author.bot) return;

  const emb = new Discord.RichEmbed()
      .setColor("#070000","#ffffff")
 .setDescription(`مرحبا، شكرا لك لاستخدام أكون بوت 
أذا كنت تحتاج مساعدة يمكنك التواصل معنا عن طريق سيرفر الدعم الفني
البوت بالكامل يدعم الغه العربية.
لرؤية الأوامر الخاصة بالبوت 

سيرفر الدعم الفني 

لوحة التحكم 
`)     
 .setTimestamp();
        return message.author.send(emb);
  
if (message.webhookID) return;
   


};




if (message.content === (prefix + "invite")) {
if(message.author.bot) return;
        if(message.channel.type === 'dm') return;


return message.react("✅")
   

message.author.send(`
يمكنك دعوه البوت عن طريق الرابط التالي :
https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot
`)
 
}
 






if (message.content === (prefix + "dashboard")) {
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('ليس لديك الصلاحيات لأستخدام هذا الامر');

if(message.author.bot) return;
        if(message.channel.type === 'dm') return;

message.react("✅")
message.author.send(`
تستطيع التحكم في هذا السيرفر ${message.guild.name} عن طريق الرابط التالي
https://www.akonbot.xyz/guilds/${message.guild.id}/manage
`)




};







if (message.content === (prefix + "hi")) {
  const emb = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setTitle("حول أكون بوت")
      .setDescription(` مرحبا، أنا أكون بوت، بوت أداري يجعل السيرفر الخاص بك سهل الاستخدام ويساعدك أيضا في حمايته

- **تواصل معنا**:
قم بكتابة \`${prefix}help\` للحصول علي معلومات حول البوت.
قم بكتابة \`${prefix}invite\` لدعوة البوت للسيرفر الخاص بك.
قم بكتابة \`${prefix}support\` للأنضمام للسيرفر الخاص بالبوت.


- **المميزات**:
• الحماية من حيث يمكنك حماية السيرفر الخاص بك من الهجمات ومحاولات اختراقه
• أوامر يتم تطويرها بأستمرار
• الترحيب من حيث يمكنك الترحيب شخص جديد أنضم للسيرفر الخاص بك
• لوحة تحكم سهلة الاستخدام ومناسبة لجميع الاجهزة
• الرول التلقائي حيث يستطيع البوت اعطاء لكل شخص جديد رول انت تقوم بتحديده
• أوامر أدارية مثل (التحذير ، البان ، الكيك وغيرها..)
• فريق اداري يعمل علي مساعدتك وتسهيل استخدام البوت


- **معلومات اضافية**:
عدد السيرفرات الحالية التي يعمل عليها البوت - ${client.guilds.size}
المستخدمين - ${client.users.size}

`);
        return message.channel.send(emb);

webhook.send('hello!')
  .then(message => console.log(`Sent message: ${message.content}`))
  .catch(console.error); 
 }





if (message.content === (prefix + "user")) {

 let user = message.mentions.users.first();
    if (!user) {
      user = message.author;
 const mentioneduser = user;
    const joineddiscord = (mentioneduser.createdAt.getDate() + 1) + "/" + (mentioneduser.createdAt.getMonth() + 1) + "/" + mentioneduser.createdAt.getFullYear();
    let game;
    if (!user.presence.game) {
      game = "لا يلعب لعبة حاليا.";
    } else {
      game = user.presence.game.name;
    }
    let messag;
    if (!user.lastMessage) {
      messag = "المستخدم لم يرسل رسالة.";
    } else {
      messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === "online") {
      status = "متصل";
    } else if (user.presence.status === "dnd") {
      status = " عدم ألازعاج";
    } else if (user.presence.status === "idle") {
      status = "مشغول";
    } else if (user.presence.status === "offline") {
      status = "غير متصل:";
    }
    let stat; // eslint-disable-line no-unused-vars
    if (user.presence.status === "offline") {
      stat = 0x000000;
    } else if (user.presence.status === "online") {
      stat = 0x00AA4C;
    } else if (user.presence.status === "dnd") {
      stat = 0x9C0000;
    } else if (user.presence.status === "idle") {
      stat = 0xF7C035;
    }

  const emb = new Discord.RichEmbed()
      .setColor("#070000","#ffffff")
      .addField(`[معلومات حول ${user.tag}]:`, `التاج وألأسم: ${user.tag}\nتاريخ الانضمام: ${joineddiscord}\nالرسالة الأخيرة: ${messag}\nهل يلعب لعبة: ${game}\nالحالة: ${status}\nهل هوا مستخدم أم بوت: ${user.bot === false ? "مستخدم" : "بوت" }`)
      .setTimestamp();
        return message.channel.send(emb);
  }
  }

//---------------- نهاية الاوامر العامة

const webhookClient = new Discord.WebhookClient('731903828538032148', 'WacmtoHqdE6OcrzFgqxAVUcqyDZj_muTU9X6x1jFJFA8k_bVUujs0k6lRb9cGIShGgDM');

const embed = new Discord.MessageEmbed()
	.setTitle('Some Title')
	.setColor('#0099ff');

webhookClient.send('Webhook test', {
	username: 'some-username',
	avatarURL: 'https://i.imgur.com/wSTFkRM.png',
	embeds: [embed],
});


//--------------- الاوامر الادارية
if (message.content === (prefix + "lockroom")) {
    if (message.author.bot) return;

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('ليس لديك صلاحيات **مسؤول الرومات** قم بالحصول عليها ثم عاود المحاولة.');
message.channel.overwritePermissions(message.guild.id, {
  SEND_MESSAGES: false
  
}).then(() => {
message.reply(`تم أغلاق هذا الروم، لفتحه قم بأستخدام **${prefix}unlockroom** `);
})
}
    



if (message.content === (prefix + "unlockroom")) {
    if (message.author.bot) return;


if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('ليس لديك صلاحيات **مسؤول الرومات** قم بالحصول عليها ثم عاود المحاولة.');
message.channel.overwritePermissions(message.guild.id, {
SEND_MESSAGES: true

}).then(() => {
message.reply(`تم فتح هذا الروم لأغلاقه قم بأستخدام **${prefix}lockroom** `);
})
}





if (message.content === (prefix + "hideroom")) {
    if (message.author.bot) return;

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('ليس لديك صلاحيات **مسؤول الرومات** قم بالحصول عليها ثم عاود المحاولة.');
message.channel.overwritePermissions(message.guild.id, {
  READ_MESSAGES: false
  
}).then(() => {
message.reply(`تم أخفاء هذا الروم لأظهاره مجددا أستخدم **${prefix}unhideroom** `);

 

})
}





if (message.content === (prefix + "unhideroom")) {
    if (message.author.bot) return;

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('ليس لديك صلاحيات **مسؤول الرومات** قم بالحصول عليها ثم عاود المحاولة.');
message.channel.overwritePermissions(message.guild.id, {
  READ_MESSAGES: true
  
}).then(() => {
message.reply(`تم أظهار هذا الروم لأخفاء هذا الروم أستخدم **${prefix}hideroom** `);


})
}




if(message.content.startsWith(prefix + "warnings")) {
    if (message.author.bot) return;

 

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
var men = message.mentions.members.first();
var guild = message.guild;
if(!men) return message.channel.send(`يجب عليك تحديد الشخص أولا 
${prefix}warnings @user`)
db.ensure(`${guild.id}-${men.id}`, [])
let embed = new RichEmbed()
.setTitle(`التحذيرات الخاصة بالمستخدم ${men.user.tag}`)
.setThumbnail("https://media.discordapp.net/attachments/657365995157192747/668325291533271060/error-512.png")
.setFooter(client.user.username, client.user.avatarURL)
if(db.get(`${guild.id}-${men.id}`) === undefined || db.get(`${guild.id}-${men.id}`).length == 0) {embed.setDescription("This user does not already have warnings.")}
let num = 1;
db.get(`${guild.id}-${men.id}`).forEach(mm => {
let nnumm =  num++
embed.addField(`عدد التحذيرات **${nnumm}**` , ` \`\`\`${mm}\`\`\``)
})
message.channel.send({embed : embed})
      
 
}
if(message.content.startsWith(prefix + "warn")) { 
         if (message.author.bot) return;

 
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
var args = message.content.split(" ").slice(2).join(" ");
var men = message.mentions.members.first();
var guild = message.guild;
if(!men) return message.channel.send(`You need to mention someone,\nExample: \`**${prefix}warn @User Spam**`);
if(message.guild.ownerID != message.author.id && message.member.highestRole.position<= men.highestRole.position)return message.channel.send(`You can/t warn ${men.user.tag} becuase his role highest from yours.`);
if(men.hasPermission(8)) return message.channel.send(`You don't have permissions to warn \`${men.user.tag}\`.`);
if(!args) return message.channel.send(`You need to type reason.`);
db.ensure(`${guild.id}-${men.id}`, [])
db.push(`${guild.id}-${men.id}`, args)
message.channel.send(` ${men.user.tag} has warned.`)
message.mention.member.send(`hi`) 
}
if (message.content === (prefix + "removewarn")) {
         if (message.author.bot) return;

 
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
var args = message.content.split(" ").slice(2).join(" ");
var men = message.mentions.members.first();
var guild = message.guild;
if(!men) return message.channel.send(`You need to mention someone,\nExample: \${prefix}removewarn @User 1`)
if(!args) return message.channel.send(`You need to type warn number.`)
if(isNaN(args)) return message.channel.send("Usage : #aremovewarn warn number")
db.ensure(`${guild.id}-${men.id}`, [])
let num = 1;
db.get(`${guild.id}-${men.id}`).forEach(mm => {
let nnumm =  num++
if(nnumm == parseInt(args)) { db.remove(`${guild.id}-${men.id}`, mm) }
})
message.channel.send("Warn Removed.")
 

}
if (message.content === (prefix + "clearwarnings")) {
         if (message.author.bot) return;

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
var men = message.mentions.members.first();
var guild = message.guild;
if(!men) return message.channel.send(`You need to mention **someone**,\nExample: \**${prefix}clearwarnings @User** `)
if(db.get(`${guild.id}-${men.id}`) === undefined || db.get(`${guild.id}-${men.id}`).length == 0) return message.channel.send("This user does not already have warnings.")
db.set(`${guild.id}-${men.id}`, [])
message.channel.send("Warns Cleared.")
 
}







}
)
["on"]("guildMemberAdd", async gaber_x5 => {
let gaber_x3 = gaber_x5.guild;
const audit = await gaber_x5.guild.fetchAuditLogs({type: 'BOT_ADD'});
const gaber_x4 = audit.entries.first().executor;
let antib = db.get(gaber_x5.guild.id,"antibotsstatus");
if(gaber_x5.user.bot && antib === "on") 
{
proantibots(gaber_x5.id , gaber_x4.id , gaber_x3.id);
}
}
)
["on"]("guildMemberAdd", async member => {
if (!member.guild) return;
let autorlestatus = db.get(member.guild.id,"autorlestatus")
if (autorlestatus === "on")
{
var role = member.guild.roles.get(db.get(member.guild.id,"autorole"));
member.addRole(role)
}
let wlcstatus = db.get(member.guild.id,"wlcstatus")
member.guild.fetchInvites().then(async guildInvites => {
const ei = invites[member.guild.id];
invites[member.guild.id] = guildInvites;
const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
const inviter = client.users.get(invite.inviter.id);
if (wlcstatus === "on") {
let channel = member.guild.channels.get(db.get(member.guild.id,"wlcchannel"));
let message = db.get(member.guild.id,"wlcmsg");
if (!channel) return;
if (!message) return;
if (db.has(member.guild.id,"wlcmsg"))
{
setTimeout(async () => {
await channel.send(message
.replace('[user]', `<@${member.user.id}>`)
.replace('[inviter]', `<@${inviter.id}>`)
.replace('[server]', member.guild.name)
.replace("[space]","\n")
)
},2000)
}
}
let wlcdmstatus = db.get(member.guild.id,"wlcdmstatus")
if (wlcdmstatus === "on") 
{
let dmmessage = db.get(member.guild.id,"wlcdmmsg");
if (!dmmessage) return;
setTimeout(() => {
member.send(dmmessage.replace('[user]', `<@${member.user.id}>`)
.replace('[inviter]', `<@${inviter.id}>`)
.replace('[server]', member.guild.name)
.replace("[space]","\n")
)
},2000)
}
}
)
}
).on ("voiceStateUpdate", async (Gaber , Hema) => {
var channel = Hema ["guild"].channels.get (db.get(Gaber.guild.id,"vconlinechannel"));
if (!channel) return undefined;
let vconlinstatus = db.get(Gaber.guild.id,"vconlinstatus")
if (vconlinstatus === "on") {
    try {
channel ["setName"] (db.get(Gaber.guild.id,"vconlinename").replace ("[00]", Gaber ["guild"].members.filter (m => m.voiceChannel).size));
    } catch (e) {
return;
}
 }
}
).on("channelDelete", async ch => {
if(db.get(ch.guild.id, "prostatus") == "off") return undefined;
if (ch.type == "dm") return undefined;
let gaber_guild0x1_السيرفر = ch.guild
const gaber_user0x1_تعريف_الفاعل = await gaber_guild0x1_السيرفر.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(gaber_audit0x1_الوق => gaber_audit0x1_الوق.entries.first())
let gaber_entry0x1_الفاعل = gaber_user0x1_تعريف_الفاعل.executor;
if (gaber_guild0x1_السيرفر.ownerID == gaber_entry0x1_الفاعل.id || gaber_entry0x1_الفاعل.id == client.user.id) return undefined;
if (!gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] || gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] == null) {
    gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = 1;
    setTimeout(() => {
      gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = null;
    }, 60000);
  } else {
    gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] + 1;
    setTimeout(() => {
      gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = null;
    }, 60000);
    if (gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] > db.get(gaber_guild0x1_السيرفر.id,"prolimitschanneld")) {
  gaber_protection0x1_الحماية(ch.guild, "Delete Channels",gaber_entry0x1_الفاعل);
    }
  }
}).on("channelCreate", async ch => {
if(db.get(ch.guild.id, "prostatus") == "off") return undefined;
if (ch.type == "dm") return undefined;
let gaber_guild0x1_السيرفر = ch.guild
const gaber_user0x1_تعريف_الفاعل = await gaber_guild0x1_السيرفر.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(gaber_audit0x1_الوق => gaber_audit0x1_الوق.entries.first())
let gaber_entry0x1_الفاعل = gaber_user0x1_تعريف_الفاعل.executor;
if (gaber_guild0x1_السيرفر.ownerID == gaber_entry0x1_الفاعل.id || gaber_entry0x1_الفاعل.id == client.user.id) return undefined;
if (!gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] || gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] == null) {
    gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = 1;
    setTimeout(() => {
      gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = null;
    }, 60000);
  } else {
    gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] + 1;
    setTimeout(() => {
      gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = null;
    }, 60000);
    if (gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] > db.get(gaber_guild0x1_السيرفر.id,"prolimitschannelc")) {
  gaber_protection0x1_الحماية(ch.guild, "Create Channels",gaber_entry0x1_الفاعل);
    }
  }
}).on("roleCreate", async rr => {
if(db.get(rr.guild.id, "prostatus") == "off") return undefined;
let gaber_guild0x1_السيرفر = rr.guild
const gaber_user0x1_تعريف_الفاعل = await gaber_guild0x1_السيرفر.fetchAuditLogs({type: 'ROLE_CREATE'}).then(gaber_audit0x1_الوق => gaber_audit0x1_الوق.entries.first())
let gaber_entry0x1_الفاعل = gaber_user0x1_تعريف_الفاعل.executor;
if (gaber_guild0x1_السيرفر.ownerID == gaber_entry0x1_الفاعل.id || gaber_entry0x1_الفاعل.id == client.user.id) return undefined;
if (!gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] || gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] == null) {
    gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = 1;
    setTimeout(() => {
      gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = null;
    }, 60000);
  } else {
    gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] + 1;
    setTimeout(() => {
      gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = null;
    }, 60000);
    if (gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] > db.get(gaber_guild0x1_السيرفر.id,"prolimitsrolec")) {
  gaber_protection0x1_الحماية(rr.guild, "Create Role",gaber_entry0x1_الفاعل);
    }
  }
}).on("roleDelete", async rr => {
if(db.get(rr.guild.id, "prostatus") == "off") return undefined;
let gaber_guild0x1_السيرفر = rr.guild
const gaber_user0x1_تعريف_الفاعل = await gaber_guild0x1_السيرفر.fetchAuditLogs({type: 'ROLE_DELETE'}).then(gaber_audit0x1_الوق => gaber_audit0x1_الوق.entries.first())
let gaber_entry0x1_الفاعل = gaber_user0x1_تعريف_الفاعل.executor;
if (gaber_guild0x1_السيرفر.ownerID == gaber_entry0x1_الفاعل.id || gaber_entry0x1_الفاعل.id == client.user.id) return undefined;
if (!gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] || gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] == null) {
    gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = 1;
    setTimeout(() => {
      gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = null;
    }, 60000);
  } else {
    gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] + 1;
    setTimeout(() => {
      gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = null;
    }, 60000);
    if (gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] > db.get(gaber_guild0x1_السيرفر.id,"prolimitsroled")) {
  gaber_protection0x1_الحماية(rr.guild, "Delete Role",gaber_entry0x1_الفاعل);
    }
  }
}).on("guildBanAdd", async rr => {
if(db.get(rr.guild.id, "prostatus") == "off") return undefined;
let gaber_guild0x1_السيرفر = rr.guild
const gaber_user0x1_تعريف_الفاعل = await gaber_guild0x1_السيرفر.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(gaber_audit0x1_الوق => gaber_audit0x1_الوق.entries.first())
let gaber_entry0x1_الفاعل = gaber_user0x1_تعريف_الفاعل.executor;
if (gaber_guild0x1_السيرفر.ownerID == gaber_entry0x1_الفاعل.id || gaber_entry0x1_الفاعل.id == client.user.id) return undefined;
if (!gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] || gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] == null) {
    gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = 1;
    setTimeout(() => {
      gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = null;
    }, 60000);
  } else {
    gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] + 1;
    setTimeout(() => {
      gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = null;
    }, 60000);
    if (gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] > db.get(gaber_guild0x1_السيرفر.id,"prolimitsban")) {
  gaber_protection0x1_الحماية(rr.guild, "Ban Member",gaber_entry0x1_الفاعل);
    }
  }
}).on("guildMemberRemove", async rr => {
  if(db.get(rr.guild.id, "prostatus") == "off") return undefined;
let gaber_guild0x1_السيرفر = rr.guild
const gaber_user0x1_تعريف_الفاعل = await gaber_guild0x1_السيرفر.fetchAuditLogs({type: 'MEMBER_KICK'}).then(gaber_audit0x1_الوق => gaber_audit0x1_الوق.entries.first())
let gaber_entry0x1_الفاعل = gaber_user0x1_تعريف_الفاعل.executor;
if (gaber_guild0x1_السيرفر.ownerID == gaber_entry0x1_الفاعل.id || gaber_entry0x1_الفاعل.id == client.user.id) return undefined;
if (!gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] || gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] == null) {
    gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = 1;
    setTimeout(() => {
      gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = null;
    }, 60000);
  } else {
    gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] + 1;
    setTimeout(() => {
      gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] = null;
    }, 60000);
    if (gaber_actions0x1_عدد_محاولات_التهكير[gaber_entry0x1_الفاعل.id] > db.get(gaber_guild0x1_السيرفر.id,"prolimitskick")) {
  gaber_protection0x1_الحماية(rr.guild, "Kick Member",gaber_entry0x1_الفاعل);
    }
  }
})
async function gaber_protection0x1_الحماية(gaber_guild0x1_السيرفر, gaber_text01_مافعله ,gaber_user01_الفاعل) {
let gaber_roles0x1_الرتب = gaber_guild0x1_السيرفر
.member(gaber_user01_الفاعل)
.roles.filter(
          r =>
            r.hasPermission("ADMINISTRATOR") ||
            r.hasPermission("MANAGE_GUILD") ||
            r.hasPermission("MANAGE_ROLES") ||
            r.hasPermission("MANAGE_CHANNELS") ||
            r.hasPermission("BAN_MEMBERS") ||
            r.hasPermission("KICK_MEMBERS")
        );
        gaber_roles0x1_الرتب.filter(gaber_rr0x1_رتبة => gaber_rr0x1_رتبة.editable && gaber_rr0x1_رتبة.name != "@everyone")
      .map(async gaber_rr0x1_رتبة => {
await gaber_guild0x1_السيرفر.member(gaber_user01_الفاعل).removeRole(gaber_rr0x1_رتبة.id);        
})
gaber_guild0x1_السيرفر.owner.send(`${gaber_user01_الفاعل} (${gaber_user01_الفاعل.tag}) has excused the **${gaber_text01_مافعله}** limit.`, embed);
};