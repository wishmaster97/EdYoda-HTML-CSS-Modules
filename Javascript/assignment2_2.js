function returnPosition(numberArrr, inp_number){

    var pos_array = [];

    for(var i=0; i<numberArrr.length; i++){

        if(numberArr[i] == inp_number){
            
            pos_array.push(i);
        }
        
    }

    return pos_array;
}


var numberArr = [1,2,1,3,1,4,1,5];
var  numberToSearch = 1;
console.log(returnPosition(numberArr,  numberToSearch));

