function createGame(player1, hour, player2) {
  return `
  <li>
    <div id="center">
  <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}"> 
  <p>${player1}</p> 
  </div>

    
  
  <div class="tooltip">
    <strong>${hour} </strong>
    <span class="tooltiptext">HORÁRIO DE LISBOA</span>
  </div>

    
    <div class="center">
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    <p>${player2}</p> 
    </div>   
  </li>
  `;
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}<span></h2>
      <ul>

      ${games}
        
      </ul>    
  </div>
  `;
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "Domingo", createGame("Qatar", "16:00", "Equador")) +
  createCard(
    "21/11",
    "Segunda-Feira",
    createGame("Inglaterra", "13:00", "Irã") +
      createGame("Senegal", "16:00", "Holanda") +
      createGame("EUA", "19:00", "Gales")
  ) +
  createCard(
    "22/11",
    "Terça-Feira",
    createGame("Argentina", "10:00", "arábia-saudita") +
      createGame("dinamarca", "13:00", "tunísia") +
      createGame("méxico", "16:00", "polônia") +
      createGame("frança", "19:00", "austrália")
  ) +
  createCard(
    "23/11",
    "Quarta-Feira",
    createGame("marrocos", "10:00", "croácia") +
      createGame("alemanha", "13:00", "japão") +
      createGame("espanha", "16:00", "costa-rica") +
      createGame("bélgica", "19:00", "canadá")
  ) +
  createCard(
    "24/11",
    "Quinta-Feira",
    createGame("Suiça", "10:00", "Camarões") +
      createGame("Uruguay", "13:00", "Corea") +
      createGame("Portugal", "16:00", "Gana") +
      createGame("Brasil", "19:00", "Sérvia")
  ) +
  createCard(
    "25/11",
    "Sexta-Feira",
    createGame("Gales", "10:00", "Irã") +
      createGame("Qatar", "13:00", "Senegal") +
      createGame("Holanda", "16:00", "Equador") +
      createGame("Inglaterra", "19:00", "EUA")
  ) +
  createCard(
    "26/11",
    "Sábado",
    createGame("tunísia", "10:00", "austrália") +
      createGame("polônia", "13:00", "arábia-saudita") +
      createGame("frança", "16:00", "dinamarca") +
      createGame("Argentina", "19:00", "méxico")
  ) +
  createCard(
    "27/11",
    "Domingo",
    createGame("japão", "10:00", "costa-rica") +
      createGame("bélgica", "13:00", "marrocos") +
      createGame("croácia", "16:00", "canadá") +
      createGame("espanha", "19:00", "alemanha")
  ) +
  createCard(
    "28/11",
    "Segunda-Feira",
    createGame("Camarões", "10:00", "Sérvia") +
      createGame("Corea", "13:00", "Gana") +
      createGame("Brasil", "16:00", "Suiça") +
      createGame("Portugal", "19:00", "Uruguay")
  ) +
  createCard(
    "29/11",
    "Terça-Feira",
    createGame("Equador", "15:00", "Senegal") +
      createGame("Holanda", "15:00", "Qatar") +
      createGame("Irã", "19:00", "EUA") +
      createGame("Gales", "19:00", "Inglaterra")
  ) +
  createCard(
    "30/11",
    "Quarta-Feira",
    createGame("tunísia", "15:00", "frança") +
      createGame("austrália", "15:00", "dinamarca") +
      createGame("polônia", "19:00", "Argentina") +
      createGame("arábia-saudita", "19:00", "méxico")
  ) +
  createCard(
    "01/12",
    "Quinta-Feira",
    createGame("croácia", "15:00", "bélgica") +
      createGame("canadá", "15:00", "marrocos") +
      createGame("japão", "19:00", "espanha") +
      createGame("costa-rica", "19:00", "alemanha")
  ) +
  createCard(
    "02/12",
    "Sexta-feira",
    createGame("Corea", "15:00", "Portugal") +
      createGame("Gana", "15:00", "Uruguay") +
      createGame("Sérvia", "19:00", "Suiça") +
      createGame("Camarões", "19:00", "Brasil")
  );
