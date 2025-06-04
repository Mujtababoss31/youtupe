import Head from 'next/head';
export default function Home() {
  return (
    <div className='bg-black text-white min-h-screen flex flex-col items-center justify-center'>
      <Head>
        <title>Youtupe</title>
        <meta name='description' content='Automated AI site to earn money' />
      </Head>
      <h1 className='text-5xl font-bold mb-4'>Welcome to Youtupe</h1>
      <p className='text-xl text-red-500'>Your automated AI-powered income source 💸</p>
    </div>
  );
}