document.querySelector("button").onclick = ()=>{
var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function(){
  if(xmlhttp.readyState===4&&xmlhttp.status===200)
   document.getElementById('retorno').innerHTML = xmlhttp.responseText;
  else{
   document.getElementById('retorno').innerHTML = 'erro'+xmlhttp.readyState+' '+xmlhttp.status;
  }
 };
 xmlhttp.open("GET","curso.txt",true);
 xmlhttp.send();
};