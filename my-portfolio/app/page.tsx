'use client';
import Head from "next/head";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import About from "../components/About";

function Home() {
  return (
    <> 
    <NavBar />
    <Header/>
    <About/>
    </>
  );
}
export default Home;
