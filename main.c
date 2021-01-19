#include <stdio.h>
#include "main.h"

int main (int argc , char *argv[])
{	
	FILE *fi, *fo;
	char * path_fi, *path_fo;
	status_t st;	
	
	if( (st=validate_arguments(argc, argv, &path_fi, &path_fo)) != OK)
		return show_error(st);
	
	if( (st=open_files(&fi,&fo, path_fi, path_fo)) !=OK)
		return show_error(st);	
	
	if( (st=cortes_de_control(fi,fo)) != OK)
	{
		show_error(st);

		if( (st=close_files(&fi,&fo)) != OK)
			return show_error(st);
		
		remove (path_fo);
		
		return st;
	}

	if( (st=close_files(&fi,&fo)) != OK)
		return show_error(st);	
	
	
	return OK;
}
