/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve('src/templates/blog-post.js');
    const projectPostTemplate = path.resolve('src/templates/project-post.js');

    return graphql(`{
        allMarkdownRemark {
            edges {
                node {
                    id
                    html
                    frontmatter {
                        title
                        path
                        posttype
                    }
                }
            }
        }
    }`).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors);
        }
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            if(node.frontmatter.posttype === 'project'){
                createPage({
                    path: node.frontmatter.path,
                    component: projectPostTemplate
                })
            }else{
                createPage({
                    path: node.frontmatter.path,
                    component: blogPostTemplate
                })
            }
        });
    })
}