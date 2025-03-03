document.getElementById("discover-something").addEventListener("click",function(){
    window.location.href="./another.html"
})

document.getElementById("conpleted").addEventListener("click",function(event){

    conpletedBtn(event)
   
    

    
})

document.getElementById("conpleted-2").addEventListener("click",function(event){
    conpletedBtn(event)
    
})

document.getElementById("conpleted-3").addEventListener("click",function(event){
    conpletedBtn(event)
    
})
document.getElementById("conpleted-4").addEventListener("click",function(event){
    conpletedBtn(event)
    
})
document.getElementById("conpleted-5").addEventListener("click",function(event){
    conpletedBtn(event)
    
})
document.getElementById("conpleted-6").addEventListener("click",function(event){
    conpletedBtn(event)
    
})

document.getElementById("clear-history").addEventListener("click",function(){
    

 document.getElementById("activity-body").innerHTML="";
})

function conpletedBtn(id){
    alert("Board updated successfully")
   let lowNumber = document.getElementById("low-number").innerText;
   let updatedLowNumber =lowNumber - 1;
   document.getElementById("low-number").innerText = updatedLowNumber;
   let highNumber = document.getElementById("high-number").innerText;
   highNumber =parseInt(highNumber);
   let updatedHighNumber = highNumber + 1;
   document.getElementById("high-number").innerText =updatedHighNumber;
//   console.log( id.target);
id.target.disabled ="true"
id.target.classList.add("bg-gray-500")

let history = document.createElement("div");
history.innerHTML=`

            <div class="p-4 bg-blue-50 rounded mb-4" >
                <p>You have Complete The Task Add Dark Mode at 12:48:15 PM</p>
            </div>

`
 document.getElementById("activity-body").appendChild(history);
   
}

