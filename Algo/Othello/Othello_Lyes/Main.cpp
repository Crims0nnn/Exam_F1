#include <stdio.h>
#include <string.h>
#include "Plateau.h"
#include "placement.h"
#include "Menu.cpp"
#include "Menu.h"
#include "Joueur.h"



int main() {
	Menu();
	if (jouer == 1) {
		while (partie < 64) {
			Joueur1(J1);
			Joueur2(J2);
		}
	}
	else if (jouer ==2 ) {
		while (partie < 64) {
			Joueur1(J1);
		}
	}
	else {
		return 0;
	}
	
	

	
}

