'use client';
import Project from "../components/ProjectCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="relative flex flex-col overflow-hidden justify-center "> 
      <div className="w-full">
      <NavBar />
      <Header/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}
export default Home;
