const pdf = require('html-pdf');
const commonPage = require('./templates/commonPage');
const { config } = require('./utils/constants');
const {
    selectedDate,
    currentRoom,
    children,
    teachers,
    totals,
    rooms,
} = require('./utils/mockData');
const DataAdapter = require('./utils/dataAdapters');

DataAdapter.init({
    selectedDate,
    currentRoom,
    children,
    teachers,
    totals,
    rooms,
});

const data = DataAdapter.getParseData();

console.log(data);

pdf.create(commonPage(data), config).toFile('./resultPDF/nurturePDF.pdf', function(err, res) {
    if (err) console.log(err);
    console.log(res);
});
