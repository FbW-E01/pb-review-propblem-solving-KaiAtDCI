// 3. "Client order" Your client SpaceY is creating a new AI system that tries to detect patterns in data using
// their new algorithm. You need to create a function or functions that can be used to generate data that looks like this:
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

function createData(idLength, startDate, endDate, numberOfElements = 1) {

    if (numberOfElements <= 0) {
        console.log('numberOfElements must be greater than 0.');
        throw new Error();
    }

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

    const data = [];
    for (let n = 0; n < numberOfElements; n++) {
        const idValue = Math.ceil(Math.random() * 10**idLength-1);
        const idString = idValue.toPrecision(idLength).replace('.','');
        const startDateInMillis = +start;
        const endDateInMillis = +end;
        const randomOffsetInMillis = Math.ceil(Math.random() * (endDateInMillis - startDateInMillis));
        const createDate = new Date(startDateInMillis + randomOffsetInMillis);

        const template = 'DD.MM.YYYY HH:MM:SS UTC';
        const createDateString = template
            .replace('DD', String(createDate.getDate()).padStart(2,'0'))
            .replace('MM', String((createDate.getMonth() + 1)).padStart(2,'0'))
            .replace('YYYY', String(createDate.getFullYear()))
            .replace('HH', String(createDate.getHours()).padStart(2,'0'))
            .replace('MM', String(createDate.getMinutes()).padStart(2,'0'))
            .replace('SS', String(createDate.getSeconds()).padStart(2,'0'))

        const dataElement = {
            id: idString,
            time: createDateString,
        }
        data.push(dataElement);
    }
    return data;
}

const numberOfElements = 10 * 10**6;
const startDateString = "2021-08-01";
const endDateString = "2021-08-31";
const startDate = new Date(Date.parse(startDateString));
const endDate = new Date(Date.parse(endDateString));
console.log(`startDate: ${startDate.toLocaleString('DE-de')}`);
console.log(`endDate: ${endDate.toLocaleString('DE-de')}`);
console.log(`Measuring time for creation of ${numberOfElements} data elements. Please wait...`)
const t0 = performance.now();
const data = createData(8, startDateString, endDateString, numberOfElements);
const t1 = performance.now();
const tInSeconds = (t1 - t0) / 1000;
console.log(`Creation of ${numberOfElements} elements took ${tInSeconds}s.`)
console.log(data);

