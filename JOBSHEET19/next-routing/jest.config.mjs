import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  testEnvironment: "jsdom",
  modulePaths: ['<rootDir>/src/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/pages/about/index.tsx',
    'src/pages/produk/index.tsx',
    'src/components/layouts/Appshell/index.tsx',
  ],
}

export default createJestConfig(config)
