import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from './index.module.css'
//https://www.gatsbyjs.org/tutorial/part-two/#using-global-styles
//https://themes.gohugo.io/theme/hugo-coder-portfolio/
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`développeur`, `full stack`, `freelance`]} />
    
    <section className={styles.container}>
      <div className={styles.about}>
        <div className={styles.avatar}>
          <Image />
        </div>
        <h1>ANTOINE TESNER</h1>
        <h2>DÉVELOPPEUR FULL STACK</h2>
        <ul>
          <li><a href="https://github.com/ATesner" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
          <li><a href="https://www.linkedin.com/in/antoine-tesner-6a42a511a/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
        </ul>
        <div className={styles.introduction}>A quote or introduction, something to say !</div>
        <span className={styles.chevron}></span>
      </div>
      <div className={styles.services_container}>
        <h1>SERVICES</h1>
        <div className={styles.services}>
          <div className={styles.service_item}>
            <h4>
              Développement d'applications web
            </h4>
          </div>
          <div className={styles.service_item}>
            <h4>
              Scraping
            </h4>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
