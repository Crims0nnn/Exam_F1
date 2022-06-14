#pragma once
#define TAILLE 8
void copie(int tablo[TAILLE][TAILLE]) {
	
}
int Tableau(int posx,int posy) {
	int tab[TAILLE][TAILLE];
	printf_s("  A B C D E F G H");
	for (int i = 0; i < TAILLE; i++) {
		printf_s("\n");
		printf_s("%d", i + 1);
		for (int j = 0; j < TAILLE; j++) {
			printf_s(" ");
			tab[i][j] = 0;
			
			printf_s("%d", tab[i][j]);
			if (j == TAILLE - 1) {

				printf_s(" %d ", i + 1);
			}
			
		}
		
	}
	printf_s("\n");
	printf_s("  A B C D E F G H");
	return tab[posx][posy];
}