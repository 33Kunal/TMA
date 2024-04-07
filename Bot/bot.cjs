const { Telegraf } = require('telegraf');

const TOKEN = '6401499816:AAGSnvGkujUdjGxpp7opsaUvN6nz7yI0MmE';

const bot = new Telegraf(TOKEN)

const web_link = 'https://mappareferral.netlify.app/'

bot.start((ctx) => ctx.reply('Welcome <3', 
{reply_markup: {keyboard: [[{text:"open app", web_app: {url: web_link}}]]},
})
);



bot.launch()