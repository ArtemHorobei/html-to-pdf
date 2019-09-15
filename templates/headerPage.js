function headerPage(header) {
    const { roomName, date } = header;

    return `
        <div class="header">
            ${headerPage.styles}
            <div class="header_title">${roomName.toUpperCase()} ROOM - ${date}</div>
            <div class="header_subTitle">AppleTree & Gilden Woods - Name to Face</div>
        </div>
    `;
}

headerPage.styles = `
    <style>
        .header {
            width: 100%;
            text-align: center;
            margin: 1rem 0;
        }
        
        .header_title {
            font-size: 16px;
            font-weight: 800;
        }
        
        .header_subTitle {
            font-size: 10px;
            font-weight: 100;
        }
    </style>
`;

module.exports = headerPage;
