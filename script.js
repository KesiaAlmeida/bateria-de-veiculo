let bateria = 90;

function atualizarBateria() {
    setInterval(() => {
        bateria = Math.max(bateria - 1, 0);
        exibirBateria();
    }, 300000); // 5min
}

function teclaPressionada(event) {
    if (event.key === 'w' || event.key === 'W') {
        setInterval(() => {
            bateria = Math.max(bateria - 5, 0);
            exibirBateria();
        }, 30000); // 30s
    }
}

function exibirBateria() {
    document.getElementById('bateria').textContent = `Bateria:${bateria}%`;
    document.getElementById('charge-level').style.height = `${bateria}%`;
}

atualizarBateria();
document.addEventListener('keydown', teclaPressionada);
