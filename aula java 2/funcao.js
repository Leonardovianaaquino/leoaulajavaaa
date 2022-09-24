

    function maiornum(){
        
        resp="S"
        idade=0
        maiori=0
        while (resp=="S"){

            nome=prompt("Infome seu nome:")
            idade=parseInt(prompt("Informe sua idade: "))
            if (idade>maiori){
                maiori=idade
                maiorn=nome
                
            }
            resp=prompt("Deseja continuar (S/N)? ")
        }
        console.log(maiorn)
        return
        

    }





