function extraPrice(component,base,price) {
    const extraComponentPriceField = document.getElementById("extra-"+component);
   
    if(base==false){
        extraComponentPriceField.innerText= price;
    }
    
    else{
        extraComponentPriceField.innerText = price;
        
    }
}

function updateTotal(price,component) {
    const previousTotal= document.getElementById("total").innerText;
    const extraMemory = document.getElementById("extra-memory").innerText;
    const extraStorage = document.getElementById("extra-storage").innerText;
    const total = parseInt(previousTotal) + parseInt(extraMemory)+parseInt(extraStorage);
    console.log(total);
}

document.getElementById("8gb").addEventListener('click',function () {
    extraPrice("memory",true,0);
    updateTotal(0,"memory");
    
});
document.getElementById("16gb").addEventListener('click',function () {
    extraPrice("memory",false,180);
    updateTotal(0,"memory");
});


document.getElementById("256gb").addEventListener('click',function () {
    extraPrice("storage",true,0);
    updateTotal(0,"storage");
});
document.getElementById("512gb").addEventListener('click',function () {
    extraPrice("storage",false,100);
    updateTotal(100,"storage");
});
document.getElementById("1tb").addEventListener('click',function () {
    extraPrice("storage",false,180);
    updateTotal(180,"storage");
});