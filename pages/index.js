import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../component/header'
import Courses from '../component/courses'
import News from '../component/news'
import Footer from '../component/footer'
import Banner from '../component/banner'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>muskan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>     
      <Header/>
      <Banner/>
      <Courses/>
      <News/>
      <Footer/>

      
    </div>
  )
}
