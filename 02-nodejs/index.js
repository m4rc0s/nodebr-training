
function obterUsuario() {
    setTimeout(function() {
        return {
            id: 1,
            nome: 'Belial',
            dataNascimento: new Date()
        }
    }, 1000)
}

function obterTelefone(idUsuario) { 
    setTimeout( () => {
        return {
            telefone: 768574837,
            ddd: 19
        }
    }, 2000)
}

function obterEndereco(idUsuario) { }

const usuario = obterUsuario();
//const telefone = obterTelefone();

console.log('usuario: ', usuario);
//console.log(telefone);