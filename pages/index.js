import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>i Bank</title>
          <meta name="description" content="Experience The Banking" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container ">
          <Navbar />
          <div className="grid md:grid-cols-2">
            <div style={{height:'calc(100vh - 54.11px)'}} className="flex justify-center items-center">
            <div className="flex  flex-col justify-center md:items-start items-center">
              <h2 className="text-5xl font-bold font-[clashgrotesk] ">Xperience</h2>
              <h3 className="text-2xl font-semibold font-[clashgrotesk] mt-3 md:text-left ">The iBanking</h3>
              <h3 className="text-lg  font-[clashgrotesk] my-1 md:text-left ">Fast And Safe Money Transfer</h3>
              <Link href={"/allcustomers"} ><button className="px-2 py-1 rounded border hover:bg-[#232323] hover:text-[#f2f4f6]">View Customers</button></Link>
              </div>
            </div>
            <div style={{height:'calc(100vh - 54.11px)'}} className="md:flex hidden justify-center items-center">
              <img src="/images/ill1.svg" className="w-1/2" alt="" />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}