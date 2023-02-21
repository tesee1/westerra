import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from '@/components/Hero/Hero'
import Make from "@/components/Make/Make";
import Time from "@/components/Time/Time";
import Words from "@/components/Words/Words";
import Articles from "@/components/Articles/Articles";
import Popup from "@/components/Popup/Popup";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Local Colorado Credit Union | Westerra Credit Union</title>
        <meta
          name="description"
          content="Your Local Colorado Credit Union | Westerra Credit Union"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Make />
        <Time />
        <Words />
        <Articles />
      </main>
    </>
  );
}
