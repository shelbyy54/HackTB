---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
const management = [
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-19_215200_183.png",
    name: '林梓钘 老师',
    title: 'HackTB 实验室主要负责老师，现任东莞理工学院计算机学院网安系副系主任，主要研究方向是隐私保护与制造数据安全',
    desc: '后生可畏，未来可期',
    links: [
      { icon: 'github', link: 'https://www.cnblogs.com/lynnzixing' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-20_194553_830.jpg",
    name: '张刘飘 老师',
    title: 'HackTB 实验室负责老师，密码学博士，硕士生导师，主要研究方向序列密码，安全检索。',
    desc: '学好安全技术，守好安全底线，网安之路，未来可期'
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-19_223111_415.jpg",
    name: '黄耀康',
    title: '实验室创始人，dgut纯血打工吗楼',
    desc: '祝大家在网安的知识里汲取到实用的知识！',
    links: [
      { icon: 'github', link: 'https://home.cnblogs.com/u/lisenMiller' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-19_223116_767.jpg",
    name: '黄锦明',
    title: '无情的文档输出机器',
    desc: '冲鸭！大手子们',
    links: [
      { icon: 'github', link: 'https://www.cnblogs.com/jimmy-hwang' }
    ]
  }
]

const coreMembers = [
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-19_223032_912.jpg",
    name: '吕卓成',
    title: 'src高手，擅长妙妙工具开发',
    desc: '擅长各种摸鱼手段，闭关摸鱼中...',
    links: [
      { icon: 'github', link: 'https://endermanneer.github.io' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-19_223054_481.jpg",
    name: '周家锋',
    title: 'CTF竞赛Web方向大佬，擅长挖洞',
    desc: '不好，我被大佬包围了',
    links: [
      { icon: 'github', link: 'https://icewindy.cn' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-19_232058_254.jpg",
    name: '王科城',
    title: '沉淀',
    desc: '共 &ensp;&ensp;&ensp; 相<br>同 &ensp;&ensp;&ensp; 互<br>进 &ensp;&ensp;&ensp; 吹<br>步 &ensp;&ensp;&ensp; 捧',
    links: [
      { icon: 'github', link: 'https://hihopkc.github.io' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-19_223324_482.jpg",
    name: '唐高宇',
    title: 'DGUT::Cyber 搭建、维护牛马，主攻二进制安全',
    desc: '( •̀ ω •́ )✧',
    links: [
      { icon: 'github', link: 'https://www.cnblogs.com/resea' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-19_223134_648.jpg",
    name: '肖锐浩',
    title: 'V&N联合战队成员、edusrc正式白帽子',
    desc: '补天src低手，主要方向web+misc，赛棍一枚',
    links: [
      { icon: 'github', link: 'https://www.cnblogs.com/xhzccy' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-19_223125_127.jpg",
    name: '罗宗毅',
    title: '渗透似呼吸 挖洞若饮溪',
    desc: '上下左右都是大佬除了我',
    links: [
      { icon: 'github', link: 'https://hustler0000.github.io' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-19_223144_951.jpg",
    name: '张文崧',
    title: 'js逆向、代码审计、爬虫大佬，博客质量超高',
    desc: '大家好我是渗透小菜b',
    links: [
      { icon: 'github', link: 'https://www.cnblogs.com/wssw' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-19_231753_226.jpg",
    name: '林麟坤',
    title: '基于web、misc生活的黑客大佬',
    desc: '深呼吸的时候，就能保持沉稳',
    links: [
      { icon: 'github', link: 'https://t00.ls/0linkun' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-19_235208_140.jpg",
    name: '黄廷翰',
    title: 'musc爱好者',
    desc: '%df%5c',
    links: [
      { icon: 'github', link: 'https://www.cnblogs.com/ethereal258' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-20_093256_420.jpg",
    name: '何俊龙',
    title: 'DGUT_Sec补天团队成员、src水洞终结者',
    desc: '在榜的都是大佬，只有我是小萌新',
    links: [
      { icon: 'github', link: 'https://www.cnblogs.com/Small-Dragon' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-20_194350_882.jpg",
    name: '曹博学',
    title: '全栈开发者，偶尔搞逆向，爱搞爬虫和脚本',
    desc: '啥都沾点',
    links: [
      { icon: 'github', link: 'https://github.com/haojiezhe12345' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-20_195128_618.jpg",
    name: '朱文锋',
    title: 'Web爱好者、HackTheBoxEasy靶场终结者',
    desc: '好多东西要学学不过来遂开摆',
    links: [
      { icon: 'github', link: 'https://www.cnblogs.com/QiSamaQwQ' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-04-20_195249_517.jpg",
    name: '陈俊全',
    title: 'src爱好者，java安全死对头',
    desc: 'echo %0|%0 >A.bat&.\\A.bat',
    links: [
      { icon: 'github', link: 'https://gitee.com/a19983' }
    ]
  },
    {
    avatar: "/img/tbTeamMembers/0eaa45fb9b0128acbadfb9b6817ef4fa.jpg",
    name: '邱振轩',
    title: '逆向牢玩家，又菜又爱玩。',
    desc: '叫我做咩～',
    links: [
      { icon: 'github', link: 'https://www.cnblogs.com/ClownLMe' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-06-18_160054_533.jpg",
    name: '黄龙腾',
    title: '苦逼安服仔一枚',
    desc: '从入门到入狱',
    links: [
      { icon: 'github', link: 'honestlin.top' }
    ]
  },
  {
    avatar: "/img/tbTeamMembers/微信图片_2025-06-18_163312_614.jpg",
    name: '李昊钊',
    title: '',
    desc: '',
    links: [
      { icon: 'github', link: 'http://110.41.79.66:4000/' }
    ]
  },
]
</script>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>实验室负责人</template>
    <template #lead>实验室的领航者</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="management" />
  <VPTeamPageSection>
    <template #title>实验室核心成员</template>
    <template #lead>实验室各技术方向的优秀成员</template>
    <template #members>
      <VPTeamMembers size="small" :members="coreMembers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>