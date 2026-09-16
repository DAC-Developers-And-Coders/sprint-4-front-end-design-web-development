import Header from './components/Header'
import Hero from './components/Hero'
import Solution from './components/Solution'
import TargetAudience from './components/TargetAudience'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Team from './components/Team'

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="bg-background">
        <Hero />
        <Solution />
        <TargetAudience />
        <Gallery />
        <Team />
        <Contact />
      </main>
    </>
  );
}