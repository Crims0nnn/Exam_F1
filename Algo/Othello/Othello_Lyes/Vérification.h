#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <string.h>
#include "placement.h"
#include "Plateau.h"
#include "Joueur.h"



void verification(int posx, int posy ) {
	int erreur = 0; //Conteur si il arrive a 8 alors impossible de jouer le pion ici
	int count = 1;
	int pion = count % 2;
	//Joueur 1
	if (pion != 0 && Tableau(posx,posy)==0) {
		//verif en bas
		if (Tableau(posx+1 , posy) == 0 || Tableau(posx+1,posy)==1) {
			erreur++;
		}
		else
		{
			printf_s("\nok pour en bas");
		}
		//verif en haut
		if (Tableau(posx - 1, posy ) == 0 || Tableau(posx - 1, posy ) == 1) {
			erreur++;
		}
		else
		{
			printf_s("\nok pour en haut");
		}
		//verif droite
		if (Tableau(posx , posy+1) == 0 || Tableau(posx , posy+1) == 1) {
			erreur++;
		}
		else
		{
			printf_s("\nok pour la droite");
		}
		//verif gauche
		if (Tableau(posx , posy - 1) == 0 || Tableau(posx, posy - 1) == 1) {
			erreur++;
		}
		else
		{
			printf_s("\nok pour en gauche");
		}
		//verif haut gauche
		if (Tableau(posx-1, posy -1) == 0 || Tableau(posx-1, posy - 1) == 1) {
			erreur++;
		}
		else
		{
			printf_s("\nok pour en haut gauche");
		}
		//verif bas gauche
		if (Tableau(posx +1 , posy - 1) == 0 || Tableau(posx + 1, posy - 1) == 1) {
			erreur++;
		}
		else
		{
			printf_s("\nok pour en bas gauche");
		}
		//verif bas droite
		if (Tableau(posx + 1, posy + 1) == 0 || Tableau(posx + 1, posy + 1) != 1) {
			erreur++;
		}
		else
		{
			printf_s("\nok pour en bas droite");
		}
		//verif haut droit
		if (Tableau(posx - 1, posy + 1) == 0 || Tableau(posx - 1, posy + 1) != 1) {
			erreur++;
		}
		else
		{
			printf_s("\nok pour en haut droite");
		}
		if (erreur == 8) {
			printf_s("\n impossible de jouer le pion ici");
			Joueur1(J1);
		}
	}
	else
	{
		printf_s("il y a deja un pion ici");
		Joueur1(J1);
	}
	if (Tableau(posx, posy) == 1) {
		printf_s("\n Votre pion");
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
		convert = 0;
	}
	if (c == 'B') {
		convert = 1;
	}
	if (c == 'C') {
		convert = 2;
	}
	if (c == 'D') {
		convert = 3;
	}
	if (c == 'E') {
		convert = 4;
	}
	if (c == 'F') {
		convert = 5;
	}
	if (c == 'G') {
		convert = 6;
	}
	if (c == 'H') {
		convert = 7;
	}

	verification(x,convert);


}

