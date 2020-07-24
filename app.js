
//套件跟設定檔載入的部分
const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");
var ffmpeg = require('ffmpeg');
const ytdl = require('ytdl-core');

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


client.on('message', msg => {
	
	if(msg.author.id == '509053720575868939'){ban1=true;}
	
  if (msg.content.match('退伍')&&!msg.author.bot) {
	console.log(msg.member.displayName + 'CMD: ' + '退伍' );
	  if (msg.member.voice.channel) {
	  var vc = msg.member.voice.channel.join().then(connection => {
  // You can play a file or a stream here:
		const dispatcher = connection.play('讓我們繼續看下去.mp3');
		dispatcher.setVolume(0.3);
		//dispatcher.on('start',playing =>{msg.reply(poorU);}); 
										});
		
		//var leaveVC = msg.member.voice.channel.leave();
		poorU.setImage('https://imgs.niusnews.com/upload/imgs/default/2017MayP/0525hippo/3.png');
		poorU.setTitle('距離重出江湖還有' + (M2D(DDAY.getMonth(),today.getMonth())+(DDAY.getDate()-today.getDate())) + '日' + (24-today.getHours()) + '時');
		poorU.setDescription('綠色的鋼盔　是菜雞待退的渴望\n軍綠的內衣　是宸誌被操的汗液\n迷彩的外衣　是新訓放假的期待\n一條條揚起的勾勾\n是一個個想玩爆你的班長\n上層一條條勾魂攝魄的槓槓\n隱藏著新兵間最激動的怨氣\n新訓中心的長官，冷眼旁觀又迷失人生\n那股充滿爛泥和汗水的氣味，我們稱之為張宸誌的菜味。');
		msg.reply(poorU);
    //msg.reply('距離重出江湖還有' + (M2D(DDAY.getMonth(),today.getMonth())+(DDAY.getDate()-today.getDate())) + '日' + (24-today.getHours()) + '時');
	//console.log(M2D(DDAY.getMonth(),today.getMonth()));
	  }else{
		poorU.setImage('https://imgs.niusnews.com/upload/imgs/default/2017MayP/0525hippo/3.png');
		poorU.setTitle('距離重出江湖還有' + (M2D(DDAY.getMonth(),today.getMonth())+(DDAY.getDate()-today.getDate())) + '日' + (24-today.getHours()) + '時');
		poorU.setDescription('綠色的鋼盔　是菜雞待退的渴望\n軍綠的內衣　是宸誌被操的汗液\n迷彩的外衣　是新訓放假的期待\n一條條揚起的勾勾\n是一個個想玩爆你的班長\n上層一條條勾魂攝魄的槓槓\n隱藏著新兵間最激動的怨氣\n新訓中心的長官，冷眼旁觀又迷失人生\n那股充滿爛泥和汗水的氣味，我們稱之為張宸誌的菜味。');
		msg.reply(poorU);
		//msg.reply('距離重出江湖還有' + (M2D(DDAY.getMonth(),today.getMonth())+(DDAY.getDate()-today.getDate())) + '日' + (24-today.getHours()) + '時');
		//msg.reply(poorU);
		}
  }else if(msg.author.id == '509053720575868939'&&gohFlag!=0){
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
	  
  } else if(msg.content == 'BYE'&&!msg.author.bot){
	 msg.member.voice.channel.leave(); 
	 ban1 = false;
  }else if(msg.author.id == '525324919542644738' && msg.cleanContent.match('@CHANGEEEEEEEE')){
	console.log('甲慶記啦!!');
	if(msg.member.voice.channel){
	var vc = msg.member.voice.channel.join().then(connection => {
		const dispatcher = connection.play('bar.wav');
		dispatcher.setVolume(0.5);
		});
	msg.reply('甲慶記啦!!');}else{msg.reply('甲慶記啦!!');}
  }else if(msg.content == 'gohgohgoh'&&!msg.author.bot){
  if(gohFlag==0){gohFlag=1;console.log('答錄機GOH~');}else{gohFlag=0;console.log('答錄機CLOSED');}
  }else if(msg.author.id == '431364619454513162' && msg.content.match('#UNMUTE')){
	msg.member.voice.setSelfMute(false);
	console.log('UNMUTE');
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////	
  if(message.content.toLowerCase().startsWith("?")){  
    let args = message.content.split(/\s+/);
    let url = args[1];
    let room = args[2];
    let VoiceC = message.guild.channels.cache.find(channel => channel.id === room);//525335479973838858
    VoiceC.join()
        .then(connection =>{
          console.log("bot join the channel");
          const stream = ytdl(url,{quality: 'highestaudio'});//https://www.youtube.com/watch?v=--cxZbnmmoc
          const dispatcher = connection.play(stream,streamOptions);
          dispatcher.setVolume(0.1);
          dispatcher.on('end',() => {
            vc.leave();
          })
        })
        .catch();
  }
});


//機器人登入
client.login(config.token);
