function tabuada() {
    let numTab = document.getElementById('numTab');
    let seleTab = document.getElementById('seleTab');
    let msg = document.getElementById('msg');    
    

    if(numTab.value.length == 0){
        msg.innerText = 'ERRO - Digite um valor!';
    }else{

        seleTab.innerHTML = '';
        let num = Number(numTab.value);

        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option');
            item.text = `${num} x ${c} = ${num*c}`; 
            seleTab.appendChild(item)
            numTab.value = "";
        }
        msg.innerText = 'Pronto!';        
    }          
}
