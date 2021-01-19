#include <stdio.h>
#include "errors.h"

status_t show_error(status_t st)
{
	switch (st)
	{
	case ERROR_PROGRAM_INVOCATION:
		fprintf(stderr,"%s\n",USR_MSG_ERROR_PROGRAM_INVOCATION);
		break;
	case ERROR_NULL_POINTER:
		fprintf(stderr,"%s\n",USR_MSG_ERROR_NULL_POINTER);
		break;
	case ERROR_OPENING_INPUT_FILE:
		fprintf(stderr,"%s\n",USR_MSG_ERROR_OPENING_INPUT_FILE);
		break;
	case ERROR_OPENING_OUTPUT_FILE:
		fprintf(stderr,"%s\n",USR_MSG_ERROR_OPENING_OUTPUT_FILE);
		break;
	case ERROR_DISK_SPACE:
		fprintf(stderr,"%s\n",USR_MSG_ERROR_DISK_SPACE);
		break;
	case ERROR_MEMORY:
		fprintf(stderr,"%s\n",USR_MSG_ERROR_MEMORY);
		break;
	case ERROR_CORRUPT_FILE:
		fprintf(stderr,"%s\n",USR_MSG_ERROR_CORRUPT_FILE);
		break;
	default: fprintf(stderr,"\n");
	}
	return st;
}
