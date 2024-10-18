

count = 0;
total=0
function increment(){
    count++;
    document.getElementById("count-el").innerText=count;
   
}


function save(){
    nowcount = count;
    total=total+count;
    document.getElementById("prev").innerHTML= document.getElementById("prev").innerHTML+nowcount+"-";
    let totals=document.createElement("h3")
    document.getElementById("tot").innerHTML= "Total: " + count + " Students";
}
