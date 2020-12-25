var url = 'https://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
//var url = 'C:\Users\wish_\OneDrive\Desktop\React Tech\Javascript\deploy Firebase\content.json'
console.log(url);



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
