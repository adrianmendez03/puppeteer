const puppeteer = require("puppeteer")
const { login } = require("./login.js")

;(async () => {
  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto("https://www.binarysearch.com", {
    waitUntil: "networkidle0",
  })

  await login(page)

  await sleep(5000)

  await page.screenshot({ path: "me.png" })

  await browser.close()
})()
