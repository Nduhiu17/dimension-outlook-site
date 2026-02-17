import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import WhatsAppFloat from '@/components/whatsapp-float'

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
      {/* <WhatsAppFloat /> */}
      <WhatsAppFloat />
    </main>
  )
}
