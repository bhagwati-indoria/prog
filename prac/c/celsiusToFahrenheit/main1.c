#include <stdio.h>
#include <stdlib.h>

int main(int argc, const char * argv[]) {
    float lower, upper, step;

    printf("Please give in a lower limit, lower > 0 : ");
    scanf("%f", &lower);
    printf("\nPlease give in a upper limit, 10 < upper <= 50000 : ");
    scanf("%f", &upper);
    printf("\nPlease give in a step, 0 < step <= 10 : ");
    scanf("%f", &step);

    printf("\nCelsius\tFahrenheit\n");
    printf("_______\t__________\n");
    float i = 0;
    for(i = lower; i < upper; i += step) {
        printf("%.6f\t%.6f\n", i, ((i * 9) / 5) + 32);
    }
    return EXIT_SUCCESS;
}
