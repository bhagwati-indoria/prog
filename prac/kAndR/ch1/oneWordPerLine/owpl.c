#include <stdio.h>
#include <stdlib.h>

int main(int argc, const char * argv[]) {
    int c;
    int isBlank = 0;
    int charCount = 0;

    while((c = getchar()) != EOF) {
        isBlank = (c == ' ') || (c == '\n') || (c == '\t');
        ++charCount;
        if(isBlank) {
            if(charCount > 1) {
		    putchar('\n');
            }
            charCount = 0; 
        } else {
            putchar(c);
        }
    }
    
    return EXIT_SUCCESS;
}
