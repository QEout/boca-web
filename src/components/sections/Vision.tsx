"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const animeStats = [
  {
    title: "《哪吒2之魔童闹海》",
    boxOffice: "50.35亿",
    rank: "#1",
    quote: "我命由我不由天",
    image: "/images/nezha2.jpg",
  },
  {
    title: "《大圣归来》",
    boxOffice: "9.56亿",
    rank: "#8",
    quote: "齐天大圣，如意我心",
    image: "/images/da-sheng.jpg",
  },
  {
    title: "《白蛇：缘起》",
    boxOffice: "4.68亿",
    rank: "#12",
    quote: "情之所钟，不知其所以",
    image: "/images/bai-she.jpg",
  },
];

const visionItems = [
  {
    image: "/images/vision/meme-creation.jpg",
    title: "MEME创作",
    description: "为国漫作品提供MEME创作平台",
    stats: "日均创作量 1000+",
  },
  {
    image: "/images/vision/community.jpg",
    title: "共创激励",
    description: "用$BOCA激励每一份创作",
    stats: "活跃创作者 5000+",
  },
  {
    image: "/images/vision/culture.jpg",
    title: "文化传承",
    description: "打造去中心化国漫宇宙",
    stats: "收录作品 10000+",
  },
];

export default function Vision() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 relative">
            {/* 经典角色剪影 */}
            <div className="absolute inset-0 pointer-events-none z-50"
              style={{
                backgroundImage: `url(${'/images/characters-silhouette.png'})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.1,
              }}
            >
        {/* <Image
          src="/images/characters-silhouette.png"
          alt="Chinese Animation Characters"
          fill
          className="object-contain opacity-10 "
        /> */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl mb-4">国漫崛起</h2>
          <p className="text-gray-600">让MEME成为连接国漫与Web3的桥梁</p>
        </motion.div>

        {/* 国漫数据展示 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {animeStats.map((anime, index) => (
            <motion.div
              key={anime.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                <Image
                  src={anime.image}
                  alt={anime.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl mb-1">{anime.title}</h3>
                  <div className="flex items-center gap-4">
                    <span>票房：{anime.boxOffice}</span>
                    <span>排名：{anime.rank}</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center text-gray-100 italic">
                &quot;{anime.quote}&quot;
              </div>
            </motion.div>
          ))}
        </div>

        {/* 愿景展示 */}
        <div className="space-y-20">
          {visionItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center gap-12 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="text-xl text-blue-600">{item.stats}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 弹幕展示 */}
        <div className="mt-20 relative h-20 overflow-hidden danmaku-container">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute whitespace-nowrap"
          >
            {animeStats.map((anime) => (
              <span
                key={anime.title}
                className="inline-block mx-8 text-gray-500"
              >
                {anime.quote}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
