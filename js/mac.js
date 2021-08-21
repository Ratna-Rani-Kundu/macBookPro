function costZero(element){
    const zeroCostId = document.getElementById(element+'-cost');
    const zeroCostText = zeroCostId.innerText;
    const zeroCost = parseFloat(zeroCostText);
    zeroCostId.innerText = 0;
     
 }
document.getElementById('memory-8gb').addEventListener('click',function(){

costZero('memory');
})
document.getElementById('storage-256').addEventListener('click',function(){

costZero('storage');
})
document.getElementById('delivery-free').addEventListener('click',function(){
costZero('delivery');
})
// document.getElementById('memory-16gb').addEventListener('click',function(){

//     costZero('memory');
//     })
// function costZero(element){
//     const zeroCostId = document.getElementById(element+'-cost');
//     const zeroCostText = zeroCostId.innerText;
//     const zeroCost = parseFloat(zeroCostText);
//     zeroCostId.innerText = 0;
     
//  }