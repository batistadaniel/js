function informacoes() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez');
    let semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb');
    let dataAtual = new Date;

    let msg = document.getElementById("msg");
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth();
    let ano = dataAtual.getFullYear();
    let sem = dataAtual.getDay();
    let hora = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();

    msg.innerHTML = `
    Dia: <mark>${dia}</mark> <br>
    Mes: <mark>${meses[mes]}</mark> <br>
    Ano: <mark>${ano}</mark> <br>
    Dia da Semana: <mark>${semana[sem]}</mark> <br>
    Horas: <mark>${hora}</mark> <br>
    Minutos: <mark>${minutos}</mark> <br>
    Segundos: <mark>${segundos}</mark> <br>
    `;
}