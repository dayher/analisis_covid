#include "main.h"
#include <string.h>

status_t open_files(FILE **fi, FILE **fo, char *path_fi, char *path_fo)
{
	if(((*fi)=fopen(path_fi,"rt"))==NULL)
	{
		return ERROR_OPENING_INPUT_FILE;
	}
				
	if(((*fo)=fopen(path_fo,"wt"))==NULL)
	{
		return ERROR_OPENING_OUTPUT_FILE;
	}
	return OK;
}

status_t close_files(FILE **fi, FILE **fo)
{
	fclose((*fi));
	if(fclose((*fo))==EOF)
	{
		show_error(ERROR_DISK_SPACE);
		return ERROR_DISK_SPACE;
	}
	return OK;
}

status_t validate_arguments(int argc, char *argv[], char ** path_fi, char **path_fo)
{
	char *tmp;
	size_t i;
	int args_to_parse;

	if(path_fi == NULL || path_fo == NULL || argv == NULL)
		return ERROR_NULL_POINTER;
	

	if(argc != MAX_CMD_ARG) 
		return ERROR_PROGRAM_INVOCATION;
	

	for(i = 1, args_to_parse = MAX_CMD_ARG - 1; i < argc - 1; i += 2) 
	{
		if(!strcmp(argv[i], CMD_ARG_INPUT_FILE_TOKEN)) 
		{
			*path_fi = argv[i + 1];
			
			args_to_parse -= 2;
		}

		if(!strcmp(argv[i], CMD_ARG_OUTPUT_FILE_TOKEN)) 
		{
			*path_fo = argv[i + 1];
			
			args_to_parse-=2;
    		}
	}

	if(args_to_parse != 0) 
		return ERROR_PROGRAM_INVOCATION;
	
 return OK;	
	
}  
