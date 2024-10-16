//STUDENT COUNTER

count = 0;
function increment(){
    count++;
    document.getElementById("count-el").innerText=count;
    
}

function save(){
    nowcount = count;
    document.getElementById("prev").innerHTML= document.getElementById("prev").innerHTML+"-"+nowcount;
}