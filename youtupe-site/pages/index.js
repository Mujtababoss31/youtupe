
import Head from 'next/head'
import IntroScreen from '../components/IntroScreen'
import Layout from '../components/Layout'
import Chatbot from '../components/Chatbot'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Youtupe - Infinite AI</title>
        <meta name="description" content="AI-powered content blog with smart monetization." />
      </Head>
      <IntroScreen />
      <main className="p-6 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Youtupe</h1>
        <p className="mb-6">Monetized, AI-driven content. Beautifully designed, fully automated.</p>
        <Chatbot />
      </main>
    </Layout>
  )
}
