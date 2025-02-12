'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <footer ref={ref} className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 免责声明 */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl mb-8">免责声明</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-gray-600">
            <p>
              BOCA不与任何特定IP绑定，用户上传内容需自担版权责任
            </p>
            <p>
              本项目不向中国、美国等监管敏感地区用户提供投资服务
            </p>
          </div>
        </motion.div> */}

        {/* 彩蛋提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-medium mb-4">🎁 寻找彩蛋</h3>
            <p className="text-gray-600 mb-4">
              在网站中隐藏着多个彩蛋，找到它们可获得 BOCA 空投资格！
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>1. 试试在不同页面寻找可点击的动漫元素</p>
              <p>2. 某些特定的操作顺序可能会触发隐藏内容</p>
              <p>3. 收集到彩蛋后截图并加入BOCA社区 可以获得空投</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 