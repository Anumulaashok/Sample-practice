let data=JSON.parse(localStorage.getItem("products"))||[];
console.log(data);
display(data)


function display(data){
    document.getElementById("all_products").innerHTML=""
   

data.forEach(function(el,i){
   
var container=document.getElementById("all_products")

var box=document.createElement("div");



var image=document.createElement("img");
image.setAttribute("src",el.image)
var name=document.createElement("h3")
name.innerText=el.type;
var descipt=document.createElement("p");
descipt.innerText=el.disc;
var pr=document.createElement("p");
pr.innerText=el.price

var button1=document.createElement("button");
button1.innerText="Remove";
button1.setAttribute("id","remove_product")

button1.addEventListener("click",function(){
    removefun(el,i)
})



box.append(image,name,descipt,pr,button1)
container.append(box)
})




}
function addmore(){
    window.location.href="index.html"
}
function removefun(el,i){
    data.splice(i,1);
    display(data);
    localStorage.setItem("products",JSON.stringify(data));
  
    window.location.reload();



}