module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                useESM: true,
            },
        ],
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    extensionsToTreatAsEsm: ['.ts'], // Treat .ts files as ESM
};