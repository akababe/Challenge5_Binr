function rockPlayer() {
  // batu (1), gunting(2), kertas(3)
  const player = 1;
  let bot = 0;

  // id player and versus
  const rock = document.getElementById("rockPlayer");
  rock.classList.add("shadow");
  const versus = document.getElementById("versus");

  //   id com
  const rockCom = document.getElementById("rockCom");
  const paperCom = document.getElementById("paperCom");
  const scissorCom = document.getElementById("scissorCom");

  //   pilih acak
  const comp = Math.floor(Math.random() * 11);
  // console.log(comp);
  if (comp <= 3) {
    console.log("Bot = batu");
    bot = 1;
  } else if (3 <= comp && comp <= 6) {
    console.log("Bot = gunting");
    bot = 2;
  } else {
    console.log("Bot = kertas");
    bot = 3;
  }

  //   Conditional if perbadingan
  if (player == bot) {
    //   Player Batu VS Com Batu
    console.log("Hasil Seri");
    versus.classList.add("changeVersus");
    versus.innerHTML = "<h4>DRAW</h4>";
    rockCom.classList.add("shadow");
  } else if (player && bot == 2) {
    //   Player Batu VS Com Gunting
    console.log("Hasil batu win");
    versus.classList.add("changeVersus");
    versus.innerHTML = "<h4>PLAYER 1</h4> <h4>WIN</h4>";
    scissorCom.classList.add("shadow");
  } else if (player && bot == 3) {
    // Player Batu VS Com Kertas
    console.log("Hasil Kertas win");
    versus.classList.add("changeVersus");
    versus.innerHTML = "<h4>COM</h4> <h4>WIN</h4>";
    paperCom.classList.add("shadow");
  }
}

function paperPlayer() {
  // batu (1), gunting(2), kertas(3)
  const player = 3;
  let bot = 0;

  // id player and versus
  const paper = document.getElementById("paperPlayer");
  paper.classList.add("shadow");
  const versus = document.getElementById("versus");

  //   id com
  const rockCom = document.getElementById("rockCom");
  const paperCom = document.getElementById("paperCom");
  const scissorCom = document.getElementById("scissorCom");

  // pilih acak
  const comp = Math.floor(Math.random() * 11);
  // console.log(comp);
  if (comp <= 3) {
    console.log("Bot = batu");
    bot = 1;
  } else if (3 <= comp && comp <= 6) {
    console.log("Bot = gunting");
    bot = 2;
  } else {
    console.log("Bot = kertas");
    bot = 3;
  }

  if (player == bot) {
    console.log("Hasil Seri");
    versus.classList.add("changeVersus");
    versus.innerHTML = "<h4>DRAW</h4>";
    paperCom.classList.add("shadow");
  } else if (player && bot == 1) {
    console.log("Hasil kertas win");
    versus.classList.add("changeVersus");
    versus.innerHTML = "<h4>PLAYER 1</h4> <h4>WIN</h4>";
    rockCom.classList.add("shadow");
  } else if (player && bot == 2) {
    console.log("Hasil gunting win");
    versus.classList.add("changeVersus");
    versus.innerHTML = "<h4>COM</h4> <h4>WIN</h4>";
    scissorCom.classList.add("shadow");
  }
}

function scissorPlayer() {
  console.log("Scissors");
  // batu (1), gunting(2), kertas(3)

  const player = 2;
  let bot = 0;
  console.log("Player = Gunting");

  // id player and versus
  const scissor = document.getElementById("scissorPlayer");
  scissor.classList.add("shadow");
  const versus = document.getElementById("versus");

  //   id com
  const rockCom = document.getElementById("rockCom");
  const paperCom = document.getElementById("paperCom");
  const scissorCom = document.getElementById("scissorCom");

  //   pilih acak
  const comp = Math.floor(Math.random() * 11);
  // console.log(comp);
  if (comp <= 3) {
    console.log("Bot = batu");
    bot = 1;
  } else if (3 <= comp && comp <= 6) {
    console.log("Bot = gunting");
    bot = 2;
  } else {
    console.log("Bot = kertas");
    bot = 3;
  }

  if (player == bot) {
    console.log("Hasil Seri");
    versus.classList.add("changeVersus");
    versus.innerHTML = "<h4>DRAW</h4>";
    scissorCom.classList.add("shadow");
  } else if (player && bot == 1) {
    console.log("Hasil batu win");
    versus.classList.add("changeVersus");
    versus.innerHTML = "<h4>COM</h4> <h4>WIN</h4>";
    rockCom.classList.add("shadow");
  } else if (player && bot == 3) {
    console.log("Hasil gunting win");
    versus.classList.add("changeVersus");
    versus.innerHTML = "<h4>Player 1</h4> <h4>WIN</h4>";
    paperCom.classList.add("shadow");
  }
}

function reload() {
  location.reload();
}
