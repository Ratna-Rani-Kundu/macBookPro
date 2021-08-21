function costZero(element, price){
    const zeroCostId = document.getElementById(element+'-cost');
    const zeroCostText = zeroCostId.innerText;
    const zeroCost = parseFloat(zeroCostText);
    if (price == 0){
        zeroCostId.innerText = 0; 
    }
    else if (price == 20){
        zeroCostId.innerText = 20; 
    }
    else if (price == 100){
        zeroCostId.innerText = 100; 
    }
    else if (price == 180){
        zeroCostId.innerText = 180; 
    }
    
   
     
 }
document.getElementById('memory-8gb').addEventListener('click',function(){

costZero('memory', 0);
})
document.getElementById('storage-256').addEventListener('click',function(){

costZero('storage', 0);
})
document.getElementById('delivery-free').addEventListener('click',function(){
costZero('delivery', 0);
})
document.getElementById('delivery-paid').addEventListener('click',function(){
costZero('delivery', 20);
})
document.getElementById('memory-16gb').addEventListener('click',function(){

    costZero('memory', 180);
    })
document.getElementById('storage-512').addEventListener('click',function(){

    costZero('storage',100);
    })
document.getElementById('storage-1tb').addEventListener('click',function(){

    costZero('storage',180);
    })

// function price180(){
//     const zeroCostId = document.getElementById(element+'-cost');
//     const zeroCostText = zeroCostId.innerText;
//     const zeroCost = parseFloat(zeroCostText);
//     zeroCostId.innerText = 0;
     
//  }