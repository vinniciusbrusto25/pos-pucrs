var novoMapa = new Map();

//Especializar o map para a nossa regra de negócio
class HistoryMap {
    
}

novoMapa.set('11/11/11 - 23:30 - URL', { title: 'Titulo do site', url: 'url sozinha' });
novoMapa.set('11/11/11 - 23:31 - URL', {});

var resultado = novoMapa.get('11/11/11 - 23:30 - URL');
console.log(resultado);