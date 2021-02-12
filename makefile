analisis_covid: control.o files.o errors.o main.o input.o output.o names.o
	gcc control.o  files.o errors.o main.o input.o output.o names.o -o analisis_covid

main.o: errors.h main.h main.c
	gcc -c main.c

control.o: errors.h io.h main.h control.c 
	gcc -c control.c
	
input.o: errors.h io.h main.h input.c
	gcc -c input.c

output.o: errors.h io.h main.h output.c
	gcc -c output.c

files.o: main.h errors.h files.c
	gcc -c files.c

errors.o: errors.h errors.c
	gcc -c errors.c

names.o: io.h names.c
	gcc -c names.c
