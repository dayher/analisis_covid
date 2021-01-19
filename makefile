analisis_covid: control.o files.o errors.o main.o input.o output.o names.o
	gcc control.o  files.o errors.o main.o input.o output.o names.o -o analisis_covid

main.o: errors.h main.h main.c
	gcc -c main.c

corte_control.o: errors.h io.h main.h control.c 
	gcc -c control.c
	
lectura.o: errors.h io.h main.h input.c
	gcc -c lectura.c

escritura.o: errors.h io.h main.h output.c
	gcc -c escritura.c

files.o: main.h errors.h files.c
	gcc -c files.c

errors.o: errors.h errors.c
	gcc -c errors.c

names.o: io.h names.c
	gcc -c names.c
