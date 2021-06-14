//Variáveis Globais//
var message_id = 0

function credits(){
    alert("Desenvolvimento de Software para Web\n João Pedro Freitas da Silva\nDavid Andrade de Araújo")
}

function post(){
    
    //Pegando os elementos do arquivo HTML//
    var nome = document.getElementById('nome').value;
    var commentary = document.getElementById('commentary').value;
    var div_mensagens = document.getElementById('commentary-log')

    //Tratamento de erro de campos vazios//
    if(nome == "" || commentary == ""){
        alert("Postagem inválida")
        return
    }

    //Criação de div de mensagens//
    var mydiv = document.createElement("div")

    //Criação e formatação de obj texto// 
    var texto = document.createTextNode(nome + ": " + commentary)

    //Criação e inicialização de botão de excluir// 
    var excluir = document.createElement("button")
    mydiv.id = message_id
    excluir.textContent = "Excluir"
    excluir.style.marginLeft = "5px"

    //Declaração da função do botão excluir, com base no ID da mensagem//
    excluir.onclick = function excluir_mensagem(){
        var a = document.getElementById(mydiv.id)
        a.parentNode.removeChild(a)
    }
    
    //Incrementa ID para a próxima mensagem após a criação da anterior//
    message_id += 1

    //Posicionamento dos elementos//
    mydiv.appendChild(texto)
    mydiv.appendChild(excluir)
    div_mensagens.appendChild(mydiv)

    //Limpar caixa de texto//
    var nome = document.getElementById('nome').value = "";
    var commentary = document.getElementById('commentary').value = "";
}