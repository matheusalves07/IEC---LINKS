// após a página ser carregada 
window.onload = function() {
  
    // declarar variável horas e atribuir ligação ao tempo definido em html 
    var horas = 00; 

    // declarar variável minutos e atribuir ligação ao tempo definido em html	  		
    var minutos = 00;

    // declarar variável segundos e atribuir ligação ao tempo definido em html
    var segundos = 00; 

    // declarar variável milissegundos e atribuir ligação ao tempo defindo em html
    var milissegundos = 00; 	


    // declarar variável para anexar horas e atribuir ligação ao elemento id definido em html 
    var anexarHoras = document.getElementById("horas");

    // declarar variável para anexar minutos e atribuir ligação ao elemento id definido em html 
    var anexarMinutos = document.getElementById("minutos");

    // declarar variável para anexar segundos e atribuir ligação ao elemento id definido em html 
    var anexarSegundos = document.getElementById("segundos");

    // declarar variável para anexar milissegundos e atribuir ligação ao elemento id defindo em html 
    var anexarMilissegundos = document.getElementById("milissegundos");


    // declarar variável para iniciar contagem e atrbuir ligação ao elemento id definido em html
    var botaoIniciar = document.getElementById('botao-iniciar'); 

    // declarar variável para parar contagem e atribuir ligação ao elemento id definido em html 
    var botaoParar = document.getElementById('botao-parar');

    // declarar variável para apagar contagem e atribuir ligação ao elemento id definido em html 
    var botaoApagar = document.getElementById('botao-apagar');

    // declarar variável para determinar a duração da contagem 
    var intervalo;



    // após se clicar no botão iniciar
    botaoIniciar.onclick = function() {	  			

       // atribuir ligação entre a duração da contagem e o intervalo em milissegundos. 1 segundo é igual a 1000 milissegundos 
       intervalo = setInterval(duracaoContagem, 10);
        }

      // limpar o intervalo definido em setInterval  
       clearInterval(intervalo);



  // após se clicar no botão parar 
  botaoParar.onclick = function() {

      // limpar intervalo	
      clearInterval(intervalo);
    }



    // após se clicar no botão apagar 	
    botaoApagar.onclick = function() {

        // limpar intervalo	
       clearInterval(intervalo);

       // atribuir ligação entre horas e o tempo definido em html 
      horas = "00"; 

      // atribuir ligação entre minutos e o tempo definido em html	
      minutos = "00";

      // atribuir ligação entre segundos e o tempo definido em html
      segundos = "00";

      // atribuir ligação entre milissegundos e o tempo definido em html  
        milissegundos = "00";
  

        // aparecer no ecrã horas, minutos, segundos e milissegundos a zero  	
      anexarHoras.innerHTML = horas; 
      anexarMinutos.innerHTML = minutos; 
      anexarSegundos.innerHTML = segundos; 
        anexarMilissegundos.innerHTML = milissegundos;
    }



    // definir como vai ser a contagem   
    function duracaoContagem() {
  
  // começar contagem dos milissegundos
  milissegundos++; 

      // se for menor que 9 colocar um 0
         if(milissegundos < 9){
        anexarMilissegundos.innerHTML = "0" + milissegundos;
      }
  
      if (milissegundos > 9){
        anexarMilissegundos.innerHTML = milissegundos;      
      } 
  

      // começar contagem dos segundos 
      // se os milissegundos forem superiores a 99 	
      if (milissegundos > 99) {

          
            console.log("segundos");
            
            segundos++;		      	
            anexarSegundos.innerHTML = "0" + segundos;
            milissegundos = 0;
            anexarMilissegundos.innerHTML = "0" + 0;
          }

  
      if (segundos > 9){
        anexarSegundos.innerHTML = segundos;
      }

      	
      // se os
      if (segundos > 59){
          
        
          console.log("minutos"); 
          minutos++; 
          anexarMinutos.innerHTML = "0" + minutos; 
          segundos = 0; 
          anexarSegundos.innerHTML = "0" + 0; 
      }


      if (minutos > 9){
        anexarMinutos.innerHTML = minutos;
      }

      // começar contagem das horas 
      // se os minutos forem superiores a 59
      if (minutos > 59){

          // aparece no ecrã as horas 
          console.log("horas"); 
          horas++; 
          anexarHoras.innerHTML = "0" + horas; 
          minutos = 0; 
          anexarMinutos.innerHTML = "0" + 0; 
      }


      if (horas > 9){
        anexarHoras.innerHTML = horas;
      }


    }


}


/* created by magda pimentel, august 2017 - 31 Dias de Código */ 