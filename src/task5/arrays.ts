/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let new_numbers: number[];
    if (numbers.length === 0) {
        new_numbers = [];
    } else if (numbers.length === 1) {
        new_numbers = [numbers[0], numbers[0]];
    } else {
        new_numbers = [numbers[0], numbers[numbers.length - 1]];
    }
    return new_numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(vals: number[]): number[] {
    const new_numbers = vals.map((val: number): number => 3 * val);
    return new_numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(vals: string[]): number[] {
    const new_numbers = vals.map((val: string): number =>
        !Number.isNaN(parseInt(val)) ? parseInt(val) : 0
    );
    return new_numbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removed_sign = amounts.map((amount: string): string =>
        amount.includes("$") ? amount.replace("$", "") : amount
    );
    const new_numbers = removed_sign.map((removed: string): number =>
        !Number.isNaN(parseInt(removed)) ? parseInt(removed) : 0
    );
    return new_numbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removed_question = messages.filter(
        (message: string): boolean => !message.includes("?")
    );
    const make_uppercase = removed_question.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message
    );
    return make_uppercase;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const removed_long = words.filter(
        (word: string): boolean => word.length < 4
    );
    return removed_long.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const removed_red = colors.filter(
        (color: string): boolean => color != "red"
    );
    const removed_blue = removed_red.filter(
        (color: string): boolean => color != "blue"
    );
    const removed_rgb = removed_blue.filter(
        (color: string): boolean => color != "green"
    );
    if (removed_rgb.length > 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}