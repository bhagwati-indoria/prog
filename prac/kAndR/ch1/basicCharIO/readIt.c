#include <stdio.h>
#include <stdlib.h>

int main(int argc, const char * argv[]) {
    int c;
    while(c = (getchar() != EOF)) {
putchar('a');
    printf("Value of Char: \n Char = %c\n Int = %d\n", c, c);
        putchar(c);
    }
    printf("Value of Char: \n Char = %c\n Int = %d\n", c, c);
    while((c = getchar()) != EOF) {
        putchar(c);
    }
    printf("Value of EOF: \n Char = %c\n Int = %d\n", EOF, EOF);
    return EXIT_SUCCESS;
}
