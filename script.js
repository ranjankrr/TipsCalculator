let btn = document.getElementById("btn");
let btn2 =document.getElementById("btn2");
btn.addEventListener("click", ()=>{
    if(!p ===''||!r ===''||!t === ''){
        alert("please enter all value");
    }
    let p =document.getElementById("amount").value;
    let r = document.getElementById("rate").value;
    let t = document.getElementById("time").value;
    const principleOfamount = (p*r*t)/100;
    document.getElementById("total").value = principleOfamount;
});
btn2.addEventListener("click", ()=>{
    let p =document.getElementById("amount").value="";
    let r = document.getElementById("rate").value="";
    let t = document.getElementById("time").value="";
     document.getElementById("total").value ="";
});

