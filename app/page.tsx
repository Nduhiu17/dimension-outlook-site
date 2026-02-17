import dynamic from 'next/dynamic'
import Header from '@/components/header'
import Hero from '@/components/hero'
import WhatsAppFloatWrapper from '@/app/whatsapp-float-wrapper'

// Lazy load components that are below the fold
const Services = dynamic(() => import('@/components/services'), {
  loading: () => null,
  ssr: true,
})
const Portfolio = dynamic(() => import('@/components/portfolio'), {
  loading: () => null,
  ssr: true,
})
const About = dynamic(() => import('@/components/about'), {
  loading: () => null,
  ssr: true,
})
const Contact = dynamic(() => import('@/components/contact'), {
  loading: () => null,
  ssr: true,
})
const Footer = dynamic(() => import('@/components/footer'), {
  loading: () => null,
  ssr: true,
})

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-black">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloatWrapper />
    </main>
  )
}
