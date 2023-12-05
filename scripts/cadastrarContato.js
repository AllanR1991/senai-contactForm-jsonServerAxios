

const elementoFormulario = document.querySelector('.formulario-contato');
const elementoNome = document.querySelector('#nome');
const elementoSobrenome = document.querySelector('#sobrenome');
const elementoEmail = document.querySelector('#email');
const elementoCodidoTelefonicoPais = document.querySelector('#pais');
const elementoDDD = document.querySelector('#ddd');
const elementoTelefone = document.querySelector('#telefone');
//const elementoCep = document.querySelector('#cep');
//const elementoRua = document.querySelector('#rua');
const elementoNumeroCasa = document.querySelector('#numero');
//const elementoComplemento = document.querySelector('#complemento');
//const elementoBairro = document.querySelector('#bairro');
//const elementoCidade = document.querySelector('#cidade');
//const elementoEstado = document.querySelector('#UF');
const elementoAnotacao = document.querySelector('.anotacoes');
const elementoBotaoCadastro = document.querySelector('.cadastrar');
const elementoBotaoLimpar = document.querySelector('.limpar');

function limpaFormulario(){
    elementoNome.value = "";
    elementoSobrenome.value = "";
    elementoEmail.value = "";
    elementoCodidoTelefonicoPais.value = "";
    elementoDDD.value = "";
    elementoTelefone.value = "";
    elementoCep.value = "";
    elementoRua.value = "";
    elementoNumeroCasa.value = "";
    elementoComplemento.value = "";
    elementoBairro.value = "";
    elementoCidade.value = "";
    elementoEstado.value = "";
    elementoAnotacao.value = "";
}


async function cadastro(){
    const dados = {
        nome: elementoNome.value,
        sobrenome: elementoSobrenome.value,
        email: elementoEmail.value,
        telefone: {
            pais: elementoCodidoTelefonicoPais.value,
            ddd: elementoDDD.value,
            numero: elementoTelefone.value
        },
        endereco: {
            cep: elementoCep.value,
            rua: elementoRua.value,
            numero: elementoNumeroCasa.value,
            complemento: elementoComplemento.value,
            bairro: elementoBairro.value,
            cidade: elementoCidade.value,
            estado: elementoEstado.value
        },
        anotacoes: elementoAnotacao.value
    }
    try {
        const resposta = await axios.post('http://localhost:3000/contatos', dados);
        
            debugger
            alert('Dados cadastrados com sucesso.');
            limpaFormulario();
        
    } catch (error) {
        console.error('Erro ao enviar os dados para a API:', error);
        alert("Erro ao enviar os dados para a API!!!");
    }    
}

elementoFormulario.addEventListener('submit',(event) => {
       
    event.preventDefault();
    //alert('Submit');
    cadastro();
})

elementoBotaoLimpar.addEventListener('click', limpaFormulario);