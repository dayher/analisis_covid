#include "names.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_CHAR_NAME 150

void get_name(char **name, unsigned int code)
{
	FILE *fp;
	char *temp;

	if (name == NULL)
		return;

	temp = (char *)malloc(sizeof(char) * (MAX_CHAR_NAME + 2));
	if (temp == NULL)
	{
		*name = NULL;
		return;
	}
	memset(temp, 0, MAX_CHAR_NAME + 2);

	fp = fopen("names.bin", "rb");
	if (fp == NULL)
	{
		sprintf(temp, "Country %u", code);
		*name = temp;
		return;
	}

	long offset = (long)code * MAX_CHAR_NAME - 1;
	if (offset < 0)
	{
		offset = 0;
	}

	if (fseek(fp, offset, SEEK_SET) == 0)
	{
		size_t read_bytes = fread(temp, sizeof(char), MAX_CHAR_NAME, fp);
		if (read_bytes > 0)
		{
			temp[read_bytes] = '\0';
		}
		else
		{
			sprintf(temp, "Country %u", code);
		}
	}
	else
	{
		sprintf(temp, "Country %u", code);
	}

	*name = temp;
	fclose(fp);
}
