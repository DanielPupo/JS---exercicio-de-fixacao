function calcularTransporte() {
    const qtdInput = document.getElementById('qtdPessoas').value;
    const diasInput = document.getElementById('diasUteis').value;

    const qtd = parseInt(qtdInput) || 0;
    const dias = parseInt(diasInput) || 0;

    if (qtd <= 0 || dias <= 0) {
        alert("Por favor, preencha os campos com valores válidos.");
        return;
    }

    let valorPorPessoa = 0;

    // Lógica de faixas de custo
    if (qtd >= 1 && qtd <= 49) valorPorPessoa = 4.50;
    else if (qtd <= 99) valorPorPessoa = 4.10;
    else if (qtd <= 149) valorPorPessoa = 3.80;
    else valorPorPessoa = 3.60;

    const custoTotal = qtd * valorPorPessoa * dias;

    // Atualização da Interface
    const container = document.getElementById('resultadoContainer');
    const displayValor = document.getElementById('valorTotal');
    const displayInfo = document.getElementById('infoTaxa');

    container.classList.remove('hidden');
    
    displayValor.innerText = custoTotal.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });

    displayInfo.innerText = `Taxa aplicada: ${valorPorPessoa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} por pessoa/dia`;

    // Efeito visual
    displayValor.classList.add('animate-bounce');
    setTimeout(() => displayValor.classList.remove('animate-bounce'), 800);
}

// Data e Hora Universal do Dashboard
function atualizarData() {
    const elemento = document.getElementById('datetime');
    if (elemento) {
        elemento.innerText = new Date().toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
}

setInterval(atualizarData, 1000);
atualizarData();