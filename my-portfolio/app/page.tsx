'use client';
import NavBar from "../components/NavBar.jsx";
import Header from "../components/Header.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Project from "../components/Project.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <main className="relative flex flex-col overflow-hidden justify-center "> 
      <div className="w-full">
      <NavBar />
      <Header/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
    </main>
  );
}
export default Home;
