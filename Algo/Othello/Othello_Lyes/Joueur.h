#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <string.h>
#include "placement.h"



void Joueur1(char pseudo[255]) {
	printf_s("%s c'est a vous de jouer", pseudo);
	position();

}

void identite() {
	char pseudo[255];
	printf_s("Quel pseudo voulez vous?");
	scanf_s("%s", pseudo, 255);
	printf_s("%s", pseudo);
	Joueur1(pseudo);
}
