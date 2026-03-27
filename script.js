// Função para atualizar data e hora em tempo real
function atualizarRelogio() {
    const agora = new Date();

    // Formatação profissional para o padrão brasileiro
    const opcoes = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    const dataFormatada = agora.toLocaleString('pt-BR', opcoes);
    const elementoRelogio = document.getElementById('datetime');

    if (elementoRelogio) {
        elementoRelogio.innerText = dataFormatada;
    }
}

// Inicializa e define o intervalo de 1 segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);