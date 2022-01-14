export default [
    {
        name: 'home',
        title: '首页',
        permission: ['*'],
        path: '',
        children: [
            {
                name: 'home1',
                title: '首页',
                permission: ['*'],
                path: '',
            },
            {
                name: 'home2',
                title: '首页',
                permission: ['1'],
                path: '',
            },
            {
                name: 'home3',
                title: '首页',
                path: '',
                children: [
                    {
                        name: 'home3-1',
                        title: '首页',
                        permission: ['*'],
                        path: '',
                    },
                    {
                        name: 'home3-2',
                        title: '首页',
                        permission: ['1'],
                        path: '',
                    },
                    {
                        name: 'home3-3',
                        title: '首页',
                        path: '',
                    },
                ]
            },
        ]
    },
    {
        name: 'user',
        title: '用户',
        permission: ['1'],
    },
    {
        name: 'sale',
        title: '交易'
    },
    {
        name: 'statistics',
        title: '统计'
    }
]