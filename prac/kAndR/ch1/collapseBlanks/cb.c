#include <stdio.h>
#include <stdlib.h>

int main(int argc, const char * argv[]) {
    int c;
    int wasBlank = 0;

    while((c = getchar()) != EOF) {
        if(((c == ' ') || (c == '\n') || (c == '\t')) && !wasBlank) {
            putchar(' ');
            wasBlank = 1;
        } else if((c != ' ') && (c != '\n') && (c != '\t')) {
            putchar(c);
            wasBlank = 0;
        }
    }
    putchar('\n');
    return EXIT_SUCCESS;
}
