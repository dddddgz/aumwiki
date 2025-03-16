import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Always Useless Mod Wiki",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '版本记录', link: '/versions' },
      { text: '物品', items: [
        { text: '数字卡片', link: '/items/num' }
      ] },
      { text: 'default', items: [
        { text: 'Markdown', link: '/markdown-examples' },
        { text: 'API', link: '/api-examples' }
      ] }
    ],
    sidebar: [
      {
        text: '主页',
        items: [
          { text: '主页', link: '/' },
          { text: '版本记录', link: '/versions' }
        ]
      },
      {
        text: '物品',
        items: [
          { text: '数字卡片', link: '/items/num' }
        ]
      },
      {
        text: 'default',
        items: [
          { text: 'Markdown', link: '/markdown-examples' },
          { text: 'API', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dddddgz/mod-aum/' }
    ]
  }
})
