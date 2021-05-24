import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>andrealemonroy</title>
        <meta name="description" content="Portafolio de Andrea Monroy :)" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="main">
        <div className={styles.item}>
          <h1 className={styles.title}>
            Hola! Soy Andrea Monroy, programadora front-end
          </h1>

          <p className={styles.description}>
            Me motiva poder desarrollar proyectos digitales (code y no code)
            para mejorar la vida de las personas. Si tienes una idea, no dudes
            en contactarme para crearla en conjunto.
          </p>
          <div className="links">
            <div><a href="https://www.linkedin.com/in/andrealemonroy/">Ir a mi LinkedIn</a></div>
            <div><a href="https://medium.com/@andrealemonroy">Ver mis artículos <i className="fas fa-arrow-right"></i> </a></div>
          </div>
        </div>
        {/* <div className={styles.grid}></div> */}
        <div className={styles.item}>
          <span className="logo">
            <Image
              src="/ANDREAMONROY.svg"
              alt="Andrea Monroy ico"
              width={800}
              height={1000}
            />
          </span>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> 
      </footer>*/}
    </div>
  );
}
