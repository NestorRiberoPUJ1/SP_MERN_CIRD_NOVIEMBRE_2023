const fs = require("fs");
const path = require("path");
const puppeteer = require('puppeteer');
const handlebars = require("handlebars");
const Handlebars = require('handlebars/runtime')
require('../templates/billing.precompiled');


module.exports.createPDF = async (filename, fileTemplate, data) => {
    try {
        /* const templateHtml = fs.readFileSync(path.join(process.cwd(), 'templates', `${fileTemplate}.html`), 'utf8');
        const template = handlebars.compile(templateHtml);
        const html2 = template(data); */

        const html = Handlebars.templates[`${fileTemplate}.hbs`](data)
        const pdfPath = path.join('temps', `${filename}.pdf`);

        const options = {
            width: '1230px',
            headerTemplate: "<p></p>",
            footerTemplate: "<p></p>",
            displayHeaderFooter: false,
            margin: {
                top: "10px",
                bottom: "30px"
            },
            printBackground: true,
            path: pdfPath
        }

        const browser = await puppeteer.launch({
            args: ['--no-sandbox',"--proxy-server='direct://'", '--proxy-bypass-list=*'],
            headless: true
        });

        const page = await browser.newPage();
        await page.setContent(html);
        await page.pdf(options);
        await browser.close();



        return pdfPath;

    } catch (error) {
        console.log(error);
    }
}


