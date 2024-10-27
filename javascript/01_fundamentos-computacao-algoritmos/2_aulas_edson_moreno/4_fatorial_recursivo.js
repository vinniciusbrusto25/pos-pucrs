function fatorialRecursivo(n) {
    if (n === 1 || n === 0) {
        return 1;
    }

    return n * fatorialRecursivo(n - 1);
}

console.log(fatorialRecursivo(5));