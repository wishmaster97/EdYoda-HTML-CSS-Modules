var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

console.log(url);

const url_data=[];

function getArrayOfURL(url) {
    $.get(url, function(data) {
      var responseData = data;

      console.log(JSON.stringify(responseData));
      document.getElementById("url_data_fetch").innerHTML = JSON.stringify(responseData);
     // responseData.forEach(element => {
      //    url_data.push(element);
      //});
       
      //console.log(typeof(url_data));
   });
}


getArrayOfURL(url);

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

    //console.log(JSON.stringify(data));

    //var tableTD = document.createElement("table");
    //tableTD.className = "table-td";

    //var tbodyTD = document.createElement("tbody");
    //tbodyTD.className = "tbody-td";

    //var linkData = document.createElement("a");
    //linkData.href = "index.html?person_id="+data.id;

    var dataRow = document.createElement("tr");
    dataRow.className = "data-row";
    dataRow.id = data.id;
    //dataRow.click(function(){ window.location = "index.html?person_id="+data.id; });
    //var att = document.createAttribute("data-href");
    //att.value = "./index.html?person_id="+data.id;
    //dataRow.setAttributeNode(att);

    var col1 = document.createElement("td");
    col1.className = "column1";
    col1.innerText = data.id;

    var col2 = document.createElement("td");
    col2.className = "column2";
    col2.innerText = data.firstName;

    var col3 = document.createElement("td");
    col3.className = "column3";
    col3.innerText = data.lastName;

    var col4 = document.createElement("td");
    col4.className = "column4";
    col4.innerText = data.email;

    var col5 = document.createElement("td");
    col5.className = "column5";
    col5.innerText = data.phone;

   

    dataRow.appendChild(col1);
    dataRow.appendChild(col2);
    dataRow.appendChild(col3);
    dataRow.appendChild(col4);
    dataRow.appendChild(col5);

    //linkData.appendChild(dataRow);

    //tbodyTD.appendChild(dataRow);
    //tableTD.appendChild(tbodyTD);
    //tableData.appendChild(tableTD);
    tableData.appendChild(dataRow);
    //console.log(dataRow);
    //console.log(tableData);    

}

$(document).on("click", "tbody tr", function() {
    //console.log(this.id);
    getPersonDetail(this.id);
    document.getElementById("info-content").style.display = "block";
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });




//var arr = [23, "Abhijeet", "Tedle", "t.abhijeet97@gmail.com", 8446330088];
//createRow(arr);

function getTableRowData(url) {
    $.get(url, function(data) {
      var responseData = data;

      console.log(responseData);
      responseData.forEach(element => {
        url_data.push(element);
    });
      var objectElement = responseData.map(createRow);
       

    });
}


getTableRowData(url);





/***********************************Taking all the row Href in here ************************/


    
  /* 
 
    let myPromise = new Promise(function(myResolve, myReject) {
       
            
            window.addEventListener('DOMContentLoaded', () => {
            const rows = document.querySelectorAll("tr[data-href]");
            console.log(rows);
            //alert("All Loaded");

            if (rows != null) {
                myResolve(rows);
              } else {
                myReject("Error");
              }
            
        });
      
       
      });
      
      myPromise.then(
        function(value) {

            window.addEventListener('DOMContentLoaded', () => {
            const rows = document.querySelectorAll("tr[data-href]");
            value.forEach(row => {

                row.addEventListener("click", () => {
                    window.location.href = row.dataset.href;   
                });
                
            });});
        },
        function(error) {console.log(error);}
      );



let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("Data Fetched"); }, 3000);
  });
  
  myPromise.then(function(value) {

    //alert(value);
    
    const rows = document.querySelectorAll("tr[data-href]");
    console.log(rows);
    rows.forEach(row => {

        console.log(row);
        row.addEventListener("click", () => {
            window.location.href = row.dataset.href;   
        });
        
    });
    

  });

*/

  /************************** Get Details ater table row click***********************************/

  function getPersonDetail(getID) {
    // Get Product Id From URL
    var searchId = parseInt(getID);
    console.log(searchId);
  
    // Get Person Details
  
  
       url_data.forEach(element => {
            
        //console.log(typeof(element.id) +" "+typeof(parseInt(searchId)));
        //console.log(element.id);

            if(parseInt(searchId) == element.id){
            
               console.log("In True");
                  
                fullName = element.firstName +" "+element.lastName;
                description = element.description;
                address = element.address.streetAddress;
                city = element.address.city;
                state = element.address.state;
                zip = element.address.zip;
        
                    createDetailSecton(
                        fullName,
                        description,
                        address,
                        city,
                        state,
                        zip
                    );
            }
        });
        
      
      } 
  

 // getPersonDetail();

  //Creare Detail Section
  function createDetailSecton(
    fullname,
   description,
    address,
    city,
    state,
    zip
){

    console.log(fullname+description+address+city+state+zip);
    document.getElementById("fetchName").innerText = fullname;
    document.getElementById("fetchDescription").innerHTML = description;
    document.getElementById("fetchAddress").innerHTML = address;
    document.getElementById("fetchCity").innerHTML = city;
    document.getElementById("fetchState").innerHTML = state;
    document.getElementById("fetchZip").innerHTML = zip;


}
  


