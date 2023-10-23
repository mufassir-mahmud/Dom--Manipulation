let flowerTotal = 0;
function handleClick(target){
    const selectedITem = document.getElementById('selected-item');
    const itemName = target.parentNode.parentNode.childNodes[1].innerText;
    
    const li = document.createElement('li');
    li.innerText = itemName;
   
    selectedITem.appendChild(li)
    const price = target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    
    
    flowerTotal = parseInt(flowerTotal) + parseInt(price);
    console.log(flowerTotal);

    const findTotal = document.getElementById('total');
    findTotal.innerText = flowerTotal;

    if(flowerTotal === 200){
        
    }
}