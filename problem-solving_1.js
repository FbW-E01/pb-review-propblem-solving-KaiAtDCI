// 1. Make a function that works like this:
// Estimate: 10min
// Start 11:25, End: 11:32 => 7min

function examine (...args) {
    const types = args.map(arg => Array.isArray(arg) ? '"array"' : `"${typeof arg}"`);
    console.log(`[${types.join(",")}]`);
}

examine({})         // ["object"]
examine("hi")       // ["string"]
examine(3, 1)       // ["number", "number"]
examine(3, "hi")    // ["number", "string"]
examine([], ()=>{}) // ["array", "function"]