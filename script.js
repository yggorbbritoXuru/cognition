var dados = [
    ['456321', 'Pedro', 'Silva', 'pedro@desafio.com.br', '(88) 99865-5555'],
    ['965124', 'Maria', 'Aparecida', 'maria@desafio.com.br', '(87) 98453-4444'],
    ['742639', 'Carlos', 'Figueiredo', 'carlos@desafio.com.br', '(71) 99880-8888'],
    ['562134', 'Jonas', 'Andrade', 'jonas@desafio.com.br', '(47) 98818-1111'],
    ['918392', 'Carla', 'Borges', 'carla@desafio.com.br', '(71) 99346-0000'],

    ['260491', 'Danilo', 'Batista', 'danilo@desafio.com.br', '(65) 98944-9999'],
    ['321456', 'Gabriel', 'Santos', 'gabriel@desafio.com.br', '(67) 99458-0101'],
    ['124965', 'Mariana', 'Souza', 'mariana@desafio.com.br', '(91) 98987-4423'],
    ['639742', 'João', 'Pereira', 'joao@desafio.com.br', '(51) 99775-0202'],
    ['134562', 'Lucas', 'Rodrigues', 'lucas@desafio.com.br', '(86) 98826-2588'],

    ['392918', 'Carolina', 'Oliveira', 'carolina@desafio.com.br', '(68) 99296-9898'],
    ['491260', 'Cristina', 'Lima', 'cristina@desafio.com.br', '(84) 98789-2327']
];

var tamanhoPagina = 5;
var pagina = 0;

function paginar() {
    $('table > tbody > tr').remove();
    var tbody = $('table > tbody');
    for (var i = pagina * tamanhoPagina; i < dados.length && i < (pagina + 1) *  tamanhoPagina; i++) {
        tbody.append(
            $('<tr>')
                .append($('<td>').append($('<div>').append(dados[i][0])))
                .append($('<td>').append($('<div>').append(dados[i][1])))
                .append($('<td>').append($('<div>').append(dados[i][2])))
                .append($('<td>').append($('<div>').append(dados[i][3])))
                .append($('<td>').append($('<div>').append(dados[i][4])))
        )
    }
    $('#numeracao').text('Página ' + (pagina + 1) + ' de ' + Math.ceil(dados.length / tamanhoPagina));
}

function ajustarBotoes() {
    // $('#proximo').prop('class', (dados.length <= tamanhoPagina || pagina > dados.length / tamanhoPagina - 1) ? 'disabled' : null);
    // $('#anterior').prop('class', (dados.length <= tamanhoPagina || pagina == 0) ? 'disabled' : null);

    if (dados.length <= tamanhoPagina || pagina > dados.length / tamanhoPagina - 1) {
        $('#proximo').remove();
    } else {
        if (!$('#proximo').length) {
            $('.buttons').append( '<button id="proximo">Próximo &rsaquo;</button>' );
            criarBotaoProximo();
        } 
    }

    if (dados.length <= tamanhoPagina || pagina == 0) {
        $('#anterior').remove();
    } else {
        if (!$('#anterior').length) {
            $('.buttons').prepend( '<button id="anterior">&lsaquo; Anterior</button>' );
            criarBotaoAnterior();
        }
    }
}

function criarBotaoProximo() {
    $('#proximo').click(function() {
        if (pagina < dados.length / tamanhoPagina - 1) {
            pagina++;
            paginar();
            ajustarBotoes();
        }
    });
}

function criarBotaoAnterior() {
    $('#anterior').click(function() {
        if (pagina > 0) {
            pagina--;
            paginar();
            ajustarBotoes();
        }
    });
}

$(function() {
    criarBotaoProximo();
    criarBotaoAnterior();
    paginar();
    ajustarBotoes();
});