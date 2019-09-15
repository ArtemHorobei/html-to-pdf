const tableStyles = require('../utils/commonStyles');

function tableTeachers(teachersData) {
    return `
        <div>
            ${tableStyles}
            <span>Teachers</span>
            <table>
                <tbody>
                    ${teachersData.map(teacher => `
                        <tr>
                            <td class="prime">${teacher.name}
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
                            <td></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>  
        </div>
    `;
}

tableTeachers.styles = `
    <style></style>
`;

module.exports = tableTeachers;
