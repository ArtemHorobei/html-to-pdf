const pdf = require('html-pdf');

const { config } = require('./constants');
const { timeoutPromise } = require('./helpers');
const commonPage = require('../templates/commonPage');
const DataAdapter = require('./dataAdapters');
const ReportSaver = require('./reportSaver');
const {
  selectedDate,
  currentRoom,
  children,
  teachers,
  totals,
  rooms,
} = require('./mockData'); // Mock for testing create flow. Remove after fetching real data

class PDFManager {
    constructor() {
        this.dataAdapter = DataAdapter;
        this.reportSaver = ReportSaver;
    }

    async generate(roomId, currentDate) {
      const payload = await timeoutPromise(1000, {
        selectedDate,
        currentRoom,
        children,
        teachers,
        totals,
        rooms,
      }); // remove and get real data with two params: roomId, currentDate.

      const dataForPDF = this.dataAdapter.init(payload).getParseData();

      await pdf.create(commonPage(dataForPDF), config).toFile('./resultPDF/nurturePDF.pdf', function() {}); // for testing, remove

      // let file = null;
      //
      // await pdf.create(commonPage(dataForPDF), config).toBuffer((err, buffer) => {
      //   if (!err) {
      //     file = buffer;
      //   }
      // });

      // return this.reportSaver.save({ file, name: 'NameToFacePDF', type: 'pdf' });
    }
}

module.exports = new PDFManager();
