///////////////////////////////////////////////

//  !n ID "NAME"  改暱稱
//  !k ID 踢出
//  !mu ID 0/1 鎖mic
//  !df ID 0/1 鎖lISTEN
//  !move ID ChinelID 移動頻道
//  !ban ID DAY 

///////////////////////////////////////////////
//套件跟設定檔載入的部分
const discord = require("discord.js");
const client = new discord.Client();
const guild = new discord.Guild();
//const config = require(process.env.discord_token);
//var ffmpeg = require('ffmpeg');
//const ytdl = require('ytdl-core');

//登入通知(顯示於下方小黑框)
client.on("ready",()=>{
    console.log(`成功登入囉!${client.user.tag}`);
});

const broadcast = client.voice.createBroadcast();
	  broadcast.play('可憐哪.mp3');
const DDAY = new Date(2020, 7, 31, 17, 30, 0)
const today = new Date();
const poorU = new discord.MessageEmbed();
var gohFlag = 0;
var ban1 = false;


function M2D(A,B){
	var i = 0;
	var D = 0;
	if(A>B){var A0 = A;A = B; B = A0;}
	for(i=(A+1);i<B;i++){
		if(A==1||A==3||A==5||A==7||A==8||A==10||A==12){D+=31;}else if(A==4||A==6||A==9||A==11){D+=30;}else if(A==2){var C = A/4;if(C==0){D+=29;}else{D+=28;}}
	}
	return D;
}

/*function steamplay(VoiceC,url,vol){
	VoiceC.join()
        .then(connection =>{
          console.log("bot join the channel");
          const stream = ytdl(url,{quality: 'highestaudio'});//https://www.youtube.com/watch?v=--cxZbnmmoc
          const dispatcher = connection.play(stream);
          dispatcher.setVolume(vol);
        });
}*/


