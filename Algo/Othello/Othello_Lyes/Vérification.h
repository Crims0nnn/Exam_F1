#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <string.h>
#include "placement.h"
#include "Plateau.h"


void verification(int posx, int posy ) {
	int erreur = 0; //Conteur si il arrive a 8 alors impossible de jouer le pion ici
	int count = 1;
	int pion = count % 2;
	//Joueur 1
	if (pion != 0 && Tableau(posx,posy)==0) {
		//verif en bas
		if (Tableau(posx + 1, posy) == 0 || Tableau(posx+1,posy)!=1) {
			erreur++;
		}
		//verif en haut
		if (Tableau(posx - 1, posy ) == 0 || Tableau(posx - 1, posy ) != 1) {
			erreur++;
		}
		//verif droite
		if (Tableau(posx , posy+1) == 0 || Tableau(posx , posy+1) != 1) {
			erreur++;
		}
		//verif gauche
		if (Tableau(posx , posy - 1) == 0 || Tableau(posx, posy - 1) != 1) {
			erreur++;
		}
		//verif haut gauche
		if (Tableau(posx-1, posy + 1) == 0 || Tableau(posx-1, posy + 1) != 1) {
			erreur++;
		}
		//verif bas gauche
		if (Tableau(posx + 1, posy + 1) == 0 || Tableau(posx + 1, posy + 1) != 1) {
			erreur++;
		}
		//verif bas droit
		if (Tableau(posx - 1, posy - 1) == 0 || Tableau(posx - 1, posy - 1) != 1) {
			erreur++;
		}
		//verif haut droit
		if (Tableau(posx + 1, posy - 1) == 0 || Tableau(posx + 1, posy - 1) != 1) {
			erreur++;
		}
		if (erreur == 8) {
			printf_s("\n impossible de jouer le pion ici");
		}
		//
		if (Tableau(posx , posy ) == 1) {
			printf_s("\n Parfait");
		}
	}
	else
	{
		printf_s("\n Un pion est deja present ici");
	}
	//Joueur 2
	if (pion == 0 && Tableau(posx, posy) == 0) {
		if (Tableau(posx + 1, posy) == 0 || Tableau(posx + 1, posy) != 1) {
			erreur++;
		}
		//verif en haut
		if (Tableau(posx - 1, posy) == 0 || Tableau(posx - 1, posy) != 1) {
			erreur++;
		}
		//verif droite
		if (Tableau(posx, posy + 1) == 0 || Tableau(posx, posy + 1) != 1) {
			erreur++;
		}
		//verif gauche
		if (Tableau(posx, posy - 1) == 0 || Tableau(posx, posy - 1) != 1) {
			erreur++;
		}
		//verif haut gauche
		if (Tableau(posx - 1, posy + 1) == 0 || Tableau(posx - 1, posy + 1) != 1) {
			erreur++;
		}
		//verif bas gauche
		if (Tableau(posx + 1, posy + 1) == 0 || Tableau(posx + 1, posy + 1) != 1) {
			erreur++;
		}
		//verif bas droit
		if (Tableau(posx - 1, posy - 1) == 0 || Tableau(posx - 1, posy - 1) != 1) {
			erreur++;
		}
		//verif haut droit
		if (Tableau(posx + 1, posy - 1) == 0 || Tableau(posx + 1, posy - 1) != 1) {
			erreur++;
		}
		if (erreur == 8) {
			printf_s("\n impossible de jouer le pion");
		}
	}
}
void pions() {

}
void conversion(int x, char c) {
	printf_s("%d""%c", x, c);
	int convert = 0;
	//Permet de convertir la donnée char en int pour pouvoir être utiliser dans les positions
	if (c == 'A') {
		convert = 1;
	}
	if (c == 'B') {
		convert = 2;
	}
	if (c == 'C') {
		convert = 3;
	}
	if (c == 'D') {
		convert = 4;
	}
	if (c == 'E') {
		convert = 5;
	}
	if (c == 'F') {
		convert = 6;
	}
	if (c == 'G') {
		convert = 7;
	}
	if (c == 'H') {
		convert = 8;
	}

	verification(convert,x);


}

