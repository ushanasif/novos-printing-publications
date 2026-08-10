
import About from '@/components/About'
import Contact from '@/components/Contact'
import GallerySection from '@/components/Gallery'
import HeroSection from '@/components/Hero'


const Home = () => {
  return (
    <>
      <section>
          <HeroSection />
      </section>
      <section id='gallery'>
          <GallerySection />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='contact'>
          <Contact />
      </section>
    </>
  )
}

export default Home