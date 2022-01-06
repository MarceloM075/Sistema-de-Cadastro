if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar esta página.')
    window.location.assign('./index.html')
}

function sair(){
    window.location.assign('./index.html')
    localStorage.removeItem('token')
}