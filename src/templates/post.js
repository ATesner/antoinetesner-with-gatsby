import React from 'react'
// import Helmet from 'react-helmet'
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
            <div className="post-container">
                <div className={postStyles.post}>
                    <h1> {frontmatter.title} </h1>
                    <br/>
                    {/* <h2> {frontmatter.date} </h2> */}
                    <div className="post-content" 
                        dangerouslySetInnerHTML={{ __html: html }} 
                        />
                </div>
            </div>
        </Layout>
    )
}
//date(formatString: "MMMM DD, YYYY")
export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
                path
            }
        }
    }
`