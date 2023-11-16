var pdf =require("html-pdf");
const { Module } = require("module");

class PDFWriter{
    static WritePDF(filename, html){
        pdf.create(html,{}).toFile(filename,(err) => {});
    }
}

module.exports = PDFWriter;