function comptearebours(){// Définition de la date cible
  let DateFinale = new Date("Feb 6, 2020 20:00:00").getTime();
        
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
}

function galerie(){
  document.getElementById('imagesVideos').style.display='grid';
  document.getElementById('videos').style.display='none';
  let tab = [];
  for (let i=0;i<10;i++){
    let nb = 1+Math.floor(Math.random()*46);
    if(tab.indexOf(nb) == -1){
      tab.push(nb);
    }else{
      i--;
    }
    
  }
  for(let j=0; j<9;j++){
    document.getElementById('photo'+(j+1)).src="../photos/"+tab[j] +".jpg";
  }
}
function videos(){
  document.getElementById('videos').style.display='flex';
  document.getElementById('imagesVideos').style.display='none';
}

function ouvrirmodale(src){
  document.getElementById('fenetremodale').style.display="flex";
  document.getElementById('imagemodale').src=src;
}
function fermerfenetre(val){
document.getElementById('fenetremodale').style.display="none";
}