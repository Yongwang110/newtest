import puppeteer from 'puppeteer';

describe('Homepage', () => {
  it('it should have logo text', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8000');
    await page.waitForSelector('div');
    const text = await page.evaluate(() => document.body.innerHTML);
    expect(text).toContain('<div>Ant Design Pro</siv>');
    await page.close();
    browser.close();
  });
});
