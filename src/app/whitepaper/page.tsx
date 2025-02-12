"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Whitepaper() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-medium">
              BOCA
            </Link>
            <Link 
              href="https://t.me/bookofca" 
              target="_blank"
              className="text-sm text-primary hover:text-primary/80"
            >
              加入社区
            </Link>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">BOCA 白皮书</h1>
          
          {/* 代币经济学 */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6">代币经济学</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">代币名称</div>
                  <div className="font-medium">$BOCA</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">总供应量</div>
                  <div className="font-medium">10亿枚</div>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500 mb-2">合约地址</div>
                <div className="font-mono text-sm bg-gray-50 p-3 rounded-lg break-all">
                  Hdj1ebatkSaoyPGRNSrpKjRNhiv2aZNfbDukp65ipump
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-500 mb-2">代币分配</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium text-primary">40%</div>
                    <div className="text-sm text-gray-500">社区激励</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium text-primary">30%</div>
                    <div className="text-sm text-gray-500">流动性</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium text-primary">15%</div>
                    <div className="text-sm text-gray-500">团队</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-lg font-medium text-primary">15%</div>
                    <div className="text-sm text-gray-500">生态基金</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 代币用途 */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-6">代币用途</h2>
            <div className="grid gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4">创作激励</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• MEME 创作奖励</li>
                  <li>• 优质内容投票奖励</li>
                  <li>• 社区活动参与奖励</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4">治理权益</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 提案投票权</li>
                  <li>• IP 合作决策权</li>
                  <li>• 社区发展方向投票权</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4">特殊权益</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 限定 NFT 铸造权</li>
                  <li>• 社区活动优先参与权</li>
                  <li>• 实物周边兑换权</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 发展路线 */}
          <section>
            <h2 className="text-2xl font-medium mb-6">发展路线</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Phase 1: 社区建设</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 搭建基础社区</li>
                  <li>• 启动 MEME 创作激励</li>
                  <li>• 开放社区治理</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Phase 2: 功能扩展</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 推出 NFT 系列</li>
                  <li>• 开发 MEME 创作工具</li>
                  <li>• 建立 IP 合作机制</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Phase 3: 生态完善</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 构建 MEME 交易市场</li>
                  <li>• 拓展线下活动</li>
                  <li>• 建立跨链互操作性</li>
                </ul>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
} 