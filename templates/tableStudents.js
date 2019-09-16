const timeline = require('./timeline');

function tableStudents(studentsData, legendData) {
    return `
        <div style="position: relative">
            ${tableStudents.styles}
            <table>
                <thead>
                    <tr class="primeRow">
                        <td class="prime">Student Name</td>
                        <td>6:00am</td>
                        <td>6:30am</td>
                        <td>7:00am</td>
                        <td>7:30am</td>
                        <td>8:00am</td>
                        <td>8:30am</td>
                        <td>9:00am</td>
                        <td>9:30am</td>
                        <td>10:00am</td>
                        <td>10:30am</td>
                        <td>11:00am</td>
                        <td>11:30am</td>
                        <td>12:00am</td>
                        <td>12:30am</td>
                        <td>1:00pm</td>
                        <td>1:30pm</td>
                        <td>2:00pm</td>
                        <td>2:30pm</td>
                        <td>3:00pm</td>
                        <td>3:30pm</td>
                        <td>4:00pm</td>
                        <td>4:30pm</td>
                        <td>5:00pm</td>
                        <td>5:30pm</td>
                        <td>6:00pm</td>
                        <td>6:30pm</td>
                    </tr>
                </thead>
                <tbody>
                    ${studentsData.map(student => `
                        <tr>
                            <td class="prime">${student.name}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            
            <table style="position: absolute; top: 0;">
                <thead>
                    <tr class="primeRow">
                        <td class="prime"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>           
                    </tr>
                </thead>   
                <tbody>
                    ${studentsData.map(student => `
                        <tr>
                            <td colspan="1"></td>
                            <td colspan="26">
                                <div class="timelinesContainer">
                                    ${student.events.map(event => timeline(legendData, event))}
                                </div>
                            </td>
                        </tr>
                    `).join('')} 
                </tbody>   
            </table>
        </div>
    `;
}

tableStudents.styles = `
    <style>
        .primeRow > * {
            font-weight: bold;
        }
        .timelinesContainer {
          position: relative;
          width: 100%;
          height: 100%;
        }
    </style>
`;

module.exports = tableStudents;
