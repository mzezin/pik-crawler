import puppeteer from 'puppeteer';

import { login, password, propertyId } from './config';

const AUTH_URL = 'https://client.pik.ru/auth';
const STATUS_PAGE_URL = `https://client.pik.ru/object/${propertyId}/status`;
const LOGIN_SELECTOR = '#login';
const PASSWORD_SELECTOR = '#password';
const SUBMIT_SELECTOR = '#app > div.Page.no-scroll > div > div > div > div > div.Form > div > div > button';
const KEYS_STATUS_SELECTOR = '#app > div.Page > div:nth-child(1) > div > div.PageLayout-wrapper > div > div.ObjectPage-content > div.StatusDealPage > div.StatusDealPage-container > div:nth-child(2) > div.StatusDealPage-list.StatusDealPage-circle.StatusDealPage-circle--waiting.StatusDealPage-circle-nextSteps > div:nth-child(3) > div.StatusDealPage-status';

const getPropertyStatus = async () => {
  try {
    const browser = await puppeteer.launch({
      defaultViewport: {
        width: 1300,
        height: 700,
      },
    });
    const page = await browser.newPage();

    await page.goto(AUTH_URL);

    await page.click(LOGIN_SELECTOR);
    await page.keyboard.type(login);

    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(password);

    await page.click(SUBMIT_SELECTOR);

    await page.waitForNavigation();

    await page.goto(STATUS_PAGE_URL);

    await page.waitFor(2000);

    const statusElement = await page.$(KEYS_STATUS_SELECTOR);
    const { _remoteObject: { value: status } } = await statusElement.getProperty('innerHTML');

    browser.close();
    console.log('Status fetched: ', status);
    return status;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getPropertyStatus;
