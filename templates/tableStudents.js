const tableStyles = require('../utils/commonStyles');
const { getRandomNumber } = require('../utils/helpers');

function tableStudents(studentsData, legendData) {
    return `
        <div>
            ${tableStyles}
            <table>
                <thead>
                    <tr>
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
                    </tr>
                </thead>
                <tbody>
                    ${studentsData.map(student => `
                        <tr style="position: relative">
                            <td class="prime">${student.name}</td>
                            <td>
                                <div
                                    style="
                                        width: ${getRandomNumber(0, 86)}%;
                                        position: absolute;
                                        height: 10px;
                                        background-color: greenyellow;
                                        margin-bottom: 5px"
                                >
                                    <div class="legend_item">
                                        <div
                                            class="legend_itemRound"
                                            style="
                                            background-color: ${legendData.find(room => room.id === (student.events[0].checkOutRoom.id || 'home')).color};"
                                        >                             
                                    </div> 
                                    ${legendData.find(room => room.id === (student.events[0].checkOutRoom.id || 'home')).shortName}
                                    </div>
                                </div>
                            </td>
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
        </div>
    `;
}

tableStudents.styles = `
    <style></style>
`;

module.exports = tableStudents;
