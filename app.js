for (let i = 0; i < 100; i++) {
    const currentNumber = i

    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey");
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey");
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken")
    } else {
        console.log(currentNumber);
    }
}
