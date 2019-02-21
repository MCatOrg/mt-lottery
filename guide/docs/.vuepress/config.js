module.exports = {
    title: 'mt-lottery',
    description: '基于Vue的抽奖UI组件',
    base: '/mt-lottery/',
    themeConfig : {
        nav : [
            { text: '介绍', link: '/' },
            { text: '基本用法', link: '/usage' },
            { text: '配置参数', link: '/options' },
        ],
        sidebar: {
            '/' : [
                "/",            //指的是根目录的md文件 也就是 README.md 里面的内容
                "usage",      //根目录创建 apiword.md文件
                "options",          //根目录创建 api.md文件
            ]
        },
        sidebarDepth : 2
    }
}