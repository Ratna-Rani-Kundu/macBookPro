function stringToNumber(product){
    const priceId =  document.getElementById(product+'-cost')
    const priceText =priceId.innerText;
    const price = parseFloat(priceText)
    return price ;
}

document.getElementById('memory-8gb').addEventListener('click',function(){

const sum = 0 +stringToNumber('memory');

  if (sum ==0){
    document.getElementById('memory-cost').innerText =0;
// //  total 

calculation();
  }

 });
document.getElementById('memory-16gb').addEventListener('click',function(){

const sum = 180 +stringToNumber('memory');

  if (sum ==180){
    document.getElementById('memory-cost').innerText =180;
// //  total 
calculation();
  }

 });
document.getElementById('storage-256').addEventListener('click',function(){

const sum = 0 +stringToNumber('storage');

  if (sum ==0){
    document.getElementById('storage-cost').innerText =0;
// //  total 

calculation();
  }

 });
document.getElementById('storage-512').addEventListener('click',function(){

const sum = 100 +stringToNumber('storage');

  if (sum ==100){
    document.getElementById('storage-cost').innerText =100;
// //  total 

calculation();
  }

 });
document.getElementById('storage-1tb').addEventListener('click',function(){

const sum = 180 +stringToNumber('storage');

  if (sum ==180){
    document.getElementById('storage-cost').innerText =180;
// //  total 
calculation();
  }

 });
 document.getElementById('delivery-free').addEventListener('click',function(){

    const sum = 0 +stringToNumber('delivery');
    
      if (sum ==0){
        document.getElementById('delivery-cost').innerText =0;
    // //  total 
    
    calculation();
      }
    
     });
 document.getElementById('delivery-paid').addEventListener('click',function(){

    const d = 20 +stringToNumber('delivery');
    
      if (d ==20){
        document.getElementById('delivery-cost').innerText =20;
    // //  total 
    
    //  const g = d;
     calculation();
     
      }
    
     });
     function calculation(){
        const bestCost = stringToNumber('best');
        const memoryCost =stringToNumber('memory');
        const storageCost = stringToNumber('storage') ;
        const deliveryCost = stringToNumber('delivery') ;
    
        const total = bestCost + memoryCost +storageCost+deliveryCost;
        

        document.getElementById('total-price').innerText = total;
       
        document.getElementById('total').innerText = total;
        
        return total;
        
    }


    // pomo-code
document.getElementById('apply-button').addEventListener('click', function(){

    const pomoCodeField = document.getElementById('pomo-code');
    const pomoCode = pomoCodeField.value;
    if(pomoCode == 'stevekaku')
    {
        const discount = calculation()/5;
        const final = calculation()-discount;

    document.getElementById('total').innerText = final;
    
    }
    
})