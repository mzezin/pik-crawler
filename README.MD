## One time launch

### `npm i`

### `cp src/config.sample.js src/config.js `

Input parameters into `src/config.js`

Telegram `chatId` could be obtained by starting chat with bot or adding bot to group. Then you could navigate to:
 https://api.telegram.org/bot{YourBOTToken}/getUpdates and look for `chat.id` 

### `pm2 start pm2.json`
