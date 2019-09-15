const tableStyles = `
    <style>
        table {
            border-collapse: collapse;
            table-layout: fixed;
            font-size: 10px;
            width: 100%;
        }
    
        table, th, td {
          border: 1px solid black;
        }
        
        td {
            vertical-align: center;
            text-align: center;
        }
        
        td.prime {
            width: 120px;
            text-align: right;
        }
    </style>
`;

module.exports = tableStyles;
