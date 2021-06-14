var message_id = 0

function credits(){
    alert("Desenvolvimento de Software para Web\n João Pedro Freitas da Silva\nDavid Andrade de Araújo")
}


function post(){
    
    var nome = document.getElementById('nome').value;
    var commentary = document.getElementById('commentary').value;
    var div_mensagens = document.getElementById('commentary-log')

    if(nome == "" || commentary == ""){
        alert("Postagem inválida")
        return
    }

    var mydiv = document.createElement("div")
    var texto = document.createTextNode(nome + ": " + commentary)
    var excluir = document.createElement("button")
    mydiv.id = message_id
    excluir.textContent = "Excluir"
    excluir.onclick = function excluir_mensagem(){
        var a = document.getElementById(mydiv.id)
        a.parentNode.removeChild(a)
     }
    excluir.style.marginLeft = "5px"
    message_id += 1
    mydiv.appendChild(texto)
    mydiv.appendChild(excluir)
    div_mensagens.appendChild(mydiv)

    var nome = document.getElementById('nome').value = "";
    var commentary = document.getElementById('commentary').value = "";
}