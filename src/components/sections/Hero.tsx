'use client'

import Image from 'next/image'

const socialLinks = [
  {
    name: "Telegram",
    icon: "/images/telegram.svg",
    url: "https://t.me/bocacommunity",
  },
  {
    name: "Twitter",
    icon: "/images/twitter.svg",
    url: "https://twitter.com/bocaofficial",
  },
  {
    name: "微信公众号",
    icon: "/images/wechat.svg",
    url: "#",
  },
];

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 水墨背景 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/nz-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-primary/60" />
      </div>
      
      {/* 主要内容 */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-7xl">
            BOCA
            <span className="block text-3xl sm:text-4xl mt-2 opacity-90">
              Book of China Animation
            </span>
          </h1>
        </div>

        {/* 标语 */}
        <h2 className="text-4xl sm:text-6xl mb-6 animate-slide-up">
          用<span className="text-primary">MEME</span>传承国漫文化
        </h2>

        {/* CTA 按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up delay-200">
          <a
            href="https://t.me/bocacommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            加入国漫复兴
          </a>
          <a
            href="/whitepaper.pdf"
            target="_blank"
            className="btn btn-secondary"
          >
            白皮书速览
          </a>
        </div>

        {/* 社交媒体链接 */}
        <div className="flex justify-center gap-6 mb-8 animate-slide-up delay-300">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={32}
                height={32}
                className="transition-transform group-hover:scale-110"
              />
              <span className="text-sm text-gray-600">{social.name}</span>
            </a>
          ))}
        </div>

        {/* 风险提示 */}
        <p className="text-sm text-gray-500 animate-fade-in delay-400">
          BOCA是社区驱动的文化实验，不涉及任何投资建议
        </p>
      </div>

    </section>
  )
} 