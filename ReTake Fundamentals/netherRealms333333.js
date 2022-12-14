function solve(input) {
    let message = input.shift();
    let commands = {
        'InsertSpace': (index) => {
            message = message.substring(0, index) + ' ' + message.substring(index);
            console.log(message);
        },
        'Reverse': (substring) => {
            if (message.includes(substring)) {
                let cuttedAndReversed = message.substr(message.indexOf(substring), substring.length)
                    .split('')
                    .reverse()
                    .join('');
                let firstHalf = message.substring(0, message.indexOf(substring));
                let secondHalf = message.substring(message.indexOf(substring) + substring.length);
                message = firstHalf + secondHalf + cuttedAndReversed;
                console.log(message);
            }
            else {
                console.log(`error`);
            }
 
        },
        'ChangeAll': (substring, replacement) => {
            message = message.split(substring).join(replacement);
            console.log(message);
        },
    }
    while (input[0] != 'Reveal') {
        let [comm, ...args] = input.shift().split(':|:')
        commands[comm](...args);
    }
console.log(`You have a new text message: ${message}`);
}
