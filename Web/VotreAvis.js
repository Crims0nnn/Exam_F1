
var contenue;
function VotreAvis() {
    // Initialisation de la page
    var age=0; // Age de l'utilisateur
    var Genre; // Genre de l'utilisateur
    var Nom;  // Nom de l'utilisateur
    var Prenom; // Prenom de l'utilisateur
    var Date; // Date de naissance de l'utilisateur
    var CodePostal; // Code postal de l'utilisateur
    var Telephone; // Telephone de l'utilisateur
    var Email; // Email de l'utilisateur
    var catégorie; // Catégorie de l'utilisateur
    var jeux=""; //  liste des jeux de l'utilisateur
    var jc=""; //jeux choisit par l'utilisateur  pour donner son avis
    var note=""; // note choisit par l'utilisateur
    var Avis=""; // avis de l'utilisateur
    var test=["Genre :","Nom :","Prenom :","Date :","Email :","CodePostal :","Téléphone :","C   atégorie favorite :","Jeux favorie: ","Jeux selectionner pour avis:","Note : ","Avis:"];
    var Final="<h3>Votre Avis:</h3>"; 
    var tablo=[]; // tableau qui contient les données de l'utilisateur 
   contenue= document.location.search; // recuperation de la page
    contenue = contenue.split("&"); // decoupage de la page
    console.table(contenue); // affichage de la page dans la console
    for (var i = 0; i < contenue.length; i++) { // parcours de la page
        tablo[i]=" ";
    }
   //boucle qui permet de récupérer les valeurs des variables
    for (var i = 0; i < contenue.length; i++) {
        contenue[i] = contenue[i].split("=");
        if (contenue[i][0] == "?sexe") { //récuper le genre de l'utilisateur
            Genre = contenue[i][1];
            tablo[0]+=Genre;
        }
        if (contenue[i][0] == "Nom") { //récuper le nom de l'utilisateur
            Nom = contenue[i][1];
            tablo[1]+=Nom;
        }
        if (contenue[i][0] == "Prenom") { //récuper le prenom de l'utilisateur
            Prenom = contenue[i][1];
            tablo[2]+=Prenom;
        }
        if (contenue[i][0] == "Date") { //récuper la date de naissance de l'utilisateur
            Date = contenue[i][1];
            tablo[3]+=Date;
            age=2022-Date.substring(0,4);
            tablo[3]+="/age:"+age; //ajout de l'age calculé a partir de la date de naissance
        }
        if (contenue[i][0] == "Email") { //récuper l'email de l'utilisateur
            Email = contenue[i][1];
        }
        if (contenue[i][0] == "CodePostal") { //récuper le code postal de l'utilisateur
            CodePostal = contenue[i][1];
            tablo[5]+=CodePostal;
            if(CodePostal==""){
               CodePostal="Non renseigné";
               tablo[5]+=CodePostal;
            }
        }
        if (contenue[i][0] == "Telephone") { //récuper le telephone de l'utilisateur
            Telephone = contenue[i][1];
            tablo[6]+=Telephone;
            if(Telephone==""){
                Telephone="Non renseigné";
                tablo[6]+=Telephone;
            }
        }
        if(contenue[i][0]=="Jeux"){ //récuper la liste des jeux de l'utilisateur
            catégorie= contenue[i][1];
            for(var j=0;j<contenue.length;j++){ 
            catégorie= catégorie.replace("+"," ");
            }
            tablo[7]+=catégorie+" ";
        }
        if(contenue[i][0]=="cartes"){ //récuper la liste des jeux de l'utilisateur de la catégorie cartes
            jeux+= contenue[i][1]+"/";
        }
        
        if(contenue[i][0]=="plateau"){ //récuper la liste des jeux de l'utilisateur de la catégorie plateau
            jeux+= contenue[i][1]+"/";
        }
        
        if(contenue[i][0]=="des"){ //récuper la liste des jeux de l'utilisateur de la catégorie dés
            jeux+= contenue[i][1]+" /";
        }
        
        if(contenue[i][0]=="logique"){ //récuper la liste des jeux de l'utilisateur de la catégorie logique
            jeux+= contenue[i][1]+" /";
        }
        if(contenue[i][0]=="educatif"){ //récuper la liste des jeux de l'utilisateur de la catégorie educatif
            jeux+= contenue[i][1]+"/";
            
        }
        if(contenue[i][0]=="Vote"){  //récuper le jeux choisit par l'utilisateur
            jc= contenue[i][1];
        }
        if( contenue[i][0]=="Note"){ //récuper la note de l'utilisateur
            note= contenue[i][1];
            tablo[10]+=note;
        }
        if(contenue[i][0]=="Avis"){ //récuper l'avis de l'utilisateur
            Avis=contenue[i][1];
            tablo[11]+=Avis;
        }
    }
    for(var j=0;j<1;j++){
        jeux= jeux.replace("+"," "); //remplace les + par des espaces
        jc= jc.replace("+"," ");
        tablo[8]+=jeux;
        tablo[9]+=jc;
        }
     for(var j=0;j<1;j++){
            Email= Email.replace("%40","@");   //remplace les %40 par des @  
        }    
     for(var j=0;j<contenue.length;j++){
            Email= Email.replace("%C3%","é"); //remplace les %C3% par des é
            Nom= Nom.replace("%C3%","é");
            Prenom= Prenom.replace("%C3%","é");
            Nom= Nom.replace("A9",""); //remplace les A9 par des a
            Prenom= Prenom.replace("A9","");
            Email= Email.replace("A9","");
            Nom= Nom.replace("B9","ù"); //remplace les B9 par des ù
            Prenom= Prenom.replace("B9","ù");
            Email= Email.replace("B9","ù");
    }    
    tablo[1]=Nom; //ajoute le nom a la liste
    tablo[2]=Prenom;   //ajoute le prenom a la liste
    tablo[4]+=Email; //ajoute l'email a la liste
    
    /*console.log(Genre);
    console.log(Nom);
    console.log(Prenom);
    console.log(Date);
    console.log(Email);
    console.log(CodePostal);
    console.log(Telephone);
    console.log(catégorie);
    console.log(jeux);
    console.log(Avis);
    console.log(jc);
    console.log(note);
    console.log(age);
    */
    for(i=0;i<12;i++){ //ajoute les données a la liste
       Final+= "<table id='table'><tr><td><fieldset>"+test[i]+"</td><td>"+tablo[i]+"</fieldset></td></tr></table>";
    }
   document.body.innerHTML = Final; //affiche l'avis de l'utilisateur
}