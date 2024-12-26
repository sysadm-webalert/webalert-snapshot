import puppeteer from 'puppeteer';
import express from 'express';

const app = express();
const port = 3000;

// Launch Puppeteer
let browser;

(async () => {
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--single-process', '--no-zygote', '--no-sandbox', '--disable-setuid-sandbox'], // Config to recude resources
    });
    console.log('Browser instance launched');
  } catch (error) {
    console.error('Failed to launch browser instance:', error);
    process.exit(1);
  }
})();

// Endpoint to get snapshot
app.get('/snapshot', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send({ error: 'URL is required' });
  }

  try {
    const page = await browser.newPage(); // Add new page on browser
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 9000 });

    const screenshot = await page.screenshot({ type: 'jpeg', quality: 50 });

    await page.close(); // Close page on browser

    res.writeHead(200, {
      'Content-Type': 'image/jpeg',
      'Content-Length': screenshot.length,
    });
    res.end(screenshot);
  } catch (error) {
    console.error('Error capturing screenshot:', error);
    res.status(500).send({ error: 'Failed to capture screenshot' });
  }
});

// Stop browser
process.on('SIGINT', async () => {
  if (browser) {
    await browser.close();
    console.log('Browser instance closed');
  }
  process.exit();
});

app.listen(port, () => {
  console.log(`Puppeteer server is running at http://localhost:${port}`);
});
