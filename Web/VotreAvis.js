
var contenue;
function VotreAvis() {
    var Genre;
    var Nom;
    var Prenom;
    var Date;
    var CodePostal;
    var Telephone;
    var Email;
   contenue= document.location.search;
    //récuper le genre qui est dans url
    Genre = contenue.substring(contenue.indexOf("=") + 1, contenue.indexOf("&"));
    //récuper le nom qui est dans url
    Nom = contenue.substring(contenue.indexOf("&") + 1, contenue.indexOf("&", contenue.indexOf("&") + 1));
    //récuper le prenom qui est dans url
    Prenom = contenue.substring(contenue.indexOf("&", contenue.indexOf("&") + 1) + 1, contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&") + 1) + 1));
    //récuper la date qui est dans url
    Date = contenue.substring(contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&") + 1) + 1) + 1, contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&") + 1) + 1) + 1));
    //récuper le code postal qui est dans url
    CodePostal = contenue.substring(contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&") + 1) + 1) + 1) + 1, contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&") + 1) + 1) + 1) + 1));
    //récuper le telephone qui est dans url
    Telephone = contenue.substring(contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&") + 1) + 1) + 1) + 1) + 1, contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&") + 1) + 1) + 1) + 1) + 1));
    //récuper l'email qui est dans url
    Email = contenue.substring(contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&") + 1) + 1) + 1) + 1) + 1) + 1, contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&", contenue.indexOf("&") + 1) + 1) + 1) + 1) + 1));
    //afficher le genre
    document.getElementById("Genre").innerHTML = Genre;
    
   document.body.innerHTML = contenue;
}