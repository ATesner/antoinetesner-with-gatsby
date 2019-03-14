import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Link from 'gatsby-link'

export default ({ data }) => {

    const { edges } = data.allMarkdownRemark;

    console.log('edges',edges)
    return (
        <Layout>
            <h1>Blog</h1>
            <ul className="blog-list">
            { edges.map( ({node}) => {
                return (
                    <li className="blog-list-item" key={node.id}>
                        <Link to={node.frontmatter.path} >{node.frontmatter.title}</Link>
                    </li>
                )
              })
            }
            </ul>
        </Layout>
    )
}

export const blogQuery = graphql`
    query getAllBlogPosts {
        allMarkdownRemark(limit: 10) {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }
`