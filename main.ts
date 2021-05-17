/*
* PROJECT: ts-project-17-05-2021
* DESCRIPTION: Given an integer X, return how many bits are active in the binary form of X.
* AUTHOR: Vahin Sharma
*/

const solution = (n: number) => {
    return n.toString(2).split("").reduce((a, b) => a + ((b == '1') ? 1 : 0), 0)
}

const questions: Array<number> = [0, 4, 7, 9, 10, 1234, 20042000202000, 1099511627776, 3824, 3776]

const answers: Array<number> = [0, 1, 3, 2, 2, 5, 19, 1, 7, 5]

let marks: number = 0;

for (let i = 0; i < questions.length; i++) {
    const answer = solution(questions[i]);

    console.log(`Input: ${questions[i]}`)

    if (JSON.stringify(answer) == JSON.stringify(answers[i])) {
        console.log("Passed");
        ++marks;
    } else {
        console.log(`Expected '${answers[i]}', instead got '${answer}'`);
    }

    console.log()
}

console.log(`Score: ${marks} out of ${questions.length}`);
