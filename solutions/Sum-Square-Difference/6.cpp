#include <iostream>
#include <cmath>

int main() {
    int n = 100;
    int sumOfSquares = 0, squareOfSum = 0;

    squareOfSum = (n * (n + 1)) / 2; 
    squareOfSum = std::pow((double)(squareOfSum), 2);

    sumOfSquares = (n * (n + 1) * ((2 * n) + 1)) / 6;

    std::cout << squareOfSum - sumOfSquares;

    return 0;
}