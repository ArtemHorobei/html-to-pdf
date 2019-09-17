function tableTotal(totalData) {
    return `
        <div class="tableWrap">
            <h3 class="table_title">Totals</h3>
            <table class="table">
                <tbody>
                    <tr class="table_row">
                        <td class="prime">Total children</td>
                        ${totalData.childrenCount.map(count => `<td>${count}</td>`).join('')}
                    </tr>
                    <tr class="table_row">
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
