import getPropertyStatus from './getPropertyStatus';
import sendTelegramNotification from './sendTelegramNotification';

const main = async () => {
  try {
    const status = await getPropertyStatus();
    const message = status === 'Запись на получение ключей скоро откроется'
      ? 'Пока ничего нового 😔'
      : `🔑🔑🔑 Новый статус ключей: ${status}`;
    await sendTelegramNotification(message);
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

main();
