import Telegraf from 'telegraf';
import Agent from 'socks5-https-client/lib/Agent';

import { socksAgentOptions, botToken } from './config';

const socksAgent = new Agent(socksAgentOptions);

const botOptions = {
  telegram: { agent: socksAgent },
};

const sendTelegramNotification = async (msg) => {
  try {
    const bot = new Telegraf(botToken, botOptions);
    bot.start();
    await bot.launch();
    console.log('Bot launched, incoming status: ', msg);
    await bot.telegram.sendMessage('-373754479', msg);
    bot.stop();
  } catch (err) {
    console.log(err);
    process.exitCode = 1;
  }
};

export default sendTelegramNotification;
