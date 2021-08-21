function elementCost(element, value){
    const priceId = document.getElementById(element+'-cost');
    const priceText = priceId.innerText;
    const price = parseFloat(priceText);
    if (value == 0){
        priceId.innerText = 0; 
        
    }
    else if (value == 20){
        priceId.innerText = 20; 
        
    }
    else if (value == 100){
        priceId.innerText = 100; 
        
    }
    else if (value == 180){
        priceId.innerText = 180; 
        
    }
    else if (value == 1299){
        priceId.innerText = 1299; 
        return 1299;
        
    }
    
    
   
     
 }
document.getElementById('memory-8gb').addEventListener('click',function(){

elementCost('memory', 0);
})
document.getElementById('storage-256').addEventListener('click',function(){

 elementCost('storage', 0);
})
document.getElementById('delivery-free').addEventListener('click',function(){
    elementCost('delivery', 0);
})
document.getElementById('delivery-paid').addEventListener('click',function(){
     elementCost('delivery', 20);
})
document.getElementById('memory-16gb').addEventListener('click',function(){

    elementCost('memory', 180);
    })
document.getElementById('storage-512').addEventListener('click',function(){

     elementCost('storage',100);
    })
document.getElementById('storage-1tb').addEventListener('click',function(){

      elementCost('storage',180);
    })

//     // calculaton

// pomo-code
document.getElementById('apply-button').addEventListener('click', function(){
    const pomoCodeField = document.getElementById('pomo-code');
    const pomoCode = pomoCodeField.value;
    if(pomoCode == 'stevekaku')
    {
        let total = document.getElementById('total').innertext
        pomoCodeField.value = ''; 
    }
    
})