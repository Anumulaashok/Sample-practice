//store the products array in localstorage as "products"

let data=JSON.parse(localStorage.getItem("products"))||[];

let form=document.getElementById("products").value;


function showproducts(){
    event.preventDefault();
    let type=document.getElementById("type").value;
    let disc=document.getElementById("desc").value;
    let price=document.getElementById("price").value;
    let image=document.getElementById("image").value;

    let pass= new Fun(type,disc,price,image);
   data.push(pass);
   localStorage.setItem("products",JSON.stringify(data))
    window.location.reload();
}

function Fun(type,disc,price,image){
    this.type=type;
    this.disc=disc;
    this.price=price;
    this.image=image;
}
function showf(){
    window.location.href="inventory.html"
}