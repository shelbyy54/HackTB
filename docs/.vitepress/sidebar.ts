import { getSidebar } from 'vite-plugin-vitepress-auto-sidebar'

export default await getSidebar({
  contentDirs: ['docs'],
  deep: true,
  collapse: false,
  depth: 10,
  ignore: ['.vitepress', 'public'],
})
