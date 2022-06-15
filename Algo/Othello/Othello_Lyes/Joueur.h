#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <string.h>
#include "placement.h"


int jouer = 0;
char J1[255];
char J2[255];



void Joueur1(char pseudo[255]) {
	printf_s("\n%s c'est a vous de jouer", pseudo);
	position();

}
void Joueur2(char pseudo[255]) {
	printf_s("\n%s c'est a vous de jouer", pseudo);
	position();

}

void identite(int n_joueur) {
	char pseudo2[255];
	char pseudo[255];
	if (n_joueur == 1) {
		printf_s("Quel pseudo voulez vous joueur 1?\n");
		scanf_s("%s", pseudo, 255);
		printf_s("Quel pseudo voulez vous joueur 2?\n");
		scanf_s("%s", pseudo2, 255);
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
		jouer = 2;
		Joueur1(pseudo);
	}
}
