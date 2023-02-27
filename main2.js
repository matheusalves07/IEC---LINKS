var tempoInicial = 0;
    var cronometro;
    var tempoEntreSaidas;

    function iniciarCronometro() {
      tempoEntreSaidas = document.getElementById('tempo-saida').value;
      cronometro = setInterval(function(){
        tempoInicial++;
        document.getElementById('tempo').innerHTML = tempoInicial;
        atualizarProximoTempo();
      }, 1000);
    }

    function marcarTempo() {
      var tempoDecorrido = document.getElementById('tempo').innerHTML;
      var listaTempos = document.getElementById('tempos');
      var novoTempo = document.createElement('div');
      novoTempo.innerHTML = 'Tiro ' + listaTempos.childNodes.length + ': ' + tempoDecorrido + ' segundos';
      novoTempo.classList.add('tempo-registrado');
      listaTempos.appendChild(novoTempo);
      clearInterval(cronometro);
      cronometro = setInterval(iniciarCronometro, tempoEntreSaidas * 1000);
      atualizarProximoTempo();
    }

    function reiniciarCronometro() {
      clearInterval(cronometro);
      document.getElementById('tempo').innerHTML = '0';
      document.getElementById('tempos').innerHTML = '';
      document.getElementById('proximo-tempo').innerHTML = '';
      tempoInicial = 0;
    }

    function atualizarProximoTempo() {
      var proximoTempo = parseInt(document.getElementById('tempo-saida').value) - (tempoInicial % parseInt(document.getElementById('tempo-saida').value));
      document.getElementById('proximo-tempo').innerHTML = 'Próximo tiro em: ' + proximoTempo + ' segundos';
    }