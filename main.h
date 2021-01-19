#include <stdio.h>
#include "errors.h"
#include <stdlib.h>

#define CMD_ARG_INPUT_FILE_TOKEN 		"-in"
#define CMD_ARG_OUTPUT_FILE_TOKEN 			"-out"
#define MAX_CMD_ARG					5


status_t cortes_de_control(FILE *fi, FILE *fo);
status_t open_files(FILE **fi, FILE **fo, char *path_fi, char *path_fo);
status_t close_files(FILE **fi, FILE **fo);
status_t validate_arguments(int argc, char *argv[], char **path_fi, char **path_fo);
