#include <stdio.h>
#include <stdlib.h>

int main(int argc, const char * argv[]) {
    int c;
    int nc = 0;
    int nl = 0;
    int nb = 0;
    int nt = 0;

    while((c = getchar()) != EOF) {
        if(c == '\n') {
            ++nl;
        } else if( c == '\t') {
            ++nt;
        } else if(c == ' ') {
            ++nb;
        }
        ++nc;
    }
    printf("Number of lines = %d\nNumber of tabs = %d\nNumber of blanks = %d\nNumber of characters = %d\n", nl, nt, nb, nc);
    return EXIT_SUCCESS;
}
