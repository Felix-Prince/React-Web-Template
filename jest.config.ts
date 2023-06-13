export default {
	rootDir: './',
	roots: ['<rootDir>/src'],
	// The test environment that Jest should use
	testEnvironment: 'node',
	// The file extensions Jest should consider for test files
	moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx'],
	// A list of paths to directories that Jest should use to search for test files
	testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
	// Transform files with Babel to enable ES6+ support in tests
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
	},
	transformIgnorePatterns: ['/node_modules/'],
	// 有测试错误后就停止错误, 默认一次就结束
	bail: true,
	// 是否应该收集测试覆盖率
	collectCoverage: true,
	// 所有 js/ts/jsx/tsx
	collectCoverageFrom: ['**/*.{js,jsx, tsx, ts}'],
	coverageDirectory: '<rootDir>/__tests__',
	// 这个目录的内容是不用 jest 处理的
	coveragePathIgnorePatterns: ['/node_modules/'],
	// 指定哪种程序确定代码覆盖率
	coverageProvider: 'v8' || 'babel',
	// jest 指定覆盖率报告者
	coverageReporters: ['json', 'text', 'lcov', 'clover'],
	// 抛出有用的错误
	errorOnDeprecated: true,
	// 测试环境中可使用的全局变量
	globals: {},
	// 在 jest 中能直接使用，jest api，而不用显示的导入
	injectGlobals: true,
	testTimeout: 5000 // ms
}
