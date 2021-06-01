// 3. "Client order" Your client SpaceY is creating a new AI system that tries to detect patterns in data using
// their new algorithm. You need to create a function or functions that can be used to generate data that
// looks like this:
// [
//     { id: "00000005", time: "21.11.2001 14:11:21 UTC" }
//     { id: "00328105", time: "01.04.2021 03:10:31 UTC" }
//     { id: "01128503", time: "11.01.2003 13:04:05 UTC" }
//     { id: "11160001", time: "10.12.1997 14:51:55 UTC" }
// ]
// Your function will need to generate data based on three different inputs:
// - idLength:number - how long should the "id" field be; how many numbers. IDs do not need to be unique.
// - startDate:string - the first date when your data should be created (from 00:00:00)
// - endDate:string - the last date when your data should be created (to 23:59:59)
// Also, add a comment where you report how long does it take to generate 10 million lines of data.

// Estimate: 45min
// Start 11:50, End: Heeeeeeeeeeeeeeeeeeeeeeellllllll! => Took far too long ;-)
// Creation of 10 * 10⁶ data entries took 65s.
// Had to increase heap size by running script with 'node --max-old-space-size=4096 problem-solving_3.js'

const {performance} = require('perf_hooks');

const LOCALE = 'De-de';
const OPTIONS = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
};
const dateTimeFormat = new Intl.DateTimeFormat(LOCALE, OPTIONS);


function createData(idLength, startDate, endDate, numberOfElements = 1) {

    if (idLength <= 0) {
        console.log(`Error: idLength must be greater than 0.`);
        throw new Error();
    }

    const start = new Date(Date.parse(startDate));
    const end = new Date(Date.parse(endDate));

    if (start > end) {
        console.log(`Error: startDate must be earlier than endDate.`);
        throw new Error();
    }

    if (numberOfElements <= 0) {
        console.log('numberOfElements must be greater than 0.');
        throw new Error();
    }

    const startDateInMillis = +start;
    const endDateInMillis = +end;

    const data = [];
    for (let n = 0; n < numberOfElements; n++) {
        const idValue = Math.random() * 10**idLength;
        const idString = idValue.toFixed(0).padStart(idLength, '0');
        const randomOffsetInMillis = Math.ceil(Math.random() * (endDateInMillis - startDateInMillis));
        const createDate = new Date(startDateInMillis + randomOffsetInMillis);
        const createDateString = dateTimeFormat.format(createDate);
        const dataElement = {
            id: idString,
            time: createDateString,
        }
        data.push(dataElement);
    }
    return data;
}

const numberOfElements = 10 * 10**6;
const startDateString = "2021-01-01";
const endDateString = "2021-12-31";
const startDate = new Date(Date.parse(startDateString));
const endDate = new Date(Date.parse(endDateString));
console.log(`startDate: ${dateTimeFormat.format(startDate)}`);
console.log(`endDate: ${dateTimeFormat.format(endDate)}`);
console.log(`Measuring time for creation of ${numberOfElements} random data elements. Please wait...`)
const t0 = performance.now();
const data = createData(8, startDateString, endDateString, numberOfElements);
const t1 = performance.now();
const tInSeconds = (t1 - t0) / 1000;
console.log(`Creation of ${numberOfElements} elements took ${tInSeconds}s.`)
console.log(data);

