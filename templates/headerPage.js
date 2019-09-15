function headerPage(header) {
    const { roomName, date } = header;

    return `
        <div class="header">
            ${headerPage.styles}
            <h2 class="header_title">${roomName} - ${date}</h2>
            <h4 class="header_subTitle">AppleTree & Gilden Woods - Name to Face</h4>
        </div>
    `;
}

headerPage.styles = `
    <style>
        .header {
            width: 100%;
            text-align: center;
        }
        .header_title, .header_subTitle {
            margin: 1rem 0;
        }
    </style>
`;

module.exports = headerPage;
