#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <string.h>
#include "placement.h"
#include <windows.h>
//#include "Vérification.h"


int jouer = 0;
char J1[255];
char J2[255];
int couleurJ1 = 0;
int couleurJ2 = 0;
int couleurinit = SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), 15);

void position();


void couleur(int couleur) {
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), couleur);
}

void Joueur1(char pseudo[255]) {
	printf_s("\n%s c'est a vous de jouer", pseudo);
	couleur(couleurJ1);
	position();

}
void Joueur2(char pseudo[255]) {
	printf_s("\n%s c'est a vous de jouer", pseudo);
	couleur(couleurJ2);
	position();

}



void identite(int n_joueur) {
	char pseudo2[255];
	char pseudo[255];
	int couleur1 = 0;
	int couleur2 = 0;
	if (n_joueur == 1) {
		printf_s("Quel pseudo voulez vous joueur 1?\n");
		scanf_s("%s", pseudo, 255);
		printf_s("Quel couleur souhaitez vous? \n 0=noir \n 9=bleu \n 10=green \n 11=bleu ciel \n 12=red \n 13=rose \n14=jaune \n15=blanc ");
		scanf_s("%d",&couleur1);
		couleurJ1 = couleur1;
		printf_s("Quel pseudo voulez vous joueur 2?\n");
		scanf_s("%s", pseudo2, 255);
		printf_s("Quel couleur souhaitez vous? \n 0=noir \n 9=bleu \n 10=green \n 11=bleu ciel \n 12=red \n 13=rose \n14=jaune \n15=blanc ");
		scanf_s("%d", &couleur2);
		couleurJ2 = couleur2;
		strncpy_s(J1, pseudo, sizeof(J1));
		strncpy_s(J2, pseudo2, sizeof(J2));
		jouer = 1;
		Joueur1(pseudo);
		Joueur2(pseudo2);
	}
	if (n_joueur == 2) {
		printf_s("Quel pseudo voulez vous joueur 1?\n");
		scanf_s("%s", pseudo, 255);
		strncpy_s(J1, pseudo, sizeof(J1));
		jouer=2;
		Joueur1(pseudo);
	}
}
