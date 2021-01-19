#include <stdio.h>
#include "io.h"

#define USR_MSG_MONTH 		"Mes"
#define USR_MSG_COUNTRY 	"Pais"
#define USR_MSG_YEAR	 	"Año"
#define USR_MSG_TOTAL 		"Total"
#define MAX_MONTH		12

char *months[MAX_MONTH]  =	{
			"Enero",
			"Febrero",
			"Marzo",
			"Abril",
			"Mayo",
			"Junio",
			"Julio",
			"Agosto",
			"Septiembre",
			"Octubre",
			"Noviembre",
			"Diciembre"
			};


void print_month(control_t *ctr)
{
	fprintf(ctr->targetFile,
		"%s: %s %s: %lu\n",
		USR_MSG_MONTH, months[ctr->month], USR_MSG_TOTAL, ctr->total_month);
}

void print_country(control_t *ctr)
{
	char *name;
	if(ctr->country)
	{	get_name(&name,ctr->country);
		fprintf(ctr->targetFile,
			"%s:  %lu\n-------------------------------------\n%s: %s\n",
			USR_MSG_TOTAL, ctr->total_country, USR_MSG_COUNTRY, name);
		free(name);
	}
	else{
		fprintf(ctr->targetFile,
			"%s:  %lu\n-------------------------------------\n",
			USR_MSG_TOTAL, ctr->total_country);
		fprintf(ctr->targetFile,
			"%s: %lu\n",
			USR_MSG_TOTAL, ctr->total_global);
	}
}

void print_year(control_t *ctr)
{	char *name;
	get_name(&name,ctr->country);
	fprintf(ctr->targetFile,
		"%s: %i\n-------------------------------------\n%s: %s \n",
		USR_MSG_YEAR, ctr->year, USR_MSG_COUNTRY, name);
	free(name);	

}
