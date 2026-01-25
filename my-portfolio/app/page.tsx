'use client';
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <> 
    <NavBar />
    <Header/>
    <About/>
    <Services/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}
export default Home;
