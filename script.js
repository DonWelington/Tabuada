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











/*function gerarTabu(){
    let numero = document.getElementById('numeroTabu')
    let tab = document.getElementById('selectab')
    let msg2 = document.getElementById('msg')
    
    


    if(numero.value.length == 0){
        msg2.innerText = '== Por favor, digite um numero =='
        msg2.style.color = 'red'

    }else{
        let num = Number(numero.value)
        tab.innerHTML = ''
        msg2.innerHTML = `Pronto, calculado a tabuada de ${num}`

        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            
        }
    }    
} */

/*function imagem(){
    let res = document.getElementById('res')
    let img = document.createElement('img')  
    let data = new Date()
    segundos = data.getSeconds()
    img.setAttribute('id', 'foto')
        
    if(segundos%2 == 0){
        img.setAttribute('src', '01.jpg') //adciona a foto
    }else{
        img.setAttribute('src', 'aviao.gif') // adciona a foto
    }
    
    img.style.width = '150px'
    res.appendChild(img)
} */


