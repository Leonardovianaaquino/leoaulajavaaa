nome= prompt("Informe o seu nome")
idade = prompt(" Informe sua idade")

if(idade<10){
    console.log("Criança")
}
else if(idade<18){
    console.log("Adolescente")
}
else if(idade<60){
    console.log("Adulto")
}
else{
    console.log("Idoso")
}