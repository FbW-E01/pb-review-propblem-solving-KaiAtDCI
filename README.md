# Review - Problem solving

NOTE! Pay close attention to creating code with good and consistent code style.

Solve each question in a new file; separate files for question1, question2 and question3.

0. *NOTE* Before you start to actually work (code) on each question, make work estimates for each one; how long it will take you to solve each question.

1. Make a function that works like this:

        examine({})         // ["object"]
        examine("hi")       // ["string"]
        examine(3, 1)       // ["number", "number"]
        examine(3, "hi")    // ["number", "string"]
        examine([], ()=>{}) // ["array", "function"]

2. Explain each line of code here (answer as a series of comments)

        function getSome(...arguments) {
            const args = arguments.slice(1, 3);
            return args;
        }
        console.log(getSome(90, 100, 75, 40, 89, 95));

3. "Client order"

Your client SpaceY is creating a new AI system that tries to detect patterns in data using their new algorithm. You need to create a function or functions that can be used to generate data that looks like this: 

    [
        { id: "00000005", time: "21.11.2001 14:11:21 UTC" }
        { id: "00328105", time: "01.04.2021 03:10:31 UTC" }
        { id: "01128503", time: "11.01.2003 13:04:05 UTC" }
        { id: "11160001", time: "10.12.1997 14:51:55 UTC" }
    ]

Your function will need to generate data based on three different inputs:

    - idLength:number - how long should the "id" field be; how many numbers. IDs do not need to be unique.
    - startDate:string - the first date when your data should be created (from 00:00:00)
    - endDate:string - the last date when your data should be created (to 23:59:59)

Also, add a comment where you report how long does it take to generate 10 million lines of data.
