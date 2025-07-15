

 let openButton =   document.getElementById("open-btn")
 let closeButton = document.getElementById("close-btn")
 let list =   document.getElementById("list")

 function navOpen(){
   list.style.display = "flex"
   openButton.style.visibility = "hidden"
   closeButton.style.visibility = "visible"
 }


 function navClose(){
   list.style.display = "none"
   openButton.style.visibility = "visible"
   closeButton.style.visibility = "hidden"
 }