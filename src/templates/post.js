import React from 'react'
// import Helmet from 'react-helmet'
import {Link} from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import postStyles from './post.module.scss'

export default function Template({
    data, //props injected by graphql below
}) {
    const { markdownRemark } = data //get posts data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <Link to="/blog">Retour à la page blog</Link>
            <br/><br/>
            <div className={postStyles.postcontainer}>
                <div className={postStyles.post}>
                    <div className={postStyles.postheader}>
                        <h1> {frontmatter.title} </h1>
                        <span className={postStyles.postDate}> publié le {frontmatter.date} </span>
                    </div>
                    <br/>
                    <div className="post-content" 
                        dangerouslySetInnerHTML={{ __html: html }} 
                        />
                </div>
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
                path
                date(formatString: "DD-MM-YYYY")
            }
        }
    }
`