import Head from 'next/head';
import VFXLogo from '../components/VFXLogo';

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Head>
        <title>Tokyo Teleport</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full h-full">
        <VFXLogo />
      </main>
    </div>
  );
}

export default Home;
