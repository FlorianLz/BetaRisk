// Définition de la date cible
let DateFinale = new Date("Feb 7, 2020 20:00:00").getTime();
			 
// On actualise le compte à rebours toutes les secondes
let x = setInterval(function() {
 
  // Définition de la date actuelle
  let now = new Date().getTime();
   
  // On trouver la distance entre les 2 dates
  let distance = DateFinale - now;
   
  // Calcul du temps restant en mois, jours, heures, minutes et secondes
  let jours = Math.floor(distance / (1000 * 60 * 60 * 24));
  let mois=0;
  let aretirer=0;
  //On convertis les jours en mois
  if (jours > 30){
   mois = Math.floor(jours/30);
   aretirer=mois*30;
  }
  let heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secondes = Math.floor((distance % (1000 * 60)) / 1000);
   
  // Affichage des résultats dans les divs correspondantes
  document.getElementById("mois").innerHTML = mois;
  document.getElementById("jours").innerHTML = jours-aretirer;
  document.getElementById("heures").innerHTML = heures;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("secondes").innerHTML = secondes;
 
  // Si le compte à rebours est fini, on affiche un message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("message").innerHTML = "Le film est sorti";
  }
}, 1000);