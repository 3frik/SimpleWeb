var savedStuff;

function button1Click(){    //Alert
    alert("Button 1!");
}

function button2Click(){    //Hide, bg color, font-size, etc.
    var found = document.getElementById("outputArea");
    found.style.backgroundColor="blue";
    found.style.fontSize="30px";
    if( found.style.visibility=="hidden"){
        found.style.visibility="visible";
    }else{
        found.style.visibility="hidden";
    }
}

function button3Click(){    //img.src
    var found = document.getElementsByClassName("cardImage");   //Returnerar en ARRAY!!!
    var position = Math.floor(Math.random()*found.length);  //För att slumpa någon saki en array
    found[position].src="./Resources/aPotato.jpg";
}

function button4Click(){    //Save in variable
    var found = document.getElementById("output");
    var containedText = found.innerText;    //Spara dess text i en variabel
    alert(containedText);
}

function button5Click(){    //innerText
    var found = document.getElementById("output");
    found.innerText = "And this is another irrelevant text";
}

function button6Click(){    //several things
    button3Click();
    button5Click();
    button4Click();
}

function button7Click(){    //innerHTML
    var found = document.getElementById("outputArea");
    found.innerHTML = "<h1>Title</h1>"  //ersätter allt innehåll
    +"<p>and the previous text just dissapeared! Huzza!</p>"
    found.innerHTML += "<p> but not THIS TIME! HAHAHA!</p>"
}

function button8Click(){    //script
    var found = document.getElementsByClassName("gridButton");
    console.log(found[0]);
    found[0].onclick()="button7Click()";
    console.log(found[0]);
}

function button9Click(){
}