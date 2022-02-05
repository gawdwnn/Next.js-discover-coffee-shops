import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View Stores nearby" />

        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} alt="hero image" />
        </div>
      </main>
    </div>
  );
}
