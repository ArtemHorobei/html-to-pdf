function tableTotal(totalData) {
    return `
        <div class="tableWrap">
            <span class="table_title">Totals</span>
            <table>
                <tbody>
                    <tr>
                        <td class="prime">Total children</td>
                        ${totalData.childrenCount.map(count => `<td>${count}</td>`).join('')}
                    </tr>
                    <tr>
                        <td class="prime">Total teachers</td>
                        ${totalData.teachersCount.map(count => `<td>${count}</td>`).join('')}
                    </tr>
                </tbody>
            </table>  
        </div>
    `;
}

tableTotal.styles = `
    <style></style>
`;

module.exports = tableTotal;
