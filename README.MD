## One time launch

### `npm i`

### `cp src/config.sample.js src/config.js `

Input parameters into `src/config.js`

Telegram `chatId` could be obtained by starting chat with bot or adding bot to group. Then you could navigate to:
 https://api.telegram.org/bot{YourBOTToken}/getUpdates and look for `chat.id` 

### `npm start`

## Scheduled launch on server
### Server linux

*chromium* is needed for launch, you can install it with `sudo apt install chromium`

### Shell script example
`nano launch.sh`
```
#!/bin/sh

cd ~/pik-crawler/;
npm start;
```
`chmod +x launch.js`

### Cron for hourly launch

`crontab -e`

```
0 0,8-23 * * * ~/pik-crawler/launch.sh
```

Launch every hour 08:00 - 00:00