function legend(roomLegend) {
    return `
        <div class="legend">
            ${legend.styles}
            ${roomLegend
                .map(room => `
                    <div class="legend_item">
                        <div class="legend_itemRound" style="margin-right: 5px; background-color: ${room.color};"></div> ${room.shortName} = ${room.name}
                    </div>
                `).join('')}  
        </div>
    `;
}

legend.styles = `
    <style>
        .legend {
            font-size: 8px;
            width: 100%;
            margin: 1rem 0;
            display: -webkit-flex;
            -webkit-justify-content: space-around;
            -webkit-align-items: center;
        }
        .legend_item {
            display: -webkit-flex;
            -webkit-align-items: center;
        }
        .legend_itemRound {
            border-radius: 50%;
            width: 7px;
            height: 7px;
        }
    </style>
`;

module.exports = legend;
