const fs = require('fs');
const { createPDF } = require('../util/pdfGenerator');


const data = {
    title: "A new Brazilian School",
    date: "05/12/2018",
    name: "Rodolfo Luis Marcos",
    age: 28,
    birthdate: "12/07/1990",
    course: "Computer Science",
    obs: "Graduated in 2014 by Federal University of Lavras, work with Full-Stack development and E-commerce."
}

exports.createBilling = async (req, res) => {
    try {
        const fileName = "test"
        const pdf=await createPDF(fileName, 'billing', data);

        if (!fs.existsSync(pdf)) {
            const notFoundError = new CustomError(404, 'PDF file not found');
            return next(notFoundError);
        }
        res.download(pdf, `${fileName}.pdf`, (err) => {
            if (err) {
                const downloadError = new CustomError(500, 'Error: Unable to download the PDF file');
                return next(downloadError);
            }
        });
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};