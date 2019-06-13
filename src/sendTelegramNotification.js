import Telegraf from 'telegraf';
import Agent from 'socks5-https-client/lib/Agent';

import { socksAgentOptions, botToken, chatId } from './config';

const socksAgent = new Agent(socksAgentOptions);

const botOptions = {
  telegram: { agent: socksAgent },
};

const bot = new Telegraf(botToken, botOptions);

export const connect = async () => {
  try {
    bot.on('message', ctx => ctx.reply('Я работаю'))
    bot.start();
    await bot.launch();
    console.log('Bot launched');
  } catch (err) {
    console.log(err);
  }
};


export const sendTelegramNotification = async (msg) => {
  try {
     await bot.telegram.sendMessage(chatId, msg);
  } catch (err) {
    console.log(err);
  }
};

