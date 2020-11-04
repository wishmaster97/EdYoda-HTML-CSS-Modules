function generateNewString(oldString){

    var consString = "";
    var vowelString="";
    var newString = "";

    for(var i=0; i<oldString.length; i++){

        if(oldString[i]=='a' || oldString[i]=='e' || oldString[i]=='i' || oldString[i]=='o' || oldString[i]=='u' || oldString[i]=='A' || oldString[i]=='E' || oldString[i]=='I' || oldString[i]=='O' || oldString[i]=='U'){
            
            vowelString = vowelString + oldString[i];
        }
        else{

            consString = consString + oldString[i];
        }
    }

    newString =  vowelString + consString ;
    return newString;
}


var stringVar = "seashell";
console.log(generateNewString(stringVar));

