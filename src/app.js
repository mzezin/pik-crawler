import getPropertyStatus from './getPropertyStatus';
import { connect, sendTelegramNotification } from './sendTelegramNotification';


const main = async () => {
  try {
    const status = await getPropertyStatus();
    const news = status !== 'Ожидается';
    if (news) await sendTelegramNotification(status);
  } catch (err) {
    console.log(err);
  }
};

const healthCheck = async () => {
  try {
    await sendTelegramNotification('Бот запущен');
  } catch (err) {
    console.log(err);
  }
};

connect().then(() => {
  healthCheck();
  setInterval(main, 120000);// check status
//  setInterval(healthCheck, 10800000); //check if bot is running
});
