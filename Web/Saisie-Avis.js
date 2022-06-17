




var contenue="";
function formulaire(){
    
    var Genre=["Homme","Femme"]; //tableau de genre
    var Jeux=["jeux de carte","jeux de plateau","jeux de des","jeux de logique","jeux educatif"]; //tableau des catégories de jeux
    var JeuxCarte=["Uno","solitaire","Poker","Black Jack"]; //tableau de jeux de carte
    var JeuxPlateau=["Damier","Echec","Puzzle","Puissance 4"]; //tableau de jeux de plateau
    var JeuxDes=["Yahtzee","Shut the box","Yams","421"]; //tableau de jeux de dés
    var JeuxLogique=["Pendu","Mastermind","Sudoku","Sokoban"]; //tableau de jeux de logique
    var JeuxEducatif=["Pigeon Pigeon","Complot","Imposteur","Labyrinthe"]; //tableau de jeux educatif
    var Note= ["1","2","3","4","5"]; //tableau de note
    //copier un tableau dans un autre tableau
    
    var JeuxTous=JeuxCarte.concat(JeuxPlateau,JeuxDes,JeuxLogique,JeuxEducatif); //tableau de tous les jeux
    
    //ajout d'un element dans un tableau
    
    contenue+="<form name='form' action='VotreAvis.html' method='get'>"; //ouvre le formulaire
    contenue+= "<fieldset>"; //ouvre le fieldset
    contenue+="<h3>Identité</h3>"; //ajoute le titre
    contenue+= "<label>Genre: </label>"; //ajoute le label
    for(var i=0;i<Genre.length;i++){ //parcours le tableau de genre
        contenue+= Genre[i]+"<input type='radio' name='sexe' value='"+Genre[i]+"'></input>";
    }
    contenue+="<div >";//ouvre le div
    contenue+="<label>Nom</label>"   
    contenue+="<input type='text' placeholder='Nom' name='Nom'></input>" //ajoute le champ de saisie du nom
    contenue+="</div>";//ferme le div

    contenue+="<div>";
    contenue+="<label>Prénom</label>"
    contenue+="<input type='text' id='prenom' placeholder='Prénom' name='Prenom'></input>" //ajoute le champ de saisie du prénom
    contenue+="</div>";

    contenue+="<div>";
    contenue+="<label>Date de naissance</label>"
    contenue+="<input type='date' placeholder='Date de naissance' name='Date'></input>"//ajoute le champ de saisie de la date de naissance
    contenue+="</div>";

    contenue+="<div>";
    contenue+="<label>Email</label>"
    contenue+="<input type='email' placeholder='Email' name='Email'></input>"//ajoute le champ de saisie de l'email
    contenue+="</div>";

    contenue+="<div>";
    contenue+="<label>Confirmation </label>"
    contenue+="<input type='email' placeholder='Confirmation Email' name='ConfirmationEmail'></input>"//ajoute le champ de saisie de la confirmation de l'email
    contenue+="</div>";

    contenue+="<div>";
    contenue+="<label>CodePostal</label>"
    contenue+="<input type='text' placeholder='optionnel' name='CodePostal'></input>"//ajoute le champ de saisie du code postal
    contenue+="</div>";

    contenue+="<div>";
    contenue+="<label>Téléphone</label>"
    contenue+="<input type='number' placeholder='optionnel' name='Telephone'></input>"//ajoute le champ de saisie du téléphone
    contenue+="</div>";

    contenue+= "</fieldset>"; //ferme le fieldset
    contenue+="<fieldset>";
    contenue+="<h4>Zone préférences de jeux:</h4>"; //ajoute le titre
    contenue+="<div>";
    for(var i=0;i<Jeux.length;i++){
        contenue+= Jeux[i]+"<input type='checkbox' value='"+Jeux[i]+"' name='Jeux'></input>";//ajoute les checkbox des catégories de jeux
        if(Jeux[i]=="jeux de carte"){
            contenue+="<div>";
            contenue+="<fieldset>";
        for(var j=0;j<JeuxCarte.length;j++){
        contenue+= "<input type='checkbox' value='"+JeuxCarte[j]+"'name='cartes'>"+JeuxCarte[j]+"</input>"; //ajoute les checkbox des jeux de carte
        }
        contenue+= "</fieldset>";
        contenue+="</div>";
    }
        if(Jeux[i]=="jeux de plateau"){
            contenue+="<div >";
            contenue+="<fieldset>";
            for(var j=0;j<JeuxPlateau.length;j++){
            contenue+= "<input type='checkbox' value='"+JeuxPlateau[j]+"'name='plateau'>"+JeuxPlateau[j]+"</input>";//ajoute les checkbox des jeux de plateau
            }
            contenue+= "</fieldset>";
            contenue+="</div>";
        }
            
    if(Jeux[i]=="jeux de des"){
        contenue+="<div >";
        contenue+="<fieldset>";
        for(var j=0;j<JeuxDes.length;j++){
        contenue+= "<input type='checkbox' value='"+JeuxDes[j]+"'name='des'>"+JeuxDes[j]+"</input>";//ajoute les checkbox des jeux de des
        }
        contenue+= "</fieldset>";
        contenue+="</div>";
    }
    if(Jeux[i]=="jeux educatif"){
        contenue+="<div id='éducatif'>";
        contenue+="<fieldset>";
        for(var j=0;j<JeuxEducatif.length;j++){
        contenue+= "<input type='checkbox' value='"+JeuxEducatif[j]+"'name='educatif'>"+JeuxEducatif[j]+"</input>";//ajoute les checkbox des jeux educatif
        }
        contenue+= "</fieldset>";
        contenue+="</div>";
    }
    if(Jeux[i]=="jeux de logique"){
        contenue+="<div id='logique'>";
        contenue+="<fieldset>";
        for(var j=0;j<JeuxLogique.length;j++){
        contenue+= "<input type='checkbox' value='"+JeuxLogique[j]+"'name='logique'>"+JeuxLogique[j]+"</input>";//ajoute les checkbox des jeux logique
        }
        contenue+= "</fieldset>";
        contenue+="</div>";
    }
    }    
    contenue+="</fieldset>";
    contenue+="<fieldset>";
    contenue+="<h3>Zone Avis</h3>";
    contenue+="<label>Selectionner le jeux</label>";
    contenue+="<select id='select' name='Vote'>";
    for(var i=-1;i<JeuxTous.length;i++){
        if(i==-1){
            contenue+="<option value='-1'></option>";//ajoute la première option vide
        }else{
        contenue+= "<option value='"+JeuxTous[i]+"'>"+JeuxTous[i]+"</option>";//ajoute les options des jeux
    }
}
    contenue+="</select>";
    //limiter le nombre de caractères
    contenue+="<div>";
    contenue+="<textarea cols='40' rows='5' maxlength='200' placeholder='200 caractères max' name='Avis'></textarea>";//ajoute le champ de saisie de l'avis
    contenue+="<label>Note</label>";
    contenue+="<select id='test' name='Note'>";//ajoute la liste de sélection des notes
    for(var i=-1;i<5;i++){
        if(i==-1){
            contenue+="<option value='-1'></option>";//ajoute la première option vide
        }else{
        contenue+="<option value='"+Note[i]+"'>"+Note[i]+"</option>" //ajoute les options des notes
    }
}
    contenue+="</select>";//ferme la liste de sélection des notes
    contenue+="</fieldset>";
    contenue+="<fieldset>";
    contenue+="<div>";
    contenue+="<input type='button' onclick='verification()' value='Envoyer'></input>";//ajoute le bouton d'envoi
    contenue+="<input type='reset'  onclick='effacer()'value='Effacer'></input>";//ajoute le bouton d'effacement
    contenue+="</div>";
    contenue+="</fieldset>";
    contenue+="</form>";
    document.body.innerHTML = contenue;//affiche le formulaire

}

