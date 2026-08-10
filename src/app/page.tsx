
import About from '@/components/shared/About'
import Contact from '@/components/shared/Contact'
import GallerySection from '@/components/shared/Gallery'
import HeroSection from '@/components/shared/Hero'


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