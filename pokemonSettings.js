const typeMatch = {
  Charizard: [["ground"], ["water", "electric"], ["fire", "grass", "steel"]],
  Blastoise: [[""], ["grass", "electric"], ["fire", "water"]],
  Feraligatr: [[""], ["grass", "electric"], ["fire", "water", "poison"]],
  Ludicolo: [[""], ["electric", "fly", "poison"], ["fire", "water", "grass"]],
  Venusaur: [[""], ["fire", "fly", "ice", "psy"], ["grass", "water"]],
  Sceptile: [
    ["electric"],
    ["fire", "fly", "ice", "poison"],
    ["grass", "water"],
  ],
  Pikachu: [[""], ["ground"], ["grass", "steel", "psy"]],
  Arcanine: [[""], ["ground", "water"], ["fire", "steel", "grass", "ice"]],
  Rapidash: [[""], ["ground", "water"], ["fire", "steel", "grass", "ice"]],
  Infernape: [
    [""],
    ["ground", "water", "psy", "fly"],
    ["fire", "steel", "grass", "ice"],
  ],
  Lucario: [
    ["poison"],
    ["ground", "fire", "psy", "fight"],
    ["steel", "steel", "grass"],
  ],
  Aggron: [
    ["electric", "poison"],
    ["ground", "fire", "fight", "water"],
    ["psy", "steel", "grass"],
  ],
  Drapion: [
    ["poison"],
    ["ground", "fire", "psy", "fly"],
    ["water", "steel", "grass"],
  ],
  Golbat: [
    ["ground"],
    ["electric", "psy", "ice"],
    ["water", "steel", "grass", "fight"],
  ],
  Garchomp: [
    ["electric"],
    ["dragon", "ice"],
    ["water", "fire", "grass", "fight", "steel"],
  ],
  Alakazam: [["ground"], ["psy", "poison"], ["steel", "fight"]],
};

const pkmList = [
  [
    "Charizard",
    "images/charizard.gif",
    360,
    [
      ["Flamethrower", "fire", 95, 0.95],
      ["Dragon Claw", "dragon", 80, 0.95],
      ["Air slash", "fly", 75, 0.85],
      ["Take down", "normal", 60, 0.9],
    ],
  ],
  [
    "Blastoise",
    "images/blastoise.gif",
    362,
    [
      ["Surf", "water", 90, 0.95],
      ["Crunch", "normal", 80, 0.95],
      ["Ice punch", "ice", 75, 0.95],
      ["Flash cannon", "steel", 80, 0.95],
    ],
  ],
  [
    "Venusaur",
    "images/venusaur.gif",
    364,
    [
      ["Petal Blizzard", "grass", 90, 0.95],
      ["Sludge bomb", "poison", 90, 0.95],
      ["Earthquake", "ground", 100, 0.95],
      ["Body Slam", "normal", 85, 0.95],
    ],
  ],
  [
    "Pikachu",
    "images/pikachu.gif",
    361,
    [
      ["Thunderbolt", "elctric", 90, 0.95],
      ["Iron tail", "steel", 90, 0.8],
      ["Volt tackle", "electric", 100, 0.95],
      ["Quick attack", "normal", 45, 0.95],
    ],
  ],
  [
    "Arcanine",
    "images/arcanine.gif",
    366,
    [
      ["Flare blitz", "fire", 90, 0.95],
      ["Extreme speed", "normal", 90, 0.8],
      ["Flame burst", "fire", 85, 0.95],
      ["Earth power", "ground", 90, 0.95],
    ],
  ],
  [
    "Alakazam",
    "images/alakazam-mega.gif",
    354,
    [
      ["Psychic", "psy", 90, 0.95],
      ["Confusion", "psy", 90, 0.8],
      ["Shadow ball", "psy", 85, 0.95],
      ["Frustration", "normal", 90, 0.95],
    ],
  ],
  [
    "Rapidash",
    "images/rapidash.gif",
    358,
    [
      ["Flame wheel", "fire", 70, 0.85],
      ["Fire spin", "fire", 40, 0.8],
      ["Earthquake", "ground", 100, 0.95],
      ["Fire Blast", "fire", 120, 0.95],
    ],
  ],
  [
    "Sceptile",
    "images/sceptile.gif",
    350,
    [
      ["Leaf blade", "grass", 70, 0.85],
      ["Absord", "grass", 35, 0.8],
      ["Dragon pulse", "dragon", 100, 0.95],
      ["Bullet seed", "grass", 50, 0.95],
    ],
  ],
  [
    "Feraligatr",
    "images/feraligatr.gif",
    360,
    [
      ["Waterfall", "water", 70, 0.85],
      ["Surf", "water", 85, 0.8],
      ["Strength", "normal", 80, 0.95],
      ["Ice beam", "ice", 65, 0.95],
    ],
  ],
  [
    "Ludicolo",
    "images/ludicolo.gif",
    360,
    [
      ["Water gun", "water", 50, 0.85],
      ["Slash", "normal", 70, 0.8],
      ["Lazer leaf", "grass", 50, 0.95],
      ["Ice shard", "ice", 65, 0.95],
    ],
  ],
  [
    "Aggron",
    "images/aggron.gif",
    366,
    [
      ["Stone edge", "ground", 80, 0.85],
      ["Iron tail", "steel", 70, 0.8],
      ["Earthquake", "ground", 100, 0.95],
      ["Fire punch", "fire", 65, 0.95],
    ],
  ],
  [
    "Lucario",
    "images/lucario-mega.gif",
    360,
    [
      ["Aura Sphere", "fight", 80, 0.85],
      ["Bone rush", "ground", 40, 0.8],
      ["Bullet punch", "steel", 65, 0.95],
      ["karate chop", "fight", 60, 0.95],
    ],
  ],
  [
    "Infernape",
    "images/infernape.gif",
    352,
    [
      ["Flamethrower", "fire", 80, 0.85],
      ["Thunder punch", "electric", 60, 0.8],
      ["Low sweep", "fight", 65, 0.95],
      ["Close combat", "fight", 80, 0.95],
    ],
  ],
  [
    "Garchomp",
    "images/garchomp.gif",
    380,
    [
      ["Meteor shower", "dragon", 80, 0.85],
      ["Dragon pulse", "dragon", 80, 0.8],
      ["Earth power", "ground", 70, 0.95],
      ["Crunch", "psy", 55, 0.95],
    ],
  ],
  [
    "Drapion",
    "images/drapion.gif",
    366,
    [
      ["Sting attack", "poison", 70, 0.85],
      ["Sludge wave", "poison", 85, 0.8],
      ["Fire fang", "fire", 75, 0.95],
      ["Bounce", "fly", 60, 0.95],
    ],
  ],
  [
    "Golbat",
    "images/golbat.gif",
    354,
    [
      ["Wing attack", "fly", 70, 0.85],
      ["Areial ace", "fly", 85, 0.8],
      ["Poison Sting", "poison", 75, 0.95],
      ["Psybeam", "psy", 60, 0.95],
    ],
  ],
];
