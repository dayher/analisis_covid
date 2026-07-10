CC = gcc
CFLAGS = -Wall -Wextra -Werror -std=c99 -pedantic -O2
TARGET = analisis_covid
SRCS = main.c control.c files.c errors.c input.c output.c names.c
OBJS = $(SRCS:.c=.o)
HEADERS = main.h errors.h io.h names.h

.PHONY: all clean fclean re

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) $(OBJS) -o $(TARGET)

%.o: %.c $(HEADERS)
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJS) output.txt output_new.txt

fclean: clean
	rm -f $(TARGET)

re: fclean all
