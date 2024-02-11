/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */

let spanScore = document.querySelector(".zoneScore span");

function afficherResultat(score, nbMotsProposes) {
  let affichageScore = `${score}  / ${nbMotsProposes}`;
  spanScore.innerHTML = affichageScore;
}

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
  // Initialisations

  let score = 0;
  let nbMotsProposes = 0;

  afficherResultat(score, nbMotsProposes);
}
