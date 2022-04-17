const pdfKit = require('pdfkit')
const fs = require('fs')

function createSamplePDF()
{
  let stream = fs.createWriteStream('./models/sample.pdf');
  let pdf = new pdfKit();
  pdf.pipe(stream);

  pdf.image("./images/ift-logo.png", 5,5, {width:150, height:150});

  pdf.text("Instant Family Trust", 25, 150);

  pdf.text("Protect Your Legacy", 30, 165);

  pdf.end();

  console.log("PDF created successfully")
}
