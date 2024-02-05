function bbb(){
    localStorage.setItem("Joshua", "Milk")    
    localStorage.setItem("Kayode", "male")
    localStorage.setItem("Sunday", "Tade")
}

// function aaa(){
 // let j = localStorage.getItem("Joshua")
 // let x = localStorage.key("0")
 // document.getElementById("up").innerHTML = j;
  // document.getElementById("up").innerHTML = x;
// }

function aaa(){
    var vic = "";
    let j = 0;
    let jlen = localStorage.length
    for (j ; j < jlen; j++ ){
        
        vic += localStorage.getItem(localStorage.key(j)) + "<br>";
        document.getElementById("up").innerHTML = vic;
    }
}

function ccc(){    
    //  var x = localStorage.length
    //  document.getElementById("dom").innerHTML = x;
    var container = "";
    let i = 0;
    let len = localStorage.length
    for(i; i < len; i++ ){
        container += localStorage.key(i) + "<br>";
        document.getElementById("dom").innerHTML = container + "<br>";
    }

  }

  function remove(){
    localStorage.removeItem("Joshua")
  }

  function jj(){
    localStorage.clear()
  }