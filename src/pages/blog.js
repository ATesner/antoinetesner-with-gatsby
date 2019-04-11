import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Link from 'gatsby-link'
import blogStyles from './blog.module.scss'

export default ({ data }) => {

    const { edges } = data.allMarkdownRemark;

    console.log('edges',edges)
    return (
        <Layout>
            <div className={blogStyles.blogcontainer}>
            <h1>Blog</h1>
            <ul className={blogStyles.bloglist}>
            { edges.map( ({node}) => {
                return (
                    <li key={node.id}>
                        <div className={blogStyles.blogpostdate}>{node.frontmatter.date}</div>
                        <div className={blogStyles.blogpostinfo}>
                            <Link to={node.frontmatter.path} >{node.frontmatter.title}</Link>
                            <p className={blogStyles.blogpostexcerpt}>{node.excerpt}</p>
                        </div>
                    </li>
                )
              })
            }
            </ul>
        </div>
        </Layout>
    )
}

export const blogQuery = graphql`
    query getAllBlogPosts {
        allMarkdownRemark(
            limit: 10, 
            sort: { order: DESC, fields: [frontmatter___date] },
            filter: { fileAbsolutePath: {regex: "\/blog/"} }
            ) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 200)
                    frontmatter {
                        path
                        title
                        date(formatString: "DD-MM-YYYY")
                    }
                }
            }
        }
    }
`