export const getRemainder = (a, b) => a % b;
 
export const calcPercentage = (a, b) => (100 * a) / b;

export const getLongestString = (a, b) => (a.length >= b.length ? a : b);

export const concatStrings = (a, b, i) => a.slice(0, i) + b + a.slice(i);

export const normalizeVowels = (text) => {
    const vowels = ['a', 'A', 'e', 'E', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O'];
    let result = "";
    for (let i = 0; i < text.length; i += 1) {
        const char = text[i];
        if (vowels.includes(char)) {
            result += char.toLowerCase();
        } else {
            result += char;
        }
    }
    return result;
};

