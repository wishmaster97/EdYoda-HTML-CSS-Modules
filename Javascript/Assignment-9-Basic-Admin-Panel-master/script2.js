var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

//******************* Creating a JS Dom Element for dynamic update *************************//

/*
  <tr class="data-row">
                                <td class="column1">28</td>
                                <td class="column2">Larisa</td>
                                <td class="column3">Llaneza</td>
                                <td class="column4">SCallison@non.org</td>
                                <td class="column5">(763)248-9034</td>
                            </tr>
*/ 
var tableData = document.getElementById("table-data");


function createRow(data){

    //var tableTD = document.createElement("table");
    //tableTD.className = "table-td";

    //var tbodyTD = document.createElement("tbody");
    //tbodyTD.className = "tbody-td";

    var dataRow = document.createElement("tr");
    dataRow.className = "data-row";


    var col1 = document.createElement("td");
    col1.className = "column1";
    col1.innerText = data[0];

    var col2 = document.createElement("td");
    col2.className = "column1";
    col2.innerText = data[1];

    var col3 = document.createElement("td");
    col3.className = "column1";
    col3.innerText = data[2];

    var col4 = document.createElement("td");
    col4.className = "column1";
    col4.innerText = data[3];

    var col5 = document.createElement("td");
    col5.className = "column1";
    col5.innerText = data[4];

    dataRow.appendChild(col1);
    dataRow.appendChild(col2);
    dataRow.appendChild(col3);
    dataRow.appendChild(col4);
    dataRow.appendChild(col5);

    //tbodyTD.appendChild(dataRow);
    //tableTD.appendChild(tbodyTD);
    //tableData.appendChild(tableTD);
    tableData.appendChild(dataRow);
    console.log(dataRow);
    console.log(tableData);    



}


var arr = [23, "Abhijeet", "Tedle", "t.abhijeet97@gmail.com", 8446330088];
createRow(arr);

function getTableRowData(url) {
    $.get(url, function(data) {
      var responseData = data;

      console.log(responseData);

});
}


getTableRowData(url);