"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import confetti from 'canvas-confetti';

const animeTimeline = [
  // 第一段历程（1961-1990）
  {
    year: "1962",
    title: "《大闹天宫》",
    boxOffice: "经典",
    quote: "金猴奋起千钧棒",
    image: "/images/classic-anime/danao.jpg",
    section: 1,
  },
  {
    year: "1964",
    title: "《小蝌蚪找妈妈》",
    boxOffice: "经典",
    quote: "妈妈在哪里",
    image: "/images/classic-anime/kedou.jpg",
    section: 1,
  },
  {
    year: "1984",
    title: "《黑猫警长》",
    boxOffice: "经典",
    quote: "眼睛瞪得像铜铃",
    image: "/images/classic-anime/heimao.jpg",
    section: 1,
  },
  {
    year: "1986",
    title: "《葫芦兄弟》",
    boxOffice: "经典",
    quote: "宝葫芦里的秘密",
    image: "/images/classic-anime/hulu.jpg",
    section: 1,
  },
  {
    year: "1988",
    title: "《天书奇谭》",
    boxOffice: "经典",
    quote: "混沌未分天地乱",
    image: "/images/classic-anime/tianshu.jpg",
    section: 1,
  },

  // 第二段历程（1991-2010）
  {
    year: "1995",
    title: "《宝莲灯》",
    boxOffice: "经典",
    quote: "天地无极，乾坤借法",
    image: "/images/classic-anime/baolian.jpg",
    section: 2,
  },
  {
    year: "1995",
    title: "《海尔兄弟》",
    boxOffice: "经典",
    quote: "人和动物是能够沟通的",
    image: "/images/classic-anime/haier.jpg",
    section: 2,
  },
  {
    year: "2000",
    title: "《蓝猫淘气3000问》",
    boxOffice: "获奖",
    quote: "民族的才是世界的",
    image: "/images/classic-anime/lanmao.jpg",
    section: 2,
  },
  {
    year: "2009",
    title: "《风云决》",
    boxOffice: "2.3亿",
    quote: "武林至尊，宝刀屠龙",
    image: "/images/classic-anime/fengyun.jpg",
    section: 2,
  },

  // 第三段历程（2011-2020）
  {
    year: "2015",
    title: "《大圣归来》",
    boxOffice: "9.56亿",
    quote: "齐天大圣，如意我心",
    image: "/images/classic-anime/dasheng.jpg",
    section: 3,
  },
  {
    year: "2016",
    title: "《大鱼海棠》",
    boxOffice: "5.65亿",
    quote: "一生所爱，值得等待",
    image: "/images/classic-anime/dayu.jpg",
    section: 3,
  },
  {
    year: "2019",
    title: "《哪吒之魔童降世》",
    boxOffice: "50.35亿",
    quote: "我命由我不由天",
    image: "/images/classic-anime/nezha.jpg",
    section: 3,
  },
  {
    year: "2019",
    title: "《白蛇：缘起》",
    boxOffice: "4.68亿",
    quote: "情之所钟，不知其所以",
    image: "/images/classic-anime/baishe.jpg",
    section: 3,
  },

  // 第四段历程（2021-2025）
  {
    year: "2022",
    title: "《新神榜：杨戬》",
    boxOffice: "4.51亿",
    quote: "成神易，成人难",
    image: "/images/classic-anime/yangjian.jpg",
    section: 4,
  },
  {
    year: "2023",
    title: "《长安三万里》",
    boxOffice: "15.38亿",
    quote: "纵使诗无敌，难遇敌手时",
    image: "/images/classic-anime/changan.jpg",
    section: 4,
  },
  {
    year: "2024",
    title: "《熊出没·逆转时空》",
    boxOffice: "19.84亿",
    quote: "熊出没，熊熊熊",
    image: "/images/classic-anime/xiongchumo.jpg",
    section: 4,
  },
  {
    year: "2025",
    title: "《哪吒2：魔童闹海》",
    boxOffice: "90亿+",
    quote: "我命由我不由天",
    image: "/images/classic-anime/nezha2.jpg",
    section: 4,
  },
];

// 彩蛋序列检查
const EASTER_EGG_SEQUENCE = ["1988", "2015", "2023"];
const NEZHA2_YEAR = "2025";

