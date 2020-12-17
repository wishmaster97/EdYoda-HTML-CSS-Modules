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

    console.log(JSON.stringify(data));

    //var tableTD = document.createElement("table");
    //tableTD.className = "table-td";

    //var tbodyTD = document.createElement("tbody");
    //tbodyTD.className = "tbody-td";

    var dataRow = document.createElement("tr");
    dataRow.className = "data-row";


    var col1 = document.createElement("td");
    col1.className = "column1";
    col1.innerText = data.id;

    var col2 = document.createElement("td");
    col2.className = "column1";
    col2.innerText = data.firstName;

    var col3 = document.createElement("td");
    col3.className = "column1";
    col3.innerText = data.lastName;

    var col4 = document.createElement("td");
    col4.className = "column1";
    col4.innerText = data.email;

    var col5 = document.createElement("td");
    col5.className = "column1";
    col5.innerText = data.phone;

    //var linkData = document.createElement("a");
    //linkData.href = "index.html?person_id="+data.id;

    dataRow.appendChild(col1);
    dataRow.appendChild(col2);
    dataRow.appendChild(col3);
    dataRow.appendChild(col4);
    dataRow.appendChild(col5);
    //dataRow.appendChild(linkData);

    //tbodyTD.appendChild(dataRow);
    //tableTD.appendChild(tbodyTD);
    //tableData.appendChild(tableTD);
    tableData.appendChild(dataRow);
    //console.log(dataRow);
    console.log(tableData);    


    $(document).on("click", "tbody tr", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active");
      });
    


}


//var arr = [23, "Abhijeet", "Tedle", "t.abhijeet97@gmail.com", 8446330088];
//createRow(arr);

function getTableRowData(url) {
    $.get(url, function(data) {
      var responseData = data;

      //console.log(responseData);
      var objectElement = responseData.map(createRow);
      console.log(typeof(objectElement));
   

});
}


getTableRowData(url);


//**************** Fetching Details to the Right section of the page**********************/

var infoContent = document.getElementById("info-content");

function showSelectedDetail(){

    /*
    <div id="info-content">
                <div><b>User selected:</b> Marcellin Shrestha</div>
                <div>
                    <b>Description: </b>
                    <textarea cols="50" rows="5" readonly>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
                    </textarea>
                </div>
                <div><b>Address:</b> 6480 Nec Ct</div>
                <div><b>City:</b> Dinwiddie</div>
                <div><b>State:</b> NV</div>
                <div><b>Zip:</b> 91295</div>
    </div> */

    
    

    
}