/* eslint-disable no-magic-numbers */
export type singledVariantOfWord = string;
export type manyVariantLowerThanFive = string;
export type manyVariantBiggerThanFive = string;

export default function numberedWords(
    value: number,
    words: [singledVariantOfWord, manyVariantLowerThanFive, manyVariantBiggerThanFive]
) {
    const lastNumberOfValue = Math.abs(value) % 100;
    const num = value % 10;

    if (lastNumberOfValue > 10 && lastNumberOfValue < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num === 1) return words[0];

    return words[2];
}
