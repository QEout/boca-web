import Hero from '@/components/sections/Hero'
import ClassicAnime from '@/components/sections/ClassicAnime'
import Platform from '@/components/sections/Platform'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ClassicAnime />
      <Platform />
      <Footer />
    </main>
  )
}
