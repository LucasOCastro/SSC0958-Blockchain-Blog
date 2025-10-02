import usernames from "../config/usernames.js";

const {
    minNumber, maxNumber, numberChance,
    minLength, maxLength,
    names = []
} = usernames;

function randomInclusive(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function randomChance(chance) {
    return Math.random() < chance;
}

export function getRandomUsername() {
    const number = randomChance(numberChance) ? randomInclusive(minNumber, maxNumber) : "";
    const length = randomInclusive(minLength, maxLength);

    let username = "";
    for (let i = 0; i < length; i++) {
        const index = randomInclusive(0, names.length - 1);
        username += names[index];
    }
    username += number;

    return username;
}