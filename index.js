const button = document.querySelector("#soundSwitch");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");
const audioText = document.querySelector("#audioText");
button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.6;
    audio.play();
    audioText.innerHTML = "&nbsp ON!";
  } else {
    audio.pause();
    audioText.innerHTML = "&nbsp OFF!";
  }
  button.classList.add("fade");
});

class Pokemon {
  constructor(name, sprite, hp, moves) {
    this.name = name;
    this.sprite = sprite;
    this._hp = hp;
    this.fullhp = hp;
    this.moves = moves;
  }
  get hp() {
    return this._hp;
  }
  set hp(value) {
    this._hp = value;
    // Update health bar for the respective Pokemon
    if (this === pk1) {
      updateHealthBar(pk1, "1");
    } else if (this === pk2) {
      updateHealthBar(pk2, "2");
    }
  }
}

function spawn(bool) {
  let selectedPokemonFromList =
    pkmList[Math.floor(Math.random() * pkmList.length)];
  let pkm = new Pokemon(
    selectedPokemonFromList[0],
    selectedPokemonFromList[1],
    selectedPokemonFromList[2],
    selectedPokemonFromList[3]
  );

  if (bool) {
    for (i = 0; i < 4; i++) {
      document.getElementById("m" + i).value = pkm.moves[i][0];
    }
  }
  return pkm;
}

function ShowPokemonInScreen(pk, containerId) {
  const pkSprite = document.getElementById("sprite" + containerId.charAt(2));
  pkSprite.src = pk.sprite;
  document.getElementById(
    "hp" + containerId.charAt(containerId.length - 1)
  ).innerHTML = "HP: " + pk.hp + "/" + pk.fullhp;
}

let pk1 = spawn(true);
ShowPokemonInScreen(pk1, "pk1");
updateHealthBar(pk1, "1");

let pk2 = spawn(false);
ShowPokemonInScreen(pk2, "pk2");
updateHealthBar(pk2, "2");

function updateHealthBar(pk, containerId) {
  const healthBar = document.getElementById("healthBar" + containerId);
  const currentHealth = pk.hp;
  const maxHealth = pk.fullhp;
  const healthPercentage = (currentHealth / maxHealth) * 100;
  healthBar.value = healthPercentage;
}

function disableMoves() {
  const btns = document.getElementsByClassName("btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].disabled = true;
  }
  let moveSet = document.getElementById("moveSet");
  moveSet.innerHTML = "Wait For your Turn!";
  setTimeout(() => {
    for (let i = 0; i < btns.length; i++) {
      btns[i].disabled = false;
    }
    moveSet.innerHTML = "Attack!";
  }, 1000);
}

for (let i = 0; i < 4; i++) {
  let btn = document.getElementById("m" + i);
  let move = pk1.moves[i];

  function addHandler(btn, move, pk1, pk2) {
    btn.addEventListener("click", function (e) {
      disableMoves();
      attack(move, pk1, pk2, "hp2", "");
      setTimeout(() => {
        attack(
          pk2.moves[Math.floor(Math.random() * 3)],
          pk2,
          pk1,
          "hp1",
          "Foe "
        );
      }, 1000);
    });
  }
  addHandler(btn, move, pk1, pk2);
}

function attack(move, attacker, receiver, hp, owner) {
  document.getElementById("comment").innerHTML =
    owner + attacker.name + " used " + move[0] + "!";
  if (Math.random() < move[3]) {
    let power = (move[2] += Math.floor(Math.random() * 10));
    let rtype = typeMatch[receiver.name];
    let mtype = move[1];
    let scale = 1;

    for (i = 0; i < rtype.length; i++) {
      if (rtype[i].includes(mtype)) {
        switch (i) {
          case 0:
            scale = 0;
            setTimeout(function () {
              document.getElementById("comment").innerHTML =
                "It had no effect!";
            }, 1000);
            break;
          case 1:
            scale = 2;
            document.getElementById("strong").play();
            setTimeout(function () {
              document.getElementById("comment").innerHTML =
                "It was super effective!";
            }, 1000);
            break;
          case 2:
            document.getElementById("weak").play();
            scale = 0.5;
            setTimeout(function () {
              document.getElementById("comment").innerHTML =
                "It was not very effective!";
            }, 1000);
            break;
        }
        break;
      } else {
        document.getElementById("normal").play();
      }
    }
    power *= scale;
    receiver.hp -= Math.floor(power);
    document.getElementById(hp).innerHTML =
      "HP: " + receiver.hp + "/" + receiver.fullhp;
  } else {
    setTimeout(function () {
      document.getElementById("comment").innerHTML = "Attack missed!";
    });
  }
  checkWinner(hp);
}
let gameEnded = false;
function checkWinner(hp) {
  if (gameEnded) return;
  let loser = pk1.hp <= 0 ? pk1 : pk2.hp <= 0 ? pk2 : null;

  if (loser !== null) {
    const loserContainerId = loser === pk1 ? "1" : "2";
    const loserHealthBar = document.getElementById(
      "healthBar" + loserContainerId
    );
    loserHealthBar.value = 0;
    document.getElementById(hp).innerHTML = "HP: 0/" + loser.fullhp;
    showWinner(loserContainerId);
  }
}

function setupEndGame(clsName) {
  document.getElementsByClassName(clsName)[0].classList.add("hideBg");
}

function showWinner(loserContainerId) {
  setupEndGame("pokemonContainer");
  setupEndGame("moveSet");
  setupEndGame("comments");

  if (gameEnded) return;
  var message = document.getElementsByClassName("winningMessage")[0];
  var checkGame = document.getElementById("checkGame");
  checkGame.classList.add("postGame");
  if (loserContainerId == 2) {
    message.innerHTML = "Congratulations!! You won the Game.";
    document.getElementById("win").play();
  } else {
    message.innerHTML = "You Lost!! Better Luck Next Time.";
    document.getElementById("lose").play();
  }
  gameEnded = true; // Update game status
  StartNewGame();
}
const playRestart = document.getElementById("restart");
function StartNewGame() {
  playRestart.addEventListener("click", () => {
    location.reload();
  });
}