export default function ClassicAnime() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedPeriod, setSelectedPeriod] = useState(1);
  const [clickedYears, setClickedYears] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [easterEggFound, setEasterEggFound] = useState(false);
  const [showNezhaEasterEgg, setShowNezhaEasterEgg] = useState(false);
  const [nezhaEasterEggFound, setNezhaEasterEggFound] = useState(false);

  // 检查彩蛋序列
  useEffect(() => {
    if (clickedYears.length === EASTER_EGG_SEQUENCE.length) {
      const isCorrectSequence = clickedYears.every(
        (year, index) => year === EASTER_EGG_SEQUENCE[index]
      );

      if (isCorrectSequence && !easterEggFound) {
        triggerEasterEgg();
      }

      setClickedYears([]);
    }
  }, [clickedYears, easterEggFound]);

  // 触发彩蛋效果
  const triggerEasterEgg = useCallback(() => {
    // 播放礼花效果
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setShowEasterEgg(true);
    setEasterEggFound(true);
  }, []);

  // 处理年份点击
  const handleYearClick = useCallback((year: string) => {
    if (year === NEZHA2_YEAR && !nezhaEasterEggFound) {
      triggerNezhaEasterEgg();
    } else {
      setClickedYears(prev => [...prev, year]);
    }
  }, [nezhaEasterEggFound]);

  // 触发哪吒彩蛋效果
  const triggerNezhaEasterEgg = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#FF4D4D', '#FFD700', '#FF8C00'], // 火焰色系
      shapes: ['star'],
    });

    setShowNezhaEasterEgg(true);
    setNezhaEasterEggFound(true);
  }, []);

  const periods = [
    { id: 1, name: "萌芽期", years: "1961-1990" },
    { id: 2, name: "探索期", years: "1991-2010" },
    { id: 3, name: "腾飞期", years: "2011-2020" },
    { id: 4, name: "新纪元", years: "2021-2025" },
  ];

  return (
    <section
      ref={ref}
      className="py-12 relative bg-gray-50"
      style={{
        position: "relative",
        isolation: "isolate",
      }}
    >
      {/* 背景图片容器 */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl mb-2 text-gray-800 font-medium">
            国漫崛起之路
          </h2>
          <p className="text-sm text-gray-500">见证中国动画的黄金时代</p>
        </motion.div>

        {/* 时期选择器 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedPeriod === period.id
                  ? "bg-gray-800 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
              }`}
            >
              <span className="block text-sm font-medium">{period.name}</span>
              <span className="block text-xs opacity-75">{period.years}</span>
            </button>
          ))}
        </div>

        {/* 彩蛋弹窗 */}
        <AnimatePresence>
          {showEasterEgg && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              onClick={() => setShowEasterEgg(false)}
            >
              <motion.div
                className="bg-white rounded-xl p-6 max-w-sm w-full shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold mb-2">恭喜发现彩蛋！</h3>
                  <p className="text-gray-600 mb-4">
                    你找到了&quot;国漫黄金时代&quot;彩蛋！
                    截图并分享到社区即可获得 BOCA 空投资格。
                  </p>
                  <div className="text-sm text-gray-500 mb-4">
                    彩蛋编号：#CLASSIC-001
                  </div>
                  <button
                    className="px-4 py-2 bg-primary text-white rounded-full text-sm"
                    onClick={() => setShowEasterEgg(false)}
                  >
                    太棒了！
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 哪吒彩蛋弹窗 */}
        <AnimatePresence>
          {showNezhaEasterEgg && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              onClick={() => setShowNezhaEasterEgg(false)}
            >
              <motion.div
                className="bg-white rounded-xl p-6 max-w-sm w-full shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">🔥</div>
                  <h3 className="text-xl font-bold mb-2">哪吒2！</h3>
                  <p className="text-gray-600 mb-4">
                    恭喜你发现了预约彩蛋！
                    截图并分享到社区，可获得哪吒2特别空投。
                  </p>
                  <div className="text-sm text-gray-500 mb-4">
                    彩蛋编号：#NEZHA-002
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-600">
                      &quot;若命运不公，就和它斗到底！&quot;
                    </p>
                  </div>
                  <button
                    className="px-4 py-2 bg-primary text-white rounded-full text-sm"
                    onClick={() => setShowNezhaEasterEgg(false)}
                  >
                    太棒了！
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 时间线内容 */}
        <div className="relative">
          {/* 时间线轴 */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200 md:left-1/2" />

          {/* 动画项目 */}
          <div className="space-y-6">
            {animeTimeline
              .filter((anime) => anime.section === selectedPeriod)
              .map((anime, index) => (
                <motion.div
                  key={anime.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } gap-4 md:gap-8`}
                >
                  {/* 时间点 */}
                  <div className="absolute left-3 w-3 h-3 rounded-full bg-gray-800 transform -translate-x-1.5 md:left-1/2 md:-translate-x-1.5">
                    <div className="absolute inset-0 animate-ping bg-gray-400 rounded-full opacity-75" />
                    {/* 时间显示 */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${
                        index % 2 === 0 ? "right-full mr-4" : "left-full ml-4"
                      } hidden md:block text-sm font-mono text-gray-600 whitespace-nowrap`}
                    >
                      {anime.year}
                    </div>
                  </div>

                  {/* 内容卡片 */}
                  <div className="ml-8 md:ml-0 md:w-[45%]">
                    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden">
                      {/* 海报容器 */}
                      <div className="w-full relative">
                        <div 
                          className="aspect-[5/3] relative overflow-hidden cursor-pointer"
                          onClick={() => handleYearClick(anime.year)}
                        >
                          <Image
                            src={anime.image}
                            alt={anime.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {/* 渐变遮罩 */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                          {/* 内容覆盖层 */}
                          <div className="absolute inset-0 p-4 flex flex-col justify-between">
                            {/* 顶部信息 - 票房 */}
                            <div className="flex items-center justify-end">
                              <div className="text-lg bg-black/30 px-4 py-1 rounded-full backdrop-blur-sm text-white">
                                {anime.boxOffice}
                              </div>
                            </div>

                            {/* 底部信息 */}
                            <div>
                              <h3 className="text-2xl font-medium text-white mb-2">
                                {anime.title}
                              </h3>
                              <p className="text-sm text-gray-200 line-clamp-2 font-kai">
                                &ldquo;{anime.quote}&rdquo;
                              </p>

                              {/* 功能按钮 */}
                              <div className="flex gap-2 mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <button
                                  className="flex-1 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm transition-colors"
                                  disabled
                                  title="暂未开放"
                                >
                                  数字藏品
                                </button>
                                <button
                                  className="flex-1 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm transition-colors"
                                  disabled
                                  title="暂未开放"
                                >
                                  AI 互动
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
