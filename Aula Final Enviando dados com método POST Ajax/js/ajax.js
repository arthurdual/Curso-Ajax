let formData = new FormData();

document.querySelector('#ficheiro').onchange = function (e) {
    if (e.target.files != null && e.target.files.length != 0) {
        formData.append("fotografia", e.target.files[0]);
    }
};
document.querySelector('button').onclick = function() {
    var tbNome = document.querySelector("#tbNome");
    var nIdade = document.querySelector("#nIdade");
    if (tbNome.value != "" && nIdade.value != "") {
        formData.append("nome", tbNome.value);
        formData.append("idade", nIdade.value);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState ===4& xmlhttp.status===200){
                alert(xmlhttp.responseText);
            }
        };
        xmlhttp.open("POST","recebe.php",true);
        xmlhttp.send(formData);
    }else{
        alert('Informe os dados corretamente');
    }

};
/*document.querySelector('input#fotografia').onchange = function(e){
    if (e.target.files != null && e.target.files.length != 0) {
        var arquivo = e.target.files[0];
        var fd = new FormData();
        fd.append("fotografia",arquivo);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState ===4& xmlhttp.status===200){
                alert(xmlhttp.responseText);
            }
        };
        xmlhttp.open("POST","recebe.php",true);
        xmlhttp.send(fd);
    
    }
};*/