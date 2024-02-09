/* eslint-disable */
export default {
  displayName: 'board-game-hoard-api',
  preset: '../../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../../coverage/apps/express/board-game-hoard-api/board-game-hoard-api',
};
