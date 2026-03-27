// Lógica de Cálculo
function calcularHE() {
    // Pegando os valores dos inputs
    const salarioInput = document.getElementById('salario').value;
    const hUteisInput = document.getElementById('horasUteis').value;
    const hFDSInput = document.getElementById('horasFDS').value;

    const salario = parseFloat(salarioInput) || 0;
    const hUteis = parseFloat(hUteisInput) || 0;
    const hFDS = parseFloat(hFDSInput) || 0;

    if (salario === 0) {
        alert("Por favor, insira o valor do salário.");
        return;
    }

    // Cálculos base (Considerando 220 horas mensais padrão)
    const valorHoraNormal = salario / 220;
    
    // Hora Extra Útil (geralmente +50%)
    const valorUteis = hUteis * (valorHoraNormal * 1.5); 
    
    // Hora Extra FDS/Feriado (geralmente +100%)
    const valorFDS = hFDS * (valorHoraNormal * 2.0); 

    const total = valorUteis + valorFDS;

    // Exibição formatada
    const elementoResultado = document.getElementById('valorFinal');
    elementoResultado.innerText = total.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });

    // Animação simples no resultado
    elementoResultado.classList.add('animate-pulse');
    setTimeout(() => elementoResultado.classList.remove('animate-pulse'), 1000);
}

// Data e Hora em Tempo Real
function atualizarData() {
    const agora = new Date();
    const formatada = agora.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const elementoData = document.getElementById('datetime');
    if (elementoData) {
        elementoData.innerText = formatada;
    }
}

setInterval(atualizarData, 1000);
atualizarData();