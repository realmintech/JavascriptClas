// document.getElementById("goat").innerHTML = 'This is what i want';

// document.write('let check this out')
// // alert('wanna display page')

// console.log(67+34)

// // let firstName = "Joshua is here to code "
// // document.getElementById("jos").innerHTML = firstName;

// let fName = "vic";
// mName = "sunday";
// lName = "ope";

// document.getElementById("jos").innerHTML = mName + " " + fName + " " + lName; 

// let vic = 10;
// let vic = "josh" 
// console.log(vic)

const sun = ["To", "Is", "Of"];

sun[3] = "Or"

sun.unshift("Too")

document.getElementById("dem").innerHTML = sun;

const hop = {firstName:"Josh", lastName:"vic", surName:"Ajao" }

hop.lName = "Sunday"

document.getElementById("loo").innerHTML = "My Last-Name is" + hop.lName;

let j = "What are you doing in there"
j += " ..Buddy"
console.log(j.length)

let name = "Ma"
let display = name == "Mariam" ? "Nice to meet you Jos" + name : "Fuck off" + name;
console.log(display)

let e = 3;
e++
let f=e
console.log(f)

let q = 7
let i = 8 
let z = 7 
console.log(q == i)
console.log(z == q )

function forName(){
    return ('Bisi is a ') + ('girl')
}

document.getElementById("sam").innerHTML = forName('Nigga')
console.log(forName('Nigga'))

const luck = {
    object: "book",
    class: "tony",
    art: "pic"
}

document.getElementById("sam").innerHTML = luck.object + " " + luck.class;

console.log(luck["object"] + " " + luck["class"])

function date(){
    document.getElementById("coke").innerHTML = Date();
}

let x = "vic";
let x1 = new String ("vic");

// document.getElementById("view").innerHTML = typeof x + "<br>" + typeof x1;
document.getElementById("view").innerHTML = (x===x1) 

//  endsWith()/startsWith() Method

let end = "hate"
let end1 = end.endsWith("hate")

document.getElementById("end2").innerHTML = end1;

let start = "hello"
let start1 = start.startsWith("hello")

document.getElementById("start2").innerHTML = start1;

// slice



// function click(){
//    document.getElementById("test").value += '1';
// }

let v = "Sunday John"
// let d = v.slice(0, -1)
const g = v.substring(1, 9) 
console.log(g)

// replace

let change = document.getElementById("change").innerHTML
function unchange(){
    document.getElementById("change").innerHTML = change.replace("Word", ", I gat you")
}

// concat

let txt1 = "Alao";
let txt2 = "John";
let txt3 = txt1.concat(' ', txt2);

document.getElementById('cat').innerHTML = txt3;

let txt = "Alao" + " " + "Mary"

document.getElementById("or").innerHTML = txt.lastIndexOf("")

let Num = 23;
document.getElementById("demo").innerHTML = `to Binary = ` + Num.toString(2)

let t = "5.45";
// document.getElementById("de").innerHTML = 
    console.log(Number(t))
    // console.log(t.toFixed(5))

// console.log(t)

// Array

var obj = ["book","pen", "stick"]
// document.getElementById("arr").innerHTML = obj[1];
document.getElementById("arr").innerHTML = obj.length;


// fruit, fLent, text, i;

 fruit = ["orange","banana", "grape"] ;
 fLent = fruit.length;
 text = "<ul>";

 for (i = 0; i < fLent; i++){
    text += "<li>" + fruit[i]  + "</li>" 
 }
 text += "</ul>"
 console.log(text)

 document.getElementById("toop").innerHTML = text;

 // Adding of new Array 

 const names = ["sunday", "niyi","mariam"]
 document.getElementById("new").innerHTML =  names ;

 function chan() {
    // names.push("joshua","ben");
    names[names.length] = "joshua" +","+ "ben";
    document.getElementById("new").innerHTML = names;
 }

 var hash = []
 hash[0] = "look"
 hash[1] = "push"
 hash[2] = "top"
 hash[3] = "luck"

 console.log(hash[0] + " " + hash.length)

 var color = ["red","black","blue","green"]
//  console.log(color.join(" - "))
console.log(color.pop())
console.log(color)

var haa = ["josh", "sunday","tope@gmail.com"]
document.getElementById("gas").innerHTML = haa ;

function spli(){
    haa.splice(2,1, "joshua@gmail")
    document.getElementById("gas").innerHTML = haa;
}
// console.log(h.slice(0,2, 1))

// merging with concat
var boy = ["sola","segun"]
var girl = ["tope","temi","esther"]
var get = boy.concat(girl)
console.log(get.toString())

var aaa = [13,2,8,0,4,5,24]
price = aaa.sort((a,b) => a-b )
console.log(price)

var bbb = [13,2,8,0,4,5,24]
place = aaa.sort((a,b) => b-a )
console.log(place)
