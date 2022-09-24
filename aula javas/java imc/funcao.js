altura=prompt("Informe sua altura")
peso=prompt("informe seu peso")
alturaa= altura*altura
imc=peso/alturaa
if(imc<17){
    alert("Muito Abaixo do peso")
 }
 else if (imc<=18.49){
    alert("Abaixo do peso")
 }
 else if(imc<=24.99){
    alert("Peso normal")
 }
 else if (imc<=29.99){
    alert("Acima do peso")
 }
 else if(imc<=34.99){
    alert("Obesidade 1")
 }
 else if(imc<=39.99){
    alert("obesidade 2")
 }
else {
    alert("obesidade 3")
}