#include <stdio.h>
#include <stdlib.h>

#define DIGIT_NUM 10
#define ALPHABET_NUM 26

void printHistogramPixel();

int main(int argc, const char * argv[]) {
    int numbers[10];
    int upperCaseAlphabets[26];
    int lowerCaseAlphabets[26];
    int blankChars = 0;
    int otherChars = 0;

    int i = 0;
    for(i = 0; i < DIGIT_NUM; i++) {
        numbers[i] = 0;
    }
    for(i = 0; i < ALPHABET_NUM; i++) {
        upperCaseAlphabets[i] = 0;
        lowerCaseAlphabets[i] = 0;
    }

    int c;
    while((c = getchar()) != EOF) {
        if((c >= '0') && (c <= '9')) {
            ++numbers[c - '0'];
        } else if((c >= 'a') && (c <= 'z')) {
            ++lowerCaseAlphabets[c - 'a'];
        } else if((c >= 'A') && (c <= 'Z')) {
            ++upperCaseAlphabets[c - 'A'];
        } else if((c == ' ') || (c == '\t') || (c == '\n')) {
            ++blankChars;
        } else {
            ++otherChars;
        }
    }

    for(i = 0; i < DIGIT_NUM; i++) {
        printf("%d [%d]\t|", i, numbers[i]);
        while(numbers[i]) {
            printHistogramPixel();
            --numbers[i];
        }
        putchar('\n');
    }

    for(i = 0; i < ALPHABET_NUM; i++) {
        printf("%c [%d]\t|", i + 'a', lowerCaseAlphabets[i]);
        while(lowerCaseAlphabets[i]) {
            printHistogramPixel();
            --lowerCaseAlphabets[i];
        }
        putchar('\n');
    }
    for(i = 0; i < ALPHABET_NUM; i++) {
        printf("%c [%d]\t|", i + 'A', upperCaseAlphabets[i]);
        while(upperCaseAlphabets[i]) {
            printHistogramPixel();
            --upperCaseAlphabets[i];
        }
        putchar('\n');
    } 

    printf("b [%d]\t|", blankChars);
    while(blankChars) {
        printHistogramPixel();
        --blankChars;
    }
    putchar('\n');
    printf("o [%d]\t|", otherChars);
    while(otherChars) {
        printHistogramPixel();
        --otherChars;
    }
    putchar('\n');
    return EXIT_SUCCESS;
}

void printHistogramPixel() {
    putchar('-');
}
