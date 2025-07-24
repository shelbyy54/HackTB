import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'DGUT::Cyber', // 网站标题
    description: '网络安全学习平台', // 网站描述
    themeConfig: {
        logo: '/img/logo.png', // Logo 路径
        siteTitle: 'DGUT::Cyber', // 标题栏显示的文字
        nav: [ // 导航栏配置
            { text: '首页', link: '/' }, // 首页
            {
                text: '学习系统',
                items: [
                    { text: 'CTF平台', link: 'https://hacktb.com:6001' }, // CTF 平台
                    { text: '视频平台', link: 'https://hacktb.com:6002' }, // 视频平台
                    { text: '妙妙工具箱', link: '/HackTB/Ftp' } // ftp
                ]
            },
            {
                text: "关于",
                items: [
                    { text: '联系我们', link: '/Vindicate/About' },
                    { text: '更新日志', link: '/Vindicate/Update' },
                ]
            },
        ],
        footer: { // 页脚配置
            message: '由 HackTB实验室 提供技术支持',
            copyright: `Copyright © 2015-${new Date().getFullYear()} DGUT::Cyber` // 动态生成年份
        },
         sidebar: [//侧边栏
            {
                text: 'HackTB实验室',
                items: [
                { text: '实验室', link: '/HackTB/' },
                { text: 'Ftp', link: '/HackTB/Ftp' },
                { text: '实验室成员', link: '/HackTB/TeamMembers' },
                ]
            },
            {
                text: '关于',
                items: [
                { text: '此网站', link: '/Vindicate/About' },
                { text: '更新日志', link: '/Vindicate/Update' },
                ]
            }
        ]
    },
    head: [
        ['meta', { name: 'keywords', content: 'DGUT::Cyber' }],
        ['meta', { name: 'description', content: 'DGUT::Cyber' }],
        // 设置 Favicon
        ['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
    ],
    
});