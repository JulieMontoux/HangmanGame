var di=parseInt(Math.random()*mots.length)
// le mot
var mot=mots[di][0];
// l'indice à afficher
var indice=mots[di][1];
// le thème
var theme=mots[di][2];
var lmot=Array.from(mot);
document.getElementById("theme").innerHTML="Theme : "+theme;
// les tableaux
var lettres_fausses=[];
var lettres_trouvees=[];
var lettres_jouees=[];

for(x=0;x<lmot.length;x++){
    if(lmot[x]=="-") {
        lettres_trouvees.push(true);
    }
    else {
        lettres_trouvees.push(false);
    }
}

var vies_restantes = 6;
var fini=false;

// fonction d'affichage
function aff(){
    var affi="";
// affichage mot caché
    for(x=0;x<lettres_trouvees.length;x++-1){
        if( lettres_trouvees[x] ){
            affi+=" "+lmot[x]
        }
        else {
            affi+=" _"
        }
    }
// affichage lettres fausses
    var lfs="";
    for(x=0;x<lettres_fausses.length;x++){
        if(x>0){
            lfs+=" "+lettres_fausses[x]
            lfs+=","
        }
    }
// affichage lettres justes
    var ljs="";
    for(x=0;x<lettres_jouees.length;x++){
        if(x>0) 
        {
            ljs+=" "+lettres_jouees[x]
            ljs+=","
        }
    }
// affichage sur la page
    document.getElementById("mot").innerHTML=affi;
    document.getElementById("lf").innerHTML="Lettres fausses : "+lfs;
    document.getElementById("lj").innerHTML="Lettres jouees : "+ljs;
}

// fonction lettre
function lettre(l){
    // lettre non jouée
    var bon=true;

    // partie terminée
    if(fini){
        bon=false;
        alert("La partie est finie");
    }
    // lettre déjà jouée
    else if(lettres_jouees.includes(l)){
        bon=false;
        alert("Tu as déjà joué cette lettre !");
    }
    else{ 
        lettres_jouees.push(l); 
    }

    // compteur de points
    if(bon){
        var trouve=false;
        for(x=0;x<lmot.length;x++){
            if( lmot[x]==l ){
                lettres_trouvees[x]=true;
                trouve=true;
            }
        }
        if(!trouve){
            if(!(l in lettres_fausses)){
                lettres_fausses.push(l);
                vies_restantes-=1;
                if (vies_restantes == 5){
                    document.getElementById('box1').checked = true}
                if (vies_restantes == 4){
                    document.getElementById('box2').checked = true};
                if (vies_restantes == 3){
                    document.getElementById('box3').checked = true};
                if (vies_restantes == 2){
                    document.getElementById('box4').checked = true};
                if (vies_restantes == 1){
                    document.getElementById('box5').checked = true};
                if (vies_restantes == 0){
                    document.getElementById('box6').checked = true};
            }
            
        }
        
    }
        
    aff();
    // affichage de l'indice
    if(vies_restantes==2){
        alert("Indice : "+indice);
    }
    //partie perdue
    if(vies_restantes<=0){
        alert("Et c'est la corde au cou que le Mr se pendit... Vous avez perdu !");
        alert("Le mot était : "+mot);
        fini=true;
    }
    // partie gagnée
    var gagne=true;
    for(x=0;x<lettres_trouvees.length;x++){
        if(!lettres_trouvees[x]){
            gagne=false;      
        }
    }
    if(gagne){
        alert("Vous avez gagné !");
        fini=true;
    }
}
// fonction rejouer
// donc réinitialisation de toutes les variables
function restart(){
    di=parseInt(Math.random()*mots.length)
    mot=mots[di][0];
    indice=mots[di][1];
    theme=mots[di][2];
    lmot=Array.from(mot);
    document.getElementById("theme").innerHTML="Theme : "+theme;
    lettres_fausses=[];
    lettres_trouvees=[];
    lettres_jouees=[];

    for(x=0;x<lmot.length;x++){
        if(lmot[x]=="-") lettres_trouvees.push(true);
        else lettres_trouvees.push(false);
    }
    
    vies_restantes=6;
    fini=false;
    // affichage du mot pour la correction
    alert(mot);
    aff();
}
// affichage du mot pour la correction
alert(mot);
aff();