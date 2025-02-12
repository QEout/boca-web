"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: "🪙",
    title: "BOCA代币",
    description: "基于SOL的社区代币，用于激励创作者和社区治理",
    stats: [
      { label: "总供应量", value: "1000万" },
      { label: "流通量", value: "100万" },
    ],
  },
  {
    icon: "🎨",
    title: "MEME创作",
    description: "创建、分享和传播有趣的国漫MEME，获得社区代币奖励",
    stats: [
      { label: "日均创作", value: "1000+" },
      { label: "创作奖励", value: "500 BOCA" },
    ],
  },
  {
    icon: "🗳️",
    title: "社区治理",
    description: "持有BOCA代币参与提案投票，共同决定社区发展方向",
    stats: [
      { label: "治理提案", value: "50+" },
      { label: "投票率", value: "85%" },
    ],
  },
  {
    icon: "🌱",
    title: "国漫支持",
    description: "质押BOCA代币为优质国漫项目提供资金支持，共同推动行业发展",
    stats: [
      { label: "支持项目", value: "20+" },
      { label: "支持金额", value: "100万+" },
    ],
  },
  {
    icon: "🤝",
    title: "社区活动",
    description: "参与线上/线下活动，与国漫爱好者交流互动，获得更多福利",
    stats: [
      { label: "月活用户", value: "1万+" },
      { label: "活动场次", value: "100+" },
    ],
  },
  {
    icon: "🎁",
    title: "社区福利",
    description: "使用BOCA可以兑换国漫限定NFT、实体周边等独家福利",
    stats: [
      { label: "福利项目", value: "30+" },
      { label: "参与人数", value: "5000+" },
    ],
  },
];

export default function Platform() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-slate-100 relative"
    >
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/images/p-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-50 relative">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-medium mb-4">BOCA生态系统</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            BOCA是一个基于区块链的国漫MEME社区，通过代币激励机制，
            连接创作者与收藏者，共同传承和发展中国动漫文化
          </p>
        </motion.div>

        {/* 特色展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {feature.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-gray-200 p-3 rounded-lg text-center"
                  >
                    <div className="text-lg font-medium text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部提示 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm text-gray-500 mt-12"
        >
          * 以上数据仅供参考，具体以实际运营数据为准
        </motion.p>
      </div>
    </section>
  );
} 