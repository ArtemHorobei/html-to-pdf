const tableStyles = `
    <style>
        * {
            font-family: Kartika;
        }
        
        table {
            border-collapse: collapse;
            table-layout: fixed;
            font-size: 8px;
            width: 100%;
        }
    
        table, th, td {
            border: 1px solid black;
        }
        
        th, td {
            padding: 5px 1px;
        }
        
        td {
            vertical-align: center;
            text-align: center;
        }
        
        td.prime {
            width: 120px;
            text-align: right;
            padding-right: 10px;
        }
        
        .tableWrap {
            margin: 1rem 0;
        }
        
        .table_title {
            font-size: 8px;
            font-weight: bold;
            margin-left: 3rem;
        }
    </style>
`;

module.exports = tableStyles;
