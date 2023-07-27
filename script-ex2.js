//O elemento date tem uma funcionalidade interessante, o é na vvd um certo tempo contado em milissegundos, desde de uma certa data. E nós conseguimos aceesar essse tempo com .getTime() e modificalo com .setTime()

//recolhimento e declaração das variaeveis e constantes

//data de hoje
var date = new Date()
//data de hoje em milissegundos
var today = date.getTime()


function verificar(){
    //Variavel que recolhe o input
    var inputDate = document.getElementById("date");
    
    
    //Vamos setar o input como nossa data de nascimento
    const nascimento = inputDate.value
    
    //Nessa variavel vamos pegar uma data e transformala em millisegundos para podermos contabilzar sua idade
    var timeAlive = Date.parse(nascimento)
    
    var idade = Math.trunc((today - timeAlive)/(1000*60*60*24*365))
    var res = document.querySelector('div#res')

    //exclusão de incoerências
    if(inputDate.value.length == 0 || idade < 0){
      window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }
    else{
        var gen = document.getElementsByName(`sex`)
        var genero = ``
        var img = document.getElementById(`imagem`)

        if(gen[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 10){
                    img.src ='Img/BB-M.png' 
            }
            else if(idade >= 10 && idade < 21){
                img.src = 'Img/Criança-M.png'
            }
            else if(idade >= 21 && idade < 60){
                img.src='Img/Chad.png'
            }

            else{
                img.src = 'Img/Veio.png'
            }
        }
        else if(gen[1].checked){
            genero = "Mulher"

            if(idade >= 0 && idade < 10){
                img.src = 'Img/BB-F.png'
            }
            else if(idade >= 10 && idade < 21){
                img.src='Img/Criança-F.png'
            }
            else if(idade >= 21 && idade < 60){
                img.src='Img/Femea.png'
            }
            else{
                img.src = 'Img/Veia.png'
            }
             res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        }
    }
        
      

       
}
    
    



