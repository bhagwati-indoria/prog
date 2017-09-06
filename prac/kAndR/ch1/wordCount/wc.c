#include <stdio.h>
#include <stdlib.h>

int wordCount1();

#define IN 1
#define OUT 0
int wordCount2();

int main(int argc, const char * argv[]) {
    int wordCount = wordCount2();

    printf("%d\n", wordCount);
    return EXIT_SUCCESS;
}

int wordCount1() {
    //Count it a word as soon as you leave it (hit a whitespace)
    int c;
    int isBlank = 0;
    int nonBlankCharCount = 0;
    int wordCount = 0;

    while((c = getchar()) != EOF) {
        isBlank = (c == ' ') || (c == '\t') || (c == '\n');
        nonBlankCharCount++;
        if(isBlank) {
            if(nonBlankCharCount > 1) {
                ++wordCount;
            }
            nonBlankCharCount = 0;
        }
    }
    //if stdio does not append input by '\n', then count the last word as well if not succeded by a blank space.
    if(nonBlankCharCount > 1) {
        ++wordCount;
    }
    return wordCount;
}

int wordCount2() {
    //Count it a word as soon as you leave it (hit a whitespace) [Alternate]
    int c;
    int status = OUT;
    int wordCount = 0;

    while((c = getchar()) != EOF) {
        if((c == ' ') || (c == '\n') || (c == '\t')) {
            status = OUT;
        } else if(status == OUT) {
            status = IN;
            ++wordCount;
        }
    }
    return wordCount;
}
