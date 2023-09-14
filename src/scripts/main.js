const dataAniversario = new Date('Mar 08, 2024 19:00:00');
const horaAniversario = dataAniversario.getTime();

const contaHoras = setInterval(() => {
    const dataAtual = new Date();
    const horarioAtual = dataAtual.getTime();
    const horarioParaOEvento = horaAniversario - horarioAtual;

    if (horarioParaOEvento <= 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
        return;
    }

    const diaMs = 1000 * 60 * 60 * 24;
    const horaMs = 1000 * 60 * 60;
    const minutoMs = 1000 * 60;

    const diasAteOEvento = Math.floor(horarioParaOEvento / diaMs);
    const horasRestantes = Math.floor((horarioParaOEvento % diaMs) / horaMs);
    const minutosRestantes = Math.floor((horarioParaOEvento % horaMs) / minutoMs);
    const segundosRestantes = Math.floor((horarioParaOEvento % minutoMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento} D ${horasRestantes} H ${minutosRestantes} M ${segundosRestantes} S`;
}, 1000);
