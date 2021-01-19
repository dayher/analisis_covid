/*Tomar 1 string de un FILE.csv y pasarlo a struct*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include "io.h"

#define TOKEN_RECORD_COUNTRY	0
#define TOKEN_RECORD_DATE		1
#define TOKEN_RECORD_CASES			2
#define MAX_TOKENS_RECORD            			3
#define DELIMITTER             	','
#define MAX_LINE			30
#define BASE                   	10

status_t split(const char *s, char delimitter, size_t *fields, char ***values);
status_t str_delete(char ***values,size_t n);
char *strdup (const char *string);

struct tm *p_date;
time_t date;

status_t read_record(FILE * fi, record_t * reg)
{
	char line[MAX_LINE+2];
	char **arr; 
	size_t len;
	status_t st;
	
	if(fgets(line, MAX_LINE+2 ,fi) != NULL)
	{
		
		if( (st = split(line,DELIMITTER,&len,&arr)) != OK) 
			return st;
		
		if(len!=MAX_TOKENS_RECORD) 
			return ERROR_CORRUPT_FILE;
		
		date= (uint)strtol(arr[TOKEN_RECORD_DATE],NULL,BASE);
		reg -> month = ((p_date=localtime(&date))->tm_mon);
		reg -> country = (uint)strtol(arr[TOKEN_RECORD_COUNTRY],NULL,BASE);
		reg -> cases = (uint)strtol(arr[TOKEN_RECORD_CASES],NULL,BASE);
		
		str_delete(&arr,MAX_TOKENS_RECORD);
	}
	return OK;
}

status_t load_year(FILE * fi, control_t *ctr, record_t * reg)
{
	status_t st;
	if( (st=read_record(fi,reg)) != OK) return st;
	ctr->year = (p_date->tm_year)+1900;
	ctr->country = reg->country;
	ctr->month  = reg->month;
	ctr->total_global = ctr->total_country = ctr->total_month = 0;
	return OK;
}


status_t split(const char *s, char delimitter, size_t *fields, char ***values)
{
	char *clone, *p , *q;
	size_t i;
	char tokens[2];
	
	if(s == NULL || fields == NULL || values == NULL)
	return ERROR_NULL_POINTER;
	
	tokens[0]=delimitter;
	tokens[1]='\0';
	
	if ((clone = strdup(s)) == NULL) 
	{
		*fields = 0;
		return ERROR_MEMORY;
	}
  
	for(i=0, (*fields)=0 ; (clone[i]) ; i++)
	{
		if(clone[i] == delimitter)(*fields)++;
	}
			
	(*fields)++;
	
	if(((*values)=(char**)malloc(sizeof(char*)*(*fields)))==NULL)
	{
		(*fields)=0;
		return ERROR_MEMORY;
	}

	for(i=0 , q=clone ; (p = strtok(q,tokens)) ; q=NULL , i++)
	{
		if(((*values)[i]=strdup(p))==NULL)
		{
			str_delete(values,i);
			free(clone);
			return ERROR_MEMORY;
		}
	}
	free(clone);
	return OK;
}

status_t str_delete(char ***values,size_t n)
{
	size_t i;
	
	if(values==NULL)return ERROR_NULL_POINTER;
	
	for (i=0 ; i< n ; i++)
	{
		free((*values)[i]);
		(*values)[i]=NULL;
	}
	free(*values);
	(*values)=NULL;
	return OK;
}

char *strdup (const char *cadena)
{
	char *clone;

	if((clone=(char*)malloc(strlen(cadena)+1))==NULL)
		return NULL;

	strcpy(clone, cadena);
		return clone;
}
