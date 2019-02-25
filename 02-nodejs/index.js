
function obterUsuario(callback) {
    setTimeout(function() {
        return callback(null,{
            id: 1,
            nome: 'Belial',
            dataNascimento: new Date()
        })
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

function resolverUsuario(erro, usuario) {
    console.log('usuario: ', usuario);
}

obterUsuario(resolverUsuario);
//const telefone = obterTelefone();

// console.log('usuario: ', usuario);
// console.log(telefone);