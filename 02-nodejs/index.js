
function obterUsuario(callback) {
    setTimeout(function() {
        return callback(null,{
            id: 1,
            nome: 'Belial',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) { 
    setTimeout( () => {
        return callback(null,{
            telefone: 768574837,
            ddd: 19
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'from the darkness',
            numero: 275
        })
    }, 2000);
 }

obterUsuario(function resolverUsuario(error, usuario) {
    
    if (error) {
        console.error('Ocorreu um erro ao obter o Usuário.', error);
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('Ocorreu um erro ao obter telefone do usuário.');
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2) {
                console.error('Ocorreu um erro ao obter o edereço do usuário.');
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.numero}, ${endereco.rua},
                Telefone: (${telefone.ddd})${telefone.telefone}
            `)

        });

    });

});
//const telefone = obterTelefone();

// console.log('usuario: ', usuario);
// console.log(telefone);