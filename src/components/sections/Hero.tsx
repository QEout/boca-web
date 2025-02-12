'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const socialLinks = [
  {
    name: "Telegram",
    icon: "/images/telegram.svg",
    url: "https://t.me/bookofca",
  },
  {
    name: "X",
    icon: "/images/x.svg",
    url: "https://x.com/book_of_ca",
  },
];

const CONTRACT_ADDRESS = "Hdj1ebatkSaoyPGRNSrpKjRNhiv2aZNfbDukp65ipump";

export default function Hero() {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
            href="https://t.me/bookofca"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            加入国漫复兴
          </a>
          <Link
            href="/whitepaper"
            className="btn btn-secondary"
          >
            白皮书速览
          </Link>
        </div>

        {/* 社交媒体链接 */}
        <div className="flex justify-center gap-6 mb-6 animate-slide-up delay-300">
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

        {/* 合约地址 */}
        <div className="relative mb-8 animate-slide-up delay-300">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full cursor-pointer hover:bg-white/20 transition-colors"
            onClick={handleCopyAddress}
          >
            <span className="text-sm text-gray-300">Contract:</span>
            <span className="text-sm font-mono text-primary">
              {CONTRACT_ADDRESS.slice(0, 6)}...{CONTRACT_ADDRESS.slice(-4)}
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
              />
            </svg>
          </div>
          {showCopied && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-black/80 text-white text-xs rounded-full">
              已复制
            </div>
          )}
        </div>

        {/* 风险提示 */}
        <p className="text-sm text-gray-500 animate-fade-in delay-400">
          BOCA是社区驱动的文化实验，不涉及任何投资建议
        </p>
      </div>

    </section>
  )
} 