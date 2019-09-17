const timeline = require('./timeline');

function tableTeachers(teachersData, legendData) {
    return `
        <div class="tableWrap">
            <h3 class="table_title">Teachers</h3>
            <div style="position: relative">
              <table>
                <tbody>
                    ${teachersData.map(teacher => `
                        <tr>
                            <td class="prime">${teacher.name}</td>
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
                <tbody>
                    ${teachersData.map(teacher => `
                        <tr>
                            <td class="prime" colspan="1"></td>
                            <td colspan="26">
                                <div class="timelinesContainer">
                                    ${teacher.events.map(event => timeline(legendData, event))}
                                </div>
                            </td>
                        </tr>
                    `).join('')} 
                </tbody>   
            </table>
            </div>
        </div>
    `;
}

tableTeachers.styles = `
    <style></style>
`;

module.exports = tableTeachers;
