import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

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
                    { text: '破坏性更新日志', link: '/Vindicate/Update' },
                ]
            },
        ],
        footer: { // 页脚配置
            message: '由 HackTB实验室 提供技术支持',
            copyright: `Copyright © 2015-${new Date().getFullYear()} DGUT::Cyber` // 动态生成年份
        },
        editLink: {
            pattern: 'https://github.com/shelbyy54/HackTB/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页'
        },
    },
    head: [
        ['meta', { name: 'keywords', content: 'DGUT::Cyber' }],
        ['meta', { name: 'description', content: 'DGUT::Cyber' }],
        // 设置 Favicon
        ['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
    ],
    vite: {
        plugins: [
            AutoSidebar({
                // 要扫描的目录（相对于根目录）
                contentDirs: ['docs'], // 或 ['.'] 表示根目录（根据你项目目录结构调整）

                // 是否递归子目录
                deep: true,

                // 是否自动折叠
                collapse: false,

                // 展示的最大目录深度（默认 2）
                depth: 10,

                // 文件排序方式（可选）
                sort: 'asc',

                // 排除某些目录或文件（可选）
                // ignore: ['node_modules', '.vitepress'],

                // 是否启用中文标题自动转拼音路由（可选）
                // useTitleFromFile: true,
            })
        ]
    }
});