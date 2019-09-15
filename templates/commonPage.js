const commonStyles = require('../utils/commonStyles');
const headerPage = require('./headerPage');
const tableStudents = require('./tableStudents');
const tableTeachers = require('./tableTeachers');
const tableTotal = require('./tableTotal');
const legend = require('./legend');

function commonPage({
    headerData,
    legendData,
    studentsData,
    teachersData,
    totalData,
}) {
    return `
        <html lang="en">
            <head>
                <title>PDF report</title>
            </head>
            <body>
                ${commonStyles}
                ${headerPage(headerData)}
                ${tableStudents(studentsData, legendData)}
                ${tableTeachers(teachersData)}
                ${tableTotal(totalData)}
                ${legend(legendData)}
            </body>
        </html>
    `;
}

module.exports = commonPage;
