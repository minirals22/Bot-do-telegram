require("dotenv").config();

const{Telegraf} = require("telegraf");
const{ message} = require("telegraf/filters")
const bot = new Telegraf(process.env.BOT_LOL);

bot.start((ctx) => ctx.reply('Oi jogador de LOL !!! Informe a imagem do campeão de LOL que você gostaria de ler a Lore Hoje'))
bot.on(message('photo'), (ctx) => ctx.reply('👍'))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))



console.log("sistema rodando ...");

