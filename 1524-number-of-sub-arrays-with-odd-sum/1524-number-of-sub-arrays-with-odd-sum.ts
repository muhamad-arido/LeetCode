function numOfSubarrays(arr: number[]): number {
    const MOD = 1_000_000_007;
    let countOdd = 0;
    let countEven = 1;
    let curr = 0;
    let res = 0;

    for (let num of arr) {
        curr += num;

        if (curr % 2 === 0) {
            res = (countOdd + res) % MOD;
            countEven++;
        } else {
            res = (countEven + res) % MOD;
            countOdd++;
        }
    }

    return res;
};