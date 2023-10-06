import CoursesOffer from "@/components/View/CoursesOffer";
import Navbar from "@/components/View/Header/NavBar/navBar";
import Category from "@/components/View/HeroSection/Category/Category";
import HomePage from "@/components/View/HeroSection/Home/homePage";
import Internships from "@/components/View/HeroSection/internships/Internships";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Category />
      <Internships />
      <CoursesOffer />
      {/* Footer is not correct */}
      {/* <Footer />     */}
    </div>
  )
}
