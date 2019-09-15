nomeUsuario = prompt("Informe seu nome");
idadeUsuario = prompt("Informe sua idade");


document.querySelector("button").onclick = ()=>{
    var xmlhttp = new XMLHttpRequest();
     xmlhttp.onreadystatechange = function(){
      if(xmlhttp.readyState===4&&xmlhttp.status===200)
       document.getElementById('retorno').innerHTML = xmlhttp.responseText;
      else{
       document.getElementById('retorno').innerHTML = 'erro'+xmlhttp.readyState+' '+xmlhttp.status;
      }
     };
     var url = "recebe.php?name="+nomeUsuario+"&idade="+idadeUsuario;
     xmlhttp.open("GET",url,true);
     xmlhttp.send();
    };

    //pega id e quando clicar ...
    /***************************************
        Use objetos XMLHttpRequest (XHR) para interagir com servidores. Você pode recuperar dados de um URL sem precisar atualizar a página inteira. Isso permite que uma página da Web atualize apenas parte de uma página sem interromper o que o usuário está fazendo.
    ***************************************/
    // variavelxmlHttp recebe onreadystatechange
    // onreadystatechange Define uma função a ser chamada quando a propriedade readyState é alterada

        /************************************************
        readyState Mantém o status do XMLHttpRequest.
        Possiveis retornos de readyState:
            0: solicitação não inicializada
            1: conexão do servidor estabelecida
            2: solicitação recebida
            3: solicitação de processamento
            4: solicitação concluída e resposta pronta
        ************************************************/
       /************************************************
        status Retorna o número do status de uma solicitação
        Possiveis retornos de status:
            200: "OK"
            403: "Proibido"
            404 não encontrado"
            Para obter uma lista completa, consulte a Referência de mensagens HTTP
        ************************************************/
       //se a solicitação concluída e resposta pronta (xmlHttp.readyState === 4) e o staus for "OK" (xmlHttp.status===200) entao...

        /**********************************************************
        open(método, url, assíncrono, usuário, psw) Especifica a solicitação

            método: o tipo de solicitação GET ou POST
            url: o local do arquivo
            assíncrono: verdadeiro (assíncrono) ou falso (síncrono)
            usuário: nome de usuário opcional
            psw: senha opcional
        
        **********************************************************/
        //abre o pedido/requisiçao com metodo GET, informa o caminho do arquivo onde esta os dados, true diz que a requisição é assincrona
        //send () Envia a solicitação ao servidor Usado para solicitações GET
//instale o firebug for Google Chrome ajuda a ver as requisições
//instale o firebug para firefox ajuda a ver as requisições