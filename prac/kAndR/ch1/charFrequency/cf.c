#include <stdio.h>
#include <stdlib.h>

int main(int argc, const char * argv[]) {
    int upperCaseAlphabets[26];
    int lowerCaseAlphabets[26];
    int numbers[10];
    int blankChars = 0;
    int otherChars = 0;

    int i;
    for(i = 0; i < 26; i++) {
        upperCaseAlphabets[i] = 0;
        lowerCaseAlphabets[i] = 0;
    }
    for(i = 0; i < 10; i++) {
        numbers[i] = 0;
    }

    int c;
    while((c = getchar()) != EOF) {
        if((c >= 'a') && (c <= 'z')) {
            ++lowerCaseAlphabets[c - 'a'];
        } else if((c >= 'A') && (c <= 'Z')) {
            ++upperCaseAlphabets[c - 'A'];
        } else if((c >= '0') && (c <= '9')) {
            ++numbers[c - '0'];
        } else if((c == ' ') || (c == '\n') || (c == '\t')) {
            ++blankChars;
        } else {
            ++otherChars;
        }
    }

    for(i = 0; i < 26; i++) {
        printf("%c: %d\n", i + 'a', lowerCaseAlphabets[i]);
    }
    for(i = 0; i < 26; i++) {
        printf("%c: %d\n", i + 'A', upperCaseAlphabets[i]);
    }
    for(i = 0; i < 10; i++) {
        printf("%c: %d\n", i + '0', numbers[i]);
    }
    printf("Blank Characters: %d\n", blankChars);
    printf("Other Characters: %d\n", otherChars);
    return EXIT_SUCCESS;
}
