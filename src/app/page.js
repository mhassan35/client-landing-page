import Footer from "@/components/View/Footer/FooterFile/Footer";
import Navbar from "@/components/View/Header/NavBar/navBar";
import Category from "@/components/View/HeroSection/Category/Category";
import HomePage from "@/components/View/HeroSection/Home/homePage";
import CardMain from "@/components/View/HeroSection/Reviews/CardMain";
// import CardPage from "@/components/View/HeroSection/Reviews/CardPage";
// import ProductCarousel from "@/components/View/HeroSection/Reviews/Test";
import Internships from "@/components/View/HeroSection/internships/Internships";


export default function Home() {
  return (
  <div>
    <Navbar />
    <HomePage />
    <Category />
    <Internships />
    <Footer />    
    {/* <ProductCarousel /> */}
    {/* <CardPage /> */}
    <CardMain />
  </div>
  )
}
