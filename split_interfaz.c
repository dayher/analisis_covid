#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef enum {
	OK,
	ERROR_NULL_POINTER,
	ERROR_MEMORY,
} status_t;

status_t split(const char *s, char delimitter, size_t *fields, char ***values);
