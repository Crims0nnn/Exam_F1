#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <string.h>
#include "Plateau.h"
#include "Vérification.h"

int partie = 0;

void position() {
	partie = partie +1;
	printf_s("\n%d COMPTEUR", partie);
	char ok;
	int test=0;
	printf_s("Coordo en y?");
	scanf_s(" %c", &ok);
	printf_s("Coordo en x ?");
	scanf_s("%d", &test);
	
	printf_s("Vos coordos sont:%d %c",test,ok);
	conversion(test, ok);


}
