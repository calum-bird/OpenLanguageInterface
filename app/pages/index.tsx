import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Open Language Interface</title>
        <meta name="description" content="Language is powerful." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-5">
        <h1 className="text-5xl text-gray-100">
          Open Language Interface
        </h1>

        <p className="mt-3 text-2xl text-gray-300">
          Language is powerful.
        </p>

        <div className="flex flex-col w-1/3 ml-auto mr-auto p-10 text-center mt-5 bg-opacity-20 bg-black">
          <button className="bg-gray-700 bg-opacity-100 hover:bg-opacity-90 text-white font-bold py-2 px-4 my-2 rounded w-full">
            Setup Integrations
          </button>
          <button className="bg-gray-700 bg-opacity-100 hover:bg-opacity-90 text-white font-bold py-2 px-4 my-2 rounded w-full">
            Manage Prompts
          </button>
          <button className="bg-gray-700 bg-opacity-100 hover:bg-opacity-90 text-white font-bold py-2 px-4 my-2 rounded w-full">
            Chain Prompts
          </button>
        </div>
      </main>
    </>
  )
}

export default Home
