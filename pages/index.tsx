import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NeumoCard from '../components/NeumoCard';
import NeumoButton from '../components/NeumoButton';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import contentfulClient from '../lib/contentful';
import FluidBackground from '../components/FluidBackground';
import RandomMovingObjectsScene from '../components/RandomMovingObjectsScene';
import { Project } from '../components/Projects';
import RandomFontText from '../components/RandomFontText';
import ThreeScene from '../components/ThreeScene';


export const getStaticProps = async () => {
  try {
    const entries = await contentfulClient.getEntries({ content_type: 'project' });
    console.log(entries);
    const projects = entries.items;
    return {
      props: { projects },
    };
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return {
      props: { projects: [] },
    }
  }
};



const Home: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className="min-h-screen bg-neumo p-4 flex flex-col">
      <Head>
        <title>Yoshiyuki Ootani</title>
        <meta name="description" content="ToktoTeleport" />
      </Head>




      <ThreeScene />

      {/*
      <FluidBackground />
      <RandomMovingObjectsScene />
      */}
      <Navbar />

      <main className="flex-grow">
      <div className="mt-24"></div>
        <NeumoCard className="mb-10">
          <h1 className="text-2xl font-bold mb-6">
            <RandomFontText>
              TokyoTeleport
            </RandomFontText>
          </h1>

          <div className="mb-6 text-shadow font-dot">
            <RandomFontText>
            TokyoTeleport
            </RandomFontText>

          </div>

        </NeumoCard>
        <div className="mt-10"></div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10">
          <div id="about"></div>
          <About  />
          {/*<div id="projects"></div>
          <Projects projects={projects} />*/}
          <div id="contact"></div>
          <Contact />

        </div>
      </main>
      <div className="mt-10"></div>



      <Footer />
    </div>
  );
}

export default Home;
