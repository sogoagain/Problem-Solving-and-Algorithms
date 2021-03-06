'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let bribesCount = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - (i + 1) > 2) {
            return 'Too chaotic';
        }

        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[i] < q[j]) {
                bribesCount++;
            }
        }
    }

    return bribesCount;
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        const result = minimumBribes(q);
        process.stdout.write(result + "\n");
    }
}

module.exports = minimumBribes;
