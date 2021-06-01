// 2. Explain each line of code here (answer as a series of comments)
// Estimate: 2min
// Start 11:38, End: 11:42 => 4min

function getSome(...arguments) {
    const args = arguments.slice(1, 3);
    return args;
}
console.log(getSome(90, 100, 75, 40, 89, 95));

// Result: [100, 75]. Spread operator converts/spreads function arguments into array.
// "slice" creates shallow copy of array beginning from index 1 to index 2 and returns that new array