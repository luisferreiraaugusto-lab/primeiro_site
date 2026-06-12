// Simulação de leitura de dados de um sensor IoT no campo
class SensorAgricola {
    constructor(nome, localizacao) {
        this.nome = nome;
        this.localizacao = localizacao;
    }

    // Método para gerar umidade do solo de forma aleatória (simulando telemetria)
    gerarUmidadeSolo() {
        return (Math.random() * (70 - 30) + 30).toFixed(2); // Retorna entre 30% e 70%
    }
}

// Inicializando o sensor
const sensorTalhaoA = new SensorAgricola("Sensor Umidade V2", "Talhão Sul");

// Função para atualizar os dados na interface web (DOM)
function atualizarDashboardAgro() {
    const umidade = sensorTalhaoA.gerarUmidadeSolo();
    const dataHora = new Date().toLocaleString('pt-BR');

    // Atualiza os elementos HTML (supondo IDs correspondentes no seu site)
    const displayUmidade = document.getElementById("umidade-solo");
    const displayStatus = document.getElementById("status-irrigacao");
    const displayUltimaLeitura = document.getElementById("ultima-leitura");

    if (displayUmidade) displayUmidade.innerText = `${umidade}%`;
    if (displayUltimaLeitura) displayUltimaLeitura.innerText = dataHora;

    // Lógica de alerta para irrigação inteligente
    if (displayStatus) {
        if (parseFloat(umidade) < 40) {
            displayStatus.innerText = "🚨 Solo Seco! Acionando irrigação...";
            displayStatus.style.color = "red";
        } else {
            displayStatus.innerText = "💧 Umidade Ideal. Sistema em espera.";
            displayStatus.style.color = "green";
        }
    }
}

// Configura o script para atualizar o painel a cada 5 segundos (Tempo Real)
setInterval(atualizarDashboardAgro, 5000);

// Executa a primeira vez que a página carrega
document.addEventListener("DOMContentLoaded", atualizarDashboardAgro);
