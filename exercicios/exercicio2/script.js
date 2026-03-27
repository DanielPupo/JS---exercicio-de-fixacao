function calcularAumento() {
    const inputSalario = document.getElementById('salarioAtual');
    const salario = parseFloat(inputSalario.value);
    
    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, insira um salário válido.");
        return;
    }

    let percentual = 0;

    // Lógica das faixas salariais
    if (salario <= 1200) percentual = 16;
    else if (salario <= 2100) percentual = 13;
    else if (salario <= 3000) percentual = 10;
    else percentual = 5;

    const aumento = salario * (percentual / 100);
    const novoSalario = salario + aumento;

    // Manipulação da UI
    const container = document.getElementById('resultadoContainer');
    const labelPercentual = document.getElementById('labelPercentual');
    const resultadoValor = document.getElementById('resultadoValor');

    container.classList.remove('hidden');
    labelPercentual.innerText = `Ajuste Aplicado: ${percentual}%`;
    
    resultadoValor.innerText = novoSalario.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });

    // Feedback visual de clique
    resultadoValor.classList.add('animate-pulse');
    setTimeout(() => resultadoValor.classList.remove('animate-pulse'), 1000);
}

// Data e Hora (Padrão do Sistema)
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