#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <string.h>
#include "placement.h"
#include "Plateau.h"


void verification(int x, char c) {
	printf_s("%d""%c", x, c);
	int count = 0;
	int erreur = 0;
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

	


}

void pions(int tab) {


}