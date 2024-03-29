// 这里的改动需要和 eslint 的对应起来，不然 eslint 会报错的
module.exports = {
    tabWidth: 2, //缩进长度
    useTabs: true, //使用空格代替tab缩进
    semi: false, //句末使用分号
    singleQuote: true, //使用单引号
    jsxSingleQuote: true, // jsx中使用单引号
    trailingComma: 'none', //多行时尽可能打印尾随逗号
    bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
    jsxBracketSameLine: true, //多属性html标签的‘>’折行放置
    arrowParens: 'always', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
    requirePragma: false, //无需顶部注释即可格式化
    insertPragma: false, //在已被preitter格式化的文件顶部加上标注
    proseWrap: 'preserve', //不知道怎么翻译
    htmlWhitespaceSensitivity: 'ignore', //对HTML全局空白不敏感
    endOfLine: 'lf', //结束行形式
    embeddedLanguageFormatting: 'auto' //对引用代码进行格式化
}
