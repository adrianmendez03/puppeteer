const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.youtube.com', {
        waitUntil: 'networkidle0'
    })
    await page.screenshot({ path: 'me.png' })
    await browser.close()
})();