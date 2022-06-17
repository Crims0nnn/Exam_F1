




var contenue="";
function formulaire(){
    
    var Genre=["Homme","Femme"];
    var Jeux=["jeux de carte","jeux de plateau","jeux de des","jeux de logique","jeux educatif"];
    var JeuxCarte=["Uno","solitaire","Poker","Black Jack"];
    var JeuxPlateau=["Damier","Echec","Puzzle","Puissance 4"];
    var JeuxDes=["Yahtzee","Shut the box","Yams","421"];
    var JeuxLogique=["Pendu","Mastermind","Sudoku","Sokoban"];
    var JeuxEducatif=["Pigeon Pigeon","Complot","L'imposteur","Labyrinthe"];
    var Note= ["1","2","3","4","5"];
    //copier un tableau dans un autre tableau
    
    var JeuxTous=JeuxCarte.concat(JeuxPlateau,JeuxDes,JeuxLogique,JeuxEducatif);
    
    //ajout d'un element dans un tableau
    
    contenue+="<form name='form' action='VotreAvis.html' method='get'>";
    contenue+= "<fieldset>";
    contenue+="<h3>Identité</h3>";
    contenue+= "<label>Genre: </label>";
    for(var i=0;i<Genre.length;i++){
        contenue+= Genre[i]+"<input type='radio' name='sexe' value='"+Genre[i]+"'></input>";
    }
    contenue+="<div >";
    contenue+="<label>Nom</label>"   
    contenue+="<input type='text' placeholder='Nom' name='Nom'></input>"
    contenue+="</div>";

    contenue+="<div>";
    contenue+="<label>Prénom</label>"
    contenue+="<input type='text' id='prenom' placeholder='Prénom' name='Prenom'></input>"
    contenue+="</div>";

    contenue+="<div>";
    contenue+="<label>Date de naissance</label>"
    contenue+="<input type='date' placeholder='Date de naissance' name='Date'></input>"
    contenue+="</div>";

    contenue+="<div>";
    contenue+="<label>Email</label>"
    contenue+="<input type='email' placeholder='Email' name='Email'></input>"
    contenue+="</div>";

    contenue+="<div>";
    contenue+="<label>Confirmation </label>"
    contenue+="<input type='email' placeholder='Confirmation Email' name='ConfirmationEmail'></input>"
    contenue+="</div>";

    contenue+="<div>";
    contenue+="<label>CodePostal</label>"
    contenue+="<input type='text' placeholder='optionnel' name='CodePostal'></input>"
    contenue+="</div>";

    contenue+="<div>";
    contenue+="<label>Téléphone</label>"
    contenue+="<input type='number' placeholder='optionnel' name='Telephone'></input>"
    contenue+="</div>";

    contenue+= "</fieldset>";
    contenue+="<fieldset>";
    contenue+="<h4>Zone préférences de jeux:</h4>";
    contenue+="<div>";
    for(var i=0;i<Jeux.length;i++){
        contenue+= Jeux[i]+"<input type='checkbox' value='"+Jeux[i]+"' name='Jeux'></input>";
        if(Jeux[i]=="jeux de carte"){
            contenue+="<div>";
            contenue+="<fieldset>";
        for(var j=0;j<JeuxCarte.length;j++){
        contenue+= "<input type='checkbox' value='"+JeuxCarte[j]+"'name='cartes'>"+JeuxCarte[j]+"</input>";
        }
        contenue+= "</fieldset>";
        contenue+="</div>";
    }
        if(Jeux[i]=="jeux de plateau"){
            contenue+="<div >";
            contenue+="<fieldset>";
            for(var j=0;j<JeuxPlateau.length;j++){
            contenue+= "<input type='checkbox' value='"+JeuxPlateau[j]+"'name='plateau'>"+JeuxPlateau[j]+"</input>";
            }
            contenue+= "</fieldset>";
            contenue+="</div>";
        }
            
    if(Jeux[i]=="jeux de des"){
        contenue+="<div >";
        contenue+="<fieldset>";
        for(var j=0;j<JeuxDes.length;j++){
        contenue+= "<input type='checkbox' value='"+JeuxDes[j]+"'name='des'>"+JeuxDes[j]+"</input>";
        }
        contenue+= "</fieldset>";
        contenue+="</div>";
    }
    if(Jeux[i]=="jeux educatif"){
        contenue+="<div id='éducatif'>";
        contenue+="<fieldset>";
        for(var j=0;j<JeuxEducatif.length;j++){
        contenue+= "<input type='checkbox' value='"+JeuxEducatif[j]+"'name='educatif'>"+JeuxEducatif[j]+"</input>";
        }
        contenue+= "</fieldset>";
        contenue+="</div>";
    }
    if(Jeux[i]=="jeux de logique"){
        contenue+="<div id='logique'>";
        contenue+="<fieldset>";
        for(var j=0;j<JeuxLogique.length;j++){
        contenue+= "<input type='checkbox' value='"+JeuxLogique[j]+"'name='logique'>"+JeuxLogique[j]+"</input>";
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
            contenue+="<option value='-1'></option>";
        }else{
        contenue+= "<option value='"+JeuxTous[i]+"'>"+JeuxTous[i]+"</option>";
    }
}
    contenue+="</select>";
    //limiter le nombre de caractères
    contenue+="<div>";
    contenue+="<textarea cols='40' rows='5' maxlength='200' placeholder='200 caractères max' name='Avis'></textarea>";
    contenue+="<label>Note</label>";
    contenue+="<select id='test' name='Note'>";
    for(var i=-1;i<5;i++){
        if(i==-1){
            contenue+="<option value='-1'></option>";
        }else{
        contenue+="<option value='"+Note[i]+"'>"+Note[i]+"</option>"
    }
}
    contenue+="</select>";
    contenue+="</fieldset>";
    contenue+="<fieldset>";
    contenue+="<div>";
    contenue+="<input type='button' onclick='verification()' value='Envoyer'></input>";
    contenue+="<input type='reset'  onclick='effacer()'value='Effacer'></input>";
    contenue+="</div>";
    contenue+="</fieldset>";
    contenue+="</form>";
    document.body.innerHTML = contenue;

}

function verification(){
    var verif=0;
    
    var Genre=["Homme","Femme"];
    var Jeux=["jeux de carte","jeux de plateau","jeux de dés","jeux de logique","jeux éducatif"];
    var Nom=document.getElementsByName('Nom')[0].value;
    var Prenom=document.getElementsByName('Prenom')[0].value;
    var Date=document.getElementsByName('Date')[0].value;
    var CodePostal=document.getElementsByName('CodePostal')[0].value;
    var Telephone=document.getElementsByName('Telephone')[0].value;
    var Avis=document.getElementsByName('Avis')[0].value;
    var JeuxChoisi=document.getElementsByName('Jeux');
    var Jeux1=["","Uno","solitaire","Poker","Black Jack"];
    var test = document.getElementById('select').value;
    var N = document.getElementById('test').value;
    var Email = document.getElementsByName('Email')[0].value;
    var ConfirmationEmail = document.getElementsByName('ConfirmationEmail')[0].value;

    
  //verifier si le genre est choisi
  var genre=0;
    for(var i=0;i<Genre.length;i++){  
        if(document.getElementsByName('sexe')[i].checked==true){
        genre=1;
        }
    }
    if(genre==0){
        for(var i=0;i<Genre.length;i++){  
        document.getElementsByName('sexe')[i].style.boxShadow="0 0 0 2px red";
        }
    }else{
        for(var i=0;i<Genre.length;i++){  
            document.getElementsByName('sexe')[i].style.boxShadow="0 0 0 0px red";
            }
    verif++; 
    }

    //vérification du nom
    if(Nom==""){
        document.getElementsByName('Nom')[0].style.borderStyle="solid";
        document.getElementsByName('Nom')[0].style.borderColor="red";
    }else{
        document.getElementsByName('Nom')[0].style.borderStyle="none";
        verif++;
    }
    //vérification du prénom
    if(Prenom==""){
        document.getElementsByName('Prenom')[0].style.borderStyle="solid";
        document.getElementsByName('Prenom')[0].style.borderColor="red";
    }else{
        document.getElementsByName('Prenom')[0].style.borderStyle="none";
        verif++;
    }
    //vérification de la date
    if(Date==""){
        document.getElementsByName('Date')[0].style.borderStyle="solid";
        document.getElementsByName('Date')[0].style.borderColor="red";
    }else{
        document.getElementsByName('Date')[0].style.borderStyle="none";
        verif++;
    }
    //vérification de avis
    if(Avis==""){
        document.getElementsByName('Avis')[0].style.borderStyle="solid";
        document.getElementsByName('Avis')[0].style.borderColor="red";
    }else
    {
        document.getElementsByName('Avis')[0].style.borderStyle="none";
        verif++;
    }
    //voir si au moins une checkbox est cochée
    var check=0;
   
    for(var i=0;i<JeuxChoisi.length;i++){
        if(JeuxChoisi[i].checked==true){
            check++;
        }
    }
    if(check==0){
        for(var i=0;i<JeuxChoisi.length;i++){
        document.getElementsByName('Jeux')[i].style.boxShadow="0 0 0 2px red";
        }
    }else{
        for(var i=0;i<JeuxChoisi.length;i++){
            document.getElementsByName('Jeux')[i].style.boxShadow="0 0 0 0px ";
            }
            verif++;
    }
//si un jeux est choisi
    if(test=='-1'){
        document.getElementById('select').style.boxShadow="0 0 0 2px red";  
}else{
    document.getElementById('select').style.boxShadow="0 0 0 0px ";
    verif++;
}
 //si une note est choisie
    if(N=='-1'){
        document.getElementById('test').style.boxShadow="0 0 0 2px red";
    }else{
        document.getElementById('test').style.boxShadow="0 0 0 0px ";
        verif++;
    }
if(Email!=ConfirmationEmail||Email==""){
    document.getElementsByName('Email')[0].style.borderStyle="solid";
    document.getElementsByName('Email')[0].style.borderColor="red";
    document.getElementsByName('ConfirmationEmail')[0].style.borderStyle="solid";
    document.getElementsByName('ConfirmationEmail')[0].style.borderColor="red";

}else{
    document.getElementsByName('ConfirmationEmail')[0].style.borderStyle="none";
    verif++;
}

if(verif>=9){
    document.getElementsByName('form')[0].submit();
}
}
function effacer(){
    //efface toutes les values
    document.getElementsByName('Nom')[0].value="";
    document.getElementsByName('Prenom')[0].value="";
    document.getElementsByName('Date')[0].value="";
    document.getElementsByName('CodePostal')[0].value="";
    document.getElementsByName('Telephone')[0].value="";
    document.getElementsByName('Avis')[0].value="";
    document.getElementsByName('Jeux')[0].checked=false;
    document.getElementsByName('Jeux')[1].checked=false;
    document.getElementsByName('Jeux')[2].checked=false;
    document.getElementsByName('Jeux')[3].checked=false;
    document.getElementsByName('Jeux')[4].checked=false;
    document.getElementById('select').value="-1";
    //decocher toutes les checkbox
    for(var i=0;i<document.getElementsByName('Jeux').length;i++){
        document.getElementsByName('Jeux')[i].checked=false;
    }
    //decocher toutes les checkbox
    for(var i=0;i<document.getElementsByName('carte').length;i++){
        document.getElementsByName('carte')[i].checked=false;
    }
    //decocher toutes les checkbox
    for(var i=0;i<document.getElementsByName('plateau').length;i++){
        document.getElementsByName('plateau')[i].checked=false;
    }
    //decocher toutes les checkbox
    for(var i=0;i<document.getElementsByName('dés').length;i++){
        document.getElementsByName('dés')[i].checked=false;
    }
    //decocher toutes les checkbox de logique
    for(var i=0;i<document.getElementsByName('logique').length;i++){
        document.getElementsByName('logique')[i].checked=false;
    }
    //decocher toutes les checkbox de stratégie
    for(var i=0;i<document.getElementsByName('éducatif').length;i++){
        document.getElementsByName('éducatif')[i].checked=false;
    }
    
}
