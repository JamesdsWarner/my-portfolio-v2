import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Banner from '../components/home/Banner/Banner.component';
import Projects from '../components/home/Projects/Projects.component';
import Skills from '../components/home/Skills/Skills.component';
import About from '../components/home/About/About.component';
import Footer from '../components/shared/Footer/Footer.component';
import NavMenu from '../components/shared/NavMenu/NavMenu.component';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Home() {
  return (
    <>
      <Head>
        <title>James Warner | Front-end Developer in London</title>
        <meta
          name="description"
          content="Hi, I'm James, a front-end developer in London. I love creating engaging projects - take a look around!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavMenu />
      <Banner />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </>
  );
}
