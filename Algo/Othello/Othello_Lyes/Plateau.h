#pragma once
#define TAILLE 8

int test = 0;

void affichage(int tabl[TAILLE][TAILLE]) {

	printf_s("\n");
	printf_s("  A B C D E F G H");
	for (int i = 0; i < TAILLE; i++) {
		printf_s("\n");
		printf_s("%d", i + 1);
		for (int j = 0; j < TAILLE; j++) {
			printf_s(" ");
			if (tabl[i][j] == 1) {
				tabl[i][j] = 1;
			}
			else if (tabl[i][j] == 2)
			{
				tabl[i][j] = 2;
			}
			else
			{
				tabl[i][j] = 0;
			}
			printf_s("%d", tabl[i][j]);
			if (j == TAILLE - 1) {
				printf_s(" %d ", i + 1);
			}
		}
	}
	printf_s("\n");
	printf_s("  A B C D E F G H");
}
int Tableau(int posx,int posy) {
	int tab[TAILLE][TAILLE];
	test++;
	tab[3][3]=2	;
	tab[3][4]=1;
	tab[4][3]=1;
	tab[4][4]=2;
	for (int i = 0; i < TAILLE; i++) {
		for (int j = 0; j < TAILLE; j++) {
			if (tab[i][j] == 1) {
				tab[i][j] = 1;
			}
			else if(tab[i][j]==2)
			{
				tab[i][j] = 2;
			}
			else
			{
				tab[i][j] = 0;
			}
		}
		
	}
	if (test == 8) {
		affichage(tab);
		test = 0;
	}
	return tab[posx][posy];
}