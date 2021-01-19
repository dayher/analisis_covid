#include "main.h"
typedef unsigned long ul;
typedef unsigned int uint;

typedef struct {
	uint country;
	int month;
	uint cases;
} record_t ; 

typedef struct {
	uint country;
	int month;
	ul total_month;
	ul total_country; 
	ul total_global;
	FILE *targetFile;
	int year;
	
} control_t ; 


status_t read_record(FILE *fi, record_t *reg);
status_t load_year(FILE *fi, control_t *ctr, record_t *reg);
void get_name(char **name, unsigned int code );

void print_month(control_t *ctr);
void print_country(control_t *ctr);
void print_year(control_t *ctr);
