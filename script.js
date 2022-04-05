const elements=document.querySelectorAll(".numbers");
btnsubmit.addEventListener("click", show);

elements.forEach((numbers) => {
     numbers.addEventListener("click", validate);
     });  
   
function validate() {
    
    // remove class from sibling
                    
     var el = elements[0];
     while(el)
     {
         if(el.tagName === "DIV"){
             //remove class
             el.classList.remove("active");
             
         }
         // pass to the new sibling
         el = el.nextSibling;
     }
     
   this.classList.add("active");
  var rating=this.textContent;
  assessment.innerHTML=rating;
   btnsubmit.classList.add("active-button");

}
function show(){

     onecontainer.classList.add("desactived");
     twocontainer.classList.add("showed");
    
}