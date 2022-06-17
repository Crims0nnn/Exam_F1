#include <stdio.h>
#include <string.h>
#include "Plateau.h"
#include "placement.h"
#include "Menu.cpp"
#include "Menu.h"





int main() {
	
	if (Menu()) {
		Tableau();
		position();
		
	}
	else
	{
		return 0;
	}

	
}

