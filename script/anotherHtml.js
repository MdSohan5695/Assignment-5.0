document.getElementById("discover-something").addEventListener("click",function(){
    window.location.href="./another.html"
})

document.getElementById("conpleted").addEventListener("click",function(){
    alert("Board updated successfully")
   let lowNumber = document.getElementById("low-number").innerText;
   let updatedLowNumber =lowNumber - 1;
   document.getElementById("low-number").innerText = updatedLowNumber;
   
})

