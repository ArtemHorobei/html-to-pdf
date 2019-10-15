const tableStyles = `
    <style>
        * {
            font-family: Kartika;
        }
        
        .table {
            border-collapse: collapse;
            table-layout: fixed;
            font-size: 7px;
            width: 100%;
        }
    
        .table, .table_row, .table_row > * {
            border: 1px solid black;
        }
        
        tr, td {
            height: 20px;
        }
        
        td {
            vertical-align: center;
            text-align: center;
        }
        
        td.prime {
            width: 130px;
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
        
        .table_timeline {
            border-collapse: collapse;
            table-layout: fixed;
            font-size: 8px;
            width: 100%;
            position: absolute;
            top: 0;
        }
    </style>
`;

module.exports = tableStyles;
