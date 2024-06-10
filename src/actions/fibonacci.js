const fib = (n) => {
    if (n <= 1) {
        return 1;
    }

    let a, b = 1;
    for (let i = n; i >= 1; i--) {
        let c = b;
        a = a + b;
        b = c;
    }
    return a
}

export default fib;
