import { Header, Hero } from "../Components"
import { Categories, Deals, Footer } from "../Sections"

export const Home = () => {
  return (
    <div className="relative">
        <Header/>
        <Hero/>
        <Categories/>
        <Deals/>
        <Footer/>
    </div>
  )
}
