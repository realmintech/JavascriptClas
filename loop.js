let look = document.getElementById("look")
let value =[];
let i = 1;

for(i; i <= 10; i++){
    //value[i]=i =1;


   if (i%2 == 0){
    value += "Even Number " + i + "<br>"
   }else{
    value += "Odd Number" + i + "<br>"
   }
   look.innerHTML= value;
}

let aaa = document.getElementById("aaa")
const hope = ["Sunday","Ben","Aminat","Mariam","Peace"]
let j = 0;
let all = hope.length;
let result = "";

for(; j <= all; ){
    result += hope[j] + "<br>" 
    j++
}

aaa.innerHTML= result;