const elementoCep = document.querySelector('#cep');
const elementoRua = document.querySelector('#rua');
const elementoComplemento = document.querySelector('#complemento');
const elementoBairro = document.querySelector('#bairro');
const elementoCidade = document.querySelector('#cidade');
const elementoEstado = document.querySelector('#UF');

function limpa_formulario_cep() {
    //Limpa valores do formulário de cep.
    elementoRua.value = ("");
    elementoBairro.value = ("");
    elementoCidade.value = ("");
    elementoEstado.value = ("");
}

async function buscaEMostraCep(valor) {
    //Nova variável "cep" somente com dígitos.
    let cepApenasNumero = valor.replace(/\D/g, '');
    console.log(cepApenasNumero)
    if (cepApenasNumero != "") {
        let cepvalido = /^[0-9]{8}$/;

        if (cepvalido.test(cepApenasNumero)) {
            elementoRua.value = ("...");
            elementoBairro.value = ("...");
            elementoCidade.value = ("...");
            elementoEstado.value = ("...");
            const buscaApiViaCep = await fetch(`https://viacep.com.br/ws/${cepApenasNumero}/json/`);
            const cep = await buscaApiViaCep.json();
            console.log(cep);
            elementoRua.value = cep.logradouro;
            elementoComplemento.value = cep.complemento;
            elementoBairro.value = cep.bairro;
            elementoCidade.value = cep.localidade;
            elementoEstado.value = cep.uf;
        }else{
            //cep é inválido.
            limpa_formulario_cep();
            alert("Formato de CEP inválido.");
        }
    }else{
        //cep sem valor, limpa formulário.
        limpa_formulario_cep();
    }
}

elementoCep.addEventListener('blur', () => {
    const cepPesquisado = elementoCep.value;
    console.log(cepPesquisado)
    buscaEMostraCep(cepPesquisado)
})


