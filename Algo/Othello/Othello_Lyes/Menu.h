#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "Plateau.h"



bool Menu() {
	int stock;
	bool isRunning = true;
	printf_s("Othello \n");
	printf_s("1.Jouer contre un autre joueur \n");
	printf_s("2.Jouer contre ordinateur \n");
	printf_s("3.Quitter \n");
	scanf_s("%d", &stock);

	if (stock == 1 || stock == 2) {
		isRunning = true;
		return isRunning;
	}
	else {
		isRunning = false;
		return isRunning;
	}

}
