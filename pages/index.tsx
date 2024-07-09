import Head from 'next/head';
import VFXLogo from '../components/VFXLogo';

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Head>
        <title>东京电讯(Tokyo Teleport)</title>
        <meta name="description" content="东京电讯(Tokyo Teleport)" />
        <meta property="og:title" content="东京电讯(Tokyo Teleport)" />
        <meta property="og:description" content="东京电讯(Tokyo Teleport)" />
        <meta property="og:image" content="/logo2.png" />
        <meta property="og:url" content="https://tokyo-teleport.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="东京电讯(Tokyo Teleport)" />
        <meta name="twitter:description" content="东京电讯(Tokyo Teleport)" />
        <meta name="twitter:image" content="/logo2.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full h-full">
        <VFXLogo />
      </main>
    </div>
  );
}

export default Home;
