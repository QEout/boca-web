import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";

// 使用思源宋体作为备选字体
const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "BOCA - 中国动漫 MEME 社区",
  description: "BOCA是首个致力于中国动漫MEME文化传播的Web3项目，通过有趣的MEME形式让国漫文化更具传播力。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        {/* 添加自定义毛笔字体 */}
        <link 
          rel="stylesheet" 
          href="//at.alicdn.com/t/webfont_2jqzqc8g66g.css" 
        />
      </head>
      <body className={`${notoSerifSC.variable} font-yangguan antialiased`}>
        {children}
      </body>
    </html>
  );
}
