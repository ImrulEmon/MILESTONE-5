function extraPrice(component,base,price) {
    if(base==false){
        document.getElementById("extra-"+component).innerText= price;
    }
    
    else{
        document.getElementById("extra-"+component).innerText= price;
        
    }
}

function updateTotal() {
   // const previousTotal= document.getElementById("total").innerText;
   const base = 1300 ;
    const extraMemory = document.getElementById("extra-memory").innerText;
    const extraStorage = document.getElementById("extra-storage").innerText;
    const extraDelivery = document.getElementById("extra-delivery").innerText;
    const total = parseInt(base) + parseInt(extraMemory)+parseInt(extraStorage)+parseInt(extraDelivery);
    document.getElementById("total").innerText = total;
    document.getElementById("final").innerText = total;
   
}

function discount() {
    const voucher =  document.getElementById("discount").value;
    const finalPrice =  document.getElementById("final").innerText;
    if(voucher=="20%OFF"){
        document.getElementById("final").innerText = parseFloat(finalPrice) - (parseFloat(finalPrice)/5);
        document.getElementById("discount-btn").disabled=true;
    }
}

document.getElementById("8gb").addEventListener('click',function () {
    extraPrice("memory",true,0);
    updateTotal();
    
});
document.getElementById("16gb").addEventListener('click',function () {
    extraPrice("memory",false,200);
    updateTotal();
});


document.getElementById("256gb").addEventListener('click',function () {
    extraPrice("storage",true,0);
    updateTotal();
});
document.getElementById("512gb").addEventListener('click',function () {
    extraPrice("storage",false,100);
    updateTotal();
});
document.getElementById("1tb").addEventListener('click',function () {
    extraPrice("storage",false,200);
    updateTotal();
});

document.getElementById("free").addEventListener('click',function () {
    extraPrice("delivery",true,0);
    updateTotal();
    
});
document.getElementById("charge").addEventListener('click',function () {
    extraPrice("delivery",false,20);
    updateTotal();
});