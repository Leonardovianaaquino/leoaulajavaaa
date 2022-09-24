nome = prompt(" Informe seu Nome")
n1 = prompt("Informe sua nota")
n2 = prompt(" Informe sua outra nota")
media = (parseInt(n1)+parseInt(n2))/2
 if(media>=9){
    alert("Otimo "+ media) 
 }
 else if (media>=7){
    alert("Bom " + media) 
 }
 else if (media>=5){
    alert("Regular "+ media) 
 }
 else{
    alert("Insuficiente "+ media)
 }
 alert(nome)
 
