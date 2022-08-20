/* 
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

var frase = document.getElementById('encript')
var result = document.getElementById('desencrip')
var fundoImage = document.getElementById('fundoResultado').style
var botCopiar = document.getElementById('copiar')
var botaoCript = document.getElementById('botCripto')
var botaoDesencript = document.getElementById('botDesencripto')




    function encriptador(texto){
        texto = texto.replace(/e/g,'enter')
        texto = texto.replace(/i/g,'imes')
        texto = texto.replace(/a/g,'ai') // a flag (/ /g) - seleciona todas as ocorrencias de a da string
        texto = texto.replace(/o/g,'ober')
        texto = texto.replace(/u/g,'ufat')
        return texto
    }
    function desencriptador(cript){
        cript = cript.replace(/enter/g,'e')
        cript = cript.replace(/imes/g,'i')
        cript = cript.replace(/ai/g,'a') // a flag (/ /g) - seleciona todas as ocorrencias de a da string
        cript = cript.replace(/ober/g,'o')
        cript = cript.replace(/ufat/g,'u')

        return cript

    }
    function verificaTexto(){
        if(!frase.value == ""){
            fundoImage.display ='none'
            result.style.display = 'block'
            botCopiar.style.display='block'

        } else{
            fundoImage.display ='block'
            result.style.display = 'none'
            botCopiar.style.display = 'none'

            

        }
    }
    function clicaBotaoCripto(){
        result.value = encriptador(frase.value.toLowerCase())
        verificaTexto()

    }

    function clicaBotaoDesencripta(){
        result.value = desencriptador(frase.value)
        verificaTexto()
        
    }
    function copiarBotao(){
        navigator.clipboard.writeText(result.value)



        
    }
   

botaoCript.onclick = clicaBotaoCripto
botaoDesencript.onclick = clicaBotaoDesencripta
botCopiar.onclick = copiarBotao