function verification(){//fonction de vérification du formulaire
    var verif=0;//initialise la variable de vérification à 0
    
    var Genre=["Homme","Femme"];//liste des genres
    var Nom=document.getElementsByName('Nom')[0].value;//récupère le nom
    var Prenom=document.getElementsByName('Prenom')[0].value;//récupère le prénom
    var Date=document.getElementsByName('Date')[0].value;//récupère la date
    var Avis=document.getElementsByName('Avis')[0].value;//récupère l'avis
    var JeuxChoisi=document.getElementsByName('Jeux');//récupère la liste des jeux
    var test = document.getElementById('select').value;//récupère le jeux choisi
    var N = document.getElementById('test').value;//récupère la note
    var Email = document.getElementsByName('Email')[0].value;//récupère l'email
    var ConfirmationEmail = document.getElementsByName('ConfirmationEmail')[0].value;//récupère la confirmation de l'email

    
  //verifier si le genre est choisi
  var genre=0;
    for(var i=0;i<Genre.length;i++){  
        if(document.getElementsByName('sexe')[i].checked==true){//si le genre est choisi
        genre=1;
        }
    }
    if(genre==0){
        for(var i=0;i<Genre.length;i++){  //si le genre n'est pas choisi
        document.getElementsByName('sexe')[i].style.boxShadow="0 0 0 2px red";//ajoute une bordure rouge
        }
    }else{
        for(var i=0;i<Genre.length;i++){  //si le genre est choisi
            document.getElementsByName('sexe')[i].style.boxShadow="0 0 0 0px red";//enlève la bordure rouge
            }
    verif++; 
    }

    //vérification du nom
    if(Nom==""){//si le nom est vide
        document.getElementsByName('Nom')[0].style.borderStyle="solid";//ajoute une bordure
        document.getElementsByName('Nom')[0].style.borderColor="red";//ajoute une couleur de bordure
    }else{//si le nom n'est pas vide
        document.getElementsByName('Nom')[0].style.borderStyle="none";//enlève la bordure
        verif++;//incrémente la variable de vérification
    }
    //vérification du prénom
    if(Prenom==""){//si le prénom est vide
        document.getElementsByName('Prenom')[0].style.borderStyle="solid";//ajoute une bordure
        document.getElementsByName('Prenom')[0].style.borderColor="red";//ajoute une couleur de bordure
    }else{//si le prénom n'est pas vide
        document.getElementsByName('Prenom')[0].style.borderStyle="none";//enlève la bordure
        verif++;//incrémente la variable de vérification
    }
    //vérification de la date
    if(Date==""){//si la date est vide
        document.getElementsByName('Date')[0].style.borderStyle="solid";//ajoute une bordure
        document.getElementsByName('Date')[0].style.borderColor="red";//ajoute une couleur de bordure
    }else{//si la date n'est pas vide
        document.getElementsByName('Date')[0].style.borderStyle="none";//enlève la bordure
        verif++;//incrémente la variable de vérification
    }
    //vérification de avis
    if(Avis==""){//si l'avis est vide
        document.getElementsByName('Avis')[0].style.borderStyle="solid";//ajoute une bordure
        document.getElementsByName('Avis')[0].style.borderColor="red";//ajoute une couleur de bordure
    }else//si l'avis n'est pas vide
    {
        document.getElementsByName('Avis')[0].style.borderStyle="none";//enlève la bordure
        verif++;//incrémente la variable de vérification
    }
    //voir si au moins une checkbox est cochée
    var check=0;//initialise la variable de vérification à 0
   
    for(var i=0;i<JeuxChoisi.length;i++){//pour chaque checkbox
        if(JeuxChoisi[i].checked==true){//si la checkbox est cochée
            check++;//incrémente la variable de vérification
        }
    }
    if(check==0){//si aucune checkbox n'est cochée
        for(var i=0;i<JeuxChoisi.length;i++){//pour chaque checkbox
        document.getElementsByName('Jeux')[i].style.boxShadow="0 0 0 2px red";//ajoute une bordure rouge
        }
    }else{//si au moins une checkbox est cochée
        for(var i=0;i<JeuxChoisi.length;i++){
            document.getElementsByName('Jeux')[i].style.boxShadow="0 0 0 0px ";//enlève la bordure rouge
            }
            verif++;//incrémente la variable de vérification
    }
//si un jeux est choisi
    if(test=='-1'){//si aucun jeux n'est choisi
        document.getElementById('select').style.boxShadow="0 0 0 2px red";  //ajoute une bordure rouge
}else{
    document.getElementById('select').style.boxShadow="0 0 0 0px ";//enlève la bordure rouge
    verif++;  //incrémente la variable de vérification
}
 //si une note est choisie
    if(N=='-1'){//si aucune note n'est choisie
        document.getElementById('test').style.boxShadow="0 0 0 2px red";//ajoute une bordure rouge
    }else{//si une note est choisie
        document.getElementById('test').style.boxShadow="0 0 0 0px ";//enlève la bordure rouge
        verif++;//incrémente la variable de vérification
    }
if(Email!=ConfirmationEmail||Email==""){//si les emails ne correspondent pas
    document.getElementsByName('Email')[0].style.borderStyle="solid";//ajoute une bordure
    document.getElementsByName('Email')[0].style.borderColor="red";//ajoute une couleur de bordure
    document.getElementsByName('ConfirmationEmail')[0].style.borderStyle="solid";//ajoute une bordure
    document.getElementsByName('ConfirmationEmail')[0].style.borderColor="red";//ajoute une couleur de bordure

}else{//si les emails correspondent
    document.getElementsByName('Email')[0].style.borderStyle="solid";//ajoute une bordure
    document.getElementsByName('Email')[0].style.borderColor="green";//ajoute une couleur de bordure
    document.getElementsByName('ConfirmationEmail')[0].style.borderStyle="solid";//ajoute une bordure
    document.getElementsByName('ConfirmationEmail')[0].style.borderColor="green";//ajoute une couleur de bordure
    verif++;//incrémente la variable de vérification
}

if(verif>=9){//si toutes les vérifications sont passées
    document.getElementsByName('form')[0].submit();//envoie le formulaire
}
}
function effacer(){//fonction qui efface les champs
    //efface toutes les values
    document.getElementsByName('Nom')[0].value="";//efface le nom
    document.getElementsByName('Prenom')[0].value="";//efface le prénom
    document.getElementsByName('Date')[0].value="";//efface la date
    document.getElementsByName('CodePostal')[0].value="";//efface le code postal
    document.getElementsByName('Telephone')[0].value="";//efface le téléphone
    document.getElementsByName('Avis')[0].value="";//efface l'avis
    document.getElementsByName('Jeux')[0].checked=false;//décoche la checkbox
    document.getElementsByName('Jeux')[1].checked=false;//décoche la checkbox
    document.getElementsByName('Jeux')[2].checked=false;//décoche la checkbox
    document.getElementsByName('Jeux')[3].checked=false;//décoche la checkbox
    document.getElementsByName('Jeux')[4].checked=false;//décoche la checkbox
    document.getElementById('select').value="-1";//décoche la liste déroulante
    //decocher toutes les checkbox
    for(var i=0;i<document.getElementsByName('Jeux').length;i++){//pour chaque checkbox
        document.getElementsByName('Jeux')[i].checked=false;//décoche la checkbox
    }
    //decocher toutes les checkbox
    for(var i=0;i<document.getElementsByName('carte').length;i++){//pour chaque checkbox
        document.getElementsByName('carte')[i].checked=false;//décoche la checkbox
    }
    //decocher toutes les checkbox
    for(var i=0;i<document.getElementsByName('plateau').length;i++){//pour chaque checkbox
        document.getElementsByName('plateau')[i].checked=false;//décoche la checkbox
    }
    //decocher toutes les checkbox
    for(var i=0;i<document.getElementsByName('dés').length;i++){//pour chaque checkbox
        document.getElementsByName('dés')[i].checked=false;//décoche la checkbox
    }
    //decocher toutes les checkbox de logique
    for(var i=0;i<document.getElementsByName('logique').length;i++){//pour chaque checkbox
        document.getElementsByName('logique')[i].checked=false;//décoche la checkbox
    }
    //decocher toutes les checkbox de stratégie
    for(var i=0;i<document.getElementsByName('éducatif').length;i++){//pour chaque checkbox
        document.getElementsByName('éducatif')[i].checked=false;//décoche la checkbox
    }
    
}
