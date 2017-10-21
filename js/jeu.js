// 1. Au chargement de la page, on va générer un nombre entier aléatoire entre 1 et 1000 (C'est le nombre que va devoir deviner le joueur)
// 2. On demande au joueur de rentrer un entier dans une boite de dialogue.
// 3. On indique au joueur via un popup si le nombre à trouver est plus petit ou plus grand.
// 4. Tant qu'on n'a pas trouvé, on revient au 2.

// Bonus
// 5. Lorsque le joueur trouve le bon entier, ça affiche un popup célébrant sa victoire.
// 6. Si le joueur n'a pas trouvé au bout de 10 tentatives, on affiche un message de défaite.



function gameGuessMyNumber() {
  // On stockera dans ce tableau le nombre généré, le dernier nombre proposé par le joueur et le nombre de tentatives restantes à la fin du jeu
  var results = [];

  // On laisse 10 tentatives au joueur
  var remainTry = 10;

  // Permet de tester l'éxécution du code pas à pas
  // debugger;

  // On génère un nombre aléatoire compris entre 1 et 1000
  // Math.floor(Math.random() * 1000); retourne un nombre entre 0 et 999, avec le +1 on décale de 1 à 1000
  var numberRand = Math.random() * 1000 + 1;
  numberRand = Math.floor(numberRand);
  console.log(numberRand);

  // On effectue un prompt initial pour expliquer le jeu au joueur
  var guessNumber = prompt("Un nombre entre 1 et 1000 a été généré.\nEssayez de le deviner en moins de " + remainTry + " coups !");
  remainTry--;
  // console.log(remainTry);

  // On test si ce qu'à rentré le joueur est bien un nombre. -1 sera notre signal d'erreur. Dans notre cas le jeu sera stoppé si la valeur rentrée n'est pas un nombre
  if (isNaN(parseInt(guessNumber))) return -1;

  // Si le nombre proposé est différent du nombre généré on entre dans la boucle
  while (guessNumber != numberRand && remainTry) {
    // Si le nombre proposé est plus petit
    if (guessNumber < numberRand) {
      guessNumber = prompt("Non ce n'est pas celui-ci mais je peux te dire qu'il est plus GRAND\nIl te reste " + remainTry + " tentatives");
    }
    // Si le nombre proposé est plus grand
    else guessNumber = prompt("Non ce n'est pas celui-ci mais je peux te dire qu'il est plus PETIT\nIl te reste " + remainTry + " tentatives");
    // On oublie pas de retirer 1 tentative à chaque réponse du joueur
    remainTry--;
    // console.log(remainTry);

    // On test si ce qu'à rentré le joueur est bien un nombre à chaque essai
    if (isNaN(parseInt(guessNumber))) return -1;
  }

  // On stock dans le tableau le nombre généré, le dernier qu'il aura proposé ainsi que le nombre de tentatives restantes. Si les 2 nombres sont indentiques, cela signifie qu'il a trouvé le nombre généré aléatoirement
  results = [numberRand, guessNumber, remainTry];

  return results;
}

// On éxécute la fonction
var results = gameGuessMyNumber();
console.log(results);

// Si la fonction n'a pas renvoyé le signal d'erreur
if (results != -1) {
  // Si les 2 nombres sont identiques alors le joueur à trouvé
  if (results[0] == results[1]) alert("Bravo tu as trouvé en " + (10 - results[2]) + " coups ! Il s'agissait bien du " + results[0] + " !");
  // Sinon il a perdu
  else alert("Dommage ! Il s'agissait du " + results[0] + ".");
}
// Le joueur à rentré autre chose qu'un nombre
else alert("Attention tu n'as pas rentré un nombre !");
