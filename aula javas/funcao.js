num=0
cont=1
soma=0
maior=0



while (cont<=10){
    num= parseInt(prompt("Informe o valor"+ cont + "o.: "))
    if(num>maior){
        maior=num
    }
    soma=soma+num
    cont= cont+1
    
    
}
console.log(soma)
console.log(maior)