client.on('message', msg => {
	
	//const targetID = msg.guild.members.cache.get('509053720575868939');
	
	//const targetNAME = guild.member(targetID);
	
	if(msg.author.id == '509053720575868939'){ban1=true;}
	
  else if(msg.author.id == '509053720575868939'&&gohFlag!=0){
	console.log(msg.member.displayName + 'CMD: ' + 'chicken goh goh goh!!' );
	if(msg.member.voice.channel){
	var vc = msg.member.voice.channel.join().then(connection => {
		const dispatcher = connection.play('yisell_sound_2014082323540096241_66366.mp3');
		dispatcher.setVolume(0.5);
		});
	msg.reply('腰兩洞閉嘴');}else{msg.reply('腰兩洞閉嘴');}
  }else if(msg.content.match('#JOIN')&&!msg.author.bot){
	console.log('BOT IS JOIN TO YOUR VOICE CHANNEL!' );
	if (msg.member.voice.channel) {
		//console.log(msg.member.voice.channel);
		var vc = msg.member.voice.channel.join();}
  }else if(msg.content.match('play:')&&!msg.author.bot){
	if (msg.member.voice.channel) {
		var musURL = msg.content.substring(5);
		console.log(msg.member.displayName + 'want to play music from:' + musURL );
		//msg.reply(musURL);
		var vc = msg.member.voice.channel.join().then(connection => {
  // You can play a file or a stream here:
		const dispatcher = connection.play(ytdl(musURL, { quality: 'highestaudio' }));
		dispatcher.setVolume(0.3);
		dispatcher.on('start',playing =>{msg.reply('playing');});
			});

		
		//const voiceplay = vc.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { quality: 'highestaudio' }));
	
      /*msg.member.voice.channel.join().then(connection => {console.log('Connected!');
														  connection.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { quality: 'highestaudio' })).start();})
	  .catch(console.error);*/
		
		
	  }else {
	msg.reply('You need to join a voice channel first!');}
  }else if(msg.content == '!o'&&!msg.author.bot){
	 msg.member.voice.channel.leave(); 
	 ban1 = false;
  }else if(msg.author.id == '509053720575868939' && msg.content == '中鋼噁男'){
	console.log('老司機');
	msg.reply('新烏日狗幹老司機');
  }else if(msg.content == 'gohgohgoh'&&!msg.author.bot){
  if(gohFlag==0){gohFlag=1;console.log('答錄機GOH~');}else{gohFlag=0;console.log('答錄機CLOSED');}
  }else if(msg.author.id == '431364619454513162' && msg.content.match('#UNMUTE')){
	msg.member.voice.setSelfMute(false);
	console.log('UNMUTE');
  }
///////////////////////////////////////////撥音樂///////////////////////////////////////////////////////////	
  else if(msg.content.toLowerCase().startsWith("!p")){  
	let conFlag = false;
    let args = msg.content.split(/\s+/);
	let url,room,vol;
	if(args.length<=1){conFlag = false;}else{
		url = args[1];
		if(url[0]=='h'&&url[1]=='t'&&url[2]=='t'&&url[3]=='p'){conFlag = true;}
		room = args[2];
	//console.log(args.length);
	//let cycle = args[4];
	//if(cycle==null){cycle = 1;}
		if(args.length < 3){room = msg.member.voice.channel.id;}
		if(args[3]!=null){vol = args[3]/10;}else{vol = 0.1;}
	}
	if(conFlag){
		let VoiceC = msg.guild.channels.cache.find(channel => channel.id == room);//525335479973838858
	//	let logrt = steamplay(VoiceC,url,vol);
	}else{console.log("wrong url");msg.reply("Wrong url");}
	//console.log(logrt);
	/*var vc = msg.member.voice.channel.join().then(connection => {//
		console.log("bot join the channel");
          const stream = ytdl(url,{quality: 'highestaudio'});//https://www.youtube.com/watch?v=--cxZbnmmoc
          const dispatcher = connection.play(stream);
	});*/
  }
 ///////////////////////////////////////////改暱稱//////////////////////////////////////////////////////////
  if(msg.content.toLowerCase().startsWith('!n')&&!msg.author.bot&&msg.author.id == '431364619454513162'){
	let args = msg.content.split(/\s+/);
	let tID = args[1];
	let nickname = args[2];
	let targetID = msg.guild.members.cache.get(tID);
	console.log("TARGET:" + targetID);
	targetID.setNickname(nickname)
			  .then(updated => console.log(`Updated guild name to ${guild}`))
			  .catch(console.error);
  }
 ///////////////////////////////////////////設靜音////////////////////////////////////////////////////////// 
 if(msg.author.id == '431364619454513162' && msg.cleanContent.match("!mu")){
	let args = msg.content.split(/\s+/);
	let tID = args[1];
	let muteswitch = args[2];
	let vc = msg.member.voice.channel.join().then(connection =>{
		let vcc = connection.voice.guild.members.cache.get(tID);
		console.log("TARGET:" + vcc);
		vcc.voice.setMute(muteswitch);
	});
  }
///////////////////////////////////////////不給聽////////////////////////////////////////////////////////// 
 if(msg.author.id == '431364619454513162' && msg.cleanContent.match("!df")){
	let args = msg.content.split(/\s+/);
	let tID = args[1];
	let muteswitch = args[2];
	let vc = msg.member.voice.channel.join().then(connection =>{
		let vcc = connection.voice.guild.members.cache.get(tID);
		console.log("TARGET:" + vcc);
		vcc.voice.setDeaf(muteswitch);
	});
  }
///////////////////////////////////////////移動語音頻道///////////////////////////////////////////////////////////	
 if(msg.author.id == '431364619454513162' && msg.cleanContent.match("!move")){
	let args = msg.content.split(/\s+/);
	let tID = args[1];
	let moveTAR = args[2];
	let vc = msg.member.voice.channel.join().then(connection =>{
		let vcc = connection.voice.guild.members.cache.get(tID);
		console.log("TARGET:" + vcc);
		vcc.voice.setChannel(moveTAR);
	});
	
	
	//targetID.kick('欠踢');
	/*mineID.setNickname('KUMAdjo')
		  .then(updated => console.log(`Updated guild name to ${guild}`))
	.catch(console.error);*/
	
  }
 /////////////////////////////////////////////滾出去////////////////////////////////////////////////////////////////
 if(msg.author.id == '431364619454513162' && msg.cleanContent.match("!k")){
	let args = msg.content.split(/\s+/);
	let tID = args[1];
	//let moveTAR = args[2];
	let vc = msg.member.voice.channel.join().then(connection =>{
		let vcc = connection.voice.guild.members.cache.get(tID);
		console.log("KICK:" + vcc);
		vcc.voice.kick();
	});
	
	
	//targetID.kick('欠踢');
	/*mineID.setNickname('KUMAdjo')
		  .then(updated => console.log(`Updated guild name to ${guild}`))
	.catch(console.error);*/
	
  }
  /////////////////////////////////////////////BAN////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 if(msg.author.id == '431364619454513162' && msg.cleanContent.match("!ban")){
	let args = msg.content.split(/\s+/);
	let tID = args[1];
	let banday = args[2];
	//let moveTAR = args[2];
	let vc = msg.member.voice.channel.join().then(connection =>{
		let vcc = connection.voice.guild.members.cache.get(tID);
		console.log("ban:" + vcc + "DAY:" + banday);
		vcc.voice.ban({ days: banday, reason: 'none' });
	});
	
	
	//targetID.kick('欠踢');
	/*mineID.setNickname('KUMAdjo')
		  .then(updated => console.log(`Updated guild name to ${guild}`))
	.catch(console.error);*/
	
  }
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
 if(msg.cleanContent.match('喔噢')&&!msg.author.bot){
	console.log('喔噢<3');
	var vc = msg.member.voice.channel.join().then(connection => {
		const dispatcher = connection.play('喔噢.mp3');
		dispatcher.setVolume(1);
		});
	//msg.reply('喔噢<3');
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if(msg.cleanContent.match('雞')&&!msg.author.bot){
	console.log(':CHANGE:');
	msg.reply(':middle_finger_tone5: ');
  }
});


//機器人登入
client.login(process.env.discord_token);
