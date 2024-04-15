import React from 'react'
import { Contact } from "../components/Contact/Contact";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Integrations } from "../components/Integrations/Integrations";
import { About } from "../components/About/About";
import { Features } from "../components/Features/Features";
import { Product } from "../components/Product/Product";

export const Homepage = () => {
  return (
    <div >
    <Navbar />
    <Hero /> 
    < About id="about"/>
    < Features/>
    <Integrations/>
    <Product/>
    <Contact />
  </div>
  )
}
