let fundo = document.getElementById('fundo');
let lua = document.getElementById('lua');
let ceuDia = document.getElementById('ceuDia');
let forteDia = document.getElementById('forteDia');
let forteNoite = document.getElementById('forteNoite');
let text = document.getElementById('text');
let text2 = document.getElementById('text2');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    forteNoite.style.top = value * 10 + 'px';
    text.style.marginRight = value * 6 + 'px';
    text2.style.left = value * 4 + 'px';
    fundo.style.left = value * 15 + 'px';
    lua.style.top = value * 2 + 'px';
    ceuDia.style.left = value + 'px';
   


    
})