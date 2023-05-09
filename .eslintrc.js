module.exports = {
	root: true,
	ignorePatterns: ['**/*.test.ts', 'dist'],
	env: {
		browser: true,
		es2021: true,
		node: true,
		es6: true
	},
	extends: [
		'eslint:recommended', // 官方推荐的 ESLint 规则
		'plugin:react/recommended', // React 官方 ESLint 插件的推荐规则
		'plugin:react/jsx-runtime',
		'plugin:jsx-a11y/recommended',
		'plugin:react-hooks/recommended', // React Hooks 官方 ESLint 插件的推荐规则
		'plugin:@typescript-eslint/recommended'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	rules: {
		/*---------- 通用 ---------------*/
		'no-alert': 0, //禁止使用alert confirm prompt
		'no-const-assign': 2, //禁止修改const声明的变量
		'no-else-return': 2, //如果if语句里面有return,后面不能跟else语句
		'no-empty': 2, //块语句中的内容不能为空
		'no-func-assign': 2, //禁止重复的函数声明
		'no-nested-ternary': 0, //禁止使用嵌套的三目运算
		'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
		'no-undef': 2, // 不能使用未定义的变量
		'no-use-before-define': 2, //未定义前不能使用
		'no-var': 2, //禁用var，用let和const代替
		camelcase: 2, //强制驼峰法命名
		'default-case': 2, //switch语句最后必须有default
		eqeqeq: 2, //必须使用全等
		'func-style': [0, 'declaration'], //函数风格，规定只能使用函数声明/函数表达式
		'max-params': [1, 3], //函数最多只能有3个参数
		'new-cap': 2, //函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
		'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		/*---------- 通用 ---------------*/

		/*---------- react lint ---------------*/
		// 使用函数组件，不能使用 class 组件
		'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
		// 如果在 react 组件中没有 import React from react 就会报错
		// 保留这个，因为用到 hooks 肯定会有这个 import { useState } from 'react' 的操作
		'react/react-in-jsx-scope': 'error',
		//在数组或迭代器中验证JSX具有key属性
		'react/jsx-key': 'error',
		//防止在JSX中重复的props
		'react/jsx-no-duplicate-props': 'error',
		//在JSX中禁止未声明的变量
		'react/jsx-no-undef': 'error',
		//为用户定义的JSX组件强制使用PascalCase
		'react/jsx-pascal-case': 'error',
		//防止反应被错误地标记为未使用
		'react/jsx-uses-react': 'error',
		//防止使用未知的DOM属性
		'react/no-unknown-property': 'error',
		//不使用弃用的方法
		'react/no-deprecated': 'error',
		//在JSX属性中强制或禁止等号周围的空格
		'react/jsx-equals-spacing': 'error'
		/*---------- react lint ---------------*/
	}
}
