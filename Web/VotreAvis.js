
var contenue;
function VotreAvis() {
    var Genre;
    var Nom;
    var Prenom;
    var Date;
    var CodePostal;
    var Telephone;
    var Email;
    var catégorie;
    var jeux="";
    var jc="";
    var note="";
    var Avis="";
    var JeuxCarte=["Uno","solitaire","Poker","Black Jack"];
    var JeuxPlateau=["Damier","Echec","Puzzle","Puissance 4"];
    var JeuxDes=["Dé","Shut the box","Yams","421"];
    var JeuxLogique=["Pendu","Mastermind","Sudoku","Sokoban"];
    var JeuxEducatif=["Pigeon Pigeon","Complot","L'imposteur","Labyrinthe"];
    var JeuxTous=JeuxCarte.concat(JeuxPlateau,JeuxDes,JeuxLogique,JeuxEducatif);
    var test=["Genre :","Nom :","Prenom :","Date :","Email :","CodePostal :","Téléphone :","catégorie :","Jeux: ","Jeux selectionner pour avis:","Note : ","Avis:"];
    var Final="<h3>Votre Avis:</h3>";
    var tablo=[];
    var suite=0;
    var afficheliste=0;
   contenue= document.location.search;
    contenue = contenue.split("&");
    console.table(contenue);
    for (var i = 0; i < contenue.length; i++) {
        tablo[i]=" ";
    }
   //boucle qui permet de récupérer les valeurs des variables
    for (var i = 0; i < contenue.length; i++) {
        contenue[i] = contenue[i].split("=");
        if (contenue[i][0] == "?sexe") {
            Genre = contenue[i][1];
            tablo[0]+=Genre;
            afficheliste++;
        }
        if (contenue[i][0] == "Nom") {
            Nom = contenue[i][1];
            tablo[1]+=Nom;
            afficheliste++;
        }
        if (contenue[i][0] == "Prenom") {
            Prenom = contenue[i][1];
            tablo[2]+=Prenom;
            afficheliste++;
        }
        if (contenue[i][0] == "Date") {
            Date = contenue[i][1];
            tablo[3]+=Date;
            afficheliste++;
        }
        if (contenue[i][0] == "Email") {
            Email = contenue[i][1];
            tablo[4]+=Email;
            afficheliste++;
        }
        if (contenue[i][0] == "CodePostal") {
            CodePostal = contenue[i][1];
            tablo[5]+=CodePostal;
            if(CodePostal==""){
               CodePostal="Non renseigné";
               tablo[5]+=CodePostal;
            }
            afficheliste++;
        }
        if (contenue[i][0] == "Telephone") {
            Telephone = contenue[i][1];
            tablo[6]+=Telephone;
            if(Telephone==""){
                Telephone="Non renseigné";
                tablo[6]+=Telephone;
            }
            afficheliste++;
        }
        if(contenue[i][0]=="Jeux"){
            catégorie= contenue[i][1];
            for(var j=0;j<contenue.length;j++){
            catégorie= catégorie.replace("+"," ");
            }
            tablo[7]+=catégorie+",";
            afficheliste++;
        }
        if(contenue[i][0]=="cartes" && suite==0){
            jeux= contenue[i][1]+" ";
            suite++;
            
           
        }
        if(suite==1){
            tablo[8]+=jeux+",";
        }
        /*
        if(contenue[i][0]=="plateau"&&suite==1){
            jeux+= contenue[i][1]+" ";
            suite++;
        }
        if(contenue[i][0]=="des"&&suite==2){
            jeux+= contenue[i][1]+" ";
            suite++;
        }
        if(contenue[i][0]=="logique"&&suite==3){
            jeux+= contenue[i][1]+" ";
            suite++;
        }
        if(contenue[i][0]=="educatif"&&suite==4){
            jeux+= contenue[i][1]+" ";
            suite++;

        }
        
        if(suite>0 && afficheliste==8){
            for(var j=0;j<1;j++){
                jeux= jeux.replace("+"," ");
                }
            tablo[8]+=jeux+",";
        }
        */
        if(contenue[i][0]=="Vote"){
            jc= contenue[i][1];
            tablo[9]+=jc;
        }
        if(contenue[i][0]=="Note"|| contenue[i][0]=="Notes"){
            note= contenue[i][1];
            tablo[10]+=note;
        }

        if(contenue[i][0]=="Avis"){
            Avis=contenue[i][1];
            tablo[11]+=Avis;
        }
    }
    
    console.log(Genre);
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
    
    for(i=0;i<12;i++){
        //ajouter un style a tr et td
       Final+= "<table id='table'><tr><td><fieldset>"+test[i]+"</td><td>"+tablo[i]+"</fieldset></td></tr></table>";
    }
    

    
   document.body.innerHTML = Final;
}