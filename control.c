#include <stdio.h>
#include "io.h"

void close_country(control_t *ctr, record_t *reg);
void close_month(control_t *ctr, record_t *reg);
void close_global(control_t *ctr);
 
status_t cortes_de_control(FILE* fi, FILE *fo)
{	
	status_t st;
	record_t reg, *p_reg;
	control_t ctr, *p_ctr;
		
	p_reg = &reg;
	p_ctr = &ctr;
	ctr.targetFile=fo;

	if( (st = load_year(fi, p_ctr, p_reg)) != OK) return st;
	print_year(p_ctr);	

	while(!feof(fi))
	{
		if( reg.country != ctr.country)
		{
			close_country(p_ctr, p_reg);
		} 
		else if( reg.month != ctr.month )
		{
			close_month(p_ctr, p_reg);
			ctr.total_country+=reg.cases;	
		}
		else
		{
			ctr.total_month+=reg.cases;
			ctr.total_country+=reg.cases;
			ctr.total_global+=reg.cases;	
		}
	
		if( (st = read_record(fi,p_reg)) != OK) return st;
	
	}	
	close_global(p_ctr);
	return OK;
}

void close_month(control_t *ctr, record_t *reg)
{
	print_month(ctr);
	ctr->month=reg->month;
	ctr->total_month=reg->cases;	
	ctr->total_global+=reg->cases;
}

void close_country(control_t *ctr, record_t *reg)
{	
	close_month(ctr,reg);
	ctr->country=reg->country;
	print_country(ctr);
	ctr->total_country=reg->cases;
}

void close_global(control_t *ctr)
{
	ctr->country=0;
	print_month(ctr);	
	print_country(ctr);
}



