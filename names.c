#include "io.h"
#include <stdio.h>

#define MAX_CHAR_NAME 150

void get_name(char **name, unsigned int code )
{
	FILE *fp;
	char *temp;
	
	temp=(char*)malloc(sizeof(char)*MAX_CHAR_NAME+2);
	
	fp= fopen("names.bin","rb");
	fseek(fp,code *sizeof(char)*MAX_CHAR_NAME-1,SEEK_SET);
	fread(temp,sizeof(char)*MAX_CHAR_NAME,1,fp);
	
	*name=temp;
	
	fclose(fp);
}
