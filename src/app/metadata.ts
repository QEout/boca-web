import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BOCA (博卡) - 中国动漫 MEME 社区',
  description: 'BOCA是首个致力于中国动漫MEME文化传播的Web3项目，通过有趣的MEME形式让国漫文化更具传播力，打造充满趣味性的去中心化国漫社区。',
  keywords: [
    '中国动漫',
    '国漫',
    'MEME',
    '表情包',
    '二次元',
    'Web3',
    '创作者经济',
    '文化传播',
    'BOCA',
    '博卡'
  ],
  authors: [{ name: 'BOCA Team' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://boca.network',
    title: 'BOCA (博卡) - 中国动漫 MEME 社区',
    description: '用 MEME 传播国漫文化',
    siteName: 'BOCA',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BOCA - 中国动漫 MEME 社区'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BOCA (博卡) - 中国动漫 MEME 社区',
    description: '用 MEME 传播国漫文化',
    images: ['/images/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code'
  }
} 