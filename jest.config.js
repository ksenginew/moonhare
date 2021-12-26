/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@moonhare/(.*?)$': '<rootDir>/packages/$1/src',
        moonhare: '<rootDir>/packages/moonhare/src'
    },
    rootDir: __dirname
};
