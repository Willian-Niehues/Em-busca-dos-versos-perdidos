const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        const proximoElemento = document.getElementById(proximoPasso);

        if (proximoElemento) { // só avança se existir
            atual.classList.remove('ativo');
            proximoElemento.classList.add('ativo');
        } else {
            console.warn("Passo não encontrado:", proximoPasso);
        }
    });
});
