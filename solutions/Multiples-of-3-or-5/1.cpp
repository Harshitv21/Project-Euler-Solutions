#include <iostream>

int main() {
    long int sum = 0; 

    // multiples of 3 OR 5 BELOW 1000
    for(int i = 0; i < 1000; i++) {
        if((i % 3 == 0) || (i % 5 == 0)) sum += i;
    }
    std::cout << sum;

    return 0;
}

