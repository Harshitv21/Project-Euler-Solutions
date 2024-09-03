#include <bits/stdc++.h>
using namespace std;

bool checkPrime(int n) {
    if(n == 1) return false;
    if(n == 2 || n == 3) return true;
    if(n % 2 == 0 || n % 3 == 0) return false;

    int sqrtNum = sqrt(n);

    // skipped 1, 2, 3, 4 start from 5
    for(int i = 5; i <= sqrtNum; i += 6) {
        // check for every other odd number
        if((n % i == 0) || (n % (i + 2)) == 0) return false; 
    }
    return true;
}

int main()
{
    int max = 10001;
    int countPrime = 0;
    int num = 1;

    while(countPrime < max) {
        if(checkPrime(num)) {
            countPrime++;
            if(countPrime == max) cout << num << "\n";
        }
        num++;
    }

    return 0;
}