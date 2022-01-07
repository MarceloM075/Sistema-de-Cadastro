const usuarioPadrao = {
    nome: 'admin',
    senha: '123456'
}

let usuarioDigitado = document.getElementById("user")
let senhaDigitada = document.getElementById("password")

function entrarNoSistema(){
    if(usuarioPadrao.nome == usuarioDigitado.value && usuarioPadrao.senha == senhaDigitada.value){
        let token = Math.random().toString(16).substring(2)
        
        window.location.assign('/cadastro.html')
        localStorage.setItem('token', token)
    }else{
        const user = document.querySelector('#user')
        const password = document.querySelector('#password')
        user.value = ''
        password.value = ''
        alert('Usuário ou senha inválidos.')
        usuarioDigitado.focus()
    }
}
