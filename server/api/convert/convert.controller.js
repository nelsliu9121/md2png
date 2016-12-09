/**
 * Using Rails-like standard naming convention for endpoints.
 * POST     /api/convert/png              ->  png
 * POST     /api/convert/html              ->  html
 */
// POST convert input to png
const html2png = require('html2png');
const pug = require('pug');

export function png(req, res) {
  const screenshot = html2png({width: 640, height: 480, browser: 'phantomjs'});
  const context = pug.renderFile('./server/views/convert/convert.pug', {code: req.body.code});
  console.log(context);
  screenshot.render(context, (err, data) => {
    if(err) {
      return screenshot.error(err);
    }
    screenshot.close();
    const img = new Buffer(data, 'base64');
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': img.length
    });
    res.end(img);
  });
}

export function html(req, res) {
  res.render('convert/convert.pug', {code: req.body.code});
}
